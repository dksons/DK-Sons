import About_1 from '@/components/AboutpageFolder/About_1'
import About_2 from '@/components/AboutpageFolder/About_2'
import Testimonial from '@/components/AboutpageFolder/Testimonial'
import React from 'react'

function About() {
  return (
    <div className='w-screen bg-no-repeat bg-center bg-contain bg-brown-vignette'>
    <div>
    <About_1/>
    </div>

    <div>
        <About_2/>
    </div>

    <div className=''>
        <Testimonial/>
    </div>
    </div>
  )
}

export default About
