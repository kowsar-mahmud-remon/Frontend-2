/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaStar } from "react-icons/fa";

const SellerProductCard = ({ product }) => {
  const { img, price, pName, rating, sellerVerify } = product;
  return (
    <div>
      <div className="card w-[222px] bg-base-100 shadow-xl p-3">
        <figure>
          <img className="" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#FB641B] font-bold">Tk {price}</h2>
          <p className="font-bold">{pName}</p>
          <div className="flex justify-between">
            <div className="flex bg-[#FB641B] text-white p-1 rounded my-2">
              <span>{rating}</span>
              <FaStar className="my-auto ml-2"></FaStar>
            </div>
            <span className="text-[13px] text-[#686868] inline-block my-auto ml-2">
              24 Ratings & 5 Reviews
            </span>
          </div>
          <div>
            <img src={sellerVerify} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProductCard;
