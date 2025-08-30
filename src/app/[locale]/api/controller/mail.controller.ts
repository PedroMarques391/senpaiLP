import { IProposalRequestData } from "@/src/types";
import { partnershipTemplate, supportTemplate } from "@/src/utils";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  }
});

export async function sendEmail(data: IProposalRequestData) {
  let htmlTemplate = "";

  if (data.type === "partnership") {
    htmlTemplate = partnershipTemplate(data);
  }

  if (data.type === "support") {
    htmlTemplate = supportTemplate(data);
  }

  return await transporter.sendMail({
    from: data.type === "partnership" ? `${data.name} <${data.email}>` : `"Senpai" <${process.env.USER_EMAIL}>`,
    to: process.env.ADDRESSEE,
    subject: data.type === "partnership" ? "Nova solicitação de parceria" : data.subject,
    html: htmlTemplate,
  });
}
