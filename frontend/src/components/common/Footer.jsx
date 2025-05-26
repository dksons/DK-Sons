import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-8 lg:flex lg:flex-row lg:justify-around md:flex md:flex-row md:justify-around   w-screen ">
     
        <div> 
          {/* <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-red-500 to-indigo-500">DK-SONS</h1> */}
          <div className='flex'>
      
            <span className='inline-block
            

            
            
            
            text-white text-[52px] p-1 text-center' >|</span>
            <div className='flex items-center tracking-wide flex-col justify-center'>
              <span className='block text-clip lg:text-[20px] text-[17px]'>DK SONS</span>
              <span className='block text-white text-[10px]'>METAL HARDWARE</span>
            </div>
          </div>
          <p className="text-sm text-zinc-400">
            Your one-stop destination for quality products and great deals.
          </p>
        </div>


        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-zinc-300 lg:text-sm">
            <li><Link to='/'>Steel products</Link></li>
            <li><Link to='/our-products'>Metal Products</Link></li>
            <li><Link to="/our-products">Zinc Products</Link></li>
           
          </ul>
        </div>

      


     
        <div>
          <h2 className="font-semibold text-lg mb-3">Legal</h2>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li><a href="/Terms_And_Conditons">Terms & Conditions</a></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
