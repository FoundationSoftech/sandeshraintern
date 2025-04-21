import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Shipping from '../../../footerlogo/free-shipping.png';
import Help from '../../../footerlogo/conversation.png';
import Order from '../../../footerlogo/box.png';
import Exchange from '../../../footerlogo/Transfer.png';

const footerItems = [
  {
    title: 'Shipping Info',
    image: Shipping,
    path: '/shipping',
  },
  {
    title: 'Order Status',
    image: Order,
    path: '/status',
  },
  {
    title: 'Exchange',
    image: Exchange,
    path: '/return',
  },
  {
    title: 'Help',
    image: Help,
    path: '/help',
  },
];

const FooterLogo = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="w-full h-[22vh] flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="w-[93%] h-[17vh] flex justify-center items-center gap-8 flex-wrap">
        {footerItems.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(item.path)}
            className="cursor-pointer w-[20%] min-w-[150px] h-full flex flex-col items-center justify-center bg-[#F5f5f5] border rounded-lg hover:bg-[#DDDDDD] shadow-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={item.image} alt={item.title} className="w-[25%] h-[45%] object-contain" />
            <h2 className="mt-2 text-center text-xl font-normal">{item.title}</h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FooterLogo;
