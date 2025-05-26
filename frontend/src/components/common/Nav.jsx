import React, { useEffect, useState } from 'react';
import './cssFiles/Nav.css';
import { Link } from 'react-router-dom';
import Subnav from './Subnav';
import Hamburger from '../HompageFolder/ui/Hamburger';

function Nav() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [hamburgerVisible, setHamburgerVisible] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      setHamburgerVisible(true);
      setMenuVisible(false); // Hide menu by default on small screens
    } else {
      setHamburgerVisible(false);
      setMenuVisible(true);  // Always show menu on large screens
    }
  };

  useEffect(() => {
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [links] = useState(['Our Services', 'Our Vision', 'Contact-Us']);

  return (
    <div className="w-screen flex justify-evenly items-center">
      <header className="w-full lg:w-[1200px] px-4 py-3 text-white flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="logo w-17 h-20 inline-block mb-3"></span>
          <span className="text-white text-[42px] px-2">|</span>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[22px] font-semibold">DK SONS</span>
            <span className="text-[13px] tracking-wider">METAL HARDWARE</span>
          </div>
        </div>

        {/* Navigation & Hamburger */}
        <div className="relative flex items-center  justify-between lg:w-fit">
          {hamburgerVisible && (
            <div className="cursor-pointer z-50" onClick={() => setMenuVisible(prev => !prev)}>
              <Hamburger />
            </div>
          )}

          {/* Menu */}
          <div
            className={`absolute top-12 right-0 w-[60vw] lg:static lg:flex lg:w-auto lg:bg-transparent 
                        ${hamburgerVisible ? 'bg-[#18181B]/30 rounded p-2' : ''} 
                        ${menuVisible ? 'flex' : 'hidden'} flex-col lg:flex-row lg:items-center  gap-x-14 lg:text-xl
                        gap-2 text-white z-40 transition-all duration-300`}
          >
            <Subnav hamburgerVisible={hamburgerVisible} />
          </div>
        </div>

      </header>
    </div>
  );
}

export default Nav;
