const nodemailer = require("nodemailer");

const emailTask = async(taskDetails) => {
  
  //For demonstration purposes, we create an Ethereal Account
  //Should this actually be produced, we'd need to swap this out with a proper SMTP client to send the emails
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });
  const emailDetails = {
    from: '"Rally" <noreply@rally.com>',
    to: "test@email.com",
    subject: "New Task from Wendy",
    text: "Lorgy Borgy",
    html: `<h1>Lorgy Porgy</h1>`
  }
  const taskEmail = await transporter.sendMail(emailDetails)

  console.log("Message sent: %s", taskEmail.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(taskEmail));
}

module.exports = { emailTask };