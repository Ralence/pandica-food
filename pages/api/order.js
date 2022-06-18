import nc from "next-connect";
var nodemailer = require("nodemailer");

import { renderHTMLEmail } from "../../utils";

var transporter = nodemailer.createTransport({
  service: "yahoo",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SOURCE_ADDRESS,
    pass: process.env.SOURCE_PASS,
  },
});

const handler = nc().post(async (req, res) => {
  const order = {
    ...req.body,
    title: "ordered items",
    id: Date.now(),
  };

  var mailOptions = {
    from: process.env.SOURCE_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "Nova porudžbina sa sajta",
    text: JSON.stringify(order),
    html: renderHTMLEmail(order.delivery_info, order.order),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json({ error: error });
    } else {
      res.send(
        JSON.stringify({ success: true, message: "Vaša porudžbina je uspešno prosleđena." })
      );
    }
  });
});
export default handler;
