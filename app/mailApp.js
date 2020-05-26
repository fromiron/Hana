import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import dotenv from 'dotenv';
dotenv.config();

const MAIL_ID = process.env.GMAIL_ID;
const MAIL_PASS = process.env.GMAIL_PASS;

export const sendingMail = async (title, userName,email,pets,text) => {
  console.log('loading ok');
  console.log(title);
  console.log(userName);
  console.log(email);
  console.log(pets);
  console.log(text);

  const transporter = await nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      prot: 465, // secure:true for port 465, secure:false for port 587
      host: 'smtp.gmlail.com',
      secure: true,
      auth: {
        user: MAIL_ID,
        pass: MAIL_PASS,
      },
    })
  );

  const mailOptions = {
    from: MAIL_ID,
    to: MAIL_ID,
  subject: `${title, userName}様`,
    html: '<p>受信メール</br>'+email+'</p></br><p>ペット情報</br>'+ pets +'</p></br>問い合わせ内容</br>'+text,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
    transporter.close();
  });
};
