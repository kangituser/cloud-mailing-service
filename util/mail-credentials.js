exports.credentials = {
  host: process.env.MAIL_HOST,
  port: 587, // 587 - false, 25 - false
  secure: false, // for TLS/SSL connections
  auth: {
    user: process.env.MAIL_USER_NAME,
    pass: process.env.MAIL_API_KEY
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: 'SSLv3' // config for TLS/SSL protocol
  }
};
