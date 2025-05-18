import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { SiNike, SiPuma, SiJordan, SiAdidas } from 'react-icons/si'

const Brand = () => {
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const brandData = [
    { icon: <SiAdidas size={40} />, path: '/adidas', alt: 'Adidas' },
    { icon: <SiJordan size={40} />, path: '/jordan', alt: 'Jordan' },
    { icon: <SiNike size={40} />, path: '/nike', alt: 'Nike' },
    { icon: <SiPuma size={40} />, path: '/puma', alt: 'Puma' },
  ]

  return (
    <motion.div
      ref={ref}
      className="h-[20vh] w-screen mt-9"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <h1 className="lg:text-3xl mb-3 ml-9 mt-[1vh] lg:mt-[10vh] font-roboto text-2xl font-normal">
        Shop From Top Brands
      </h1>

      {/* mobile view */}
      <div className="w-[95%] mx-auto flex justify-between items-center h-[12vh] md:hidden">
        {brandData.map(({ icon, alt, path }) => (
          <div key={alt} onClick={() => navigate(path)} className="cursor-pointer">
            {icon}
          </div>
        ))}
      </div>

      {/* desktop view */}
      <div className="w-full h-full md:flex gap-10 ml-7 md:justify-center hidden">
        {brandData.map(({ icon, alt, path }, index) => (
          <motion.div
            key={alt}
            onClick={() => navigate(path)}
            className="md:w-[20vw] md:h-[12vh] pt-4 w-[15vw] h-[4vh] p-2 cursor-pointer hover:bg-[#F5F5F5] border border-[#DDDDDD] rounded-md flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1, duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Brand
