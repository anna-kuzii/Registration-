import nodemailer from 'nodemailer';
import appConfig from '../configs/app.config';

export default async (emailTempate, userEmail, token) => {
  const { subject, html } = emailTempate(token);
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
