import mongoose from "mongoose";


const DbConnect = async()=>{
  await mongoose.connect(process.env.MONGODB_URL,{
  })
  .then(() => console.log("DB CONNECTION SUCCESSFULL"))
  .catch((error) => {
      console.log("DB CONNECTION FAILED");
      console.error(error);
      process.exit(1); 
  })
}

export default DbConnect