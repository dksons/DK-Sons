import mongoose from "mongoose"


const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:4,
        
    }
},{timestamps:true})


const user=mongoose.model("user",UserSchema);

export  default user