import { Blog } from "../models/blog.model.js"
import {v2 as  cloudinary} from 'cloudinary';
import fs from 'fs'

export const PostBlog = async (req, res) => {
   try {
      console.log("hi");

      const { title, content, author_name, occupation, date } = req.body
      console.log(req.body);


      if (!title || !content || !author_name || !occupation || !date)
         return res.status(400).json({ status: false, message: "All fields are required" })

      const filepath = req.file.path;
      const uploadfile = await cloudinary.uploader.upload(filepath, {
         folder: 'uploads'
      })
      try {
         fs.unlinkSync(filepath);
      } catch (unlinkError) {
         console.error("⚠️ Error in deleting file:", unlinkError);
      }


      const newBlog = new Blog({
         title,
         content,
         author_name,
         occupation,
         date,
         imglink: uploadfile.secure_url
      })


      await newBlog.save()

      return res.status(201).json({ message: "Blog Created Successfully", success: true })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Server error while creating Blog', success: false });
   }
}


export const GetAllBlog = async (req, res) => {

   try {
      let { page = 1, limit = 6 } = req.query;
      const skip = (page - 1) * limit

      page = parseInt(page);
      limit = parseInt(limit)


      const allBlogs = await Blog.find().skip(skip).limit(limit).sort({ createdAt: -1 });
      const totaldocs = await Blog.countDocuments()

      return res.status(200).json({
         page,
         totalPageCount: Math.ceil(totaldocs / limit),
         allBlogs,
         message: "Blog Fetched Successfully"
      })




   } catch (error) {
      res.status(500).json({ error: 'Server error while fetching' });
   }


}
