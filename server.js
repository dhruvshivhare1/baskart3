const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5174;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'src/components/Contact.tsx', // Replace with your frontend's origin
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));
// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yaararrey@gmail.com', // Replace with your email
    pass: 'Croma12345', // Replace with your email password
  },
});

// Route to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received form data:', { name, email, message });

  const mailOptions = {
    from: email,
    to: 'Yaararrey@gmail.com', // Replace with your email
    subject: `New message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Message sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});