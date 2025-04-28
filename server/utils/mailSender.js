import transporter from "../config/mailer";

//transporter.sendMail - 3 param (email,title,mailtemplate/body)

// const mailSender = async (email,title,body) => {
// let info = await transporter.sendMail({
//     from: ' DK-SONS || xyz - by Dytes ',
//     to: `${email}`,
//     subject: `${title}`,
//     html: `${body}`,
// })

// console.log(info);
// return info;
//}