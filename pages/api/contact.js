require('dotenv').config()
const nodemailer = require('nodemailer')

export default async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "omiputrakarunia@gmail.com",
      subject: `Email omiputera.com`,
      html: `<p>You have a message from ${name}</p>
        <p>Email: ${email}</p><br>
        <p>${message}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(201).json({ error: "", message: "success" });
}