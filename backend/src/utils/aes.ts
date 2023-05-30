// 'use strict';

// const crypto = require('crypto');

// // Don't change. These keys are from HRMS system. 
// const ENCRYPTION_KEY ='rz29cUM4BIQ5PQwDQG2dtympRpZ79fcr';
// const iv = 'tuqZQhKP48e8Piuc'; // 

// function encrypt(text) {
// 	let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
// 	let encrypted = cipher.update(text);
// 	encrypted = Buffer.concat([encrypted, cipher.final()]);
// 	return encrypted.toString('base64');
// }

// function decrypt(encryptedText) {
// 	try{
// 		let enryptedText1 = Buffer.from(encryptedText, 'base64');
// 		let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
// 		let decrypted = decipher.update(enryptedText1);
// 		decrypted = Buffer.concat([decrypted, decipher.final()]);
// 		return decrypted.toString('utf-8');
// 	} catch {
// 		return encryptedText;
// 	}
// }

// module.exports = { decrypt, encrypt };

