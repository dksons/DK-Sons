import React from 'react';


function Sector() {
    
const sectors = [
    {
      title: "Equestrian",
       icon:'🐎',
      items: [
        "Snaffle bits and stirrups",
        "Halters and bridle components",
        "Lead ropes and training equipment",
        "Custom hardware for competition gear",
      ],
    },
    {
      title: "Marine",
       icon:'🚤',
      
      items: [
        "Boat hardware and fittings",
        "Sailing equipment components",
        "Durable clasps and fasteners",
        "Custom marine-grade hardware",
      ],
    },
    {
      title: "Leather Industry",
       icon:'👜',
      items: [
        "Buckles and closures",
        "Decorative hardware",
        "Fasteners and rings",
        "Custom branded hardware",
      ],
    },
    {
      title: "Pet Industry",
      icon:'🦮',
      items: [
        "Dog training collars and chains",
        "Martingale components",
        "Leash hardware and snap hooks",
        "Custom pet accessory components",
      ],
    },
  ];
  return (
    <section className="w-full lg:h-screen flex justify-center items-center px-10 py-20 lg:flex-row flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-wide
        bg-gradient-to-br from-purple-600 via-blue-500 to-slate-300 bg-clip-text text-transparent">

       <span className='lg:text-9xl   bg-gradient-to-l from-white-500 via-slate-100 to-gray-100 bg-clip-text text-transparent'>
       SECTORS 
       </span>
        <span className='lg:hidden text-3xl'>
            <br className=''/>
        WE SERVE
         </span>
            <span className=' lg:block bg-gradient-to-br from-white-500 via-slate-300 to-gray-100 bg-clip-text text-transparent hidden'>
        WE SERVE
            </span>
            </h2>
      
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto ">
        {sectors.map((sector, index) => (
          <div key={ index } className="group relative pl-4 border-l-4 border-blue-500 bg-black/30 p-5 rounded-4xl hover:bg-white/80 scale-110 duration-300 hover:text-black ">
        
        
       <div className='flex flex-row w-fit justify-start items-center mb-4'>
        <span className='mr-2  text-3xl'>{sector.icon}</span>
             <h3 className="md:text-3xl font-semibold  text-blue-400 group-hover:text-black transition-colors duration-300">
              { sector.title }
            </h3>
       </div>
            {/* <ul className="list-disc list-inside space-y-1">
              { sector.items.map( ( item, idx ) => (
                <li key={ idx } className="pl-1">{ item }</li>
              ) ) }
            </ul> */}
            <ul className="list-disc list-outside pl-6 space-y-2">
              { sector.items.map( ( item, idx ) => (
                <li key={ idx } className="text-base leading-relaxed">
                  { item }
                </li>
              ) ) }
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sector;
