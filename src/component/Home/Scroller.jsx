import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Scroller = ({ Blocks, title, link }) => {
  const Navigate = useNavigate();
  const totalItems = Blocks.length;

  // 1) derive number of slides visible from window size
  const getVisibleItems = () => {
    const w = window.innerWidth;
    if (w >= 1024) return 4;   // lg
    if (w >= 768) return 3;    // md
    if (w >= 640) return 2;    // sm
    return 1;                  // xs
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItems());
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setVisibleItems(getVisibleItems());
      // if current index is out of range for new visibleItems, clamp it
      setIndex(prev => Math.min(prev, totalItems - getVisibleItems()));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [totalItems]);

  const nextSlide = () =>
    setIndex(i =>
      i < totalItems - visibleItems ? i + 1 : 0
    );

  const prevSlide = () =>
    setIndex(i =>
      i > 0 ? i - 1 : totalItems - visibleItems
    );

  // auto-advance
  useEffect(() => {
    const iv = setInterval(nextSlide, 3000);
    return () => clearInterval(iv);
  }, [totalItems, visibleItems]);

  // each item fills 100%/visibleItems of the track
  const itemWidthPercent = 100 / visibleItems;

  const BlockItem = ({ block }) => (
    <a
      key={block.id}
      
      rel="noopener noreferrer"
      className="flex-none"
      style={{ width: `${itemWidthPercent}%` }}
    >
      <div className="m-4 flex flex-col items-center justify-center bg-white shadow-md rounded-lg border p-2 transform transition hover:scale-105">
        <img
          src={block.image}
          alt={block.text}
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-center text-sm text-gray-700">
          {block.text}
        </p>
      </div>
    </a>
  );

  return (
    <div
      className="flex flex-col items-center w-full border p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-xl lg:text-4xl font-medium mt-3 mb-4 relative group">
        {title}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-600 transition-all duration-500 group-hover:w-full"></span>
      </h1>

      <button
        className="self-end mb-4 underline font-semibold sm:mr-4 md:mr-[60px] text-sm border px-2 py-1 rounded bg-black text-white"
        onClick={() => Navigate(`/${link}`)}
      >
        VIEW ALL
      </button>

      <div className="relative w-full overflow-hidden">
        {isHovered && index > 0 && (
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 rounded-full hover:bg-gray-600 hover:text-white transition"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </button>
        )}

        <div className="flex transition-transform duration-500"
             style={{ transform: `translateX(-${index * itemWidthPercent}%)` }}
        >
          {Blocks.map(b => <BlockItem key={b.id} block={b} />)}
        </div>

        {isHovered && index < totalItems - visibleItems && (
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 rounded-full hover:bg-gray-600 hover:text-white transition"
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
