import React, { useState } from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { useNavigate } from 'react-router-dom';

const GenderCollection = ({ Collection, Category }) => {
  const numbershoes = Collection.length;
  const navigate = useNavigate();
  const Navigateto = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <Header />

      <h1 className="  left-4 md:font-normal text-2xl font-normal md:text-left md:ml-[40px]  w-screen  bg-white px-2">
          {Category} ({numbershoes})
        </h1>
      
      <div className="w-[90vw] lg:w-[95vw] mx-auto   flex flex-col md:grid md:grid-cols-3 gap-7  p-4 relative">
      
        {Collection.map((data) => (
          <Card key={data.id} data={data} Navigateto={Navigateto} />
        ))}
      </div>
      <Footer />
    </>
  );
};

// New Card Component
const Card = ({ data, Navigateto }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(data.image[0]);

  const nepaliFormatter = new Intl.NumberFormat('ne-NP', {
    style: 'currency',
    currency: 'NPR',
    maximumFractionDigits: 0,
  });

  return (
    <div 
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className=" relative w-full   overflow-hidden mt-6"
    >
      <div className="md:h-[45vh] md:mt-4 grid  w-full cursor-pointer" onClick={() => Navigateto(data.id)}>
        <img className="w-full h-full object-contain  md:object-contain lg:object-cover" src={image} alt={data.name} />
      </div>

      {/* Animated container */}
      <div
        className={`absolute bottom-0 md:bottom-[-40px] left-0 w-full transform transition-all duration-300 ${
          show ? 'translate-y-[10px] opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Row of images */}
        <div className="flex w-[305px]  md:w-full  gap-1 bg-white p-2">
          {data.image.map((img, index) => (
            <div key={index} className="md:h-12  md:w-12 h-6 2-6 cursor-pointer">
              <img
                onMouseEnter={() => setImage(img)}
                className="w-full  h-full object-cover"
                src={img}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="bg-white p-2  ">
          <h3 className="text-red-600 text-sm lg:text-base">
            {data.name}
          </h3>
          <h3 className="text-sm lg:text-base">
            {nepaliFormatter.format(data.Price)}
          </h3>
        </div>
      </div>

      {/* Info box */}
      {!show && (
        <div className="info p-2 bg-white  md:mt-12 ">
          <h2 className="shoename text-red-500 text-base">
            {data.name}
          </h2>
          <h3 className="gender text-[#bdaaaa] text-sm">
            {data.gender}
          </h3>
          <h3 className="text-[#bdaaaa] text-sm">
            {data.Color}
          </h3>
          <h3 className="text-sm">
            {nepaliFormatter.format(data.Price)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default GenderCollection;
