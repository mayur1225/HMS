import express, { Express } from 'express';
import http from 'http';

/**
 * App Imports
 */
import { logger } from './src/config/logger';
import cors from 'cors';
import dotenv from 'dotenv';
import { NODE_ENV } from './src/config/env-var';
dotenv.config();
//require('./app/config/database');

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

// const server = (NODE_ENV === 'production') ? http.createServer( app) : http.createServer(app);

// server.listen(PORT);

// server.on('listening', () => {
//   logger.info(`${NODE_ENV.toUpperCase()} Server is Listening on PORT ${PORT}`);
// });