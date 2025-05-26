import { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Truck, Scale } from 'lucide-react';

export default function T_C() {
  const [activeSection, setActiveSection] = useState(null);
  const [accepted, setAccepted] = useState(false);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: "Product Quality & Warranties",
      icon: <Shield className="text-orange-500" />,
      content: "DKSons guarantees all metal hardware products meet industry standards for durability and performance. Products carry a standard 1-year warranty against manufacturing defects under normal usage conditions. Premium product lines include extended warranties of up to 5 years. Warranty claims require proof of purchase and inspection by our technical team. DKSons reserves the right to repair, replace, or refund at our discretion."
    },
    {
      title: "Shipping & Delivery",
      icon: <Truck className="text-orange-500" />,
      content: "Standard delivery timeframes vary by region: 3-5 business days for domestic orders and 7-14 business days for international shipments. Expedited shipping options are available at additional cost. DKSons is not responsible for delays caused by customs clearance or local delivery services. Recipients are responsible for any import duties or taxes applicable in the destination country. Shipment tracking information will be provided via email upon dispatch."
    },
    {
      title: "Use of Materials & Specifications",
      icon: <Scale className="text-orange-500" />,
      content: "All DKSons products are manufactured using high-grade metals and alloys sourced from certified suppliers. Product specifications, including dimensions, load capacities, and material composition are provided as guidelines only. Minor variations may occur in production. It is the customer's responsibility to ensure products are suitable for intended applications. Technical support is available for specialized applications requiring custom specifications."
    },
    {
      title: "Legal Compliance & Liability",
      icon: <Scale className="text-orange-500" />,
      content: "DKSons hardware products comply with relevant industry standards and regulations in primary markets served. However, customers are responsible for ensuring compliance with local building codes and regulations. DKSons liability is limited to the purchase price of products. We are not liable for consequential damages, lost profits, or incidental damages arising from product use or misuse. By purchasing our products, customers agree to indemnify DKSons against claims resulting from improper installation or use."
    }
  ];

  return (
   <div className=' bg-black/40'>
     <div className="min-h-screen mt-20 text-gray-100 flex items-center justify-center lg:p-2">
      <div className="max-w-4xl w-full  rounded-lg overflow-hidden border border-gray-700 shadow-xl">
        {/* Header with metallic effect */}
     

        {/* Main content */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-200">Terms & Conditions</h2>
          
          <div className="mb-8 text-gray-300 bg-gray-700 p-4 rounded-md border-l-4 border-orange-500">
            <p>
              Welcome to DKSons Metal Hardware. Please review our terms and conditions carefully before 
              using our products or services. By accessing or using our products, you agree to be bound 
              by these terms.
            </p>
          </div>

          {/* Accordion sections */}
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800 transition-all duration-300"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-700 rounded-md">
                      {section.icon}
                    </div>
                    <span className="font-medium text-lg">{section.title}</span>
                  </div>
                  {activeSection === index ? 
                    <ChevronUp className="text-orange-400" /> : 
                    <ChevronDown className="text-orange-400" />
                  }
                </button>
                
                <div 
                  className={`px-4 transition-all duration-300 overflow-hidden ${
                    activeSection === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <div className="bg-gray-700 p-4 rounded-md text-gray-300">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-900 text-center text-gray-400 text-sm">
          <p>© 2025 DKSons Metal Hardware. All rights reserved.</p>
        </div>
      </div>
    </div>
   </div>
  );
}