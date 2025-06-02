import { createContext, useState } from "react";

//Context is a React object that holds global data you want to share across the component tree.
export const AllBlogContext=createContext(null);

export const BlogProvider=(props)=>{  //it is  a wrapper  for providing context to childrens of <App/>
    const [blogdata,setblogdata]=useState();
    const [userdata,setuserdata]=useState({isLoggedin:false});
    return(
         <AllBlogContext.Provider value={{blogdata,setblogdata,userdata,setuserdata}}>
        {props.children}
    </AllBlogContext.Provider>
    )
}