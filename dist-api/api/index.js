import serverless from 'serverless-http';
// Import without extension so Vercel runtime resolves compiled JS (._createServer.js)
import { createServer } from './_createServer';
const app = createServer();
export default serverless(app);
