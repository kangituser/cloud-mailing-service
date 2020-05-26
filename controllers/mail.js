const nodemailer = require('nodemailer');
const credentials = require('../util/mail-credentials');

const transporter = nodemailer.createTransport(credentials.credentials);

exports.sendEmail = ({ body }, res, next) => { 
  
  const from = body.mail.from;
  const to = body.mail.to;
  const subject = body.mail.subject;
  const html = body.mail.html;
  const bcc = body.mail.bcc;

  const content = mailContent(from, to, subject, html, bcc);
  console.log(content);
  
  
  return transporter.sendMail(content, (err, info) => {
     
    if (err) {      
      res.status(err.statusCode).json({ message: err.message })
      return console.log(err);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    console.log('Sent at: ', new Date());
    res.status(201).json({ message: 'message was sent', content: content})
  });
};

const mailContent = (from, to, subject, html, bcc) => {
  let body;
  if (!bcc) {
    body = {
      from: from,
      to: to,
      subject: subject,
      html: html
    };
  } else {
    body = {
      from: from,
      to: to,
      subject: subject,
      html: html,
      bcc: bcc
    };
  }
  return body;
}