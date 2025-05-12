import { mailSender } from "../utils/mailSender.js";
import { adminTemplate } from "../templates/adminTemplate.js";
import { userTemplate } from "../templates/userTemplate.js";
import dotenv from "dotenv";
dotenv.config();

export const handleContactForm = async (req, res) => {
  const  name  = req.body.firstName;
  const email=req.body.email
 const message= req.body.message

  
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  
  console.log(name,email,message,process.env.ADMIN_EMAIL);

  try {
    await Promise.all([
      mailSender(
        email,
        "New Contact Form Submission",
        adminTemplate({ name, email, message })
      ),
      mailSender(
        email,
        "We received your message!",
        userTemplate({ name, message })
      ),
    ]);

    res.status(200).json({success:true, message: "Emails sent successfully" });
  } catch (error) {
    res.status(500).json({success:false, error: "Failed to send emails" });
  }
};
