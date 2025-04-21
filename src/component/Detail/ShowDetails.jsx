import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../App.css"
import {
  Mencollection,
  WomenCollection,
  KidCollection,
  Training
} from "../gendercategory/collection";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Shoesize from "./shoesize";
import Scroller from "../Home/Scroller";
import { useProductcontext } from "../Home/Context";
import 'react-toastify/dist/ReactToastify.css';

import { useFavorite } from "./Favouriteprovider.jsx";
import {
  Nikecollection,
  pumacollection,
  Adidascollection,
  Jordancollection,
  allshoes,
  newArrivals,
  Trending,
} from "../brands/brandcollection.js";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../App.css"
const ShowDetails = () => {
  const { id } = useParams();
  const { addfavorite, favorites } = useFavorite();

  const shoeslist = [
    ...Trending,
    ...newArrivals,
    ...Mencollection,
    ...WomenCollection,
    ...KidCollection,
    ...Training,
    ...Nikecollection,
    ...pumacollection,
    ...Adidascollection,
    ...Jordancollection,
    ...allshoes,
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

  const nepaliFormatter = new Intl.NumberFormat("ne-NP", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigits: 0,
  });


  const [shoe, setShoe] = useState(null);
  const [shoeimage, setShoeImage] = useState("");
  const { Arrivals } = useProductcontext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const foundShoe = shoeslist.find((item) => item.id === id);

    if (foundShoe) {
      setShoe(foundShoe);
      setShoeImage(foundShoe.image?.[0] || "");
      setLoading(false);
    } else {
      setShoe(null);
    }
  }, [id]);

  const addtoBag = () => {
    if (!favorites.includes(shoe.id)) {
      const updatedFavorites = [...favorites, shoe.id];
      addfavorite(updatedFavorites);
      toast.success("Added to bag!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        className: "toast-black",
      });
    }
  };

  if (!shoe) {
    return (
      <div>
        <Header />
        <div className="w-screen h-screen flex justify-center items-center text-2xl font-bold">
          Shoe not found!
        </div>
        <Footer />
      </div>
    );
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <div className="shoedetails w-screen mt-3">
        <div className="details w-[90%] h-[110vh] mx-auto flex border">
          <div className="imgscrolls h-full flex flex-col items-center w-[24%] mt-[7vh]">
            {shoe.image?.map((img, index) => (
              <img
                className="w-[39%] h-[13%] cursor-pointer mt-3"
                key={index}
                onMouseEnter={() => setShoeImage(img)}
                src={img}
                alt="shoe"
              />
            ))}
          </div>

          <div className="productimage w-[50%]">
            {shoeimage ? (
              <img className="mt-5" src={shoeimage} alt="Selected Shoe" />
            ) : (
              <p>No Image Available</p>
            )}
          </div>

          <div className="productdetails mt-1 w-[26%] h-screen p-4 flex flex-col ml-[-15px]">
            <div className="flex flex-col justify-center items-start ml-[12px] w-[110%]">
              <h1 className="mb-[-24px] text-[18px] text-xl capitalize font-semibold">
                {shoe.name}
              </h1>
              <h2 className="text-lg mb-[-24px] text-gray-600 font-normal">
                {shoe.gender}
              </h2>
              <h2 className="text-lg font-normal">
                {nepaliFormatter.format(shoe.Price)}
              </h2>
            </div>

            <div className="shoesize flex flex-col">
              <Shoesize />
              <div className="fav w-full h-[10vh] mb-3 flex flex-col gap-2">
                <div
                  onClick={addtoBag}
                  className="cursor-pointer ml-3.5 border p-2 border-black h-[8vh] w-[16] rounded-lg flex justify-center items-center bg-black text-white hover:bg-gray-700"
                >
                  <h1 className="text-white font-medium">
                    Add To Bag
                  </h1>
                </div>
                <div
                  onClick={showNotification}
                  className="cursor-pointer ml-3.5 border p-2 border-black h-[8vh] w-[16] rounded-lg flex justify-center items-center bg-white text-black"
                >
                  <h1 className=" font-semibold" >
                  Favorite                  </h1>
                </div>
              </div>
              <div className="features ml-3 mt-4">
                <h1 className="mt-9 underline font-medium">Features</h1>
                {shoe.features.split(",").map((feat, index) => (
                  <li className="font-normal" key={index}>
                    {feat}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Scroller Blocks={Arrivals} title="Fresh Drop" link="newarrival" />
        </div>
      </div>
      <Footer />


    </div>
  );
};

export default ShowDetails;
