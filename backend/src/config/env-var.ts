import dotenv from 'dotenv';

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 3000;
export const LEVEL = process.env.NODE_ENV === 'production' ? 'error' : 'error';

export const {
    JWT_SECRET,
  } = process.env;
  export const {
    JWT_EXPIRATION,
  } = process.env;
//   export const db = {
//     host: process.env.PGHOST,
//     port: process.env.PGPORT,
//     database: process.env.PGNAME || process.env.DB_NAME || 'vPortal',
//     user: process.env.PGUSER,
//     password: process.env.PGPASS,
//   };
//   export const elasticdb = {
//     host: process.env.ELASTIC_HOST,
//     user: process.env.ELASTIC_USER,
//     password: process.env.ELASTIC_PASS,
//   };
//   export const { DEBUG_SQL } = process.env;
//   export const { AWS_ACCESS_KEY } = process.env;
//   export const { AWS_SECRET_KEY } = process.env;
//   export const { BUCKET } = process.env;
//   export const { REGION } = process.env;
//   export const { ATHENA_DB } = process.env;
//   export const { OUTPUT_BUCKET } = process.env;
//   export const { SKILLMATRIX_BUCKET } = process.env;
//   export const { ATHENA_LOG_TABLE } = process.env;
//   export const { ATHENA_LOG_SAVE_FOLDER } = process.env;
//   export const { HRMS_URL } = process.env;
//   export const { HRMS_SECRET_KEY } = process.env;
//   export const { BASE_URL } = process.env;
//   export const { AUTO_ASSIGN_DM_ID } = process.env;
//   export const { AUTO_ASSIGN_AM_ID } = process.env;
  
//   export const { CRON_EMAIL_TO } = process.env;
//   export const { CRON_EMAIL_CC } = process.env;
//   export const { SEND_CRON_STATUS_MAIL } = process.env;
  
  export const nodemailerconfig =
  {
    mail: process.env.NODEMAILER_MAIL,
    pwd: process.env.NODEMAILER_PWD,
    from: process.env.NODEMAILER_FROM,
    sendMailFlag: process.env.SENDMAIL,
    testMail: process.env.TEST_EMAIL,
  };
 // export const SAVEELASTICLOG = !!(process.env.SAVEELASTICLOG === 'true' || process.env.SAVEELASTICLOG === true);