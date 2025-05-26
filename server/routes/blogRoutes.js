import { Router } from "express";
import { GetAllBlog, PostBlog } from "../controllers/blogController.js";
import authMiddleware from "../middlewares/authMiddleware.js";



const routerPost=Router()

console.log('hii');

routerPost.post("/postBlog",authMiddleware,PostBlog)
routerPost.get("/allBlog",GetAllBlog)

export default routerPost;