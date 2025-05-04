
import Footer from '@/components/common/Footer'
import HeroSection from '@/components/HompageFolder/HeroSection'
import Introduction from '@/components/HompageFolder/Introduction'
import OurProducts from '@/components/HompageFolder/OurProducts'
import OurServices from '@/components/HompageFolder/OurServices'
import Sector from '@/components/HompageFolder/Sector'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full  h-full overflow-hidden'>
      <div>
      <HeroSection/>
      </div>
    
   <div className='  flex justify-center items-center'>
   <Introduction/>
   </div>
 

   <div className='  flex justify-center  flex-col items-center bg-gradient-to-r p2  from-white/40 to-white/60'>

        <h2 className="text-5xl font-bold ml-2 bg-gradient-to-r  mb-5 mt-10 from-black/40 via-indigo-400 to-pink-500 inline-block bg-clip-text text-transparent">
          OUR SERVICES
        </h2>
     
   <OurServices/>
   </div>

   <div className=' flex lg:h-screen justify-center flex-col items-center bg-gradient-to-r p2  from-white/50 via-orange-100  to-white/42'>
   <h2 className="text-5xl font-bold ml-2 bg-gradient-to-r  mb-5 mt-10 from-black/40 via-indigo-400 to-pink-500 inline-block bg-clip-text text-transparent">
          OUR PRODUCTS
        </h2>
<OurProducts/>

<div
  onClick={() => {
    const link = document.createElement('a');
    link.href = '../../public/catalog.pdf';// public/catalog.pdf
    link.download = 'catalog.pdf';
    link.click();
  }}    
  className="cursor-pointer"
>
<p className='bg-gradient-to-r p-2 hover:scale-105 duration-300  from-black/40 via-indigo-400 to-blue-800 bg-clip-text text-transparent'>--VIEW ALL PRODUCTS--</p>
</div>
</div>

 
<div className='  flex justify-center  flex-col items-center bg-gradient-to-r p2  from-white/40 to-white/60'>

<Sector/>
</div>



    </div>

    
  )
}

export default Home
