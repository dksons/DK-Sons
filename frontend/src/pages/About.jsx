import About_1 from '@/components/AboutpageFolder/About_1'
import About_2 from '@/components/AboutpageFolder/About_2'
import Testimonial from '@/components/AboutpageFolder/Testimonial'
import React, { useEffect } from 'react'
import './about.css'
import WhyChoseUs from '@/components/AboutpageFolder/WhyChoseUs'
import OurProjects from '@/components/AboutpageFolder/OurProjects'
import OurRange from '@/components/AboutpageFolder/OurRange'
import IndianTestimonials from '@/components/AboutpageFolder/Testimonial'
function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[]);
  return (
    <div className='w-screen bg-no-repeat bg-center bg-contain bg-brown-vignette'>
      <div className='z-12'>
        <About_1 />
      </div>

      <div className='z-14'>
        <About_2 />
      </div>

      <div className=''>
        <OurRange />
      </div>
      <div className='w-screen h-screen'>
        <WhyChoseUs />
      </div>
{/* 
      <div className="testimonial h-fit  w-full relative">
        <div className="bg-black/70 w-full h-full">
          <IndianTestimonials />
        </div>
      </div> */}
  
    </div>
  )
}

export default About
