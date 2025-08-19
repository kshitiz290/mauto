import serverless from 'serverless-http';
import { createServer } from './_createServer.ts';

const app = createServer();

export default serverless(app);
