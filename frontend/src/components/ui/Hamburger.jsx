import React, { useState } from 'react';
import './hamburger.css';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
 
      <div 
        className={`iconn nav-icon-5 ${isOpen ? 'open' : ''} z-30`} 
        onClick={()=> setIsOpen(prev => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
  );
}

export default Hamburger;
