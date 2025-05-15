import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, ThumbsUp } from 'lucide-react';
import m1 from '../../assets/m1.png'
import m2 from '../../assets/m2.png'
import m3 from '../../assets/m3.png'
import m4 from '../../assets/m4.png'

export default function IndianTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [likedTestimonials, setLikedTestimonials] = useState({});
  
  const testimonials = [
    {
      id: 1,
      content: "Their high-grade stainless steel fasteners have completely transformed our manufacturing process. The consistency in quality has reduced our product failures by 35%. Even in humid coastal conditions, their hardware shows no signs of corrosion.",
      author: "Rajesh Sharma",
      position: "Production Manager, MarineTech Industries",
      rating: 5,
      image: m1,
      category: "Fasteners"
    },
    {
      id: 2,
      content: "As a construction contractor handling large-scale projects, reliability is everything. Their galvanized structural components have withstood the harshest monsoon seasons without compromising integrity. My team now exclusively uses their metal brackets and joints.",
      author: "Vikram Patel",
      position: "Owner, BuildRight Construction",
      rating: 5,
      image: m2,
      category: "Structural Components"
    },
    {
      id: 3,
      content: "The custom metal fittings they manufactured for our furniture line exceeded all expectations. The precision engineering and attention to detail have elevated our products to luxury status. Our customers frequently comment on the quality of the hardware.",
      author: "Arjun Nair",
      position: "Director, Heritage Furniture Works",
      rating: 4,
      image: m3,
      category: "Custom Fittings"
    },
    {
      id: 4,
      content: "Our factory has been sourcing industrial hinges and drawer slides for three generations. Their metal components are consistently superior to anything else on the market. The durability translates to longer product lifecycles and fewer warranty claims.",
      author: "Sanjay Agarwal",
      position: "Procurement Head, Precision Cabinetry",
      rating: 5,
      image: m4,
      category: "Industrial Hardware"
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const handlePrev = () => {
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleLike = (id) => {
    setLikedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const jumpToTestimonial = (index) => {
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  
  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="bg-gradient-to-br from-white/20 to-black20 min-h-screen flex  flex-col items-center justify-center p-4">
        <div className="lg:text-6xl text-4xl md:text-5xl text-start  font-extrabold lg:mb-4 bg w-screen lg:px-20 px-4 bg-clip-text  bg-gradient-to-b  text-transparent via-orange-400 from-yellow-600 to-white/40">
           TESTIMONIALS 
          </div>
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
      
        </div>

        <div className="relative">
        

          {/* Main Testimonial Card */}
          <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-xl transition-all duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-amber-300">
                    <img 
                      src={activeTestimonial.image} 
                      alt={activeTestimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-orange-500 rounded-full p-2">
                    <Quote size={16} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mt-4">{activeTestimonial.author}</h3>
                <p className="text-amber-300 text-sm">{activeTestimonial.position}</p>
                
                <div className="flex mt-2">
                  {renderStars(activeTestimonial.rating)}
                </div>
                
                <div className="flex items-center gap-2 mt-4">
                  <button 
                    onClick={() => handleLike(activeTestimonial.id)}
                    className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full transition-all ${
                      likedTestimonials[activeTestimonial.id] 
                        ? "bg-orange-500 text-white" 
                        : "bg-indigo-800/50 text-amber-200 hover:bg-indigo-700"
                    }`}
                  >
                    <ThumbsUp size={14} /> 
                    {likedTestimonials[activeTestimonial.id] ? "Liked" : "Like"}
                  </button>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="relative">
                  <Quote size={40} className="absolute -top-6 -left-6 text-amber-400/30" />
                  <p className="text-lg md:text-xl text-amber-100 leading-relaxed">
                    {activeTestimonial.content}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-between">

                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handlePrev}
                      className="p-2 rounded-full bg-indigo-800/50 hover:bg-indigo-700 text-white transition-all"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="p-2 rounded-full bg-indigo-800/50 hover:bg-indigo-700 text-white transition-all"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => jumpToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? "bg-orange-500 w-6" 
                    : "bg-indigo-800/50 hover:bg-indigo-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-4xl font-bold text-orange-300">10,000+</p>
            <p className="text-amber-200 mt-2">Product Variants</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-4xl font-bold text-orange-300">200+</p>
            <p className="text-amber-200 mt-2">Industrial Clients</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-4xl font-bold text-orange-300">99.8%</p>
            <p className="text-amber-200 mt-2">Quality Consistency</p>
          </div>
        </div>
      </div>
    </div>
  );
}