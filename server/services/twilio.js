require('dotenv').config();

const accountSid = ''; // Your Account SID from www.twilio.com/console
const authToken = ''; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

const sendMessage = (to, body) => {
    client.messages
    .create({ body, to: `+${to}`, from: '+19207957492' })
    .then((message) => console.log(message.sid));
}

module.exports = {
    sendMessage
}
