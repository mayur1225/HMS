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
const env_var_1 = require("./src/config/env-var");
dotenv_1.default.config();
//require('./app/config/database');
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(PORT, () => {
    logger_1.logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
const server = (env_var_1.NODE_ENV === 'production') ? http_1.default.createServer(app) : http_1.default.createServer(app);
server.listen(PORT);
server.on('listening', () => {
    logger_1.logger.info(`${env_var_1.NODE_ENV.toUpperCase()} Server is Listening on PORT ${PORT}`);
});
//# sourceMappingURL=app.js.map