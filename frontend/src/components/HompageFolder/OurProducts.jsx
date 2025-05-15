import React from 'react';
import img1 from '../../assets/brass.jpeg'
import img2 from "../../assets/zinchardware.jpg";
import img3 from "../../assets/steel.jpeg";
import img4 from "../../assets/iron2.jpg";
import img5 from "../../assets/chain.jpeg";


function OurProducts() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/catalog.pdf"; // Make sure the PDF is in the public folder
    link.download = "catalog.pdf";
    link.click();
  };
  const newArray=[
    {
      title: "Brass Hardware",
      image: img1, //set your image accordingly
      alt: "Brass Hardware",
      items: [
        "Snap Hooks (Bolt, Push Gate, Scissors)",
        "Buckles (Center Bar, Side Bar, Roller)",
        "Rings and Loops",
        "Halter Squares and Shackles",
      ],
    },
    {
      title: "Zinc Hardware",
      image: img2,
      alt: "Zinc Hardware",
      items: [
        "Buckles and Adjusters",
        "Snap Hooks and Carabiners",
        "D-Rings and Loops",
        "Quick Release Components",
      ],
    },
    {
      title: "Steel Hardware",
      image:  img3 ,
      alt: "Steel Hardware",
      items: [
        "Carabiner Hooks",
        "Bridle Buckles",
        "Adjusters and Rollers",
        "Specialized Components",
      ],
    },
    {
      title: "Iron Hardware",
      image: img4,
      alt: "Iron Hardware",
      items: [
        "Bull Snaps",
        "Girth and Halter Buckles",
        "Heavy-Duty Components",
      ],
    },
    {
      title: "Chains",
      image: img5,
      alt: "Chains",
      items: [
        "Twisted Chains",
        "Oval Link Chains",
        "Curb Chains",
        "Specialized Chain Applications",
      ],
    },
  ]
  return (
    <section>

      <div className="z-40 mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {newArray.map((product, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-white via-slate-200  to-yellow-50 transition-transform hover:scale-103 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl  duration-300"
            >
              <img
                src={product.image} 
                alt={product.alt}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4 ">
                <h3 className="text-xl font-semibold mb-2  transition-transform duration-300 hover:translate-x-1 hover:translate-y-1 hover:text-gray-800">
                  {product.title}
                </h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700 text-sm md:text-base leading-relaxed">
                  { product.items.map( ( item, i ) => (
                    <li key={ i }>{ item }</li>
                  ) ) }
                </ul>
              </div>
            </div>
          ))}
        </div>
       
      </div>
      <div onClick={handleDownload} className="cursor-pointer text-blue-600 hover:underline w-full flex lg:mb-0 mb-7 justify-center">
        <p className='bg-gradient-to-r from-yellow-600 via-red-500 text-xl to-rose-600 hover:scale-110 duration-300 transition-all bg-clip-text text-transparent'>
          View More</p>
    </div>
    </section>
  );
}

export default OurProducts;
