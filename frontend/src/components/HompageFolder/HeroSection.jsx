<<<<<<< Updated upstream:frontend/src/components/HompageFolder/HeroSection.jsx
import { useEffect, useState } from 'react';
import vdo from '../../assets/HeroSectioonVideo1.MOV';
import './cssFiles/HeroSection.css';

=======
import { useEffect, useState } from "react";
import vdo from "../assets/HeroSectioonVideo1.MOV";
import "./cssFiles/HeroSection.css";
>>>>>>> Stashed changes:frontend/src/components/HeroSection.jsx

function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);



  return (
    <div className="relative h-screen bg-[url('../assets/IMG_0736.PNG')] bg-cover bg-center overflow-hidden">
      {showVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-in-out"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={vdo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}

      <div className="relative z-20 flex flex-col items-start justify-center h-full px-4 text-white font-extrabold">
<<<<<<< Updated upstream:frontend/src/components/HompageFolder/HeroSection.jsx
   
<div className='w-full h-[40%]'>
<center>
<h1 className="text-[29px] font-extrabold  sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[55px] overflow-hidden whitespace-nowrap mb-3">
  <span className="pb-2">
      Excellence in Metal    Hardware
     <span className=""><br/></span> 
   {}  Since 1990
  </span>
</h1>

      <div className='w-fit'>
      <h1 className='overflow-hidden whitespace-nowrap mb-3'>
      <span className="typing-animation  inline text-[20px]  font-extrabold sm:text-[18px] md:text-[24px] lg:text-[28px]  mb-6 bg-amber-200 ">
          Let's explore amazing things together!
        </span>
        </h1>
      </div>

        <div className="w-full flex flex-col justify-center sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
          <button className="px-5 lg:py-3 lg:w-[20%] sm:px-2 py-2 transition-all duration-200 ease-in-out border border-white/20 hover:bg-black hover:text-white bg-white rounded-2xl text-black font-semibold">
            Explore Our Products
          </button>
          <button className="px-5 lg:py-3 lg:w-[20%] sm:px-2 py-2 transition-all duration-200 ease-in-out border border-white/20 bg-amber-300 hover:bg-blue-950 hover:text-white text-black rounded-2xl font-semibold">
            Request Custom Quote
          </button>
        </div>
</center>
</div>

=======
        <div className="w-full h-[40%]">
          <h1 className="text-[32px] font-extrabold  sm:text-[24px] md:text-[25px] lg:text-[30px] xl:text-[55px] overflow-hidden whitespace-nowrap mb-3">
            <span className="pb-2">
              Excellence in Metal
              <span className=" sm:hidden">
                <br />
              </span>
              {} Hardware Since 1990
            </span>
          </h1>

          <div className="w-fit">
            <h1 className="overflow-hidden whitespace-nowrap mb-3">
              <span className="typing-animation  inline text-[17px]  font-extrabold sm:text-[18px] md:text-[24px] lg:text-[28px]  mb-6 bg-amber-200 ">
                Let's explore amazing things together!
              </span>
            </h1>
          </div>

          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
            <button className="px-5 lg:py-3 lg:w-[20%] sm:px-2 py-2 transition-all duration-200 ease-in-out border border-white/20 hover:bg-black hover:text-white bg-white rounded-2xl text-black font-semibold">
              Explore Our Products
            </button>
            <button className="px-5 lg:py-3 lg:w-[20%] sm:px-2 py-2 transition-all duration-200 ease-in-out border border-white/20 bg-amber-300 hover:bg-blue-950 hover:text-white text-black rounded-2xl font-semibold">
              Request Custom Quote
            </button>
          </div>
        </div>
>>>>>>> Stashed changes:frontend/src/components/HeroSection.jsx
      </div>
    
    </div>
  );
}

export default HeroSection;
