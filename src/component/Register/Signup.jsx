import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { Truck, RefreshCcw, Gift } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
 const navigate=  useNavigate()

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <div>
      <Header />
      <form>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-screen h-screen bg-[#F5F5F5]"
          >
            <motion.h2
              variants={childVariants}
              className="bg-black text-white text-center mb-[20px] h-[50px] flex items-center justify-center"
            >
              "Sign Up & Enjoy These Benefits"
            </motion.h2>
            <motion.div
            
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden w-full h-[7%] md:flex mb-5"
            >
              <motion.div variants={childVariants} className="w-1/3 h-full flex flex-col justify-center items-center">
                <div className="mb-[-12px] ">
                  <Gift className="text-pink-700 text-center" />
                </div>
                <h2 className="ml-2 text-sm">
                  <span className="font-bold">MemberOnly Deals –</span>{' '}
                  <span className="font-normal">Special discounts just for signed-up users</span>
                </h2>
              </motion.div>
              <motion.div variants={childVariants} className="w-1/3 h-full flex flex-col justify-center items-center">
                <div className="mb-[-12px]">
                  <RefreshCcw className="text-pink-700 text-center" />
                </div>
                <h2 className="ml-2 text-sm">
                  <span className="font-bold">Quick Checkout –</span>{' '}
                  <span className="font-normal">Special discounts just for signed-up users</span>
                </h2>
              </motion.div>
              <motion.div variants={childVariants} className="w-1/3 h-full flex flex-col justify-center items-center">
                <div className="mb-[-12px]">
                  <Truck className="text-pink-700 text-center" />
                </div>
                <h2 className="ml-2 text-sm ok-black">
                  <span className="font-bold">Easy Returns & Exchanges –</span>{' '}
                  <span className="font-normal">Hassle-free product returns and swaps.</span>
                </h2>
              </motion.div>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-screen bg-white">
              <motion.div
                variants={childVariants}
                className="w-[95%] mx-auto relative flex gap-3 bg-white justify-center"
              >
                <motion.input
                  variants={childVariants}
                  type="text"
                  required
                  placeholder="first name"
                  className="bg-[#F5F5F5] focus:bg-white w-[40%] ml-[2%] h-[50px] placeholder:text-sm placeholder:text-black placeholder:absolute placeholder:focus:top-0"
                />
                <motion.input
                  variants={childVariants}
                  type="text"
                  required
                  placeholder="last name"
                  className="bg-[#f5f5f5] focus:bg-white w-[40%] h-[50px] placeholder:text-sm placeholder:text-black placeholder:absolute placeholder:focus:top-0"
                />
              </motion.div>
              <motion.input
                variants={childVariants}
                type="email"
                required
                placeholder="Email Address"
                className="focus:bg-white m-2 ml-[12.5%] bg-[#F5F5F5] w-[77%] placeholder:text-sm placeholder:text-black placeholder:absolute placeholder:focus:top-0"
              />
              <motion.input
                variants={childVariants}
                type="number"
                required
                placeholder="Phone Number"
                className="focus:bg-white m-2 ml-[12.5%] bg-[#F5F5F5] w-[77%] placeholder:text-sm placeholder:text-black placeholder:absolute placeholder:focus:top-0"
              />
              <motion.input
                variants={childVariants}
                type="number"
                required
                placeholder="ZIP CODE"
                className="focus:bg-white m-2 ml-[12.5%] bg-[#F5F5F5] w-[77%] placeholder:text-sm placeholder:text-black placeholder:absolute placeholder:focus:top-0"
              />
              <motion.input
                variants={childVariants}
                type="password"
                required
                placeholder="Password"
                className="mb-[6vh] focus:bg-white m-2 ml-[12.5%] bg-[#F5F5F5] w-[77%] placeholder:text-sm placeholder:text-black placeholder:absolute placeholder:focus:top-0"
              />
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-start ml-[12%] flex-col"
            >
              <motion.div variants={childVariants}>
                <input type="checkbox" className="w-[19px] mr-2 m-3" />
                <span className="text-sm">
                  I agree to receive emails from Foot Locker about new products, offers, and events.
                </span>
              </motion.div>
              <motion.div variants={childVariants}>
                <span className="text-sm">
                  By joining Member, I agree to the{' '}
                  <NavLink to="/terms" className="text-blue">
                    <span className="text-blue-900">Terms Of Use</span>
                  </NavLink>{' '}
                  and the{' '}
                  <NavLink to="/policy">
                    <span className="text-blue-900">Privacy Policy</span>
                  </NavLink>{' '}
                  and I understand how my personal information will be handled and protected in accordance with these policies.
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full flex flex-col items-center justify-center mt-4"
            >
              <motion.button
                variants={childVariants}
                className="bg-black text-white p-2 border rounded-md m-3"
              >
                Join Now
              </motion.button>
              <motion.p variants={childVariants} className="m-2">
                Sole Vogue Member?{' '}
                <span onClick={()=>{
                  navigate('/signin')
                }} className="text-blue-700 cursor-pointer">Sign In</span>
              </motion.p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </form>
      <Footer />
    </div>
  );
};

export default Signup;