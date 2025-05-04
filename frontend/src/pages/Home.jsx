import HeroSection from "@/components/HompageFolder/HeroSection";
import Introduction from "@/components/HompageFolder/Introduction";
import OurProducts from "@/components/HompageFolder/OurProducts";
import OurServices from "@/components/HompageFolder/OurServices";
import React from "react";

const Home = () => {
  return (
<<<<<<< Updated upstream
    <div className="w-full  h-full overflow-hidden">
      <div>
        <HeroSection />
      </div>
=======
    <div className=''>
      <HeroSection/>
    </div>
  )
}
>>>>>>> Stashed changes

      <div className="  flex justify-center items-center">
        <Introduction />
      </div>

      <div className="  flex justify-center  flex-col items-center bg-no-repeat bg-center bg-contain bg-brown-vignette" >
        <h2 className="text-5xl font-bold ml-2 bg-gradient-to-r  mb-5 mt-10 from-black/40 via-indigo-400 to-pink-500 inline-block bg-clip-text text-transparent">
          OUR SERVICES
        </h2>

        <OurServices />
      </div>

      <div className=" flex z-100  justify-center flex-col items-center bg-gradient-to-r p2  from-white/50 via-orange-100  to-white/42">
        <OurProducts />
      </div>
    </div>
  );
};

export default Home;
