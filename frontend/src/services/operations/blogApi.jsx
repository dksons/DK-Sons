import { toast } from "sonner";
import { apiConnector } from "../apiconnector";
import { contactusEndpoint } from "../api";
import { useContext } from "react";
import { AllBlogContext } from "@/context/contextapi";
const {POST_BLOG_API,ALL_BLOGS_API} = contactusEndpoint;


export async function BlogPostForm(author_name,content,title,occupation,date) {
    console.log(author_name,content,title,occupation,date);
    
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", POST_BLOG_API, {
      author_name,content,title,occupation,date
      });
  
      console.log("Contact Us RESPONSE ... ", response);
  
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
  
      toast.success("Blog Submit Successfully");
    } catch (error) {
      console.log("Feedback sent Error :- ", error);
      toast.error("Unable to send feedback");
    }
    toast.dismiss(toastId);
  }



export default function useBlogFetcher() {
  const { setblogdata } = useContext(AllBlogContext);

  const GetAllBlogs = async (page) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("GET", `${ALL_BLOGS_API}?page=${page}`);
      console.log("Get Blogs RESPONSE:", response);

      setblogdata(response.data);
      
    toast.dismiss(toastId); 
      toast.success("Blogs fetched successfully");
    } catch (error) {
      console.error("Blog fetch error:", error);
      toast.error("Unable to fetch blogs");
    }
  };

  return { GetAllBlogs };
}
