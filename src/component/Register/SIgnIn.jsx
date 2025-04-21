import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { FaGoogle, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const SignIn = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex-grow flex items-center justify-center bg-gray-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-full max-w-md p-6 bg-white rounded-2xl shadow-md mt-5 mb-5"
          >
            <h1 className="text-2xl font-bold text-center mb-1">SoleVague</h1>
            <p className="text-center text-gray-600 mb-6">Your Perfect Footwear Companion</p>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg shadow transition">
                <FaGoogle />
                Sign in with Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow transition">
                <FaFacebookF />
                Sign in with Facebook
              </button>
              <button className="w-full flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg shadow transition">
                <FaEnvelope />
                Sign in with Email
              </button>
            </div>

            <div className="my-6 text-center text-gray-500">or sign in with your account</div>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="name@example.com"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="••••••••"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Sign In
              </button>
            </form>
          </motion.div>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default SignIn;