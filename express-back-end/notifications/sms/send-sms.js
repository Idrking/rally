require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')(accountSid, authToken);

// Twilio testing app - change TWILIO_TO_NUMBER in .env to test with your phone number
// Do not change TWILIO_FROM_NUMBER

const sendTaskNotification = (message) => {
  twilio.messages
    .create({
      body: message,
      from: process.env.TWILIO_FROM_NUMBER,
      to: process.env.TWILIO_TO_NUMBER
    })
    .then(message => console.log(message.sid))
    .catch(err => console.error(err));
}

module.exports = { sendTaskNotification };