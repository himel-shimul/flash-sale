import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import TrendingProductCard from "../TrendingProductCard/TrendingProductCard";

const FashionWomen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("trending-products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="lg:w-[545px]">
      <div className="lg:flex items-center justify-between my-2">
        <h2 className="text-2xl my-7">
          <strong>Fashion</strong> For Women
        </h2>
        <div className="flex items-center my-2 mr-2">
          <FiArrowLeft className="text-xl mr-1"></FiArrowLeft>
          <BsFillArrowRightCircleFill className="text-2xl"></BsFillArrowRightCircleFill>
        </div>
      </div>
      {products.map((product) => (
        <TrendingProductCard
          key={product.id}
          product={product}
        ></TrendingProductCard>
      ))}
      <button className="text-center mt-3 text-white bg-black py-3 rounded w-full bg-[#cfe4d8]">
        View All{" "}
      </button>
    </div>
  );
};

export default FashionWomen;
