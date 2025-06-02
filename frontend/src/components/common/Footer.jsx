import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white w-screen py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {/* Logo and Intro */}
        <div className="flex flex-col gap-3">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-white text-[40px]">|</span>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold">DK SONS</span>
              <span className="text-xs tracking-wide">METAL HARDWARE</span>
            </div>
          </Link>
          <p className="text-sm text-zinc-400">
            Your one-stop destination for quality products and great deals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-sm mb-3">Quick Links</h2>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li><Link to="/About-us">About Us</Link></li>
            <li><Link to="/Blogs">Blogs</Link></li>
            <li><Link to="/our-products">Products</Link></li>
          </ul>
        </div>

        {/* Policies & Contact */}
        <div>
          <h2 className="font-semibold text-sm mb-3">Information</h2>
          <ul className="space-y-2 text-zinc-300 text-sm cursor-pointer">
            <li className="flex items-center ">
              <FaEnvelope className="mr-2 cursor-pointer" />
              sameer@dksons.co
            </li>
            <li><Link to="/Terms_And_Conditons">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
