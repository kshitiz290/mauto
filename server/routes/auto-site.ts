// --- Passport.js, bcrypt, express-session setup ---
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import session from 'express-session';
import { RowDataPacket } from 'mysql2';

// Session middleware (should be used in main app.js/server.js, but for demo, add here)
export const sessionMiddleware = session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: 'lax', // Use 'none' if frontend is on HTTPS and different domain
    secure: false,    // Set to true if using HTTPS
    httpOnly: true   // Prevent client-side JS access
  }
});

// Passport local strategy setup
passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' },
  async (email, password, done) => {
    try {
      const [rows] = await db.promise().query('SELECT * FROM users WHERE email_id = ?', [email]);
      const user = Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
      if (!user) return done(null, false, { message: 'Incorrect email.' });
      const match = await bcrypt.compare(password, user.password);
      if (!match) return done(null, false, { message: 'Incorrect password.' });
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM users WHERE id = ?', [id]);
    const user = Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// isAuthenticated middleware
export function isAuthenticated(req: Request, res: Response, next: any) {
  if ((req as any).isAuthenticated && (req as any).isAuthenticated()) {
    // Ensure req.user is typed as any or has an 'id' property
    req.userId = (req.user as any).id;
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
}

// --- Auth Routes ---
import { Router } from 'express';
export const authRouter = Router();

// --- Multi-step Form Progress Routes ---
export const formProgressRouter = Router();

// Save or update form progress for the logged-in user
formProgressRouter.post('/save-step', isAuthenticated, async (req: Request, res: Response) => {
  const userId = req.userId;
  const { step_number, form_data } = req.body;
  if (typeof step_number !== 'number' || !form_data) {
    return res.status(400).json({ error: 'Missing or invalid data' });
  }
  try {
    await db.promise().query(
      `INSERT INTO user_form_progress (user_id, step_number, form_data)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE step_number = VALUES(step_number), form_data = VALUES(form_data)`,
      [userId, step_number, JSON.stringify(form_data)]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'DB error' });
  }
});

// Load saved form progress for the logged-in user
formProgressRouter.get('/load-form', isAuthenticated, async (req: Request, res: Response) => {
  const userId = req.userId;
  try {
    const [rows] = await db.promise().query(
      'SELECT step_number, form_data FROM user_form_progress WHERE user_id = ?',
      [userId]
    );
    if (Array.isArray(rows) && rows.length > 0) {
      const row = rows as RowDataPacket[];

      res.json({ step_number: row[0].step_number, form_data: row[0].form_data ? JSON.parse(row[0].form_data) : {} });
    } else {
      res.json({ step_number: 0, form_data: {} });
    }
  } catch (err) {
    res.status(500).json({ error: 'DB error' });
  }
});

// Mount these routes in your main app.js/server.js:
// app.use('/', authRouter);

// Signup route logic moved to index.ts
/*
authRouter.post('/signup', async (req: Request, res: Response, next) => {
  // ...logic moved to index.ts...
});
*/

// Login route logic moved to index.ts
/*
authRouter.post('/login', (req: Request, res: Response, next) => {
  // ...logic moved to index.ts...
});
*/

// Logout route logic moved to index.ts
/*
authRouter.get('/logout', (req: Request, res: Response) => {
  // ...logic moved to index.ts...
});
*/


// Minimal handleSiteStatus for API compatibility
export const handleSiteStatus = async (req: Request, res: Response) => {
  res.status(501).json({ error: 'Not implemented' });
};
import { Request, Response } from "express";
import dotenv from "dotenv";

// Extend Express Request interface to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}
dotenv.config();
import Groq from "groq-sdk";
import fetch from "node-fetch";
import Razorpay from "razorpay";
import crypto from "crypto";
import multer from "multer";
import path from "path";
import fs from "fs";

// @ts-ignore
import mysql from "mysql2";
import { ResultSetHeader } from 'mysql2';

// --- MySQL Pool Setup ---
function parseMysqlUrl(url) {
  const m = url.match(/^mysql:\/\/(.*?):(.*?)@(.*?):(\d+)\/(.*)$/);
  if (!m) throw new Error("Invalid MYSQL_URL format");
  return {
    host: m[3],
    user: m[1],
    password: m[2],
    port: Number(m[4]),
    database: m[5]
  };
}
export const db = mysql.createConnection({
  host: 'localhost',         // or 127.0.0.1
  user: 'root',              // your MySQL username
  password: '',              // your MySQL password
  database: 'mauto'          // the database name shown in your screenshot
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to DB:', err);
    return;
  }
  console.log('Connected to MySQL Database: mauto');
});

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_YOUR_KEY_ID",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "YOUR_KEY_SECRET"
});

