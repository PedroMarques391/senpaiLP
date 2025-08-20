
import { insertMaskInPhone } from "@/src/utils";
import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  }
});


interface IEmail {
  name: string;
  email: string,
  phone: string;
  subject: string;
  message?: string;
}

export async function sendEmail(data: IEmail) {
  const { name, email, phone, subject, message } = data;
  const formattedPhone = insertMaskInPhone(phone);

  return await transporter.sendMail({
    from: `"Suporte Senpai" <${process.env.USER_EMAIL}>`,
    to: process.env.ADDRESSEE,
    subject,
    html: `
      <div style="
    font-family: 'Segoe UI', 'Arial Rounded MT Bold', Arial, sans-serif;
    background: linear-gradient(135deg, #fff0f5 0%, #e0c3fc 100%);
    color: #4b0082;
    padding: 32px 24px;
    border-radius: 18px;
    border: 1.5px solid #ffb6c1;
    max-width: 540px;
    margin: 0 auto;
    box-shadow: 0 6px 20px rgba(255, 192, 203, 0.18);
">
  <h2 style="color: #ff69b4; text-align: center; margin-bottom: 18px; letter-spacing: 1px;">
    💌 Nova mensagem de <span style="color: #4b0082;">${name}</span>
  </h2>

  <div style="margin-bottom: 16px;">
    <p style="font-size: 16px; margin: 4px 0;"><strong>📧 E-mail:</strong> ${email}</p>
    <p style="font-size: 16px; margin: 4px 0;"><strong>📞 Telefone:</strong> ${formattedPhone}</p>
  </div>

  ${message ? `
    <div style="
      background: #ffe4e1;
      padding: 18px 14px;
      border-radius: 12px;
      margin-top: 12px;
      border-left: 4px solid #ff69b4;
    ">
      <h3 style="color: #ff69b4; margin: 0 0 8px 0;">📝 Mensagem:</h3>
      <p style="color: #4b0082; font-size: 15px; margin: 0;">${message}</p>
    </div>
  ` : ''}

  <footer style="margin-top: 28px; font-size: 13px; color: #888; text-align: center;">
    <p>
      🌸 Esta mensagem foi enviada do formulário de 
      <strong>${message ? 'suporte' : 'finalização'}</strong>.
      Tenha um dia brilhante! ✨
    </p>
  </footer>
</div>

    `,
  });
}
