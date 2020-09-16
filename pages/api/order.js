import nc from "next-connect";
var nodemailer = require("nodemailer");

import { renderHTMLEmail } from "../../utils";

var transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

const handler = nc().post(async (req, res) => {
  const order = {
    ...req.body,
    title: "ordered items",
    id: Date.now(),
  };

  var mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "Nova porudžbina sa sajta",
    text: JSON.stringify(order),
    html: renderHTMLEmail(order.delivery_info, order.order),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send({ error: error });
    } else {
      console.log("Email sent: " + info.response);
      res.send(JSON.stringify({ message: "Vaša porudžbina je uspešno prosleđena." }));
    }
  });
});
export default handler;
