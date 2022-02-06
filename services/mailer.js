const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.CORREO_HOST,
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.CORREO_USER, // generated ethereal user
    pass: process.env.CORREO_PASSWORD, // generated ethereal password
  },
});
transporter.verify().then(() => {
  console.log("Preparado para enviar Emails");
});

module.exports = {transporter};
