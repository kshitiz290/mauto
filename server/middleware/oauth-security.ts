// Enhanced OAuth Security Middleware
// Add this to your server/api configuration

import crypto from 'crypto';

// Rate limiting configuration (implement with your preferred rate limiting solution)
export const createOAuthRateLimit = () => {
    const attempts = new Map();

    return (req: any, res: any, next: any) => {
        const ip = req.ip || req.connection.remoteAddress;
        const now = Date.now();
        const windowMs = 15 * 60 * 1000; // 15 minutes
        const maxAttempts = 10;

        // Clean old entries
        for (const [key, value] of attempts.entries()) {
            if (now - (value as any).timestamp > windowMs) {
                attempts.delete(key);
            }
        }

        const userAttempts = attempts.get(ip) || { count: 0, timestamp: now };

        if (now - userAttempts.timestamp > windowMs) {
            // Reset window
            userAttempts.count = 1;
            userAttempts.timestamp = now;
        } else {
            userAttempts.count++;
        }

        attempts.set(ip, userAttempts);

        if (userAttempts.count > maxAttempts) {
            return res.status(429).json({
                error: 'Too many OAuth attempts from this IP, please try again later.'
            });
        }

        next();
    };
};

// Security headers for production
export const addSecurityHeaders = (req: any, res: any, next: any) => {
    // Basic security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

    // HSTS for production HTTPS
    if (process.env.NODE_ENV === 'production') {
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    }

    // CSP for OAuth security
    const cspDirectives = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://accounts.google.com https://apis.google.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "img-src 'self' data: https://lh3.googleusercontent.com https://www.googletagmanager.com",
        "connect-src 'self' https://accounts.google.com",
        "frame-src https://accounts.google.com"
    ].join('; ');

    res.setHeader('Content-Security-Policy', cspDirectives);
    next();
};

// Enhanced CORS configuration for production
export const productionCorsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, etc.)
        if (!origin) return callback(null, true);

        const allowedOrigins = [
            'https://yourdomain.com',
            'https://www.yourdomain.com',
            // Add your production domains here
        ];

        // In development, allow localhost
        if (process.env.NODE_ENV === 'development') {
            allowedOrigins.push('http://localhost:3000', 'http://localhost:8080');
        }

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    optionsSuccessStatus: 200
};

// OAuth state validation middleware
export const validateOAuthState = (req: any, res: any, next: any) => {
    // Add CSRF protection for OAuth flows
    const state = req.query.state;
    const sessionState = req.session?.oauthState;

    if (state && sessionState && state === sessionState) {
        // Clear the state after use
        delete req.session.oauthState;
        next();
    } else if (!state && !sessionState) {
        // Initial OAuth request - generate state
        if (req.session) {
            req.session.oauthState = crypto.randomBytes(32).toString('hex');
        }
        next();
    } else {
        res.status(400).json({ error: 'Invalid OAuth state parameter' });
    }
};

// Enhanced error logging
export const logOAuthError = (error: Error, req: any, additionalInfo: Record<string, any> = {}) => {
    const logData = {
        timestamp: new Date().toISOString(),
        type: 'oauth_error',
        message: error.message,
        userAgent: req.get?.('User-Agent') || req.headers?.['user-agent'],
        ip: req.ip || req.connection?.remoteAddress,
        referer: req.get?.('Referer') || req.headers?.referer,
        ...additionalInfo
    };

    // In production, you might want to send this to a logging service
    if (process.env.NODE_ENV === 'production') {
        console.error(JSON.stringify(logData));
        // Optional: Send to external logging service
        // await sendToLoggingService(logData);
    } else {
        console.error('[OAuth Error]', logData);
    }
};

// Session cleanup middleware
export const cleanupExpiredSessions = async (req: any, res: any, next: any) => {
    // Clean up expired sessions periodically
    if (Math.random() < 0.01) { // 1% chance to trigger cleanup
        try {
            // If using express-mysql-session, it handles cleanup automatically
            // For custom session stores, implement cleanup logic here
        } catch (error) {
            console.error('Session cleanup error:', error);
        }
    }
    next();
};

// Database connection health check for OAuth endpoints
export const checkDatabaseHealth = async (req: any, res: any, next: any) => {
    try {
        // Add a simple DB health check before OAuth operations
        // This prevents OAuth flows when DB is down
        const db = (global as any).db || req.app?.locals?.db;
        if (db) {
            await db.promise().query('SELECT 1');
        }
        next();
    } catch (error) {
        console.error('Database health check failed:', error);
        res.status(503).json({
            error: 'Service temporarily unavailable. Please try again later.'
        });
    }
};
