import React from "react";
import "./cssFiles/Introduction.css";
import img1 from "../../assets/Die.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/Sand.jpg";

function Introduction() {
  return (
    <section className="w-full  flex flex-col items-center justify-center bg-gradient-to-br from-white/30 to-white/80  text-center">
      <div className="max-w-3xl mb-14 py-8 px-5">
        <h1 className="lg:text-5xl text-2xl uppercase font-extrabold mb-6 tracking-widest">
          <span className="bg-gradient-to-l from-yellow-600 via-orange-600 to-rose-700 bg-clip-text text-transparent font-semibold">
            Our Story
          </span>
        
        </h1>
        <div className="lg:text-2xl  text-start text-gray-700 leading">
       
  <div className=" text-center inline">
    <span>
        At{"    "}
    </span>
      <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent font-bold">
        DK-SONS
      </span>
      {" "}we specialize in manufacturing premium metal hardware components with
      meticulous craftsmanship and superior materials. Our extensive range
      of brass, zinc, steel, and iron products serves multiple industries
      with uncompromising{" "}
      <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent font-bold">
        quality and precision
      </span>
      {" "}from concept to creation.
    </div>
        
        </div>
      </div>

      <div className="w-full mx-auto flex relative   justify-center items-center flex-1 flex-col bg-[#000814]/90 py-12 px-2">
        <div className="w-10/12 flex h-fit absolute -top-8 sm:-top-16 z-40 justify-between items-center gap-4 ">
          <img
            src={img1}
            alt="img1"
            className="w-[30%] lg:h-[37vh]  sm:h-auto object-contain"
            loading="lazy"
          />
          <img
            src={img3}
            alt="img3"
            className="w-[30%] lg:h-[37vh] scale-110 sm:h-auto object-contain"
            loading="lazy"
          />
          <img
            src={img2}
            alt="img2"
            className="w-[30%] lg:h-[37vh]  sm:h-auto object-contain"
            loading="lazy"
          />
        </div>

        <div className="flex  lg:h-[50vh] mt-10 md:h-[20vh] sm:h-[15vh] top-[-10px]  w-screen relative justify-center lg:items-end items-center-safe">
          <div className="w-full max-w-6xl  flex from-white  text-gray-400 text-lg lg:text-3xl px-4">
            <span>
              <p className="md:text-[20px] text-[18px] max-w-6xl md:text-xl lg:text-2xl select-none cursor-default text-gray-400 leading-relaxed px-4 md:mt-10 lg:mt-0 py-5 pb-7 sm:pb-10">
                Our extensive range of brass, zinc, steel, and
                <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-semibold">
                  {" "}
                  iron products{" "}
                </span>{" "}
                serves multiple industries with uncompromising quality and
                precision. From concept to creation, we deliver
                <span className="bg-gradient-to-r  from-yellow-400 to-red-500 bg-clip-text text-transparent font-semibold">
                  {" "}
                  hardware solutions{" "}
                </span>
                that combine functionality, durability, and aesthetic appeal to
                meet your exact specifications.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
