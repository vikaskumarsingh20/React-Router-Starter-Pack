/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../../redux/slices/CartSlice";
import { toast } from "react-toastify";

function Eproducts({ post }) {
  const [isSelected, setIsSelected] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  // const { cart } = useSelector((state) => state);
  const { items: cart } = useSelector((state) => state.cart || { items: [] });

  const disPatch = useDispatch();

  const addToCart = () => {
    disPatch(add(post));
    toast.success("Item added to cart");
  };
  
  console.log("Add to cart button" , addToCart);

  const removeFromCart = () => {
    disPatch(remove(post.id));
    toast.error("Item removed from cart");
  }
  return (
    <div
      className={`group hover:scale-105 transition duration-300 ease-in flex flex-col items-center 
      justify-between shadow-md hover:shadow-lg 
      gap-3 p-4 mt-10 ml-5 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div>
        <p className={`text-lg font-semibold text-left truncate w-40 mt-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
          {post.title}
        </p>
      </div>
      <div>
        <p className={`w-40 font-normal text-[10px] text-left ${darkMode ? 'text-gray-300' : 'text-gray-400'}`}>
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className={`h-[180px] ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <img src={post.image} className={`h-full w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`} />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {cart.some((p) => p.id == post.id) ? (
          <button
            className={`text-[12px] border-2 rounded-full font-semibold p-1 px-3 uppercase transition duration-300 ease-in
            ${darkMode ? 'text-white border-white hover:bg-white hover:text-black' : 'text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white'}`}
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className={`text-[12px] border-2 rounded-full font-semibold p-1 px-3 uppercase transition duration-300 ease-in text-nowrap
            ${darkMode ? 'text-white border-white hover:bg-white hover:text-black' : 'text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white'}`}
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Eproducts;
