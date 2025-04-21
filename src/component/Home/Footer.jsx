import { NavLink } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-black py-8 bg-gray-100 w-full"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        
        <div className="flex flex-col space-y-2 ml-2 md:ml-9 mb-6 md:mb-0">
          <h1 className="text-2xl font-medium">Quick Links</h1>
          <NavLink to="/" className="hover:text-gray-600 transition duration-300 font-normal">Home</NavLink>
          <NavLink to="/about" className="hover:text-gray-600 transition duration-300 font-normal">About Us</NavLink>
          <NavLink to="/policy" className="hover:text-gray-600 transition duration-300 font-normal">Privacy Policy</NavLink>
          <NavLink to="/contact" className="hover:text-gray-600 transition duration-300 font-normal">Contact Us</NavLink>
          <NavLink to="/terms" className="hover:text-gray-600 transition duration-300 font-normal">Terms of Use</NavLink>
        </div>

        
        <div className="flex flex-col space-y-2">
          <h1 className="font-normal text-2xl">Contact</h1>
          <p className="flex items-center font-normal"><FaEnvelope className="mr-2" /> support@solevague.com</p>
          <p className="flex items-center font-normal"><FaPhone className="mr-2" style={{ transform: 'scaleX(-1)' }} /> +977 123-456789</p>
          <p className="flex items-center font-normal"><FaPhone className="mr-2" style={{ transform: 'scaleX(-1)' }} /> +977 123-789890</p>
          <p className="flex items-center font-normal"><FaMapMarkerAlt className="mr-2" /> Kathmandu, Nepal</p>
        </div>

        
        <div className="space-y-2 mt-6 md:mt-0 mr-2 md:mr-9 flex flex-col">
          <h1 className="text-2xl font-semibold">Follow Us</h1>
          <div className="flex space-x-4">
            <a href="#" className="text-3xl  hover:text-blue-600 transition"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="text-3xl hover:text-pink-600 transition"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-3xl hover:text-blue-400 transition"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-300 pt-4">
        <p>© 2025 <span className="font-medium">SoleVague</span>. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
