import React, { useRef} from 'react';
import videos from '../../../videos/Homebannervid/shoebannervid.mp4';
import { Navigate, useNavigate } from 'react-router-dom';
import "./footerlogo.css"

const Bannervid = () => {
  const videoRef = useRef(null);
const navigate = useNavigate()  

  return (
    <div className='relative w-[100vw] h-[80vh] md:h-[80vh]    lg:h-[85vh] flex justify-end items-center'>
      <div className='lg:h-full h-full  w-full lg:w-[70vw]'>

      <video 
        ref={videoRef}
        src={videos}
        autoPlay
        loop
        muted
        className='h-full w-full object-cover '
        ></video>

        </div>
        <div className='absolute   h-[7vh]  bottom-5 flex  flex-col left-0 lg:hidden w-screen md:ml-10  ml-3'>
      <button className='font-medium  text-[15px]  w-[150px] bg-black text-white p-1 md:text-xl rounded-sm '>Our New Product</button>
      <button className='font-medium text-[15px] bg-white w-[150px] text-black p-1 md:text-xl rounded-sm'>Nike Air Max DN8</button>
      

        </div>
      

<span className='border rounded-md hidden lg:inline border-black bg-black text-white p-3 absolute left-10 top-[235px] cursor-pointer '> Our New Product</span>
      <span className=' rounded-md hidden lg:inline cursor-pointer border border-black p-3 absolute left-10 top-[290px] '>Nike Air Max DN8</span>
      <div className='absolute left-6 md:ml-6 text-2xl hidden lg:inline   cursor-pointer top-[360px] rounded-md p-2 transition-all delay-100 '><h2 className='text-2xl'>Nike Air Max DN8 </h2>
      <span className="font-normal brand-text  text-lg hidden lg:inline">
Experience ultimate comfort and style with <br /> the latest Nike Air Max DN8.  This sneaker features  <br /> Dynamic Air  technology, offering a responsive <br /> and adaptive feel with every step.
</span>
<button className="relative hidden lg:inline px-3 ml-12 top-[10vh] right-[24vw] py-3 text-black bg-white border-2 border-black rounded-xl overflow-hidden transition-all duration-500 ease-in-out group">
      <span  onClick={()=>{
        navigate('/details/men-002')
      }} className="right-0 relative lg:inline hidden z-10 transition-colors duration-500 group-hover:text-white font-normal">
        Buy Now
      </span>
      <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500 ease-in-out left-0"></span>
    </button>
</div>
    </div>
  );
};

export default Bannervid;
