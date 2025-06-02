
import { useEffect, useState } from 'react';
import vdo from '../../assets/HeroSectioonVideo1.MOV';
import './cssFiles/HeroSection.css';


function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/catalog.pdf"; // Make sure the PDF is in the public folder
    link.download = "catalog.pdf";
    link.click();
  };


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

   
<div className='w-full h-[40%]'>
   <h1 className='lg:hidden'>    
            <span className='text-[20vw] block'>
            Excellence 
            </span>    
            <span className='text-[11vw] inline-block  text-center'>
             in Metal Hardware 
            </span>    
            <span className='text-[12vw] bg-clip-text text-transparent bg-gradient-to-l from-white z-10  via-red-400 via-indigo-200 to-white text-center inline-block '>
              {}    Since 1990
            </span>     
          </h1>   
<center>
 <h1 className="hidden text-[27px] sm:block font-extrabold  sm:text-[60px] md:text-[55px] lg:text-[60px] xl:text-[80px] overflow-hidden whitespace-nowrap mb-3">
  <span className="pb-2">
      Excellence in Metal  Hardware
     <span className=" "><br/></span> 
   {} <span className=' bg-clip-text text-transparent bg-gradient-to-l  from-white/70  via-red-400 to-sky-200'> Since 1990</span>
  </span>
</h1> 


      {/* <div className='w-fit'>
      <h1 className='overflow-hidden whitespace-nowrap mb-3'>
      <span className="typing-animation  inline text-[20px]  font-extrabold sm:text-[18px] md:text-[24px] lg:text-[28px]  mb-6 bg-amber-200 ">
          Let's explore amazing things together!
        </span>
        </h1>
      </div> */}

        <div className="lg:w-full flex w-50 flex-col justify-center sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
          <button onClick={handleDownload} className="px-5 lg:py-3 lg:w-[20%]  sm:px-2 py-2 transition-all duration-200 ease-in-out border border-white/20 hover:bg-black hover:text-white bg-[#FFD563] rounded-2xl text-black font-semibold">
            Explore Our Products
          </button>
          {/* <button className="px-5 lg:py-3 lg:w-[20%] sm:px-2 py-2 transition-all duration-200 ease-in-out border border-white/20 bg-amber-300 hover:bg-blue-950 hover:text-white text-black rounded-2xl font-semibold">
            Request Custom Quote
          </button> */}
        </div>
</center>
</div>


      </div>
    
    </div>
  );
}

export default HeroSection;
