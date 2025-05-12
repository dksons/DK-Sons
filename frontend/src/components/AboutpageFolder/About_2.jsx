import React, { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About_2() {
  const [states, setStates] = useState({
    projects: 0,
    workers: 0,
    marketing: 0,
    experience: 0,
  });

  const intervalRefs = useRef([]);

  const startCounter = (key, max, delay) => {
    const interval = setInterval(() => {
      setStates((prev) => {
        if (prev[key] < max) {
          return { ...prev, [key]: prev[key] + 1 };
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, delay);
    intervalRefs.current.push(interval);
  };

  const CountValues = () => {
    startCounter('projects', 129, 20);
    startCounter('experience', 33, 50);
    startCounter('marketing', 29, 50);
    startCounter('workers', 56, 50);
  };

  useEffect(() => {
    gsap.to('.box', {
      scrollTrigger: {
        trigger: '.box',
        start: "top center",
        onEnter: () => {
          CountValues();
        },
      }
    });

    // Cleanup on unmount
    return () => {
      intervalRefs.current.forEach(clearInterval);
    };
  }, []);

  return (
    <div className='box lg:h-[45vh] h-screen flex gap-4 items-center justify-center  text-white text-2xl font-bold'>
     <div className=' w-full lg:h-full h-[80%] flex lg:flex-row flex-col items-center justify-around'>
        <div className='lg:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-orange-200 via-yellow-300 to-orange-700 text-5xl text-center w-80'>
        Our Factory in Numbers
        </div>
     <div  className='lg:text-5xl text-3xl flex  justify-center items-center flex-col'>
        <span>
        {states.projects}+
        </span>
        <span className='text-2xl'>
            Projects
        </span>
     </div>
      <div className='lg:text-5xl text-3xl flex  justify-center items-center flex-col'>
      <span>
        {states.experience}+
        </span>
        <span className='text-2xl'>
            Experience
        </span>
      </div>
      <div  className='lg:text-5xl text-3xl flex  justify-center items-center flex-col'>
      <span>
        {states.workers}+
        </span>
        <span className='text-2xl'>
         Workers
        </span>
      </div>
      <div className='lg:text-5xl text-3xl flex  justify-center items-center flex-col'>
      <span>
        {states.marketing}+
        </span>
        <span className='text-2xl'>
            Marketing Office
        </span>
      </div>
     </div>
    </div>
  );
}

export default About_2;
