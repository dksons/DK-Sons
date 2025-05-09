// src/App.jsx
import React, { useState } from 'react';
import './testimonial.css'


const Testimonial = () => {
    const [content,setcontent]=useState([
        {
            text:`"This service has been life-changing! Highly recommend it to everyone. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quis dolor inventore, corrupti totam pariatur natus illo dolores delectus
                     voluptas voluptatum exercitationem harum voluptate tempora assumenda maxime nihil? Animi, eos!"`,
            name:'john Doe',
            company:"DK Sons"
        },
        {
            text:`"This service has been life-changing! Highly recommend it to everyone. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quis dolor inventore, corrupti totam pariatur natus illo dolores delectus
                     voluptas voluptatum exercitationem harum voluptate tempora assumenda maxime nihil? Animi, eos!"`,
            name:'john Doe',
            company:"DK Sons"
        },
        {
            text:`"This service has been life-changing! Highly recommend it to everyone. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quis dolor inventore, corrupti totam pariatur natus illo dolores delectus
                     voluptas voluptatum exercitationem harum voluptate tempora assumenda maxime nihil? Animi, eos!"`,
            name:'john Doe',
            company:"DK Sons"
        }
    ])
  return (
    <div className=" py-16 flex flex-col ">
 <h1 className='w-full text-center text-4xl bg-gradient-to-r bg-clip-text text-transparent  from-orange-200 via-yellow-300 to-orange-700 lg:text-6xl'>
  Testimonials
</h1>

  <div className=" py-16 flex flex-col lg:flex-row" >
  <div className="  flex justify-center lg:w-[40%] px-4 bg  ">
      <div  className="hide-scrollbar flex flex-row max-w-7xl h-full space-x-8 overflow-x-auto pb-8">
      { content.map((val,i)=>(
         <div   className="flex-shrink-0   w-full">
           {/* Card 1 */}
           <div className="p-6 lg:text-2xl text-xl text-white bg-yellow-600/80 border-t-4 border-r-4  rounded flex-shrink-0 w-full h-full">
             <p className="mb-4">{val.text}</p>
             <h3 className="font-semibold text-lg">{val.name}</h3>
             <p className="text-sm ">{val.company}</p>
           </div>
         </div>  ))}


       </div>
    
      </div>

      {/* Right side - Details */}
      <div className="max-w-5xl mx-auto px-4">
        <div className=" p-8 rounded-lg  text-white ">
          <h3 className="text-4xl  font-semibold text-transparent mb-4 bg-gradient-to-r bg-clip-text  from-orange-200 via-yellow-300 to-orange-700">Client Testimonial Details</h3>
          <p className="text-lg  mb-4">
            Here, you can read all the details about what our clients have said. Their feedback helps us improve and
            grow, and we are proud of the relationships we've built over time.
         
            Cras feugiat quam ut magna auctor aliquet. Etiam mauris justo, mattis et vehicula quis, blandit non metus. 
            Mauris at odio sapien. Ut cursus a augue ac fringilla. Aenean eu lectus eu metus feugiat ultrices eu vel felis. 
            Etiam eu augue.
          </p>
        </div>
      </div>
  </div>
    </div>
  );
};


export default Testimonial;
