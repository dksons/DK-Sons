import React, { useState } from 'react'
import WCU from '../../assets/WCU.png'
import icon from '../../assets/right.png'

function WhyChoseUs() {
    const [tags, settags] = useState([
        "Unparalleled Expertise",
        "Innovation at Every Turn",
        "Customized Solutions",
        "Quality Assurance"
    ])
    return (
        <div className='w[90%] h-full flex  justify-center items-center lg:flex-row flex-col px-3'>
            <div className='left lg:w-[50%] justify-center items-center flex flex-col lg:mt-0 mt-15'>
                <div className='lg:text-3xl text-2xl  font-extrabold lg:w-[77%] w-full h-fit mb-10  text-start lg:ml-5 ml-10 bg-clip-text  bg-gradient-to-b  text-transparent from-pink-500 via-yellow-600 to-white'>
                    WHY CHOOSE US
                </div>
                <div className='w-full justify-center flex items-center flex-col tracking-widest p-2'>
                    <div className='lg:text-5xl text-3xl max-w-xl w-full bg-clip-text ml-10 lg:ml-0  text-start  bg-gradient-to-b  text-transparent from-pink-100 via-yellow-600 to-white'>
                        Experience the <br />Pinnacle of Steel <br />Manufacturing
                    </div>
                    <div className='lg:w-[80%] text-xl  p-2 mt-10 text-white'>
                        {tags.map((val,i)=>(
                            <div key={i} className='px-3 w-96 mb-2 p-2 border-b-1 flex flex-row items-center'>
                               <img src={icon} alt="" className='w-5 h-5 mr-2'/> <span>{val}</span> 
                            </div>
                        )) }
                    </div>
                </div>
            </div>
            <div className="right lg:w-[50%] h-full  flex justify-center  items-center">
                <img src={WCU} alt="" className='w-full h-full px-5 lg:p-1 py-5' />
            </div>
        </div>
    )
}

export default WhyChoseUs
