import { Handler } from "@netlify/functions";
import serverless from "serverless-http";
import express from "express";
import cors from "cors";

// Import the auto-site routes
import { 
  handleGenerateSite, 
  handleSiteStatus, 
  handleDeployToHostinger 
} from "../../server/routes/auto-site";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auto Site Builder API routes
app.post("/api/generate-site", handleGenerateSite);
app.get("/api/site-status/:buildId", handleSiteStatus);
app.post("/api/deploy-to-hostinger", handleDeployToHostinger);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "auto-site-builder" });
});

// Export the serverless handler
export const handler: Handler = serverless(app); 