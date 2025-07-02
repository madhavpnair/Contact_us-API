const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
//const cors = require('cors');//if going to be tested from frontend/ diff origin

const app = express();
//app.use(cors());
app.use(express.json());

//just to check if the server is running
app.get('/',(req, res) => {
  res.send('Contact Us API is running');
});

//contact endpoint
app.post('/contact', async(req,res) => {
  const {name, email, message} = req.body;

  //Validate input
  if(!name || !email || !message){
    return res.status(400).json({ error:'All fields are required !!'});
  }

  //testing the contact form submission
  console.log(`Received message from ${name} (${email}): ${message}`);

  try{
    //transporter for nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // SMTP address
        pass: process.env.SMTP_PASS  // app password
      }
    });
  

  //send email
  await transporter.sendMail({
    from: process.env.SMTP_USER, // Sender address 
    to: process.env.ADMIN_EMAIL, // Admin receives the email
    subject: `New contact form submission from ${name}`,   
    html: `<p>You have received a new message from <strong>${name}</strong> 
    (<a href="mailto:${email}">${email}</a>):</p>
    <p>${message}</p>`
  });
  

  //Respond with success
  res.status(200).json({ message: 'Contact form received successfully'});
    } 
    catch (error) {
        console.error('Error sending email:',error);
        res.status(500).json({ error: 'Failed to send contact form'});
    }

});

//Start the server (all routes are defined before this)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



//Export the app for testing purposes
//module.exports = app;
