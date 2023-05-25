import express, { Express, Request, Response } from 'express';
import http from 'http';

/**
 * App Imports
 */
import { logger } from './src/config/logger';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
//require('./app/config/database');

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});

const server = http.createServer((req, res) => {
  console.log("🚀 ~ file: index.ts:23 ~ server ~ res:", res)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});