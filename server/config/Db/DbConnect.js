import mongoose from "mongoose";


const DbConnect=async()=>{
       await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`).then(() => console.log('Connected!'))
  .catch(err => console.error('Failed to connect', err));
   
}

export default DbConnect