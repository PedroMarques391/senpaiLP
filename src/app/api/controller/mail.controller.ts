import { partnershipTemplate, supportTemplate } from "@/src/utils";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  }
});
interface ISendEmail {
  type: 'support' | 'partnership';
  name: string;
  email: string;
  phone: string;
  message?: string;
  segment?: string;
  proposal?: string;
  publicInfo?: string;
  budgeting?: string;
  more?: string;
  subject?: string;
}

export async function sendEmail(data: ISendEmail) {
  const { type, name, email, phone, message, segment, proposal, publicInfo, budgeting, more, subject } = data;

  let htmlTemplate = '';

  if (type === 'partnership') {
    htmlTemplate = partnershipTemplate({ name, email, phone, segment, proposal, publicInfo, budgeting, more });
  }

  if (type === 'support') {
    htmlTemplate = supportTemplate({ name, email, phone, message });
  }

  return await transporter.sendMail({
    from: type === 'partnership' ? `${name} <${email}>` : `"Senpai" <${process.env.USER_EMAIL}>`,
    to: process.env.ADDRESSEE,
    subject: type === 'partnership' ? 'Nova solicitação de parceria' : subject,
    html: htmlTemplate,
  });
}
