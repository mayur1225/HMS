"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
/**
 * App Imports
 */
const logger_1 = require("./src/config/logger");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//require('./app/config/database');
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(port, () => {
    logger_1.logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
const server = http_1.default.createServer((req, res) => {
    console.log("🚀 ~ file: index.ts:23 ~ server ~ res:", res);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});
//# sourceMappingURL=app.js.map