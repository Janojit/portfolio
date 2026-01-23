const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "YOUR_EMAIL@gmail.com",
      pass: "APP_PASSWORD"
    }
  });

  await transporter.sendMail({
    from: email,
    to: "YOUR_EMAIL@gmail.com",
    subject: "Portfolio Message",
    text: `${name}: ${message}`
  });

  res.json({ success: true });
});

app.listen(5000, () => console.log("Backend running"));
