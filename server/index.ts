import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleSaveCompanyDetails,
  handleGenerateSite,
  handleSiteStatus,
  handleDomainCheck,
  uploadLogo,
  sessionMiddleware,
  handleTimesEdited,
  getBusinessSectors
} from "./routes/auto-site";
import passport from "passport";
import bcrypt from "bcrypt";
import { db } from "./routes/auto-site";
import { formProgressRouter } from './routes/auto-site';

const app = express();

export function createServer() {
  // Middleware to check if session user still exists in DB
  app.use(async (req, res, next) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
      try {
        const userId = req.user && (req.user as any).id;
        if (userId) {
          const [rows] = await db.promise().query('SELECT id FROM users WHERE id = ?', [userId]);
          if (!Array.isArray(rows) || rows.length === 0) {
            req.logout(function (err) {
              req.session.destroy(() => {
                res.status(401).json({ error: 'Session expired. Please login again.' });
              });
            });
            return;
          }
        }
      } catch (err) {
        // On DB error, destroy session for safety
        req.logout(function (e) {
          req.session.destroy(() => {
            res.status(401).json({ error: 'Session expired. Please login again.' });
          });
        });
        return;
      }
    }
    next();
  });


  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(sessionMiddleware);
  app.use(passport.initialize());
  app.use(passport.session());

  // Example API routes
  app.use('/api', formProgressRouter);

  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Auth routes
  app.post("/api/signup", async (req, res, next) => {
    interface Users {
      id: number;
      email: string;
      // add other fields if needed
    }
    const { email, contact_no, password, login_id } = req.body;
    if (!email || !password || !contact_no || !login_id) {
      return res.status(400).json({ error: 'All fields required' });
    }
    try {
      // Check for existing email or login_id
      const [existing] = await db.promise().query(
        'SELECT email_id, login_id FROM users WHERE email_id = ? OR login_id = ?',
        [email, login_id]
      );
      if (Array.isArray(existing) && existing.length > 0) {
        const existsEmail = existing.some((u: any) => u.email_id === email);
        const existsLogin = existing.some((u: any) => u.login_id === login_id);
        let errorMsg = '';
        if (existsEmail && existsLogin) {
          errorMsg = 'Email and username already exist';
        } else if (existsEmail) {
          errorMsg = 'Email already exists';
        } else if (existsLogin) {
          errorMsg = 'Username already exists';
        }
        return res.status(400).json({ error: errorMsg });
      }
      const hash = await bcrypt.hash(password, 10);
      const [result] = await db.promise().query(
        'INSERT INTO users (email_id, contact_no, password, login_id, created_at) VALUES (?, ?, ?, ?, NOW())',
        [email, contact_no, hash, login_id]
      );
      // Fetch the newly created user
      const [rows] = await db.promise().query('SELECT * FROM users WHERE email_id = ?', [email]);
      const user = Array.isArray(rows) && rows.length > 0 ? rows[0] as Users : null;
      if (!user) return res.status(500).json({ error: 'Signup failed' });
      // Log in the user (create session)
      req.login(user, (err) => {
        if (err) return next(err);
        res.json({ success: true, user: { id: user.id, email: user.email } });
      });
    } catch (err) {
      res.status(500).json({ error: 'Signup failed' });
    }
  });

  app.post("/api/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.status(400).json({ error: info.message });
      req.login(user, (err) => {
        if (err) return next(err);
        res.json({ success: true, user: { id: user.id, email: user.email } });
      });
    })(req, res, next);
  });

  app.get("/api/logout", (req, res) => {
    req.logout(function (err) {
      res.clearCookie("connect.sid");
      if (err) {
        return res.status(500).json({ success: false, error: err.message || 'Logout failed' });
      }
      res.json({ success: true, message: 'Logged out' });
    });
  });

  // Auto Site Builder API routes
  app.get("/api/business-sectors", getBusinessSectors);
  app.post("/api/generate-site", handleGenerateSite);
  app.post("/api/company-details", handleSaveCompanyDetails);
  app.post("/api/domain-check", handleDomainCheck);
  app.get("/api/site-status/:buildId", handleSiteStatus);
  app.post("/api/upload-logo", uploadLogo);
  app.post("/api/times-edited", handleTimesEdited);

  // New API: Get host by companyId
  app.get("/api/company-host/:companyId", async (req, res) => {
    const { companyId } = req.params;
    if (!companyId) {
      return res.status(400).json({ error: "Missing companyId" });
    }
    try {
      // Assuming 'host' is a column in company_mast table
      const [rows] = await db.promise().query(
        "SELECT host FROM company_mast WHERE id = ? LIMIT 1",
        [companyId]
      ) as [import('mysql2').RowDataPacket[], any];
      if (Array.isArray(rows) && rows.length > 0 && rows[0].host) {
        return res.json({ host: rows[0].host });
      } else {
        return res.status(404).json({ error: "Host not found for companyId" });
      }
    } catch (err) {
      return res.status(500).json({ error: "DB error" });
    }
  });

  // Payment routes
  // app.post("/api/create-payment-order", createPaymentOrder);
  // app.post("/api/verify-payment-and-deploy", verifyPaymentAndDeploy);

  return app;
}

// Start server if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const app = createServer();
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📝 API Documentation:`);
    console.log(`   POST /api/generate-site - Generate a new website`);
    console.log(`   GET  /api/site-status/:buildId - Check build status`);
    console.log(`   POST /api/deploy-to-hostinger - Deploy site to Hostinger`);
    console.log(`   POST /api/create-payment-order - Create Razorpay payment order`);
    console.log(`   POST /api/verify-payment-and-deploy - Verify payment and deploy`);
  });
}
