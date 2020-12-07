exports.credentials = {
  host: process.env.MAIL_HOST,
  port: 25,
  secure: false,
  // requireTLS: false,
  auth: {
    user: process.env.MAIL_365_USER,
    pass: ''
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: 'SSLv3'
  }
};