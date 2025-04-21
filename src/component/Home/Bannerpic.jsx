import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Banner2 from '../../../image/shoesphoto/shoe3.jpg';
import Banner1 from '../../../image/shoesphoto/shoe6.jpg';
import './animations.css';
import Banner from './Bannertext.jsx';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react'; 

const Bannerpic = () => {
  const [fade, setFade] = useState(false);
  const [manual, setManual] = useState(false); 
    const navigate = useNavigate();

  const quotes = [
    "Step into style with every step.",         
    "Unleash your sole's potential."            
  ];

    useEffect(() => {
    if (manual) return;     const interval = setInterval(() => {
      setFade(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [manual]);

  
  useEffect(() => {
    if (manual) {
      const timeout = setTimeout(() => setManual(false), 10000); 
      return () => clearTimeout(timeout);
    }
  }, [manual]);

  const toggleImage = () => setFade(prev => !prev);

  return (
    <>
      
      <div className="w-[100vw] h-[79vh] relative flex overflow-hidden group">
        
        <motion.img
          src={Banner1}
          className="absolute w-full h-full object-cover"
          alt="Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: fade ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        />

        
        <motion.img
          src={Banner2}
          className="absolute w-full h-full object-cover"
          alt="Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: fade ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        />

        
        <button
          onClick={() => {
            toggleImage();
            setManual(true);
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => {
            toggleImage();
            setManual(true);
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
        >
          <ArrowRight />
        </button>

        
        <div className="absolute bottom-20 left-10 z-20">
          <button
            onClick={() => navigate('/allcollection')}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300  font-normal"
          >
            All Shoes And Sneakers
          </button>
          
          <p className="mt-2 text-white font-normal">
            {fade ? quotes[0] : quotes[1]}
          </p>
        </div>
      </div>


      <Banner />
    </>
  );
};

export default Bannerpic;
