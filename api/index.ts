// Single-file Express API for Vercel to avoid cross-folder import issues
import express from 'express';
import cors from 'cors';
import session from 'express-session';
// @ts-ignore - type defs may not include default export style
import MySQLStoreImport from 'express-mysql-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import mysql from 'mysql2';

function parseMysqlUrl(url?: string) {
	if (!url) throw new Error('Missing MYSQL_URL');
	const m = url.match(/^mysql:\/\/(.*?):(.*?)@(.*?):(\d+)\/(.*)$/);
	if (!m) throw new Error('Invalid MYSQL_URL');
	return { host: m[3], user: m[1], password: m[2], port: Number(m[4]), database: m[5] };
}
let dbConfig;
try { dbConfig = parseMysqlUrl(process.env.MYSQL_URL); } catch { dbConfig = { host:'localhost', user:'root', password:'', port:3306, database:'mauto' }; }
// Create a basic pool for improved resilience & timeouts
const pool = mysql.createPool({
	...dbConfig,
	waitForConnections: true,
	connectionLimit: 5,
	queueLimit: 0,
	connectTimeout: 8000 // ms
});

// Helper to run queries via pool.promise()
const db = pool; // keep variable name for minimal downstream changes

pool.getConnection((err, conn) => {
	if (err) {
		console.error('[DB] initial pool error', err.code || err.message);
	} else {
		console.log('[DB] pool ready');
		conn.release();
	}
});

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
// Production session store (falls back to MemoryStore if DB unavailable)
let MySQLStore: any;
try { MySQLStore = (MySQLStoreImport as any)(session); } catch { /* ignore */ }
let sessionStore: any;
if (MySQLStore) {
	try {
		sessionStore = new MySQLStore({
			...dbConfig,
			createDatabaseTable: true,
			expiration: 86400000,
			clearExpired: true
		});
	} catch (e) { console.warn('[Session] MySQLStore init failed, using MemoryStore', (e as any)?.message); }
}
app.use(session({
	secret: process.env.SESSION_SECRET || 'change_me',
	resave: false,
	saveUninitialized: false,
	store: sessionStore,
	cookie: {
		maxAge: 86400000,
		sameSite: 'lax',
		secure: process.env.NODE_ENV === 'production'
	}
}));

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
	try {
		const [rows] = await db.promise().query('SELECT * FROM users WHERE email_id = ? LIMIT 1', [email]);
		const user: any = Array.isArray(rows) && rows.length ? rows[0] : null;
		if (!user) return done(null, false, { message: 'Incorrect email' });
		const ok = await bcrypt.compare(password, user.password);
		if (!ok) return done(null, false, { message: 'Incorrect password' });
		done(null, user);
	} catch (e) { done(e); }
}));
passport.serializeUser((u: any, d) => d(null, u.id));
passport.deserializeUser(async (id: number, d) => {
	try { const [rows] = await db.promise().query('SELECT * FROM users WHERE id = ? LIMIT 1', [id]); d(null, Array.isArray(rows) && rows.length ? rows[0] : null); }
	catch (e) { d(e); }
});
app.use(passport.initialize());
app.use(passport.session());

function isAuth(req, res, next) { if (req.isAuthenticated && req.isAuthenticated()) return next(); return res.status(401).json({ error: 'Unauthorized' }); }

// Uploads (ephemeral)
const uploadRoot = '/tmp/uploads';
if (!fs.existsSync(uploadRoot)) fs.mkdirSync(uploadRoot, { recursive: true });
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const folder = req.query.folder ? path.join(uploadRoot, String(req.query.folder)) : uploadRoot;
		fs.mkdirSync(folder, { recursive: true });
		cb(null, folder);
	},
	filename: (_req, file, cb) => cb(null, Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname))
});
const upload = multer({ storage });

