import mongoose from 'mongoose';
import { logger } from './logger';

mongoose.set("strictQuery", true);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
mongoose.connect(process.env.DATABASE_URL!);

const db = mongoose.connection;

db.on("connected", function () {
  logger.info("Database Is Connected Successfully");
});
db.on("disconnected", function () {
  logger.info("Database Is Disconnected Successfully");
});

db.on("error", console.error.bind(logger.info, "MongoDB Connection Error:"));

export default db;