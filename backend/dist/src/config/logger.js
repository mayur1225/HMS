"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
exports.logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.Console({
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.printf(({ timestamp, level, message, metadata }) => {
                return `[${timestamp}] ${level}: ${message}. ${JSON.stringify(metadata)}`;
            })),
        }),
        new winston_1.transports.File({
            dirname: "logs",
            filename: "winston_example.log",
            format: winston_1.format.combine(winston_1.format.json()),
        }),
    ],
    format: winston_1.format.combine(winston_1.format.metadata(), winston_1.format.timestamp()),
});
//# sourceMappingURL=logger.js.map