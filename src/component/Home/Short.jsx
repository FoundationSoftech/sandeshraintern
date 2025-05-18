import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Short = () => {
  const navigate = useNavigate();

  
  const messages = [
    "Members: Free shipping on all orders over NPR 1,000 Product",
    "Get a Gift Card",
    "Enjoy Exclusive Member Discounts",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      nextMessage();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const [msgIndex, setMsgIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

    const nextMessage = () => {
    setAnimating(true);
    setTimeout(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
      setAnimating(false);
    }, 300);
  };

  const prevMessage = () => {
    setAnimating(true);
    setTimeout(() => {
      setMsgIndex((prev) => (prev - 1 + messages.length) % messages.length);
      setAnimating(false);
    }, 300);
  };

  return (
    <div>
      <div className='bg-[#F1F2F2] h-[5vh] md:text-[20px]  text-[10px] lg:text-md font-normal  lg:h-[6vh] flex w-screen justify-evenly items-center overflow-hidden'>
        <button onClick={prevMessage} className="md:text-lg font-normal">&lt;</button>

        <div className="w-[60%] h-full flex justify-center items-center relative overflow-hidden">
          <p
            onClick={() => navigate('/signup')}
            className={`hover:cursor-pointer absolute transition-all duration-300 ease-in-out font-normal ${
              animating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            {messages[msgIndex]}
          </p>
        </div>

        <button onClick={nextMessage} className="md:text-lg  font-normal">&gt;</button>
      </div>
    </div>
  );
};

export default Short;
