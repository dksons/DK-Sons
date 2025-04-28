import transporter from "../config/mailer.js";
import { adminTemplate } from "../templates/adminTemplate.js";
import { userTemplate } from "../templates/userTemplate.js";
import dotenv from "dotenv";
dotenv.config();

export const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const adminMail = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "New Contact Form Submission",
    html: adminTemplate({ name, email, message }),
    replyTo: email,
  };

  const userMail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "We received your message!",
    html: userTemplate({ name, message }),
  };

  // const userEmail = await mailsender(
  //   to : body wala email,
  //   subject: title/overview, 
  //   userTemplate(body.name,body.message);
  // )

  // const emailResponse = await mailSender(
  //   updatedUserDetails.email,
  //           "Password Updated Successfully",
  //   passwordUpdated(
  //     updatedUserDetails.email,
                
  //     updatedUserDetails.firstName,
  //   )
  // );

  try {
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ]);
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
};
