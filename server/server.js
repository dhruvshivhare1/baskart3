const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5174', 'http://127.0.0.1:5174'],
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  console.log('Received request body:', req.body);
  
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        received: { name, email, message }
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    console.log('Attempting to send email with options:', mailOptions);

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    res.status(200).json({ 
      message: 'Email sent successfully',
      success: true
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: error.message,
      success: false
    });
  }
});

const PORT = process.env.PORT || 5174;

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Email configured for:', process.env.EMAIL_USER);
});
