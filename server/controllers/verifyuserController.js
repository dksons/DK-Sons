export const verifyuser=(req,res)=>{
    try {
        const user=req.user;
        console.log(user);
        
  return  res.status(200).json({message:'User Verified',user:user})
    } catch (error) {
        console.error("Error while Verification",error);
      return   res.status(500).json({message:'User Verification Failed'})
    }
}