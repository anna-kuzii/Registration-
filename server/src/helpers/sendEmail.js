import nodemailer from 'nodemailer';
import appConfig from '../configs/app.config';

export default async (emailTempate, userEmail, token, domain) => {
  const { subject, html } = emailTempate(token, domain);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: appConfig.EMAIL,
      pass: appConfig.PASSPORT,
    },
  });

  await transporter.sendMail({
    from: appConfig.EMAIL,
    to: userEmail,
    subject,
    html,
  });
};
