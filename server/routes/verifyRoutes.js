import express from 'express';
import { verifyuser } from '../controllers/verifyuserController.js';
import authMiddleware from '../middlewares/authMiddleware.js';



const verifyrouter=express.Router();

verifyrouter.get('/',authMiddleware,verifyuser)
 export default verifyrouter;
