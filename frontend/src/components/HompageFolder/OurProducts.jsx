import React from 'react';
import img1 from '../../assets/img1.png'

function OurProducts() {
  return (
    <section>
      <div className="z-40 mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            {
              title: "Brass Hardware",
              image: {img1}, //set your image accordingly
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
              image: "path/to/zinc-thumbnail.jpg",
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
              image: "path/to/steel-thumbnail.jpg",
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
              image: "path/to/iron-thumbnail.jpg",
              alt: "Iron Hardware",
              items: [
                "Bull Snaps",
                "Girth and Halter Buckles",
                "Heavy-Duty Components",
              ],
            },
            {
              title: "Chains",
              image: "path/to/chains-thumbnail.jpg",
              alt: "Chains",
              items: [
                "Twisted Chains",
                "Oval Link Chains",
                "Curb Chains",
                "Specialized Chain Applications",
              ],
            },
          ].map((product, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={img1} 
                alt={product.alt}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 transition-transform duration-300 hover:translate-x-1 hover:translate-y-1 hover:text-gray-800">
                  {product.title}
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  {product.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
