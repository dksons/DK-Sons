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
      setMenuVisible(true); // Always show menu on large screens
    }
  };

  useEffect(() => {
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [links] = useState(['Our Services', 'Our Vision', 'Contact-Us']);

  return (
    <div className="w-screen flex justify-evenly items-center relative">
      <header className="w-full lg:w-[1200px] px-4 py-3 text-white flex justify-between items-center relative">
        
        {/* Logo Section */}
   <Link  to={'/'}>
        <div className="flex items-center z-50 relative">
          <span className="logo w-17 h-20 inline-block mb-3"></span>
          <span className="text-white text-[42px] px-2">|</span>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[22px] font-semibold">DK SONS</span>
            <span className="text-[13px] tracking-wider">METAL HARDWARE</span>
          </div>
        </div>
   </Link>

        {/* Navigation & Hamburger */}
        <div className="relative flex items-center justify-between lg:w-fit z-40">
          {hamburgerVisible && (
            <div 
              className="cursor-pointer z-50 relative" 
              onClick={() => setMenuVisible(prev => !prev)}
            >
              <Hamburger />
            </div>
          )}

          {/* Menu */}
          <div
            className={`
              ${hamburgerVisible ? 
                `fixed top-0 left-0 w-full h-screen bg-black/20 backdrop-blur-sm
                 flex flex-col justify-center items-center text-center
                 ${menuVisible ? 'flex' : 'hidden'}` 
                : 
                `lg:static lg:flex lg:w-auto lg:bg-transparent
                 ${menuVisible ? 'flex' : 'hidden'} lg:flex-row lg:items-center`
              }
              gap-6 lg:gap-x-14 lg:text-xl text-white z-30 transition-all duration-300
            `}
          >
            {/* Close button for mobile */}
            {hamburgerVisible && menuVisible && (
              <button 
                className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
                onClick={() => setMenuVisible(false)&&setMenuVisible(false)}
              >
                
              </button>
            )}
            
            <Subnav hamburgerVisible={hamburgerVisible} />
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {hamburgerVisible && menuVisible && (
          <div 
            className="fixed inset-0 bg-black/50 z-20"
            onClick={() => setMenuVisible(false)}
          />
        )}
      </header>
    </div>
  );
}

export default Nav;
