import React, { useEffect, useState } from 'react'
import Nav from './components/common/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Footer from './components/common/Footer'

import ContactUs from './pages/ContactUs'
import About from './pages/About'



const App = () => {


const debounceScroll=(fn,delay)=>{ 

  let timerid;

  return function(){
    clearTimeout(timerid)
    fn(false)
    timerid=setTimeout(() => {
      fn(true)
    }, delay);
  }
}

  const  [isNav,setisNav]=useState(true);


  useEffect(()=>{
const scrolling=debounceScroll(setisNav,600)

  window.addEventListener('scroll',scrolling)



  })
  return (
    <div className='z-10 overflow-x-hidden  bg-brown-vignette'>
    <div className=" min-h-screen  flex flex-col ">
      <div className='fixed z-50'>
       {isNav&& <Nav />}
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/about-us" element={<About />}></Route>
      </Routes>
      </div>
      <div className='r -z-1 bottom-0   flex justify-center  flex-col items-center bg-gradient-to-r p2  from-white/40 to-white/60'>
<Footer/>
</div>
    </div>
  )
}

export default App
