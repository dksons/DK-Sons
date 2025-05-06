import React, { useEffect, useRef, useState } from 'react';
import './cssFiles/timeline.css';

function OurServices() {
  const [lineHeight, setLineHeight] = useState(0);

  const services = [
    {
      title: 'Metal Casting',
      points: [
        'Precision sand casting for complex designs',
        'Die casting for high-volume production',
        'Investment casting for intricate details',
        'Custom alloy formulations',
      ],
    },
    {
      title: 'Forging',
      points: [
        'Open-die and closed-die forging',
        'Hot and cold forging techniques',
        'Precision hammer and press forging',
        'Custom forging for special uses',
      ],
    },
    {
      title: 'Sheet & Wire Forming',
      points: [
        'CNC stamping and blanking',
        'Wire forming: hooks, rings, loops',
        'Roll forming for consistent profiles',
        'Custom tooling designs',
      ],
    },
    {
      title: 'Metal Surface Finishing',
      points: [
        'Plating: Gold, Nickel, Chrome',
        'Finishes: Brass, Glossy Black, Rose Gold',
        'Polishing & buffing',
        'Protective coatings',
      ],
    },
  ];
  const contentRef = useRef(null);


  useEffect(() => {
    const updateLineHeight = () => {
      const scrollY = window.scrollY || window.pageYOffset; //to know the the top to current window height 
      const viewportHeight = window.innerHeight; //the viewPort height

      const visibleHeight = scrollY-viewportHeight-450; //  top to current window height - Vp heigth for beetter Svg performance
// console.log(scrollY,viewportHeight);


      setLineHeight(visibleHeight);
    };

    updateLineHeight(); 

    window.addEventListener('scroll', updateLineHeight);
    window.addEventListener('resize', updateLineHeight);

    return () => {
      window.removeEventListener('scroll', updateLineHeight);
      window.removeEventListener('resize', updateLineHeight);
    };
  }, []);
    


  return (
    <section className="relative w-screen lg:h-[210vh] py-20 px-4  md:px-12 min-h-screen" ref={contentRef}>

      <svg
        className="absolute left-1/2 top-1/2 bg-gradient-to-b from-indigo-500 via-purple-500  to-indigo-700 z-1"
        style={{ height: `${lineHeight}px`, top: '0' }}
        width="5"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="20%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <line
          x1="2"
          y1="0"
          x2="2"
          y2={lineHeight}
          stroke="url(#line-gradient)"
          strokeWidth="4"
          className="animate-dash"
        />
      </svg>

  
      <div className="relative  items-center justify-center flex flex-col gap-24 z-10">
        {services.map((service, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col text-2xl lg:w-[80%] w-full p-4 md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2"></div>

              <div
                className={`bg-black/30 ml-4 mr-5 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full md:w-1/2 ${
                  isLeft ? 'md:mr-auto md:ml-12' : 'md:ml-auto md:mr-12'
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4 m z-59 text-indigo-300 group-hover:text-pink-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <ul className="list-disc list-inside text-gray-200 space-y-2 lg:text-lg text-sm">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurServices;
