const accountSid = 'AC68749b84b7cea734d0786e6c1b41656c'; // Your Account SID from www.twilio.com/console
const authToken = '39f79553cfc3670033df95e4a4b3561b'; // Your Auth Token from www.twilio.com/console

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
