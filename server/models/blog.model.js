import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author_name: { type: String, required: true },
    occupation: { type: String },
    imglink:{type:String},
    date:{ type: String, required: true },
}, { timestamps: true });

export const Blog = mongoose.model('Blog', BlogSchema);
