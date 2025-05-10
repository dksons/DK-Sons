import React from 'react';
import { NavLink } from 'react-router-dom';

function Subnav({ hamburgerVisible }) {
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
    </>
  );
}

export default Subnav;
