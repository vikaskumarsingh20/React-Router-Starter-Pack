/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch } from 'react-redux';
import { remove } from '../../../redux/slices/CartSlice';
import { toast } from "react-toastify";

function EcartItem({item, itemIndex }) {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };
  return (
    <div className="w-[100%] md:w-[60%] flex flex-col p-2">
      <div className=" ">
        <div className="w-[60%] flex flex-col">
          <img src={item.image}
         />
        </div>

        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">
            {item.description}
          </h1>
          <div className="font-bold text-lg text-green-600">
            <p> ${item.price}</p>
            <div
              onClick={removeFromCart}
              className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
            >
              {/* <FcDeleteDatabase/> */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="text-red-800 group-hover:text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default EcartItem