// Bag.jsx
import React, { useState } from 'react';
import Header from './component/Home/Header';
import Footer from './component/Home/Footer';
import { useFavorite } from './component/Detail/Favouriteprovider';
import { FaArrowDown } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { useNavigate } from 'react-router-dom';
import {
  Adidascollection,
  pumacollection,
  Nikecollection,
  Jordancollection,
  Trending,
  newArrivals
} from './component/brands/brandcollection';
import {
  Mencollection,
  WomenCollection,
  KidCollection,
  Training
} from './component/gendercategory/collection';


// Formatter for Nepali Rupee
const nepaliFormatter = new Intl.NumberFormat('ne-NP', {
  style: 'currency',
  currency: 'NPR',
  maximumFractionDigits: 0
});

const showNotification = () => {
  toast.success("🛍️ Sign Up Or SignIn First!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "colored",
    className: "toast-black", // Apply your custom class
  });
};

const Bag = () => {
  const { favorites } = useFavorite();

  // Combine all collections into one array
  const alldata = [
    ...Adidascollection,
    ...pumacollection,
    ...Nikecollection,
    ...Jordancollection,
    ...Trending,
    ...newArrivals,
    ...Mencollection,
    ...WomenCollection,
    ...KidCollection,
    ...Training
  ];
  
  

  // Filter favorite items based on the `favorites` list
  const favoriteItems = alldata.filter(item => favorites.includes(item.id));

  // Initialize quantities (default to 1 for each favorite item)
  const [quantities, setQuantities] = useState(
    favoriteItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  // Calculate the total price based on the items and quantities
  const total = favoriteItems.reduce((sum, item) => {
    const price = Number(item.Price) || 0;
    const qty = quantities[item.id] || 1;
    return sum + price * qty;
  }, 0);

  // State to manage promo code input visibility
  const [isPromoVisible, setIsPromoVisible] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  const handlePromoCodeToggle = () => {
    setIsPromoVisible(prev => !prev);
  };

  const handlePromoSubmit = () => {
    alert(`Promo code applied: ${promoCode}`);
    setPromoCode('');
  };
  const Navigate = useNavigate()
  return (
    <>
      <Header />
      <main className="w-full  sm:flex  gap-6 p-8 bg-gray-50">
        <div className="  w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-700 mb-6">Your Bag</h1>

          {favoriteItems.length > 0 ? (
            favoriteItems.map(item => (
              <div
                key={item.id}
                className="border-b border-gray-200 py-4  flex flex-col items-center justify-between"
              >
                <FavList
                  item={item}
                  quantities={quantities}
                  setQuantities={setQuantities}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No Item In Your Bag</p>
          )}
        </div>

        <div className="w-full md:w-1/3  h-auto md:h-[80vh] bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Summary</h2>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Do You Have A Promo Code?
            </h3>
            <FaArrowDown
              onClick={handlePromoCodeToggle}
              className="cursor-pointer text-blue-600"
            />
            {isPromoVisible && (
              <div className="md:mt-4 mt-5">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  value={promoCode}
                  onChange={e => setPromoCode(e.target.value)}
                  className="border p-3 rounded-md w-full text-gray-700 mt-2"
                />
                <button
                  onClick={handlePromoSubmit}
                  className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Apply Promo Code
                </button>
              </div>
            )}
          </div>

          <div className="mb-4 flex justify-between   text-gray-700">
            <span>SubTotal</span>
            <span>{nepaliFormatter.format(total)}</span>
          </div>
          <div className="mb-4 flex justify-between text-gray-700">
            <span>Estimated Shipping & Handling</span>
            <span>Free</span>
          </div>
          <div className="mb-4 flex justify-between text-gray-700">
            <span>Estimated Tax</span>
            <span>-</span>
          </div>
          <div className="mb-4 flex justify-between text-gray-700">
            <span>
              Discount Total <span className="text-green-600">10%</span>
            </span>
            <span>{nepaliFormatter.format(total * 0.1)}</span>
          </div>

          <div className="flex justify-center text-gray-600 mt-4">
            <p className="text-center">
              You qualify for Free Shipping as a Member!{' '}
              <span className="text-blue-500 cursor-pointer" onClick={()=>{
                Navigate('/signup')
              }}>Join us</span> or{' '}
              <span onClick={()=>{
                Navigate('/signin')
              }} className="text-blue-500 cursor-pointer">Sign In</span>
            </p>
          </div>
          <div className="mt-3 flex justify-center">
            <button onClick={showNotification} className="hover:bg-white hover:text-black transition-all delay-100 duration-150 ease-in border border-black p-3 rounded-md bg-black text-white">
              CheckOut!
            </button>
          </div>
          <p className="font-medium text-sm mt-3">
            By selecting one of the above payment options, you confirm that you
            have read, understand, and agree to Nike’s Terms of Use, Terms of
            Sale and Return Policy, and acknowledge Nike’s Privacy Policy.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};


// `FavList` Component for displaying each favorite item
export const FavList = ({ item, quantities, setQuantities }) => {
  const increment = () => {
    setQuantities(prev => ({
      ...prev,
      [item.id]: Math.min(10, (prev[item.id] || 1) + 1),
    }));
  };

  const decrement = () => {
    setQuantities(prev => ({
      ...prev,
      [item.id]: Math.max(1, (prev[item.id] || 1) - 1),
    }));
  };

  return (
    <div className="flex items-center w-full">
      <div className="w-1/4 flex justify-center">
        <img
          src={item.image[0]}
          alt={item.name}
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>
      <div className="w-2/4 pl-6">
        <h2 className="md:text-lg text-sm font-semibold text-gray-800">{item.name}</h2>
        <p className="text-sm md:text-lg  text-gray-500">{item.gender}</p>
      </div>
      <div className="w-1/4 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <button
            onClick={increment}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          >

            +
          </button>
          <span>{quantities[item.id]}</span>
          <button

            onClick={decrement}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          >
            -
          </button>
        </div>
        <p className="md:text-xl font-semibold text-gray-800">
          {nepaliFormatter.format(item.Price)}
        </p>
      </div>
    </div>
  );
};

export default Bag;
