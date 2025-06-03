import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import DbConnect from "./config/Db/DbConnect.js";
import routerPost from "./routes/blogRoutes.js";
import Authrouter from "./routes/AuthRoutes.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import { verifyuser } from "./controllers/verifyuserController.js";
import verifyrouter from "./routes/verifyRoutes.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from 'cloudinary'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

DbConnect()


cloudinary.config({
    cloud_name: process.env.C_CLOUND_NAME,
    api_key: process.env.C_API_KEY,
    api_secret: process.env.C_SEC_KEY,
});

app.use(cors({
 origin: [
  "http://www.dksons.co",
  "http://localhost:5173",
  "https://www.dksons.co"
]

  credentials: true // 🔥 important for cookies
  
}));
app.use(express.json());
app.use(express.urlencoded())
app.use(cookieParser())
app.use(express.static('public'));
app.use("/api/v1",contactRoutes);
app.use("/api/v1/blogs",routerPost);
app.use("/api/v1/Auth",Authrouter);
app.use("/api/v1/verify",verifyrouter);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
