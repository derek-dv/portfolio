const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email Route
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Create Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email Options
        const mailOptions = {
            from: `"${name}" <${email}>`, // sender address
            to: process.env.SMTP_USER, // list of receivers (send to yourself)
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
          <h3>New Message from Portfolio</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="padding: 10px; border: 1px solid #ccc; background: #f9f9f9;">
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