interface SiteGenerationRequest {
  hasDomain: boolean;
  domain: string;
  businessSector: string;
  theme: string;
  companyName: string;
  email: string;
  location: string;
  homeContent: string;
  aboutContent: string;
  contactContent: string;
  userPassword: string;
}

interface SiteStatus {
  status: "building" | "ready" | "error";
  progress: number;
  message: string;
  previewUrl?: string;
}

interface DeployRequest {
  domain: string;
  previewUrl: string;
  companyName: string;
  email: string;
  userPassword: string;
  paymentId?: string;
}

interface PaymentRequest {
  amount: number;
  currency: string;
  receipt: string;
  notes: {
    domain: string;
    companyName: string;
    email: string;
  };
}

interface PaymentVerificationRequest {
  paymentId: string;
  orderId: string;
  signature: string;
  domain: string;
  companyName: string;
  email: string;
  userPassword: string;
}

// In-memory storage for demo purposes
const siteBuilds = new Map<string, SiteStatus>();
const paymentOrders = new Map<string, any>();

// Set your multisite base domain here:
const MULTISITE_BASE_DOMAIN = "master1.lightlysites.com";

function getFullSiteUrl(domain: string) {
  // Always use subdirectory structure
  return `${process.env.WP_URL.replace(/\/$/, '')}/${domain.replace(/^\//, '')}`;
}

// Multer setup for logo uploads
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};
const upload = multer({ storage, fileFilter });

// Logo upload endpoint
export const uploadLogo = [
  (req: Request, res: Response, next) => {
    // Support ?folder=page-content-uploads or product-images for subdirectory
    let folder = '';
    if (req.query.folder === 'page-content-uploads') {
      folder = 'page-content-uploads';
    } else if (req.query.folder === 'product-images') {
      folder = 'product-images';
    }
    // Set multer destination dynamically
    const destDir = folder ? path.join(process.cwd(), 'uploads', folder) : path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, destDir);
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
      }
    });
    const upload = multer({ storage, fileFilter }).single(folder ? 'image' : 'logo');
    upload(req, res, function (err) {
      if (err || !(req as any).file) {
        return res.status(400).json({ error: 'No file uploaded or invalid file type.' });
      }
      const file = (req as any).file;
      const relativePath = folder ? `/uploads/${folder}/${file.filename}` : `/uploads/${file.filename}`;
      res.json({ path: relativePath });
    });
  }
];

// Commented out steps for now: Domain Check, Theme Selection, AI Generation, Preview, Payment, Deploy
// Remove validation for hasDomain and theme, and comment out AI/payment/deploy logic

export const handleSaveCompanyDetails = async (req: Request, res: Response) => {
  const data = req.body;
  // Data expected from frontend:
  // {
  //   companyName, email, phoneNumber, domain, businessSector, theme, logoPath,
  //   homeContent, aboutContent, contactContent
  // }
  try {
    if (!db) throw new Error("Database not configured");
    const user_id = data.user_id;
    // Save to company_mast table
    // Columns: name, business_email, host, sector, logo, created_at

    const emailCheckQuery = `SELECT id FROM company_mast WHERE business_email = ? LIMIT 1`;
    const [existing] = await db.promise().query(emailCheckQuery, [data.email]);

    if ((existing as any[]).length > 0) {
      return res.status(400).json({ error: "Company with this email already exists" });
    }

    const query = `INSERT INTO company_mast (
      name,
      business_email,
      host,
      sector,
      logo,
      address,
      user_id,
      created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`;
    const values = [
      data.companyName,
      data.email,
      data.domain,
      data.businessSector,
      data.logoPath || '',
      data.location || '',
      user_id  // Ensure user_id is optional
    ];
    const [result] = await db.promise().query<ResultSetHeader>(query, values);

    if (user_id) {
      // If user_id exists, associate it with the company
      const userCompanyQuery = `UPDATE users SET company_id = ? WHERE id = ?`;
      await db.promise().query(userCompanyQuery, [result.insertId, user_id]);
    }

    return res.json({ success: true, companyId: result.insertId });
  } catch (dbErr) {
    console.error("DB Save Error:", dbErr);
    return res.status(500).json({ error: "Failed to save company details" });
  }
}