// Routes
app.get('/api/ping', (_req, res) => res.json({ ok: true }));
app.post('/api/signup', async (req, res) => {
	const { email, contact_no, password, login_id } = req.body || {};
	if (!email || !contact_no || !password || !login_id) return res.status(400).json({ error: 'All fields required' });
	try {
		const [existing] = await db.promise().query('SELECT email_id, login_id FROM users WHERE email_id = ? OR login_id = ?', [email, login_id]);
		if (Array.isArray(existing) && existing.length) {
			const existsEmail = existing.some((r: any) => r.email_id === email);
			const existsLogin = existing.some((r: any) => r.login_id === login_id);
			return res.status(400).json({ error: existsEmail && existsLogin ? 'Email and username already exist' : existsEmail ? 'Email already exists' : 'Username already exists' });
		}
		const hash = await bcrypt.hash(password, 10);
		await db.promise().query('INSERT INTO users (email_id, contact_no, password, login_id, created_at) VALUES (?,?,?,?,NOW())', [email, contact_no, hash, login_id]);
		const [rows2] = await db.promise().query('SELECT id, email_id FROM users WHERE email_id = ? LIMIT 1', [email]);
		const user: any = Array.isArray(rows2) && rows2.length ? rows2[0] : null;
		if (!user) return res.status(500).json({ error: 'Signup failed' });
		req.login(user, err => { if (err) return res.status(500).json({ error: 'Session error' }); res.json({ success: true, user: { id: user.id, email: user.email_id } }); });
	} catch { res.status(500).json({ error: 'Signup failed' }); }
});
app.post('/api/login', (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (err) return next(err);
		if (!user) return res.status(400).json({ error: info?.message || 'Invalid credentials' });
		req.login(user, (e) => { if (e) return res.status(500).json({ error: 'Session error' }); res.json({ success: true, user: { id: user.id, email: user.email_id } }); });
	})(req, res, next);
});
app.get('/api/logout', (req, res) => { req.logout?.(() => { res.clearCookie('connect.sid'); res.json({ success: true }); }); });
app.get('/api/business-sectors', async (_req, res) => { try { const [rows] = await db.promise().query('SELECT name, template_type_id FROM business_sectors'); res.json({ sectors: rows }); } catch { res.status(500).json({ error: 'Failed to fetch business sectors' }); } });
app.post('/api/save-step', isAuth, async (req, res) => {
	const userId = (req.user as any)?.id; const { step_number, form_data } = req.body || {};
	if (typeof step_number !== 'number') return res.status(400).json({ error: 'Invalid step_number' });
	try { await db.promise().query(`INSERT INTO user_form_progress (user_id, step_number, form_data) VALUES (?,?,?) ON DUPLICATE KEY UPDATE step_number=VALUES(step_number), form_data=VALUES(form_data)`, [userId, step_number, JSON.stringify(form_data || {})]); res.json({ success: true }); } catch { res.status(500).json({ error: 'DB error' }); }
});
app.get('/api/load-form', isAuth, async (req, res) => {
	const userId = (req.user as any)?.id;
	try { const [progress] = await db.promise().query('SELECT step_number, form_data FROM user_form_progress WHERE user_id = ? LIMIT 1', [userId]); const row: any = Array.isArray(progress) && progress.length ? progress[0] : null; let form_data = {}; if (row?.form_data) { try { form_data = JSON.parse(row.form_data); } catch {} } const [companyRows] = await db.promise().query('SELECT * FROM company_mast WHERE user_id = ? LIMIT 1', [userId]); res.json({ step_number: row?.step_number || 0, form_data, company: Array.isArray(companyRows) && companyRows.length ? companyRows[0] : null }); } catch { res.status(500).json({ error: 'DB error' }); }
});
app.post('/api/reset-form', isAuth, async (req, res) => { const userId = (req.user as any)?.id; try { await db.promise().query('DELETE FROM user_form_progress WHERE user_id = ?', [userId]); res.json({ success: true }); } catch { res.status(500).json({ error: 'DB error' }); } });
app.post('/api/company-details', async (req, res) => {
	const data = req.body || {}; if (!data.companyName || !data.email) return res.status(400).json({ error: 'Missing fields' });
	try { const [existing] = await db.promise().query('SELECT id FROM company_mast WHERE email = ? LIMIT 1', [data.email]); if (Array.isArray(existing) && existing.length) { const id = (existing as any)[0].id; await db.promise().query('UPDATE company_mast SET company_name=?, location=?, phone=? WHERE id=?', [data.companyName, data.location || '', data.phone || '', id]); return res.json({ success: true, companyId: id }); } const [result]: any = await db.promise().query('INSERT INTO company_mast (company_name, email, location, phone, created_at) VALUES (?,?,?,?,NOW())', [data.companyName, data.email, data.location || '', data.phone || '']); res.json({ success: true, companyId: result.insertId }); } catch { res.status(500).json({ error: 'DB error' }); }
});
app.post('/api/upload-logo', upload.single('image') as any, (req: any, res) => { if (!req.file) return res.status(400).json({ error: 'No file' }); const folder = req.query.folder ? String(req.query.folder) : ''; const rel = folder ? `/uploads/${folder}/${req.file.filename}` : `/uploads/${req.file.filename}`; res.json({ path: rel }); });
app.post('/api/domain-check', async (req, res) => { const { domain } = req.body || {}; if (!domain) return res.status(400).json({ error: 'Missing domain' }); try { const [rows] = await db.promise().query('SELECT id FROM company_mast WHERE host = ? LIMIT 1', [domain]); res.json({ exists: Array.isArray(rows) && rows.length > 0 }); } catch { res.status(500).json({ error: 'DB error' }); } });
app.post('/api/generate-site', async (_req, res) => { res.json({ success: true, message: 'Data stored (placeholder)' }); });
app.post('/api/times-edited', async (_req, res) => { res.json({ success: true }); });
app.get('/api/company-host/:companyId', async (req, res) => { const { companyId } = req.params; if (!companyId) return res.status(400).json({ error: 'Missing companyId' }); try { const [rows] = await db.promise().query('SELECT host FROM company_mast WHERE id = ? LIMIT 1', [companyId]); res.json({ host: Array.isArray(rows) && rows.length ? (rows as any)[0].host || '' : '' }); } catch { res.status(500).json({ error: 'DB error' }); } });
app.use((err, _req, res, _next) => { console.error('[API ERROR]', err); res.status(500).json({ error: 'Internal server error' }); });

export default (req, res) => app(req, res);
