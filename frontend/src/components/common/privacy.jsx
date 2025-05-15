import { Shield, Database, Users, Eye, Lock, Bookmark, Globe, AlertCircle,Mail, Phone, Building2,  Clock, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import './cssFiles/Nav.css'

export default function Privacy() {

     const [activeCard, setActiveCard] = useState(null);
  
  const handleCardHover = (index) => {
    setActiveCard(index);
  };
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  
  const handleCardLeave = () => {
    setActiveCard(null);
  };
  const sections = [
    {
      id: "collect",
      title: "What We Collect",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      items: [
        "Contact information when you request our services",
        "Website analytics to optimize your experience",
        "Communication records about your projects",
        "Business details needed to deliver our services",
      ]
    },
    {
      id: "use",
      title: "How We Use It",
      icon: <Eye className="w-6 h-6" />,
      color: "from-emerald-400 to-emerald-600",
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-400",
      items: [
        "To deliver top-notch services tailored to your needs",
        "To keep you updated on your projects and progress",
        "To improve our services and develop new features",
        "To comply with applicable laws and regulations",
        
      ]
    },
    {
      id: "access",
      title: "Who Gets Access",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      items: [
        "Our team members who need it to deliver your services",
        "Legal authorities if legally required",
        "Never sold to data brokers or third parties",
        "Partners only with your explicit consent"
      ]
    },
    {
      id: "protect",
      title: "How We Protect It",
      icon: <Shield className="w-6 h-6" />,
      color: "from-amber-400 to-amber-600",
      iconBg: "bg-amber-500/20",
      iconColor: "text-amber-400",
      items: [
        "Industry-standard encryption for sensitive data",
        "Strict access controls for team members",
        "Regular security updates and patches",
        "Periodic security audits and reviews",
        
      ]
    },
   
  ];

  return (
    <div className="bg-gradient-to-r text-white p-4 md:p-8">







    <div className="w-full text-white border-b-2 border-yellow-400">
      {/* Logo and Header Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 flex flex-col items-center">
        {/* Logo */}
 <div className='flex items-center justify-center mb-10'>
     <span className='logo lg:w-28 lg:h-32 w-20 h-23   inline-block mb-3 '></span>
     <span className='inline-block text-white lg:text-[70px] text-[60px] p-1 text-center' >|</span>
     <div className='flex items-center tracking-wide flex-col justify-center'>
     <span className='block text-clip text-[23px] lg:text-[30px]'>DK SONS</span>
     <span className='block text-white text-[10px] lg:text-[15px]'>METAL HARDWARE</span>
     </div>
     </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Privacy Policy That{" "}
          <span className="text-yellow-400">Makes Sense</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl text-center max-w-2xl">
          We're Provide High Quality Materials That You Can Trust
        </p>
      </div>
    </div>




          <div className=" mt-20 ">
      <div className="lg:w-[80%] mx-auto">
        <div className="text-center mb-12">
          <h1 className="lg:text-4xl  text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
            Our Approach to Privacy
          </h1>
          <div className="flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-amber-400 mr-2" />
            <p className="text-md md:text-xl">Simple. Transparent. Respectful.</p>
          </div>
          <p className="text-md max-w-3xl mx-auto text-slate-300">
            We believe privacy policies shouldn't require a law degree to understand. 
            We respect your data, protect it carefully, and won't sell it. 
            That's our promise to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div 
              key={section.id} 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${section.color}`}></div>
              <div className="p-2">
                <div className="flex items-center mb-4">
                  <div className={`p-1 rounded-lg ${section.iconBg} ${section.iconColor} mr-4`}>
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className={`h-4 w-4 ${section.iconColor} mr-2 mt-1 flex-shrink-0`} />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className=" p-2 border-t border-slate-700/50">
                <button className={`text-xs font-medium flex items-center ${section.iconColor} hover:underline`}>
                  Learn more 
                  <ArrowRight className="ml-1 h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </div>
     <div className="lg:w-[80%] mx-auto p-6 text-white rounded-lg shadow-xl">
      {/* Special Considerations Section */}
      <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Special Considerations</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300">
          <div className="flex items-center mb-4">
            <Shield className="text-yellow-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-yellow-400">Children's Privacy</h3>
          </div>
          <p className="text-gray-300">
            Our services aren't directed at individuals under 18. We don't knowingly collect data from children. 
            If we've inadvertently collected such information, please contact us immediately.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300">
          <div className="flex items-center mb-4">
            <Clock className="text-yellow-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-yellow-400">Policy Updates</h3>
          </div>
          <p className="text-gray-300">
            Last updated: May 14, 2025. We may update this policy periodically and will notify 
            you of significant changes via email or website notice.
          </p>
        </div>
      </div>
      
      {/* Questions or Concerns Section */}
      <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Questions or Concerns?</h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: <Mail size={28} />,
            title: "Email",
            content: "dksons@gmail.com",
            hoverEffect: "hover:bg-yellow-400/10"
          },
          {
            icon: <Phone size={28} />,
            title: "Phone",
            content: "+91 7619053637",
            subContent: "Available 24/7",
            hoverEffect: "hover:bg-yellow-400/10"
          },
          {
            icon: <Building2 size={28} />,
            title: "Offices",
            content: "Kanpur",
            subContent: "India-(WC2H 9JQ)",
            hoverEffect: "hover:bg-yellow-400/10"
          }
        ].map((item, index) => (
          <div 
            key={index}
            className={`relative bg-gray-800 p-6 rounded-lg text-center border border-gray-700 transition-all duration-300 ${
              activeCard === index ? "border-yellow-400 transform scale-105" : "hover:border-yellow-500"
            } ${item.hoverEffect}`}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <div className="flex justify-center mb-4 text-yellow-400">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">{item.title}</h3>
            <p className="text-gray-300">{item.content}</p>
            {item.subContent && (
              <p className="text-gray-400 text-sm mt-2">{item.subContent}</p>
            )}
          </div>
        ))}
      </div>
      
      {/* Call to Action Section */}
   
    </div>
     <div className="mt-4 border-t border-slate-700 pt-2 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-red-500/10 rounded-full text-red-400 mb-4">
            <AlertCircle className="w-6 h-6" />
          </div>
          <p className="text-sm text-slate-400">
            This privacy policy was last updated on May 14, 2025.
            If you have any questions, please contact our privacy team at privacy@example.com
          </p>
        </div>
    </div>
  
  );
}