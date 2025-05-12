import transporter from "../config/mailer.js";

export const mailSender = async (email, title, body) => {
  try {
    let info = await transporter.sendMail({
     from:process.env.ADMIN_EMAIL, // FIXED
      to: email,
      subject: title,
      html: body,
    });

    console.log("Email sent: ", info.messageId);
    return info;
  } catch (error) {
    console.error("Mail sending failed:", error);
    throw error;
  }
};
