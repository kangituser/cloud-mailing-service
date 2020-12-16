const nodemailer = require("nodemailer");
const { credentials } = require("../util/mail-credentials");

const transporter = nodemailer.createTransport(credentials);

exports.sendEmail = async (req, res, next) => {
  const { from, to, subject, html, bcc } = req.body.email;

  const content = await mailContent(from, to, subject, html, bcc);
  return transporter.sendMail(content, (err, info) => {
    try {
      if (err) {
        console.log("err: ", err);
        throw err;
      } else {
        console.log("content: ", content);
      }
      console.log("info", info);
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      console.log("Sent at: ", new Date());
      return res
        .status(201)
        .json({ message: "message was sent", content: content });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
};

const mailContent = async (from, to, subject, html, bcc) => {
  if (!bcc) {
    return { from, to, subject, html };
  } else {
    return { from, to, subject, html, bcc };
  }
};
