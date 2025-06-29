//AI generated test script for the contact form API
// This script tests the contact form endpoint by sending a POST request with sample data.

const fetch = require('node-fetch'); 

async function testContactForm() {
  const response = await fetch('http://localhost:5000/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hi admin! This is a test message'
    })
  });

  const data = await response.json();

  if (response.ok) {
    console.log('✅ Test passed:', data.message);
  } else {
    console.error('❌ Test failed:', data.error);
  }
}

testContactForm();
