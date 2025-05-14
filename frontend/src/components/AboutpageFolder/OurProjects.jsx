import React from 'react'
import p1 from '../../assets/Project-1.png'
import p2 from '../../assets/Project-2.png'

function OurProjects() {
  return (
    <div className="w-screen mt-10 p-4 flex flex-col lg:flex-row justify-between lg:justify-around items-center">
      {/* Left Section */}
      <div className="left w-full lg:w-[40%] flex flex-col justify-between items-start text-white">
        <h1 className="ml-3 text-2xl bg-gradient-to-r bg-clip-text text-transparent from-orange-200 via-yellow-300 to-orange-700 lg:text-3xl">
          Our Projects
        </h1>
        <h1 className="ml-4 mt-6 mb-4 text-3xl bg-gradient-to-r bg-clip-text text-transparent from-orange-700 via-yellow-300 to-orange-700 lg:text-5xl">
          Our Work in Action
        </h1>
        <div className="max-w-xl text-base lg:text-xl mt-2 px-4">
          <div className="text-start">
        Strong support serves as a great foundation. A person with determination and drive stands out,
         not someone who is dull. It's important to stay focused. Progress requires both structure and 
         flexibility. 

          </div>
        </div>
      </div>

      {/* Right Section (Project Cards) */}
      <div className="right w-full lg:w-[60%] grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-4 p-4">
        {[p1, p2].map((imgSrc, i) => (
          <div key={i} className="relative group overflow-hidden rounded">
            <img src={imgSrc} alt="" className="w-full h-60 object-cover lg:h-80" />
            <div className="absolute top-0 flex flex-col justify-end items-center text-amber-500 bg-black/30 w-full h-full transition-all duration-500 ease-in-out">
              <div className="text-lg border-b-2 border-amber-500 w-[80%] text-center mb-2">
                PUNE, March 2024
              </div>
              <div className="text-2xl text-white text-center mb-2">Industrial Plant Construction</div>
              <div className="text-sm lg:text-lg text-white tracking-tight px-4 text-center max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[20vh]">
       A building project is not just about laying bricks; it’s about constructing a vision, layer by layer, until a dream becomes a landmark.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurProjects
