import { toast } from "sonner";
import { apiConnector } from "../apiconnector";
import { contactusEndpoint } from "../api";

const {AUTH_API,VERIFY_API} = contactusEndpoint;


export async function login(username,password) {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", `${AUTH_API}/login`, {
      username,password
      });
  
      console.log("Login RESPONSE ... ", response);
  
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Login Successfull");
      return response.data
  
      
    } catch (error) {
      console.log("Login sent Error :- ", error);
      toast.error("Unable to Login");
    }
    toast.dismiss(toastId);
  }



  export async function signup(username,password) {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", `${AUTH_API}/signup`, {
      username,password
      });
  
      console.log("Signup RESPONSE ... ", response);
  
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
  
      toast.success("Signup Successfull");
    } catch (error) {
      console.log("Signup sent Error :- ", error);
      toast.error("Unable to Signup");
    }
    toast.dismiss(toastId);
  }


  
  export async function logout() {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("GET", `${AUTH_API}/logout`);
  
      console.log("Logout RESPONSE ... ", response);
           if (!response.data.success) {
        throw new Error(response.data.message);
      }
      
      toast.success("Logout Successfull");
      return response
 
  
    } catch (error) {
      console.log("Logout sent Error :- ", error);
      toast.error("Unable to Logout");
    }
    toast.dismiss(toastId);
  }



    export async function verifyuser() {
    try {
      const response = await apiConnector("GET", `${VERIFY_API}`);
  
      console.log("Logout RESPONSE ... ", response);
  
      if (!response.data.message) {
        throw new Error(response.data.message);
      }

      return response.data
    } catch (error) {
      console.log("User not Verified :- ", error);
    }
  
  }