import { toast } from "sonner";
import { apiConnector } from "../apiconnector";
import { contactusEndpoint } from "../api";

const {CONTACT_US_API} = contactusEndpoint;

export async function contactUsForm(countrycode, email, firstName, lastName, message, phoneNo) {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", CONTACT_US_API, {
        countrycode,
        email,
        firstName,
        lastName,
        message,
        phoneNo,
      });
  
      console.log("Contact Us RESPONSE ... ", response);
  
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
  
      toast.success("Feedback Submit Successfully");
    } catch (error) {
      console.log("Feedback sent Error :- ", error);
      toast.error("Unable to send feedback");
    }
    toast.dismiss(toastId);
  }