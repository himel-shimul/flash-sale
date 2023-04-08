import React from "react";
import { AiFillStar } from "react-icons/ai";
import hoodie from '../../../../assets/hoodie.png'

const TrendingProductCard = ({ product }) => {
  const { img, category, name, rating, price, offer_price, type } = product;

  return (
    <div className="lg:flex text-center p-2 border my-3 bg-white">
      <p className="text-sm rounded-sm text-red-600 bg-red-200 inline h-min p-1 ">
        {type}
      </p>
      <img src={hoodie} className="max-[640px]:w-full" alt="" />
      <div>
        <div className="flex my-2">
          <AiFillStar className="text-[#F6C441]"></AiFillStar>
          <AiFillStar className="text-[#F6C441]"></AiFillStar>
          <AiFillStar className="text-[#F6C441]"></AiFillStar>
          <AiFillStar className="text-[#F6C441]"></AiFillStar>
          <AiFillStar className="text-[#F6C441]"></AiFillStar>
          <p className="text-xs ms-1 text-gray-500">{rating}</p>
        </div>
        <p className="text-base font-semibold lg:w-4/6 text-left my-2">{name}</p>
        <div className="flex items-center my-2">
          <p className="text-lg font-bold text-[#5B9982]">${offer_price}</p>
          <sub className="text-sm line-through subscript text-gray-500">
            {price}
          </sub>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductCard;