export const handleGenerateSite = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    // Validate required fields for each section
    if (!data.domain || !data.companyName || !data.email) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!db) throw new Error("Database not configured");

    const company_id = data.company_id;
    // 1. Save Home Page Content
    const homeQuery = `INSERT INTO home (
      heading,
      heading_desc,
      banner_path,
      photo_1,
      photo_2,
      photo_3,
      photo_4,
      company_id,
      created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`;
    const homeValues = [
      data.heading,
      data.heading_desc,
      data.banner_path,
      data.photo_1,
      data.photo_2,
      data.photo_3,
      data.photo_4,
      company_id
    ];
    await new Promise((resolve, reject) => {
      db.query(homeQuery, homeValues, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    // 2. Save About Us Page Content
    const aboutQuery = `INSERT INTO about_page (
      vision_desc,
      mission_desc,
      what_we_do,
      company_id,
      created_at
    ) VALUES (?, ?, ?, ?, NOW())`;
    const aboutValues = [
      data.vision_desc,
      data.mission_desc,
      data.what_we_do,
      company_id
    ];
    await new Promise((resolve, reject) => {
      db.query(aboutQuery, aboutValues, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    // 3. Save Product/Service Content
    const productQuery = `INSERT INTO product_services (
      name,
      short_description,
      full_description,
      image,
      price,
      sequence,
      display_in_menu,
      status,
      created_at,
      updated_at,
      created_by,
      updated_by,
      company_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const productValues = [
      data.name,
      data.short_description,
      data.full_description,
      data.product_image, // Store image path from product-images subfolder
      data.price,
      data.sequence,
      (typeof data.display_in_menu === 'number' ? data.display_in_menu : 0),
      data.status || "active",
      data.created_at || new Date().toISOString(),
      data.updated_at || new Date().toISOString(),
      data.created_by || "admin",
      data.updated_by || "admin",
      company_id
    ];
    await new Promise((resolve, reject) => {
      db.query(productQuery, productValues, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    return res.json({
      success: true,
      message: "Site sections saved to database"
    });
  } catch (error) {
    console.error("Error saving site sections:", error);
    res.status(500).json({ error: "Failed to save site sections" });
  }
};

// Comment out payment and deploy logic for now
// export const createPaymentOrder = async (req: Request, res: Response) => {
//   try {
//     const data: PaymentRequest = req.body;

//     if (!data.amount || !data.currency || !data.receipt || !data.notes) {
//       return res.status(400).json({ error: "Missing required payment fields" });
//     }

//     const options = {
//       amount: data.amount * 100, // Razorpay expects amount in paise
//       currency: data.currency,
//       receipt: data.receipt,
//       notes: data.notes
//     };

//     const order = await razorpay.orders.create(options);

//     // Store order details for verification
//     paymentOrders.set(order.id, {
//       ...order,
//       notes: data.notes
//     });

//     res.json({
//       success: true,
//       orderId: order.id,
//       amount: order.amount,
//       currency: order.currency,
//       key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_YOUR_KEY_ID"
//     });

//   } catch (error) {
//     console.error("Error creating payment order:", error);
//     res.status(500).json({ error: "Failed to create payment order" });
//   }
// };

// export const verifyPaymentAndDeploy = async (req: Request, res: Response) => {
//   try {
//     const data: PaymentVerificationRequest = req.body;

//     console.log("Payment verification request received:", {
//       paymentId: data.paymentId,
//       orderId: data.orderId,
//       domain: data.domain,
//       companyName: data.companyName,
//       email: data.email
//     });

//     if (!data.paymentId || !data.orderId || !data.signature || !data.domain || !data.companyName || !data.email || !data.userPassword) {
//       console.error("Missing required fields:", data);
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     // Verify payment signature
//     const text = data.orderId + "|" + data.paymentId;
//     const expectedSignature = crypto
//       .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || "YOUR_KEY_SECRET")
//       .update(text)
//       .digest('hex');

//     console.log("Signature verification:", {
//       expected: expectedSignature,
//       received: data.signature,
//       match: expectedSignature === data.signature
//     });

//     if (expectedSignature !== data.signature) {
//       console.error("Invalid payment signature");
//       return res.status(400).json({ error: "Invalid payment signature" });
//     }

//     // Verify payment with Razorpay
//     console.log("Fetching payment from Razorpay:", data.paymentId);
//     const payment = await razorpay.payments.fetch(data.paymentId);

//     console.log("Payment status:", payment.status);

//     if (payment.status !== 'captured') {
//       console.error("Payment not completed, status:", payment.status);
//       return res.status(400).json({ error: "Payment not completed" });
//     }

//     console.log("Payment verified successfully, proceeding with deployment");

//     // Payment verified, proceed with deployment
//     const deployData: DeployRequest = {
//       domain: data.domain,
//       previewUrl: getFullSiteUrl(data.domain),
//       companyName: data.companyName,
//       email: data.email,
//       userPassword: data.userPassword,
//       paymentId: data.paymentId
//     };

//     // Call the existing deployment logic
//     return await handleDeployToHostinger({ body: deployData } as Request, res);

//   } catch (error) {
//     console.error("Error verifying payment:", error);
//     res.status(500).json({ 
//       error: "Failed to verify payment",
//       details: error instanceof Error ? error.message : "Unknown error"
//     });
//   }
// };

// export const handleDeployToHostinger = async (req: Request, res: Response) => {
//   try {
//     const data: DeployRequest = req.body;
//     if (!data.domain || !data.previewUrl || !data.companyName || !data.email || !data.userPassword) {
//       return res.status(400).json({ 
//         error: "Missing required fields" 
//       });
//     }
//     // Always generate a valid deployedUrl and previewUrl using subdirectory structure
//     const siteUrl = getFullSiteUrl(data.domain);
//     return res.json({
//       success: true,
//       deployedUrl: siteUrl,
//       previewUrl: siteUrl,
//       message: "Site deployed successfully (or already live)"
//     });
//   } catch (error) {
//     console.error("Error deploying site:", error);
//     res.status(500).json({ 
//       error: "Failed to deploy site" 
//     });
//   }
// };

// Comment out AI prompt and simulation helpers for now
// function generateAIPrompt(data: SiteGenerationRequest): string {
//   return `You are an expert web designer and copywriter. Generate a JSON object for a beautiful, modern, multi-page business website for a ${data.businessSector} company named "${data.companyName}" using the "${data.theme}" theme. The domain is "${data.domain}".

// The JSON should have this structure:
// {
//   "Home": { "title": "Home", "content": "<html>...full HTML for Home page...</html>" },
//   "About": { "title": "About", "content": "<html>...full HTML for About page...</html>" },
//   "Services": { "title": "Services", "content": "<html>...full HTML for Services page...</html>" },
//   "Contact": { "title": "Contact", "content": "<html>...full HTML for Contact page...</html>" }
// }

// **Requirements:**
// - Each page's 'content' must be a complete, ready-to-use HTML layout (not just a section), including:
//   - A professional, modern navbar at the top (with links to Home, About, Services, Contact; highlight the current page; use company branding/colors; mobile responsive).
//   - A beautiful footer at the bottom (with company info, contact details, social media links, copyright, and consistent branding/colors).
//   - Visually stunning, business-appropriate design for the ${data.businessSector} sector, using the "${data.theme}" theme.
//   - Use royalty-free images (Unsplash or similar, e.g. <img src='https://images.unsplash.com/...'>) that match the business type and page purpose.
//   - Consistent, modern, and cohesive look across all pages.


// - Home page: Hero section, intro, navigation to all pages, call-to-action, images.
// - About page: Company story, team, mission, images.
// - Services page: List of services as cards or sections, icons/images, descriptions.
// - Contact page: Contact info, contact form (HTML only), map, images.
// - Use the following for content inspiration:
//   - Home: ${data.homeContent}
//   - About: ${data.aboutContent}
//   - Contact: ${data.contactContent}
// - Use this email: ${data.email}${data.location ? `, Location: ${data.location}` : ''}.
// - Do NOT include a Blog page.
// - Respond ONLY with the JSON object, no explanation.`;
// }

// function simulateSiteGeneration(buildId: string, data: SiteGenerationRequest, aiContent?: string) {
//   // Only use the four steps expected by the frontend for tick icons
//   const steps = [
//     "Analyzing requirements...",
//     "Generating content...",
//     "Applying theme...",
//     "Optimizing for SEO..."
//     // 'Finalizing design...' and 'Creating preview...' removed for tick compatibility
//   ];

//   let currentStep = 0;
//   const interval = setInterval(() => {
//     const progress = Math.min((currentStep / steps.length) * 100, 100);

//     if (currentStep < steps.length) {
//       siteBuilds.set(buildId, {
//         status: "building",
//         progress,
//         message: steps[currentStep]
//       });
//       currentStep++;
//     } else {
//       // Site is ready
//       const previewUrl = `https://preview.${data.domain.replace(/^https?:\/\//, '')}.codifye.dev`;

//       siteBuilds.set(buildId, {
//         status: "ready",
//         progress: 100,
//         message: "Site generated successfully!",
//         previewUrl
//       });

//       clearInterval(interval);
//     }
//   }, 2000); // Update every 2 seconds
// }

// async function simulateDeployment(data: DeployRequest): Promise<{ deployedUrl: string }> {
//   // Simulate deployment delay
//   await new Promise(resolve => setTimeout(resolve, 3000));

//   // Generate deployed URL
//   const deployedUrl = `https://${data.domain.replace(/^https?:\/\//, '')}`;

//   return { deployedUrl };
// }

// Helper function to clean AI response
function cleanAIResponse(content: string): string {
  // Log the original content for debugging
  console.log("Original AI content:", content.substring(0, 200) + "...");

  return content
    // Remove any leading/trailing whitespace and non-printable characters
    .trim()
    // Remove any leading characters that aren't part of JSON
    .replace(/^[^{]*/, '')
    // Remove any trailing characters that aren't part of JSON
    .replace(/[^}]*$/, '')
    // Remove or replace control characters that break JSON
    .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
    .replace(/\r\n/g, '\n') // Normalize line endings
    .replace(/\r/g, '\n') // Convert carriage returns to newlines
    // Remove any trailing commas in objects/arrays
    .replace(/,(\s*[}\]])/g, '$1')
    // Ensure the JSON starts and ends properly
    .replace(/^[^{]*/, '')
    .replace(/[^}]*$/, '')
    .trim();
}

// More robust JSON extraction function
function extractJSONFromText(text: string): any {
  try {
    console.log("Attempting to extract JSON from text...");

    // Try to find JSON object boundaries
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const jsonStr = jsonMatch[0];
      console.log("Found potential JSON:", jsonStr.substring(0, 200) + "...");
      // Clean and parse
      const cleaned = cleanAIResponse(jsonStr);
      console.log("Cleaned JSON:", cleaned.substring(0, 200) + "...");
      return JSON.parse(cleaned);
    }
    console.log("No JSON object found in text");
  } catch (error) {
    console.error("Failed to extract JSON:", error);
  }
  return null;
}

// Helper function to test user credentials
async function testUserCredentials(siteUrl: string, username: string, password: string) {
  try {
    console.log(`Testing credentials for user: ${username} on site: ${siteUrl}`);
    console.log(`Password being used: ${password ? password.substring(0, 3) + '***' : 'undefined'}`);
    // Use Basic Auth with Application Password
    const authHeader = "Basic " + Buffer.from(`${username}:${password}`).toString("base64");
    console.log(`Auth header created: ${authHeader.substring(0, 20)}...`);

    // Test if the user exists first
    console.log("Checking if user exists on subsite...");
    const userExistsResp = await fetch(`${siteUrl}/wp-json/wp/v2/users?search=${encodeURIComponent(username)}`);
    console.log(`User search status: ${userExistsResp.status}`);
    if (userExistsResp.ok) {
      const userExistsData = await userExistsResp.json();
      console.log(`Users found: ${userExistsData.length}`);
      if (userExistsData.length === 0) {
        throw new Error(`User ${username} does not exist on the subsite`);
      }
    }

    const testResp = await fetch(`${siteUrl}/wp-json/wp/v2/users/me`, {
      method: "GET",
      headers: {
        "Authorization": authHeader
      }
    });

    console.log(`Test response status: ${testResp.status}`);
    console.log(`Test response headers:`, Object.fromEntries(testResp.headers.entries()));
    const testData = await testResp.json();
    console.log(`Test response data:`, testData);

    if (testResp.ok) {
      console.log("Credentials verified successfully. User ID:", testData.id);
      return authHeader; // Return auth header for use in other requests
    } else {
      console.error("Failed to verify credentials. Response:", testData);
      console.error("Full error response:", {
        status: testResp.status,
        statusText: testResp.statusText,
        headers: Object.fromEntries(testResp.headers.entries()),
        data: testData
      });
      // Try to get more info about the user
      // const usersResp = await fetch(`${siteUrl}/wp-json/wp/v2/users`, {
      //   method: "GET",
      //   headers: {
      //     "Authorization": authHeader
      //   }
      // });
      // const usersData = await usersResp.json();
      // console.log("Available users:", usersData);

      throw new Error(`Failed to verify credentials for user ${username}. Response: ${testData.message}`);
    }
  } catch (error) {
    console.error("Error testing user credentials:", error);
    throw error; // Re-throw to be caught by the main try block
  }
}

// Cleanup old builds (run every hour)
setInterval(() => {
  const oneHourAgo = Date.now() - (60 * 60 * 1000);

  for (const [buildId, buildStatus] of siteBuilds.entries()) {
    const buildTime = parseInt(buildId.split('_')[1]);
    if (buildTime < oneHourAgo) {
      siteBuilds.delete(buildId);
    }
  }
}, 60 * 60 * 1000);