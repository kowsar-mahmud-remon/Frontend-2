/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const SellerProductCard = ({ product, img1 }) => {
  const { img, price, pName, rating, sellerVerify, productOff, OriginalPrice } =
    product;

  return (
    <div>
      <div className="card w-[222px] h-[440px] bg-base-100 shadow-xl">
        <Image className="" src={img} width="220" height="154" alt="Shoes" />

        <div className="card-body px-[16px] inline">
          <h2 className="card-title text-[#FB641B] font-bold text-[20px] inline-block mr-[4px] mb-[10px]">
            Tk {price}{" "}
          </h2>
          <span className="text-[#707070] text-[12px]">
            <span className="line-through">{OriginalPrice}</span>
            {productOff}
          </span>
          <p className="font-bold text-[16px] mb-[10px]">{pName}</p>
          <div className="flex justify-between ">
            <div className="flex bg-[#FB641B] text-white  rounded p-[2px] text-[12px] mr-[8px]">
              <span>{rating}</span>
              <FaStar className="my-auto ml-2"></FaStar>
            </div>
            <span className="text-[13px] text-[#686868] inline-block my-auto ml-2 ">
              24 Ratings & 5 Reviews
            </span>
          </div>
          <div className="mt-[14px]">
            <Image
              className=""
              src={sellerVerify}
              width="79"
              height="24"
              alt="logo image"
            />
            <div className="mt-[38px] mb-[16px]">
              <button className="btn bg-[#FB641B]">
                <span className="text-white mr-[4px]">Add to Cart</span>
                <FaShoppingCart className="text-white h-[20px] w-[24px]"></FaShoppingCart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProductCard;
