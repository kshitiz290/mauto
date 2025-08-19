import express from 'express';
import cors from 'cors';
import passport from 'passport';
import {
    handleSaveCompanyDetails,
    handleGenerateSite,
    handleSiteStatus,
    handleDomainCheck,
    uploadLogo,
    sessionMiddleware,
    handleTimesEdited,
    getBusinessSectors,
    formProgressRouter,
    db
} from '../server/routes/auto-site.ts';
import { handleDemo } from '../server/routes/demo.ts';
import bcrypt from 'bcryptjs';

export function createServer() {
    const app = express();
    app.use(async (req, res, next) => {
        if (req.isAuthenticated && req.isAuthenticated()) {
            try {
                const userId = (req.user as any)?.id;
                if (userId) {
                    const [rows] = await db.promise().query('SELECT id FROM users WHERE id = ?', [userId]);
                    if (!Array.isArray(rows) || rows.length === 0) {
                        req.logout?.(() => {
                            req.session?.destroy(() => {
                                res.status(401).json({ error: 'Session expired. Please login again.' });
                            });
                        });
                        return;
                    }
                }
            } catch (e) {
                req.logout?.(() => {
                    req.session?.destroy(() => {
                        res.status(401).json({ error: 'Session expired. Please login again.' });
                    });
                });
                return;
            }
        }
        next();
    });
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(sessionMiddleware);
    app.use(passport.initialize());
    app.use(passport.session());
    app.use('/api', formProgressRouter);
    app.get('/api/ping', (_req, res) => res.json({ message: 'pong' }));
    app.get('/api/demo', handleDemo);
    app.post('/api/signup', async (req, res, next) => {
        const { email, contact_no, password, login_id } = req.body;
        if (!email || !password || !contact_no || !login_id) {
            return res.status(400).json({ error: 'All fields required' });
        }
        try {
            const [existing] = await db.promise().query(
                'SELECT email_id, login_id FROM users WHERE email_id = ? OR login_id = ?',
                [email, login_id]
            );
            if (Array.isArray(existing) && existing.length > 0) {
                const existsEmail = existing.some((u: any) => u.email_id === email);
                const existsLogin = existing.some((u: any) => u.login_id === login_id);
                let errorMsg = existsEmail && existsLogin ? 'Email and username already exist'
                    : existsEmail ? 'Email already exists'
                        : 'Username already exists';
                return res.status(400).json({ error: errorMsg });
            }
            const hash = await bcrypt.hash(password, 10);
            await db.promise().query(
                'INSERT INTO users (email_id, contact_no, password, login_id, created_at) VALUES (?, ?, ?, ?, NOW())',
                [email, contact_no, hash, login_id]
            );
            const [rows] = await db.promise().query('SELECT * FROM users WHERE email_id = ? LIMIT 1', [email]);
            const user = Array.isArray(rows) && rows.length > 0 ? rows[0] as any : null;
            if (!user) return res.status(500).json({ error: 'Signup failed' });
            req.login(user, (err) => {
                if (err) return next(err);
                res.json({ success: true, user: { id: user.id, email: user.email_id } });
            });
        } catch (err) {
            res.status(500).json({ error: 'Signup failed' });
        }
    });
    app.post('/api/login', (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) return next(err);
            if (!user) return res.status(400).json({ error: info?.message || 'Invalid credentials' });
            req.login(user, (err2) => {
                if (err2) return next(err2);
                res.json({ success: true, user: { id: user.id, email: user.email_id } });
            });
        })(req, res, next);
    });
    app.get('/api/logout', (req, res) => {
        req.logout?.(() => {
            res.clearCookie('connect.sid');
            res.json({ success: true });
        });
    });
    app.get('/api/business-sectors', getBusinessSectors);
    app.post('/api/generate-site', handleGenerateSite);
    app.post('/api/company-details', handleSaveCompanyDetails);
    app.post('/api/domain-check', handleDomainCheck);
    app.get('/api/site-status/:buildId', handleSiteStatus);
    app.post('/api/upload-logo', uploadLogo);
    app.post('/api/times-edited', handleTimesEdited);
    app.get('/api/company-host/:companyId', async (req, res) => {
        const { companyId } = req.params;
        if (!companyId) return res.status(400).json({ error: 'Missing companyId' });
        try {
            const [rows] = await db.promise().query('SELECT host FROM company_mast WHERE id = ? LIMIT 1', [companyId]) as any;
            if (Array.isArray(rows) && rows.length > 0 && rows[0].host) return res.json({ host: rows[0].host });
            return res.status(404).json({ error: 'Host not found for companyId' });
        } catch {
            return res.status(500).json({ error: 'DB error' });
        }
    });
    app.use((err, _req, res, _next) => {
        console.error('[API ERROR]', err);
        res.status(500).json({ error: 'Internal server error' });
    });
    return app;
}
