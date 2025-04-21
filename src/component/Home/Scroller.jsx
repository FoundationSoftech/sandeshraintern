import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Scroller = ({ Blocks, title,link }) => {
  
  const visibleItems = 4;
  const totalItems = Blocks.length;
  const Navigate = useNavigate();

  
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  
  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex < totalItems - visibleItems ? prevIndex + 1 : 0
    );
  };

  
  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalItems - visibleItems
    );
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [totalItems]);

  const BlockItem = ({ block }) => {
    return (
      
      <a
        key={block.id}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-none w-[23%]"
      >

        <div className="relative">
          
          <div className="h-89 m-4 flex flex-col items-center justify-center bg-white shadow-md rounded-lg border border-gray-200 p-2 transform transition duration-300 hover:scale-105">
  
  <img
              src={block.image}
              alt={block.text}
              className="w-full h-29 object-cover rounded-md transition-opacity duration-300"
            />
  
  <p className="mt-2 text-center text-sm font-normal text-gray-700">
              {block.text}
            </p>
            
          </div>
        </div>
      </a>
    );
  };

  return (
    <div
      className=" flex flex-col items-center w-[98vw] mx-auto p-9"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-4xl font-medium rounded-md p-3 relative group">
        {title}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-600 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </h1>
        <div className=" mb-[2vh] justify-end  w-screen h-[20px]   flex">
<button className="mr-[5vw] view-all-btn border   rounded-md  h-[30px] underline font-semibold  border-black p-[5px] bg-black text-white " onClick={()=>{
Navigate(`/${link}`)
}}>VIEW ALL</button>

        </div>

      <div className="relative w-full">

        {isHovered && index > 0 && (
          <button
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 p-6 hover:bg-gray-600 transition-all delay-100 hover:text-white bg-gray-300 rounded-full shadow-md"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </button>
        )}

        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 25}%)` }}
          >
            
            {Blocks.map((block) => (
              <BlockItem key={block.id} block={block} />
            ))}
          </div>
        </div>

        
        {isHovered && index < totalItems - visibleItems && (
          <button
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 p-6 hover:bg-gray-600 transition-all delay-100 hover:text-white bg-gray-300 rounded-full shadow-md"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Scroller;
