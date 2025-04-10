
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
  message: string;
}

export async function sendEmail(data: IEmail) {
  const { name, email, phone, subject, message } = data;
  const formattedPhone = insertMaskInPhone(phone);

  return await transporter.sendMail({
    from: `"Suporte" <${email}>`,
    to: process.env.ADDRESSEE,
    subject: subject,
    html: `
                <div style="font-family: 'Comic Sans MS', 'Arial Rounded MT Bold', Arial, sans-serif; background-color: #fff0f5; color: #4b0082; padding: 24px; border-radius: 16px; border: 2px dashed #ffb6c1; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(255, 192, 203, 0.4);">
  <h2 style="color: #ff69b4; text-align: center; margin-bottom: 20px;">
    💌 Nova Mensagem de: <span style="color: #4b0082;">${name}</span>
  </h2>

  <p style="font-size: 16px; color: #555;"><strong>📧 E-mail:</strong> ${email}</p>
  <p style="font-size: 16px; color: #555;"><strong>📞 Telefone:</strong> ${formattedPhone}</p>

  <div style="background-color: #ffe4e1; padding: 18px; border-radius: 12px; margin-top: 16px;">
    <h3 style="color: #ff69b4; margin-top: 0;">📝 Mensagem:</h3>
    <p style="color: #4b0082; font-size: 15px;">${message}</p>
  </div>

  <footer style="margin-top: 24px; font-size: 13px; color: #888; text-align: center;">
    <p>🌸 Esta mensagem foi enviada do formulário de contato da nossa página. Tenha um dia brilhante! ✨</p>
  </footer>
</div>

            `,
  });
}
