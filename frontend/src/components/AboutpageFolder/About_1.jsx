import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../../assets/About-Us-Image-1.png';
import img2 from '../../assets/About-Us-Image-2.png';
import icon from '../../assets/right.png';
import badge from '../../assets/Badge.png'
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function About_1() {
    const location = useLocation();
    const [countBox, setCountBox] = useState(0);

    let timeoutid;
    let intervalid;
    useEffect(() => {
        if (countBox < 28) {
            timeoutid = setTimeout(() => {
                intervalid = setInterval(() => {
                    setCountBox((prev) => {
                        if (prev < 29) return prev + 1;
                        clearInterval(intervalid); // Stop once 29 is reached
                        return prev;
                    })
                }, 100);

            }, 1700);
        }
        return () => {
            clearTimeout(timeoutid);
            clearInterval(intervalid);
        };
    }, [])

    useEffect(() => {
        // Scroll to top on route change (optional)


        let timeline1 = gsap
        let timeline2 = gsap
        let timeline3 = gsap
        let timeline4=gsap

        timeline1.from('.box1', {
            y: -150,
            duration: 3,

        });

        timeline1.to('.box1', {
            y: 0,
            duration: 3,

        });

        timeline2.from('.box2', {
            x: 100,
            duration: 2,

        });

        timeline2.to('.box2', {
            x: 0,
            duration: 2,

        });

        timeline3.from('.box3', {
            x: -150,
            duration: 2,

        });

        timeline3.to('.box3', {
            x: 0,
            duration: 2,

        });

        
        timeline4.from('.box4', {
            x: 150,
            duration: 2,
            opacity:0.1,
            zIndex:-1,
            color:'#743303',
            position:'absolute'

        });

        timeline4.to('.box4', {
            x: 0,
            duration: 2,
            opacity:1,
            color:'white',
            position:'static'

        });


    }, [location.pathname]);

    return (
        <div className='mt-28 w-screen lg:h-screen overflow-hidden flex justify-center '>
            <div className="flex h-full justify-center items-center w-[98%] bg  flex-col lg:flex-row">
                <div className="left    lg:w-[38%] w-full h-full lg:p-2 justify-center items-center">
                    <div className='relative flex h-full box-border w-full   flex-col'>
                        <img src={img2} alt="" className='box1 lg:w-[82%] w-[80%] ml-5 lg:h-[27%] h-[22%] rounded' />
                        <img src={img1} alt="" className='box2 lg:w-[58%] w-[57%] lg:h-[53%] top-[18%] lg:top-[22%]  lg:left-[39%]  left-[39%] absolute'  />
                        <div className='box3 flex justify-center items-center relative lg:left-6  left-7 lg:top-4 top-1 h-50 lg:h-78 lg:w-42 w-35 bg-gradient-to-b  from-black/70 to-amber-600/60'>

                            <span className='lg:text-6xl text-4xl w-full text-white font-extrabold flex justify-around items-center h-[80%] flex-col '>

                                <img src={badge} alt="" className='w-16 ' />
                               <div className='justify-start flex text-center'>
                               <span className='inline-block mr-3'>{countBox}</span> <span className='text-xl inline'>Th</span>
 
                                </div>                               
                                <span className='lg:text-2xl text-xl text-center'>
                                    Years of Experience
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="right lg:mt-0 mt-5 flex-1 text-white font-extrabold h-full ">
                    <div className='px-4 py-4 box-border'>
                        <h1 className='lg:text-3xl text-2xl tracking-wide text-yellow-200'>
                            WHO WE ARE
                        </h1>
                        <div className='box4 lg:text-6xl text-2xl mt-6 w-full tracking-widest'>
                            Provides Your Best <span className='bg-gradient-to-r bg-clip-text text-transparent from-blue-200 via-pink-600 to-red-400'>Quality</span> Manufacturing
                             <span  className='ml-1 bg-gradient-to-r bg-clip-text text-transparent from-slate-200 via-indigo-300 to-red-400'>Products</span>
                        </div>
                        <div className='flex lg:mt-10 mt-3 lg:flex-row justify-between  flex-col w-full'>
                            <div>
                               <div className='lg:w-[38%] tracking-widest w-[48%] flex-row flex items-center justify-around'>
                                <img src={icon} alt="" className='w-4 h-4' />
                               <h1 className='text-2xl mt-4 mb-5'>
                                    Our Vision
                                </h1>
                               </div>
                               <span className='lg:w-[90%] w-full '>
                                 Donec dapibus justo sit amet gravida viverra.
                                Aenean sit amet orci vel orci sagittis bibendum.
                                Duis a venenatis sapien. Vestibulum id aliquet enim
                               </span>
                            </div>
                            <div>
                            <div className='lg:w-[45%]  w-[52%] flex-row flex items-center justify-around'>
                                <img src={icon} alt="" className='w-4 h-4' />
                               <h1 className='text-2xl mt-4 mb-5 tracking-widest'>
                                    Our Mission
                                </h1>
                               </div>
                                <span className='lg:w-[90%] w-full'>
                                Donec dapibus justo sit amet gravida viverra.
                                Aenean sit amet orci vel orci sagittis bibendum.
                                Duis a venenatis sapien. Vestibulum id aliquet
                                </span>
                            </div>
                        </div>

                        <div className='mt-10 border-l-2 p-2 border-yellow-400 lg:text-2xl text-xl font-sans w-full'>
                            <span>
                            “Cras feugiat quam ut magna auctor aliquet. Etiam mauris justo, mattis et vehicula quis, blandit non metus sed  amatug.”
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About_1;
