exports.credentials = {
  host: process.env.MAIL_HOST,
  port: 25,
  secure: false,
  requireTLS: true,
  auth: {
    // user: process.env.MAIL_365_USER,
    user: process.env.MAIL_365_USER,
    pass: process.env.MAIL_365_USER_PASS,
  }
};