const nodemailer = require("nodemailer");

const emailTask = async (details) => {
  //For demonstration purposes, we create an Ethereal Account
  //Should this actually be produced, we'd need to swap this out with a proper SMTP client to send the emails
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const taskEmail = await transporter.sendMail(details);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(taskEmail));
  console.log("Message sent: %s", taskEmail.messageId);
};

module.exports = { emailTask };
