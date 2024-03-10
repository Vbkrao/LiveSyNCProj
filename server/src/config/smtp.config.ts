import { createTransport } from "nodemailer";

const transporter = createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "vbkrao2020@gmail.com",
    pass: "cqudocdrueyyuyyp",
  },
  secure: true,
});

export default transporter;
