import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const OurRange = () => {
const products = [
    {
        name: 'Hex Bolts',
        title: 'High-tensile strength hex bolts ideal for heavy-duty fastening in industrial and construction settings.',
        icon: '🔩'
    },
    {
        name: 'Nuts & Washers',
        title: 'Reliable nuts and washers that ensure secure fastening and load distribution in mechanical assemblies.',
        icon: '🛠️'
    },
    {
        name: 'Threaded Rods',
        title: 'Versatile threaded rods used for tensioning and supporting structures in construction and machinery.',
        icon: '📏'
    },
    {
        name: 'Metal Hinges',
        title: 'Durable metal hinges designed for smooth motion and long-lasting performance in doors, cabinets, and gates.',
        icon: '🚪'
    },
    {
        name: 'Steel Channels',
        title: 'Structural steel channels offering strength and stability for framing, supports, and heavy machinery.',
        icon: '🏗️'
    },
    {
        name: 'Metal Brackets',
        title: 'Precision-crafted brackets for mounting, reinforcing, or connecting components in metal frameworks.',
        icon: '📎'
    },
    {
        name: 'Anchor Fasteners',
        title: 'Heavy-duty anchor fasteners for secure installation of fixtures in concrete, masonry, and solid materials.',
        icon: '🧱'
    },
    {
        name: 'Wire Mesh',
        title: 'Robust wire mesh for fencing, filtration, and reinforcement applications in industrial and commercial use.',
        icon: '🧵'
    }
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
