const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//just to check if the server is running
app.get('/', (req, res) => {
  res.send('Contact Us API is running');
});

//contact endpoint
app.post('/contact', (req, res) => {
  const {name, email, message} = req.body;

  //Validate input
  if (!name || !email || !message){
    return res.status(400).json({ error:'All fields are required !!'});
  }

  //testing the contact form submission
  console.log(`Received message from ${name} (${email}): ${message}`);

  //Respond with success
  res.status(200).json({ message: 'Contact form received successfully'});
});

//Start the server (all routes are defined before this)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



//Export the app for testing purposes
module.exports = app;