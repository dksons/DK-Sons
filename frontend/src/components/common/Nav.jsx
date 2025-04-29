import React, { useState } from 'react'
import './cssFiles/Nav.css'
import { Link } from 'react-router-dom'
import Hamburger from '../ui/Hamburger';

function Nav() {


  const [MenuVisible,setMenuVisible]=useState(false);

  const [Links,setLinks]=useState(['Our Services','Our Vision','Testimonials','Contact-Us'])
  return (
    <header className='w-screen text-white flex px-1 justify-between items-center z-40'>
     <div className='flex items-center justify-center '>
     <span className='logo w-18 h-22 inline-block'></span>
     <span className='inline-block text-white text-[52px] p-1' >|</span>
     <div className='flex items-center tracking-wide flex-col justify-center'>
     <span className='block text-white text-[22px]'>DK SONS</span>
     <span className='block text-white text-[9px]'>METAL HARDWARE</span>
     </div>
     </div>
     <div className='flex w-[40%] font-bold justify-end p-2 items-center' >
     <div  className="  cursor-pointer" onClick={()=>setMenuVisible((prev)=>!prev)}> 
      <Hamburger/>
     </div>
    <div className=" flex w-[50%]  border-none flex-col justify-between items-end   
    absolute top-12 text-[20px] lg:text-lg text-black lg:top-0 lg:items-center">
{MenuVisible && (
  <div
    className="m-1 flex sm:absolute  sm:right-4 sm:flex-col sm:w-fit 
               w-full flex-col items-end p-5   z-50 
                lg:flex-row lg:w-full lg:justify-around lg:right-14 text-white " 
  >
    <Link to="/Our-Services" className="mt-1 hover:text-black shadow-2xl transition-all duration-200 ease-in-out">Our Services</Link>
    <Link to="/Our-Vision" className="mt-1 hover:text-black shadow-2xl transition-all duration-200 ease-in-out  ">Our Vision</Link>
    <Link to="/Testimonials" className="mt-1  hover:text-black shadow-2xl transition-all duration-200 ease-in-out ">Testimonials</Link>
    <Link to="/Contact-Us" className="mt-2 hover:text-black shadow-2xl transition-all duration-200 ease-in-out ">Contact-Us</Link>
  </div>
)}

    </div>


     </div>
    </header>
  )
}

export default Nav
