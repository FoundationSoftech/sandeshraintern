import { NavLink } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaMinus } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import "./Footer.css"

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  // true = collapsed, false = expanded
  const [quickCollapsed, setQuickCollapsed] = useState(true);
  const [contactCollapsed, setContactCollapsed] = useState(true);
  const [followCollapsed, setFollowCollapsed] = useState(true);

  // helper to compute classes
  const collapseClasses = (collapsed) =>
    `transition-all duration-300 ease-in-out transform overflow-hidden ` +
    (collapsed
      ? '-translate-y-2 opacity-0 h-0'
      : 'translate-y-0 opacity-100 h-auto');

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-100 text-black w-full lg:py-8"
    >
      <div className="container mx-auto flex flex-col mt-[6vh]  lg:h-[25vh] md:flex md:justify-around md:flex-row">
        {/* Quick Links (mobile toggle) */}
        <div className="relative lg:hidden mb-4">
          <div className=" ml-5 flex justify-between items-center">
            <h1
              className="text-xl font-medium"
              onClick={() => setQuickCollapsed(prev => !prev)}
            >
              Quick Links
            </h1>
            <button
              onClick={() => setQuickCollapsed(prev => !prev)}
              className="p-2"
            >
              {quickCollapsed ? 
                <i className="fa-solid fa-chevron-down"></i> 
                : <FaMinus />
              }
            </button>
          </div>
          <ul className={ collapseClasses(quickCollapsed)} >
            <li><NavLink to="/" className="font-normal block py-1">Home</NavLink></li>
            <li><NavLink to="/about" className="font-normal block py-1">About Us</NavLink></li>
            <li><NavLink to="/policy" className="font-normal block py-1">Privacy Policy</NavLink></li>
            <li><NavLink to="/contact" className="font-normal block py-1">Contact Us</NavLink></li>
            <li><NavLink to="/terms" className="font-normal block py-1">Terms of Use</NavLink></li>
          </ul>
        </div>

        {/* Contact Us (mobile toggle) */}
        <div className="relative lg:hidden mb-4">
          <div className="flex justify-between items-center">
            <h1
              className="text-xl font-medium ml-5"
              onClick={() => setContactCollapsed(prev => !prev)}
            >
              Contact Us
            </h1>
            <button
              onClick={() => setContactCollapsed(prev => !prev)}
              className="p-2"
            >
              {contactCollapsed ? 
                <i className="fa-solid fa-chevron-down"></i> 
                : <FaMinus />
              }
            </button>
          </div>
          <ul className={collapseClasses(contactCollapsed)}>
            <li className="flex items-center py-1 text-sm">
              <FaEnvelope className="mr-2" /> support@solevague.com
            </li>
            <li className="flex items-center py-1 text-sm">
              <FaPhone className="mr-2" style={{ transform: 'scaleX(-1)' }} /> +977 123-456789
            </li>
            <li className="flex items-center py-1 text-sm">
              <FaPhone className="mr-2" style={{ transform: 'scaleX(-1)' }} /> +977 123-789890
            </li>
            <li className="flex items-center py-1 text-sm">
              <FaMapMarkerAlt className="mr-2" /> Kathmandu, Nepal
            </li>
          </ul>
        </div>

        {/* Follow Us (mobile toggle) */}
        <div className="relative lg:hidden mb-4">
          <div className="flex justify-between items-center">
            <h1
              className="text-xl font-medium ml-5"
              onClick={() => setFollowCollapsed(prev => !prev)}
            >
              Follow Us
            </h1>
            <button
              onClick={() => setFollowCollapsed(prev => !prev)}
              className="p-2"
            >
              {followCollapsed ? 
                <i className="fa-solid fa-chevron-down"></i> 
                : <FaMinus />
              }
            </button>
          </div>
          <ul className={collapseClasses(followCollapsed) + " flex space-x-4 py-2"}>
            <li><a href="#" className="text-2xl hover:text-blue-600"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="#" className="text-2xl hover:text-pink-600"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="#" className="text-2xl hover:text-blue-400"><i className="fa-brands fa-twitter"></i></a></li>
          </ul>
        </div>

        {/* Desktop layout (always visible) */}
        <div className="hidden lg:flex lg:justify-between w-full">
          {/* Quick Links */}
          <div className="flex flex-col  items-start space-y-2 w-1/3">
            <h1 className="text-xl font-medium">Quick Links</h1>
            <NavLink to="/" className="font-normal hover:text-gray-600">Home</NavLink>
            <NavLink to="/about" className="font-normal hover:text-gray-600">About Us</NavLink>
            <NavLink to="/policy" className="font-normal hover:text-gray-600">Privacy Policy</NavLink>
            <NavLink to="/contact" className="font-normal hover:text-gray-600">Contact Us</NavLink>
            <NavLink to="/terms" className="font-normal hover:text-gray-600">Terms of Use</NavLink>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-2 w-1/3 items-center ">
            <h1 className="text-xl font-medium">Contact</h1>
            <p className="flex items-center font-normal"><FaEnvelope className="mr-2" /> support@solevague.com</p>
            <p className="flex items-center font-normal"><FaPhone className="mr-2" style={{ transform: 'scaleX(-1)' }} /> +977 123-456789</p>
            <p className="flex items-center font-normal"><FaPhone className="mr-2" style={{ transform: 'scaleX(-1)' }} /> +977 123-789890</p>
            <p className="flex items-center font-normal"><FaMapMarkerAlt className="mr-2" /> Kathmandu, Nepal</p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col space-y-2 w-1/3 items-center ">
            <h1 className="text-xl font-semibold">Follow Us</h1>
            <div className="flex space-x-4   w-full footer h-full justify-center" >
              <a href="#" className="text-3xl  hover:text-blue-600"><i className="text-3xl fa-brands fa-facebook"></i></a>
              <a href="#" className="text-3xl hover:text-pink-600"><i className="text-3xl fa-brands fa-instagram"></i></a>
              <a href="#" className="text-3xl hover:text-blue-400"><i className="text-3xl fa-brands fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4 mt-6 text-center">
        <p className="text-sm lg:font-bold font-normal">
          © 2025 <span className="lg:font-medium">SoleVague</span>. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
