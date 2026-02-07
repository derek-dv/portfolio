const express = require('express');
const { EmailClient } = require("@azure/communication-email");
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Azure Email Client
const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
const senderAddress = process.env.SENDER_EMAIL_ADDRESS;

let emailClient;
try {
    if (connectionString) {
        emailClient = new EmailClient(connectionString);
        console.log("Azure Email Client initialized.");
    } else {
        console.warn("WARNING: COMMUNICATION_SERVICES_CONNECTION_STRING is missing in .env");
    }
} catch (error) {
    console.error("Failed to initialize Azure Email Client:", error);
}

// Email Route
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(req.body);


    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (!emailClient || !senderAddress) {
        console.error("Azure Email Client or Sender Address not configured.");
        return res.status(500).json({ error: 'Server configuration error: Email client not ready.' });
    }
    console.log(senderAddress, emailClient);

    try {
        const emailMessage = {
            senderAddress: senderAddress,
            content: {
                subject: `Portfolio Contact: ${subject}`,
                plainText: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                html: `
                  <h3>New Message from Portfolio</h3>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Subject:</strong> ${subject}</p>
                  <div style="padding: 10px; border: 1px solid #ccc; background: #f9f9f9;">
                    <p>${message.replace(/\n/g, '<br>')}</p>
                  </div>
                `,
            },
            recipients: {
                to: [{ address: "derekmiracledavid@gmail.com" }, { address: "derek@derekcodes.online" }], // Send to yourself
                // Optionally send a copy to the user if you have a "reply-to" header supported or just in body
            },
        };

        const poller = await emailClient.beginSend(emailMessage);
        const result = await poller.pollUntilDone();

        console.log("Email sent result:", result);
        res.status(200).json({ success: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
