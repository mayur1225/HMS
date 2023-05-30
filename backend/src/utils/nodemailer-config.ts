
import nodemailer from 'nodemailer';
import { nodemailerconfig, NODE_ENV } from './../config/env-var';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: nodemailerconfig.mail,
    pass: nodemailerconfig.pwd,
  },
});

/**
 *
 * @param {Json} data
 */
export const mailOptions = data => ({
  from: nodemailerconfig.from,
  to: NODE_ENV === 'production' ? data.to : nodemailerconfig.testMail,
  cc: NODE_ENV === 'production' ? data.cc : nodemailerconfig.testMail,
  subject: data.subject + ((NODE_ENV === 'production') ? '' : ` [To:${data.to} CC:${data.cc}]`),
  text: data.text,
  html: data.html,
});

export const { sendMailFlag } = nodemailerconfig;

