import React from "react";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import './FlashProductCard.css'

const FlashProductCard = ({ product }) => {
  const { img, category, name, rating, price, offer_price, type } = product;
  return (
    <div className="border group relative m-2 p-1 w-[100%] mx-3">
      <p className="text-sm rounded-sm text-red-600 bg-red-200 inline p-1 ">{type}</p>
      <img className="w-[280px] hover:-scale-x-100" src={img} alt="" />
      <p className="text-xs text-gray-500 my-2">{category}</p>
      <p className="text-base font-semibold w-5/6 my-2">{name}</p>
      <div className="flex my-2">
      <AiFillStar className="text-[#F6C441]"></AiFillStar>
      <AiFillStar className="text-[#F6C441]"></AiFillStar>
      <AiFillStar className="text-[#F6C441]"></AiFillStar>
      <AiFillStar className="text-[#F6C441]"></AiFillStar>
      <AiFillStar className="text-[#F6C441]"></AiFillStar>
      <p className="text-xs ms-1 text-gray-500">{rating}</p>
      </div>
      <div className="flex items-center my-2">
        <p className="text-lg font-bold text-[#5B9982]">${offer_price}</p>
        <sub className="text-sm line-through subscript text-gray-500">{price}</sub>
      </div>
      <div className="flex absolute bottom-16 bg-white invisible group-hover:visible left-0 w-full h-16 justify-around items-center brdr p-2">
        <AiOutlineEye className=" border text-4xl hover:text-white hover:bg-slate-950 p-1 rounded-full"></AiOutlineEye>
        <FaRegHeart className=" border text-4xl hover:text-white hover:bg-slate-950 p-2 rounded-full"></FaRegHeart>
        <BsArrowDownUp className=" border text-4xl hover:text-white hover:bg-slate-950 p-2 rounded-full"></BsArrowDownUp>
      </div>
      <button className="text-center mt-3 text-[#5B9982] py-3 rounded w-full bg-[#cfe4d8] hover:text-white hover:bg-[#5B9982] ">Add To Cart <HiOutlineShoppingBag  className="inline"/></button>
    </div>
  );
};

export default FlashProductCard;
