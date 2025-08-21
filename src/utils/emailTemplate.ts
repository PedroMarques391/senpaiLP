import { insertMaskInPhone } from "./phoneMask";

function supportTemplate({ name, email, phone, message }: any) {
  const formattedPhone = insertMaskInPhone(phone);
  return `
    <div style="
      font-family: 'Segoe UI', Arial, sans-serif;
      background: linear-gradient(135deg, #fff0f5 0%, #e0c3fc 100%);
      color: #4b0082;
      padding: 32px 24px;
      border-radius: 18px;
      border: 1.5px solid #ffb6c1;
      max-width: 540px;
      margin: 0 auto;
      box-shadow: 0 6px 20px rgba(255, 192, 203, 0.18);
    ">
      <h2 style="color: #ff69b4; text-align: center; margin-bottom: 18px;">
        💌 Nova mensagem de <span style="color: #4b0082;">${name}</span>
      </h2>
      <div style="margin-bottom: 16px;">
        <p><strong>📧 E-mail:</strong> ${email}</p>
        <p><strong>📞 Telefone:</strong> ${formattedPhone}</p>
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
          <p style="color: #4b0082;">${message}</p>
        </div>
      ` : ''}
      <footer style="margin-top: 28px; font-size: 13px; color: #888; text-align: center;">
        🌸 Esta mensagem foi enviada do formulário de <strong>${message ? 'suporte' : 'finalização'}</strong>.
      </footer>
    </div>
  `;
}

function partnershipTemplate({ name, email, phone, segment, proposal, publicInfo, budgeting, more }: any) {
  const formattedPhone = insertMaskInPhone(phone);
  return `
    <div style="
      font-family: 'Segoe UI', Arial, sans-serif;
      background: linear-gradient(135deg, #f0faff 0%, #dbe9ff 100%);
      color: #1a1a1a;
      padding: 32px 24px;
      border-radius: 18px;
      border: 1.5px solid #87cefa;
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 0 6px 20px rgba(135, 206, 250, 0.18);
    ">
      <h2 style="color: #1e40af; text-align: center; margin-bottom: 20px;">
        🤝 Nova solicitação de parceria
      </h2>
      <div style="margin-bottom: 16px;">
        <p><strong>👤 Nome:</strong> ${name}</p>
        <p><strong>📧 E-mail:</strong> ${email}</p>
        <p><strong>📞 Telefone:</strong> ${formattedPhone}</p>
        <p><strong>📌 Segmento:</strong> ${segment}</p>
        <p><strong>💼 Tipo de proposta:</strong> ${proposal}</p>
        <p><strong>🌍 Público alvo:</strong> ${publicInfo}</p>
        <p><strong>💰 Orçamento:</strong> ${budgeting}</p>
      </div>
      ${more ? `
        <div style="
          background: #e0f7fa;
          padding: 18px 14px;
          border-radius: 12px;
          margin-top: 12px;
          border-left: 4px solid #00bcd4;
        ">
          <h3 style="color: #00acc1; margin: 0 0 8px 0;">📝 Mais informações:</h3>
          <p style="color: #006064;">${more}</p>
        </div>
      ` : ''}
      <footer style="margin-top: 28px; font-size: 13px; color: #555; text-align: center;">
        🌟 Esta mensagem foi enviada do formulário de <strong>Parceria</strong>.
      </footer>
    </div>
  `;
}

export {
  partnershipTemplate,
  supportTemplate
}