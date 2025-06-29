# Contact Us API

A simple Node.js and Express backend API for handling "Contact Us" form submissions.  
It validates input, sends an email to the admin using Gmail SMTP via Nodemailer, and logs the message.



## Features

- POST `/contact` endpoint to receive form data (name, email, message)
- Sends email notifications to the admin using Nodemailer and Gmail SMTP
- Handles errors and input validation
- Can be tested using `node-fetch (test.js)` / `Postman`



## Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/madhavpnair/Contact_us-API.git 
cd Contact_us-API
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables

Create a .env file in the root folder and edit as follows:
(also create an app password for App : Mail for your google account)
```bash
PORT=5000
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password  
ADMIN_EMAIL=your_email@gmail.com 
```

### 4. Run the server
```bash
npm start
```
 or 
 ```bash
node server.js
```

server will be running on http://localhost:5000



### 5. Testing the API

1. using the test script
```bash
node test.js
```
check the terminal for the message and the admin's inbox for the email.

2.With Postman

- Method : POST
- URL : http://localhost:5000/contact
- Body : raw (JSON)

  eg:
  {
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test"
  }

 check the console and admin's inbox.
