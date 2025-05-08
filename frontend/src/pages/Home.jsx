
import HeroSection from "@/components/HompageFolder/HeroSection";
import Introduction from "@/components/HompageFolder/Introduction";
import OurProducts from "@/components/HompageFolder/OurProducts";
import OurServices from "@/components/HompageFolder/OurServices";
import Sector from "@/components/HompageFolder/Sector";
import React from "react";


const Home = () => {
  return (

    <div className="w-full  h-full overflow-hidden">
      <div>
        <HeroSection />
      </div>
   <div className='flex justify-center  flex-col items-center bg-gradient-to-r p2  from-white/40 to-white/60'>


      <div className="  flex justify-center items-center">
        <Introduction />
      </div>

      <div className=" w-screen  flex justify-center  flex-col items-center bg-no-repeat bg-center bg-contain bg-brown-vignette" >
        <h2 className="text-5xl font-bold ml-2 bg-gradient-to-r  mb-5 mt-10 from-yellow-500 via-orange-600 to-rose-700  inline-block bg-clip-text text-transparent">
          OUR SERVICES
        </h2>

        <OurServices />
      </div>

      <div className=" z-10 flex lg:h-screen justify-center flex-col items-center bg-gradient-to-r p2  from-white/50 via-orange-100  to-white/42">
      <h2 className="text-6xl font-bold ml-2 bg-gradient-to-r  mb-5 mt-10 from-yellow-500 via-orange-600 to-rose-700 inline-block bg-clip-text text-transparent">
          OUR PRODUCTS
        </h2>
        <OurProducts />
      </div>
      <div className=" z-10 flex   justify-center flex-col items-center bg-gradient-to-r p2 w-screen">
        <Sector />
      </div>
    </div>
    </div>
  );
};


export default Home;
