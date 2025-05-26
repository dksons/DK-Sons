import { AllBlogContext } from '@/context/contextapi';
import { logout } from '@/services/operations/authApi';
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

function Subnav({ hamburgerVisible }) {
const navigate=useNavigate()
const logouthandler=async()=>{
await logout()
setuserdata({isLoggedin:null,username:''})
navigate('/')

toast.success("Logout successfull")

}

   const {userdata,setuserdata}=useContext(AllBlogContext)
  const linkClass = (isActive) =>
    `${isActive ? ' text-amber-200 font-bold underline ' : ''} text-slate-200 hover:text-amber-200
     ${hamburgerVisible ? ' text-black' : ''} 
     p-2 text-center rounded  transition-all duration-200 ease-in-out`;

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? 'text-amber-200 font-bold underline ' :''} mt-1 hover:text-amber-200 ${
            hamburgerVisible ? ' border-white/30' : ''
          } p-2 text-center rounded transition-all duration-200 ease-in-out`
        }
      >
        Home
      </NavLink>

      <NavLink to="/About-us" className={({ isActive }) => `mt-1 ${linkClass(isActive)}`}>
        About-us
      </NavLink>

      <NavLink to="/Contact-Us" className={({ isActive }) => `mt-2 ${linkClass(isActive)}`}>
        Contact-Us
      </NavLink>
          <NavLink to="/Blogs" className={({ isActive }) => `mt-2 ${linkClass(isActive)}`}>
        Blogs
      </NavLink>
    <div className='flex justify-center items-center mt-2 flex-col lg:flex-row'>
       {userdata.isLoggedin&&<button onClick={logouthandler} className='p-2 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 rounded'>Logout</button>}
     {userdata.isLoggedin&&<button className='lg:ml-5 p-3 bg-black rounded text-center '>Welcome:Admin</button>}
    </div>
    </>
  );
}

export default Subnav;
