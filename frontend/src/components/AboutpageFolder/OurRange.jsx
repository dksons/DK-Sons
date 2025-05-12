import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const OurRange = () => {
    const products = [
        {   
            name: 'Hot Rolled Sheet',
            title: 'Versatile and durable, our hot rolled sheets are used across various industries for applications that require strength and flexibility.',
            icon: '📄'
        },
        {  
            name: 'Railway Product',
            title: "We provide high-quality railway products designed for optimal performance and reliability in the transportation industry",
            icon: '🚂'
        },
        { 
            name: 'Equal Angle Iron', 
            title: 'Precision-engineered equal angle irons, ideal for construction and structural applications that demand high strength and stability.',
            icon: '📐' 
        },
        { 
            name: 'Chequered Plate', 
            title: "Our chequered plates provide superior grip and are widely used in flooring and safety applications.", 
            icon: '🧱' 
        },
        { 
            name: 'Steel Pipes', 
            title: "Strong, durable, and corrosion-resistant steel pipes designed for various industrial uses, from construction to fluid transportation.", 
            icon: '🛢️' 
        },
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
        <div className="bg-black h-fit text-white py-16 px-8 md:px-24 grid md:grid-cols-2 gap-12">
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
                    <div key={index} className="flex items-start gap-3">
                        <div className="text-orange-500 text-3xl">{product.icon}</div>
                        <div>
                           <span className="text-2xl font-bold hover:underline transition-all duration-600 ease-in">{product.name}</span>
                            <p className="text-sm text-gray-300">
                               {product.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurRange;
