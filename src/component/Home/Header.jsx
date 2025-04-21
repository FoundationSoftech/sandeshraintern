import React, { useState, useEffect } from 'react';
import logo from '../../../image/logo/brandlogos.png';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { useFavorite } from '../Detail/Favouriteprovider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../App.css"
import {
  Adidascollection,
  pumacollection,
  Nikecollection,
  Jordancollection,
} from '../brands/brandcollection';
import {
  WomenCollection,
  Mencollection,
  KidCollection,
  Training,
} from '../gendercategory/collection';

const Header = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorite();
  const [showFavorites, setShowFavorites] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCartPrompt, setShowCartPrompt] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); 

  const alldata = [
    ...Adidascollection,
    ...pumacollection,
    ...Nikecollection,
    ...Jordancollection,
    ...WomenCollection,
    ...Mencollection,
    ...KidCollection,
    ...Training,
  ];
  const showNotification = () => {
    toast.success("Login Or SignUp First!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      className: "toast-black",
    });
  };


  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const toggleCartPrompt = () => {
    if (!loggedIn) {
      setShowCartPrompt((prev) => !prev); 
    } else {
        alert('Cart opened!');
    }
  };

  
  
  

  return (
    <>
      <div className="header flex w-screen h-[8vh] justify-center items-center">

        <div className="logo w-1/3 h-full" onClick={() => navigate('/')}>
          <div className="w-full h-full logos flex items-center bg-white justify-center">
            <img className="h-[110px] w-[110px] ml-4" src={logo} alt="Logo" />
          </div>
        </div>


        <div className="menu w-1/3 h-full bg-white mb-3">
          <ul className="menu-list h-full w-full flex gap-6 justify-center items-center">
            <li className="cursor-pointer text-md">
              <NavLink className="font-normal" to="/">Home</NavLink>
            </li>
            <li className="cursor-pointer text-md dropdown">
              <NavLink  to="/men" className="font-normal dropdown-toggle">
                Our Collection
              </NavLink>
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h4>Shoe Brands</h4>
                  <ul>
                    <li><NavLink className="font-normal" to="/puma">Puma</NavLink></li>
                    <li><NavLink  className="font-normal" to="/adidas">Adidas</NavLink></li>
                    <li><NavLink className="font-normal" to="/nike">Nike</NavLink></li>
                    <li><NavLink className="font-normal" to="/jordan">Jordan</NavLink></li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h4>Collections</h4>
                  <ul>
                    <li className=''><NavLink className="font-normal" to="/women">Women Collection</NavLink></li>
                    <li><NavLink className="font-normal" to="/men">Men Collection</NavLink></li>
                    <li><NavLink className="font-normal" to="/kid">Kid Collection</NavLink></li>
                    <li><NavLink className="font-normal" to="/gym">Gym & Sport Collection</NavLink></li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h4>New & Now</h4>
                  <ul>
                    <li><NavLink className="font-normal" to="/newarrival">New Arrival</NavLink></li>
                    <li><NavLink className="font-normal" to="/trending">Trending Now</NavLink></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="cursor-pointer text-md">
              <NavLink className="font-normal" to="/about">About Us</NavLink>
            </li>
            <li className="cursor-pointer text-md">
              <NavLink className="font-normal" to="/contact">Find Us</NavLink>
            </li>
          </ul>
        </div>

<div className="flex gap-5 items-center justify-center sub-menu bg-white w-1/3 h-full">
          <div className="w-1/2 h-full gap-4 flex justify-center items-center">

            <div className="relative user-menu">

              <i
                className="cursor-pointer fa-solid fa-user text-xl hover:text-orange-300 transition-all delay-100"
                onClick={toggleUserMenu}
              ></i>
              {showUserMenu && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border shadow-md rounded p-3 z-50">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
                      <i className="fa-solid fa-user-plus"></i>
                      <NavLink to="/signup">Join Member</NavLink>
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
                      <i className="fa-solid fa-right-to-bracket"></i>
                      <NavLink to="/signin">Sign In</NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            
            <i onClick={showNotification}
              className="cursor-pointer fa-solid  fa-star  text-xl hover:text-orange-300 transition-all delay-100"
              
            ></i>
           
                
                
              
            

            
            <div  onClick={toggleFavorites} className="relative">
              {favorites.length >0? <p className='absolute text-white  right-2  text-[10px] mr-[-1px] bottom-[10px] cursor-pointer'>{favorites.length}</p>:<p></p>}
              <i
              
                className="cursor-pointer fa-solid fa-cart-shopping text-xl hover:text-orange-300 transition-all delay-100"
                onClick={toggleFavorites}
              ></i>
              {showFavorites && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white border shadow-lg rounded p-4 z-50">
                  
                  {favorites.length === 0 ? (
                    <p className="text-sm text-gray-500">No Item In Your Bag</p>
                  ) : (
                    <ul className="text-sm space-y-2">
                      {alldata
                        .filter((item) => favorites.includes(item.id))
                        .map((item) => (
                          <li
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => navigate(`/details/${item.id}`)}
                            key={item.id}
                          >
                            <img
                              src={item.image[0]}
                              alt={item.name}
                              className="w-8 h-8 object-cover rounded"
                            />
                            <span>{item.name}</span>
                            
                          </li>
                        ))}
                    </ul>
                  )}
                  
                  {favorites.length>0 ? <p className='cursor-pointer' onClick={()=>{
                    navigate('/bag')
                  }}  >View Bag</p>: ""}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;