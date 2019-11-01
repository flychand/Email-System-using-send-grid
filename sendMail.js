
const bodyParser = require("body-parser");
require('dotenv').config()
var express = require('express');
const app = express();

app.use(bodyParser.json());

const sgMail = require('@sendgrid/mail');
var key = process.env.API_KEY;
var sender = process.env.SENDER


app.post('/send-email',(req,res)=>{
  var email = req.body.email;
  sgMail.setApiKey(key);

  const msg = {
    to: email,
    from: sender,
    subject: 'Sending with SendGrid is Fun',
    text: 'I am testing mail servise with send grid',
    html: '<strong> <h2>Hello sir </h2>, successfully tested </strong>',
  };
  sgMail.send(msg);
  res.send({email : email, message : "please check to your mail : " + email})

})

const port = 3005;
app.listen(port,(req,res) =>{
    console.log("server is running on ",`${port}`)
})
