import user from "../models/user.model.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();


 export const signup=async(req,res)=>{
    try {
        const {password,username}=req.body;
    
        const isUserExist= await user.findOne({username})
       if(isUserExist) return res.status(200).json({message:"User already exists"});


    //    const hashPassword =await bcryptjs.hash(password,10);
       
       const newUser=new user({
        username,
        password
       });

       await newUser.save();  // save user to database

       res.status(201).send({
        success:true,
         message:"User registration successful",
         user:{
             id:newUser._id,
             username:newUser.username
         }
 
       });
    } catch (error) {
      
        
        res.status(500).json({
            success: false,
            message:"User registration failed"
        });
            console.log(error)
    }
}





 export const login=async(req,res)=>{
try {
    const {username,password}=req.body;
 
    
    const User=await user.findOne({username}) 
    if(!User) return res.status(400).json({message:"Username is not valid"});

    //  const ispasswordmatch=await bcryptjs.compare(password,User.password || " ");
    const ispasswordmatch=password===User?.password
  if(!ispasswordmatch) return res.status(400).json({message:"Invalid password"});
    
     const token = jwt.sign({id: User._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
     res.cookie("token", token, {
        httpOnly: true, // Prevent JavaScript access (security best practice)
        secure: true, // Required for SameSite: "None" to work
        sameSite: "None", // Allows cross-site cookies
        maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expires in 30 day
      });


     res.status(201).send({
        success:true,
        message:"User Login successful",
        user:{
            id:User._id,
            username:User.username,
        }

      });

} catch (error) {

        
    res.status(500).json({
        success: false,
        message:"User registration failed"
    });
        console.log(error)
}
}

export const logout=(req,res)=>{
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,  // Set `true` in production (HTTPS required)
        sameSite: "strict",
      });
      res.json({ message: "Logged out successfully" });
}


export default {signup,login,logout};
