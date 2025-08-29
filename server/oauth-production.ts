// Production-Ready OAuth Implementation
// Enhanced version of your OAuth setup with production features

import { GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { logOAuthError, createOAuthRateLimit, addSecurityHeaders, checkDatabaseHealth } from './middleware/oauth-security';

// Enhanced OAuth configuration for production
export function setupProductionOAuth(app: any, db: any) {
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
    const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';
    const IS_PRODUCTION = process.env.NODE_ENV === 'production';

    // Apply security middleware
    app.use('/api/auth', addSecurityHeaders);
    app.use('/api/auth', checkDatabaseHealth);

    // Apply rate limiting for OAuth endpoints
    const oauthRateLimit = createOAuthRateLimit();
    app.use('/api/auth/google', oauthRateLimit);

    if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET) {
        passport.use(new GoogleStrategy(
            {
                clientID: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET,
                callbackURL: `${BASE_URL}/api/auth/google/callback`,
                passReqToCallback: true
            },
            async (req, accessToken, refreshToken, profile, done) => {
                try {
                    // Enhanced user data extraction
                    const email = profile.emails?.[0]?.value ||
                        (profile as any)?._json?.email ||
                        (profile as any)?.email;
                    const googleId = profile.id;
                    const displayName = profile.displayName;
                    const firstName = profile.name?.givenName;
                    const lastName = profile.name?.familyName;
                    const profilePicture = profile.photos?.[0]?.value;

                    // Validation
                    if (!googleId) {
                        logOAuthError(new Error('Missing Google ID'), req, { profile: profile.id });
                        return done(null, false, { reason: 'missing_google_id' });
                    }

                    if (!email) {
                        logOAuthError(new Error('Missing email from Google profile'), req, { googleId });
                        return done(null, false, { reason: 'missing_email' });
                    }

                    // Email domain validation (if needed)
                    if (IS_PRODUCTION && process.env.ALLOWED_EMAIL_DOMAINS) {
                        const allowedDomains = process.env.ALLOWED_EMAIL_DOMAINS.split(',');
                        const emailDomain = email.split('@')[1];
                        if (!allowedDomains.includes(emailDomain)) {
                            logOAuthError(new Error('Email domain not allowed'), req, { email, domain: emailDomain });
                            return done(null, false, { reason: 'domain_not_allowed' });
                        }
                    }

                    const baseLoginId = email.split('@')[0];

                    // Database transaction for user creation/update
                    await db.promise().beginTransaction();

                    try {
                        // Find existing user by google_id or email
                        const [rows] = await db.promise().query(
                            'SELECT * FROM users WHERE google_id = ? OR email_id = ? LIMIT 1',
                            [googleId, email]
                        );

                        let user: any = Array.isArray(rows) && rows.length ? rows[0] : null;
                        let createdNew = false;

                        if (!user) {
                            // Create new user
                            let loginId = baseLoginId;

                            // Ensure unique login_id
                            const [loginRows] = await db.promise().query(
                                'SELECT id FROM users WHERE login_id = ? LIMIT 1',
                                [loginId]
                            );

                            if (Array.isArray(loginRows) && loginRows.length > 0) {
                                loginId = `${baseLoginId}-${Math.floor(Math.random() * 10000)}`;
                            }

                            await db.promise().query(
                                `INSERT INTO users (
                  email_id, login_id, google_id, provider, 
                  display_name, first_name, last_name, profile_picture,
                  created_at, 
                ) VALUES (?,?,?,?, ?,?,?,?, NOW())`,
                                [
                                    email, loginId, googleId, 'google',
                                    displayName, firstName, lastName, profilePicture
                                ]
                            );

                            const [newUserRows] = await db.promise().query(
                                'SELECT * FROM users WHERE email_id = ? LIMIT 1',
                                [email]
                            );

                            user = Array.isArray(newUserRows) && newUserRows.length ? newUserRows[0] : null;
                            createdNew = true;

                            // Log successful user creation
                            console.log(JSON.stringify({
                                type: 'user_created',
                                userId: user?.id,
                                email,
                                method: 'google_oauth',
                                timestamp: new Date().toISOString()
                            }));

                        } else if (user.email_id === email && !user.google_id) {
                            // Link existing email account with Google
                            await db.promise().query(
                                `UPDATE users SET 
                  google_id = ?, provider = ?, 
                  display_name = COALESCE(display_name, ?),
                  first_name = COALESCE(first_name, ?),
                  last_name = COALESCE(last_name, ?),
                  profile_picture = COALESCE(profile_picture, ?),
                WHERE id = ?`,
                                [
                                    googleId, 'google',
                                    displayName, firstName, lastName, profilePicture,
                                    user.id
                                ]
                            );

                            user.google_id = googleId;
                            user.provider = 'google';
                            createdNew = false;

                        }else {
                            // Account conflict
                            await db.promise().rollback();
                            logOAuthError(new Error('Account conflict'), req, {
                                email,
                                googleId,
                                existingUser: { id: user.id, email: user.email_id }
                            });
                            return done(null, false, { reason: 'account_conflict' });
                        }

                        await db.promise().commit();

                        // Log successful authentication
                        console.log(JSON.stringify({
                            type: 'oauth_success',
                            userId: user.id,
                            email: user.email_id,
                            method: 'google',
                            isNewUser: createdNew,
                            timestamp: new Date().toISOString(),
                            userAgent: req.get('User-Agent'),
                            ip: req.ip
                        }));

                        return done(null, user, { createdNewUser: createdNew });

                    } catch (dbError) {
                        await db.promise().rollback();
                        throw dbError;
                    }

                } catch (error) {
                    logOAuthError(error as Error, req, {
                        googleId: profile.id,
                        email: profile.emails?.[0]?.value
                    });
                    return done(error);
                }
            }
        ));
    }

    // Enhanced OAuth routes with better error handling
    app.get('/api/auth/google', (req: any, res: any, next: any) => {
        if (!GOOGLE_CLIENT_ID) {
            return res.status(500).json({
                error: 'Google OAuth not configured',
                code: 'OAUTH_NOT_CONFIGURED'
            });
        }

        const callbackURL = `${req.protocol}://${req.get('host')}/api/auth/google/callback`;

        // Add state parameter for CSRF protection
        const state = req.session?.oauthState || 'no-state';

        passport.authenticate('google', {
            scope: ['profile', 'email'],
            callbackURL,
            state
        } as any)(req, res, next);
    });

    app.get('/api/auth/google/callback', (req: any, res: any, next: any) => {
        const callbackURL = `${req.protocol}://${req.get('host')}/api/auth/google/callback`;

        passport.authenticate('google', { callbackURL } as any, (err: any, user: any, info: any) => {
            if (err) {
                const errorCode = err?.code || 'UNKNOWN_ERROR';
                logOAuthError(err, req, { callbackURL, errorCode });

                const reason = info?.reason ||
                    (errorCode === 'invalid_client' ? 'invalid_client_config' : 'strategy_error');

                return res.redirect(`/login?error=google_auth_failed&reason=${encodeURIComponent(reason)}`);
            }

            if (!user) {
                const reason = info?.reason || 'no_user';
                return res.redirect(`/login?error=google_auth_failed&reason=${encodeURIComponent(reason)}`);
            }

            req.login(user, (loginErr: any) => {
                if (loginErr) {
                    logOAuthError(loginErr, req, { userId: user.id });
                    return res.redirect('/login?error=session_failed');
                }

                // Success redirect
                const isNew = info?.createdNewUser ? '1' : '0';
                res.redirect(`/auth/result?new=${isNew}`);
            });
        })(req, res, next);
    });

    // Enhanced debug endpoint (production-safe)
    app.get('/api/auth/google/debug', (req: any, res: any) => {
        const debugInfo = {
            hasClientId: Boolean(GOOGLE_CLIENT_ID),
            clientIdPrefix: GOOGLE_CLIENT_ID ? GOOGLE_CLIENT_ID.slice(0, 12) + '...' : null,
            hasClientSecret: Boolean(GOOGLE_CLIENT_SECRET),
            environment: process.env.NODE_ENV,
            baseUrl: BASE_URL,
            callbackURL: `${req.protocol}://${req.get('host')}/api/auth/google/callback`,
            timestamp: new Date().toISOString()
        };

        res.json(debugInfo);
    });

    // Health check endpoint
    app.get('/api/auth/health', async (req: any, res: any) => {
        try {
            await db.promise().query('SELECT 1');
            res.json({
                status: 'healthy',
                oauth: Boolean(GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET),
                timestamp: new Date().toISOString()
            });
        } catch (error) {
            res.status(503).json({
                status: 'unhealthy',
                error: 'Database connection failed',
                timestamp: new Date().toISOString()
            });
        }
    });
}
