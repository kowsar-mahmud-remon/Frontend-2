/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const SellerProductCard = ({ product, img1 }) => {
  const { img, price, pName, rating, sellerVerify } = product;

  return (
    <div>
      <div className="card w-[222px] bg-base-100 shadow-xl p-3">
        <figure>
          <Image className="" src={img} width={170} height={170} alt="Shoes" />
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
            <Image
              className=""
              src={sellerVerify}
              width="170"
              height="170"
              alt="logo image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProductCard;
