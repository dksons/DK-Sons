import { Router } from "express";
import { GetAllBlog, PostBlog } from "../controllers/blogController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import multer from "multer";
import path from 'path'
import { fileURLToPath } from "url";
import fs from 'fs'





const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
       console.log(file, 'image');
    const uniqueSuffix = Date.now() + '-' +'file'
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ 
  storage: storage, 
  limits: { fileSize: 20 * 1024 * 1024 } // 50MB limit
});


const routerPost=Router()

routerPost.post("/postBlog",authMiddleware,upload.single('image'),PostBlog)
routerPost.get("/allBlog",GetAllBlog)


export default routerPost;