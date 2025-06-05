

const BASE_URL = 'https://165.22.132.247:8090/preview/dkbackend.api/api/v1'||import.meta.env.VITE_BASE_URL||'/api/v1';


export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/contact-us",
    POST_BLOG_API:BASE_URL + "/blogs/postBlog",
    ALL_BLOGS_API:BASE_URL+"/blogs/allBlog",
    AUTH_API:BASE_URL+"/Auth",
    VERIFY_API:BASE_URL+"/verify"
  }


