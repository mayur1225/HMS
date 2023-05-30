//* eslint-disable import/prefer-default-export */
// import * as AWS from 'aws-sdk';

// import { AWS_ACCESS_KEY, AWS_SECRET_KEY, BUCKET, REGION, ATHENA_DB, OUTPUT_BUCKET, SKILLMATRIX_BUCKET } from './../config/env-vars';
// import APIError from './APIError';

// const athena = require('./athena/athena-database');


// const awsConfig = {
//   accessKeyId: AWS_ACCESS_KEY,
//   secretAccessKey: AWS_SECRET_KEY,
//   region: REGION,
//   signatureVersion: 'v4',
// };
// AWS.config.update(awsConfig);
// const s3bucket = new AWS.S3(awsConfig);


// const athenaDatabaseConfig = {
//     aws: AWS,
//     outputBucket: `s3://${OUTPUT_BUCKET}`,
//     db: ATHENA_DB,
//     dataBucket: `s3://${BUCKET}`,
//     getStats: true,
//   };
//   const athenaClient = new athena.AthenaClient(athenaDatabaseConfig);


// **
//  * 
//  * @param {*} sqlQuery
//  */
// export const getDataWithAthena = async (sqlQuery) => {
//   try {
//     const results = await athenaClient.query(sqlQuery);
//     return results.Items;
//   } catch (error) {
//     return error;
//   }
// };

// /**
//  * 
//  * @param {*} sqlQuery
//  */
// export const athenaQuryWithoutReturn = async (sqlQuery) => {
//   try {
//     await athenaClient.query(sqlQuery);
//     return [];
//   } catch (error) {
//     return error;
//   }
// };