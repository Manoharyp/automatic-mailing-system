const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); 
const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).json({ error: "Missing required fields: 'to', 'subject', 'text'" });
    }
    console.log(to, subject, text);

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
            user: "manoharmanuyp@gmail.com",
            pass: "obdk cjhx vawm nlbm" 
        }
    });

    try {
        await transporter.sendMail({
            from: 'Your-Email/Name',  
            to,
            subject,
            text
        });

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
