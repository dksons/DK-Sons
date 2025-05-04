<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react'
import './cssFiles/Nav.css'
import { Link } from 'react-router-dom'
import Subnav from './Subnav';
import Hamburger from '../HompageFolder/ui/Hamburger';

function Nav() {
  const [MenuVisible,setMenuVisible]=useState(false);
  const [hamburgerVisible,setHamburgerVisible]=useState(false)

  useEffect(()=>{
const handleWidth=()=>{
  console.log(window.innerWidth)
  if(window.innerWidth<700){
  setHamburgerVisible(true)
  } else  {  setHamburgerVisible(false)
    setMenuVisible(true)
  }

}
handleWidth();
    window.addEventListener('resize',handleWidth)

  return ()=>  window.addEventListener('resize',handleWidth)
      },[])


      useEffect(()=>{
        console.log(hamburgerVisible)
      },[hamburgerVisible])
      

  

  const [Links,setLinks]=useState(['Our Services','Our Vision','Testimonials','Contact-Us'])
  return (
    <header className='w-screen text-white flex px-4  z-60 justify-between items-center '>
     <div className='flex items-center justify-center '>
     <span className='logo w-17 h-20 inline-block mb-3 '></span>
     <span className='inline-block text-white text-[52px] p-1 text-center' >|</span>
     <div className='flex items-center tracking-wide flex-col justify-center'>
     <span className='block text-clip text-[20px]'>DK SONS</span>
     <span className='block text-white text-[10px]'>METAL HARDWARE</span>
     </div>
     </div>
     <div className='flex w-[40%] font-extrabold justify-end  items-center' >
   { hamburgerVisible&&<div  className="  cursor-pointer" onClick={()=>setMenuVisible((prev)=>!prev)}> 
      <Hamburger/>
     </div>}
    <div className={`flex lg:w-[50%] w-[60vw]  ${hamburgerVisible?'bg-black/65 text-2xl rounded top-0 right-0 w-fit h-screen justify-end items-end ':''}  flex-col justify-between items-end   
    absolute  text-[20px] lg:text-lg text-black lg:top-0 lg:items-center`}>
{<div>
{MenuVisible && (
  <div
    className={`m-1 flex sm:absolute  sm:right-0 sm:flex-col  ${hamburgerVisible?'w-fit  h- h-[90vh] top-0 z-50 justify-around items-center  ':''}
               w-full flex-col  px-3 py-5   z-50 
                lg:flex-row lg:w-full lg:justify-around lg:right-10 text-white `} >
<Subnav hamburgerVisible={hamburgerVisible}/>
  </div>
)}
</div>}

    </div>


     </div>
=======
import React, { useState } from "react";
import "./cssFiles/Nav.css";
import { Link } from "react-router-dom";
import Hamburger from "../ui/Hamburger";

function Nav() {
  const [MenuVisible, setMenuVisible] = useState(false);

  const [Links, setLinks] = useState([
    "Our Services",
    "Our Vision",
    "Testimonials",
    "Contact-Us",
  ]);
  return (
=======
import React, { useState } from "react";
import "./cssFiles/Nav.css";
import { Link } from "react-router-dom";
import Hamburger from "../ui/Hamburger";

function Nav() {
  const [MenuVisible, setMenuVisible] = useState(false);

  const [Links, setLinks] = useState([
    "Our Services",
    "Our Vision",
    "Testimonials",
    "Contact-Us",
  ]);
  return (
>>>>>>> Stashed changes
    <header className="w-[99vw] text-white flex px-1 justify-between items-center z-40">
      <div className="flex items-center justify-center pl-3">
        <span className="logo w-18 h-22 inline-block"></span>
        <span className="inline-block text-white text-[52px] p-1">|</span>
        <div className="flex items-center tracking-wide flex-col justify-center">
          <span className="block text-white text-[22px]">DK SONS</span>
          <span className="block text-white text-[9px]">METAL HARDWARE</span>
        </div>
      </div>
      <div className="flex w-[40%] font-bold justify-end p-2 items-center">
        <div
          className="  cursor-pointer"
          onClick={() => setMenuVisible((prev) => !prev)}
        >
          <Hamburger />
        </div>
        <div
          className=" flex w-[50%]  border-none flex-col justify-between items-end   
    absolute top-12 text-[20px] lg:text-lg text-black lg:top-0 lg:items-center"
        >
          {MenuVisible && (
            <div
              className="m-1 flex sm:absolute  sm:right-4 sm:flex-col sm:w-fit 
               w-full flex-col items-end p-5   z-50 
                lg:flex-row lg:w-full lg:justify-around lg:right-14 text-white "
            >
              <Link
                to="/Our-Services"
                className="mt-1 hover:text-black shadow-2xl transition-all duration-200 ease-in-out"
              >
                Our Services
              </Link>
              <Link
                to="/Our-Vision"
                className="mt-1 hover:text-black shadow-2xl transition-all duration-200 ease-in-out  "
              >
                Our Vision
              </Link>
              <Link
                to="/Testimonials"
                className="mt-1  hover:text-black shadow-2xl transition-all duration-200 ease-in-out "
              >
                Testimonials
              </Link>
              <Link
                to="/Contact-Us"
                className="mt-2 hover:text-black shadow-2xl transition-all duration-200 ease-in-out "
              >
                Contact-Us
              </Link>
            </div>
          )}
        </div>
      </div>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </header>
  );
}

export default Nav;
