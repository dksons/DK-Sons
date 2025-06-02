import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  const [sparkCount, setSparkCount] = useState(0);
  const [hammerAnimation, setHammerAnimation] = useState(false);

  // Hammer animation effect
  useEffect(() => {
    const hammerInterval = setInterval(() => {
      setHammerAnimation(true);
      setTimeout(() => {
        setHammerAnimation(false);
        setSparkCount(prev => prev + 1);
      }, 300);
    }, 3000);

    return () => clearInterval(hammerInterval);
  }, []);

  // Create random sparks
  const renderSparks = () => {
    const sparks = [];
    const sparkCount = Math.floor(Math.random() * 5) + 3;
    
    for (let i = 0; i < sparkCount; i++) {
      const size = Math.floor(Math.random() * 4) + 2;
      const top = Math.floor(Math.random() * 80) + 40;
      const left = Math.floor(Math.random() * 100) + 240;
      const duration = Math.floor(Math.random() * 600) + 400;
      
      sparks.push(
        <div 
          key={`spark-${i}-${sparkCount}`}
          className="absolute bg-yellow-300 rounded-full animate-ping"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}px`,
            left: `${left}px`,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: `${duration}ms`,
          }}
        />
      );
    }
    
    return sparks;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/40 text-white overflow-hidden px-4">
      {/* Forge background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-red-900 to-transparent"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Metalsmith scene */}
        <div className="relative h-64 mb-8">
          {/* Anvil */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-gray-700 rounded-t-lg"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-8 bg-gray-800 rounded"></div>
          <h1 className='uppercase text-5xl z-90  text-orange-600 tracking-widest drop-shadow-[0_0_8px_rgba(255,165,0,0.6)]'>
             metalsmith forging     
          </h1>
          {/* 404 being forged */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-end">
            <div className="text-7xl font-bold font-mono text-orange-500 drop-shadow-[0_0_8px_rgba(255,165,0,0.6)]">4</div>
            <div className="text-7xl font-bold font-mono text-orange-600 drop-shadow-[0_0_10px_rgba(255,69,0,0.7)]">0</div>
            <div className="text-7xl font-bold font-mono text-orange-500 drop-shadow-[0_0_8px_rgba(255,165,0,0.6)]">4</div>
          </div>
          
       
          <div 
            className={`absolute bottom-20 right-20 -z-1 w-16 h-40 origin-bottom transform rotate-45 transition-transform duration-300 ${hammerAnimation ? 'rotate-[25deg]' : 'rotate-45'}`}
          >
            <div className="absolute top-0 w-16 h-12 bg-gray-700 rounded-md"></div>
            <div className="absolute top-12 left-6 w-4 h-28 bg-yellow-900 rounded-b-sm"></div>
          </div>
          
          {/* Sparks animation */}
          {hammerAnimation && (
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              {renderSparks()}
            </div>
          )}
          
          {/* Heat waves */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-72 h-16 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-yellow-300 animate-pulse rounded-full blur-md"></div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 font-serif">Page Not Found</h1>
        <p className="text-xl mb-8 text-gray-300">
          The page you're looking for is still being forged in our workshop.
        </p>
        
        <div className="relative">
          <Link to='/' className="relative z-10 px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-md font-medium transition-colors duration-300 group">
            Return to Homepage
            <span className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-red-500 to-orange-600 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-200"></span>
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      
      {/* Smoke effect */}
      <div className="absolute top-0 w-full flex justify-center">
        <div className="w-32 h-64 bg-gradient-to-t from-transparent via-gray-700 to-transparent opacity-5 blur-xl animate-float"></div>
        <div className="w-24 h-80 bg-gradient-to-t from-transparent via-gray-800 to-transparent opacity-5 blur-xl animate-float-slow"></div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}