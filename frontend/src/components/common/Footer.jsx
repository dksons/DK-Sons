import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
     
        <div>
          <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-red-500 to-indigo-500">DK-SONS</h1>
          <p className="text-sm text-zinc-400">
            Your one-stop destination for quality products and great deals.
          </p>
        </div>


        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Home & Kitchen</a></li>
            <li><a href="#">Health & Beauty</a></li>
          </ul>
        </div>

      
        <div>
          <h2 className="font-semibold text-lg mb-3">Connect With Us</h2>
          <div className="flex space-x-4 text-xl text-white">
            <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-blue-300" /></a>
          </div>
        </div>

     
        <div>
          <h2 className="font-semibold text-lg mb-3">Legal</h2>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
