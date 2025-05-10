import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const OurRange = () => {
    const products = [
        { name: 'Hot Rolled Sheet', icon: '📄' },
        { name: 'Hot Rolled Sheet', icon: '🧻' },
        { name: 'Railway Product', icon: '🚂' },
        { name: 'Equal Angle Iron', icon: '📐' },
        { name: 'Chequered Plate', icon: '🧱' },
        { name: 'Steel Pipes', icon: '🛢️' },
    ];

    const features = [
        'Exceptional Strength',
        'Durability',
        'Versatility',
        'Recyclability',
        'Cost-Effectiveness',
        'Global Availability',
    ];

    return (
        <div className="bg-black lg:h-[80vh] text-white py-16 px-8 md:px-24 grid md:grid-cols-2  gap-12">

            <div className='flex justify-start items-center flex-col'>
                <div className="text-orange-500 text-4xl font-semibold uppercase text-start w-full">Our Range</div>
                <h2 className="lg:text-5xl text-3xl font-bold my-4 leading-tight">
                    Innovative Steel Solutions for Every Industry
                </h2>
          
              <div className='flex justify-start items-start w-full mt-10'>
              <div className="grid grid-cols-2 gap-10 text-xl">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <FaCheckCircle className="text-orange-500" />
                            {feature}
                        </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {products.map((product, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="text-orange-500 text-4xl">{product.icon}</div>
                        <div>
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            <p className="text-lg text-gray-300">
                                Morbi eu neque vel quam lobortis en efficitur et dignissim felis.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurRange; 
