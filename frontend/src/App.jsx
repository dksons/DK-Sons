import React, { useContext, useEffect, useState } from 'react'
import Nav from './components/common/Nav'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/common/Footer'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import Privacy from './components/common/privacy'
import Error from './components/common/Error'
import T_C from './components/common/T_C'
import Blog from './pages/Blog'
import Login from './components/common/Login'
import { verifyuser } from './services/operations/authApi'
import { AllBlogContext } from './context/contextapi'
import Readmore from './components/common/Readmore'
import OurProducts from './components/HompageFolder/OurProducts'
import SeprateOurProduct from './pages/SeprateOurProduct'



const App = () => {

const routePaths = [
  "/",
  "/Contact-us",
  "/login",
  "/About-us",
  "/privacy-policy",
  "/error",
  "/Terms_And_Conditons",
  "/Blogs",
  "/login",
  "/Readmore/:post",
  "/our-products",
];

const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isDynamicMatch = location.pathname.startsWith("/Readmore/");
    const isValid = routePaths.includes(location.pathname) || isDynamicMatch;
console.log(isValid);

    if (!isValid) {
      navigate("/error");
    }
  }, [location.pathname, navigate]);


   const {userdata,setuserdata}=useContext(AllBlogContext)
useEffect(()=>{
  const reverify=async()=>{
    const data=await verifyuser()
    const username=data.user.username
      setuserdata({username,isLoggedin:true})
  }
  reverify()
},[])



const scroll=()=> {

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className='z-10 overflow-x-hidden  bg-brown-vignette'>
      <div className=" min-h-screen  flex flex-col ">
        <div className='absolute  overflow-x-hidden lg:w-[90%] z-50'>
          { <Nav />}
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/privacy-policy" element={<Privacy />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/Terms_And_Conditons" element={<T_C />}></Route>
          <Route path="/Blogs" element={<Blog />}></Route>
          <Route path="/login" element={<Login />}></Route>
           <Route path="/Readmore/:post" element={<Readmore />}></Route>
           <Route path="/our-products" element={<SeprateOurProduct />}></Route>

        </Routes>
      </div>
      <div className='r -z-1 bottom-0   flex justify-center  flex-col items-center bg-gradient-to-r p2  from-white/40 to-white/60'>
        <Footer />
      </div>
       <div
      onClick={scroll}
      style={{
        position: 'fixed',
        bottom: '20px',
        alignContent:'center',  
        right: '20px',
        zIndex: 100,
        cursor: 'pointer',
        backgroundColor:'white',
        borderRadius:'50%'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        width="40"
        viewBox="0 0 24 24"
        fill="$fffff"
      >
        <path d="M12 2L6 8h4v8h4V8h4l-6-6z" />
      </svg>
    </div>
    </div>
  )
}

export default App
