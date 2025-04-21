import React, { useRef } from 'react'
import Adidas from '../../../brandimage/adidas.png'
import Jordan from '../../../brandimage/jordan.png'
import Nike from '../../../brandimage/nike.png'
import Puma from '../../../brandimage/puma.png'
import { useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const Brand = () => {
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
const brandData = [
    { img: Adidas, path: '/adidas', alt: 'Adidas' },
    { img: Jordan, path: '/jordan', alt: 'Jordan' },
    { img: Nike, path: '/nike', alt: 'Nike', customStyle: 'w-[10vw] h-[10vh] mb-3' },
    { img: Puma, path: '/puma', alt: 'Puma', customStyle: 'w-[7vw] h-[7vh] mb-5' },
  ]

  return (
    <motion.div
      ref={ref}
      className='h-[20vh] w-screen mt-9'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <h1 className='text-3xl mb-3 ml-9 mt-[12vh] font-roboto font-normal'>
        Shop From Top Brands
      </h1>
      <div className='w-full h-full flex gap-10 ml-7 justify-center'>
        {brandData.map((brand, index) => (
          <motion.div
            key={brand.alt}
            onClick={() => navigate(brand.path)}
            className='w-[20vw] h-[12vh] cursor-pointer hover:bg-[#F5F5F5] border border-[#DDDDDD] rounded-md flex justify-center items-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1, duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={brand.img}
              alt={brand.alt}
              className={`object-fill ${brand.customStyle || ''}`}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Brand
