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
      <div className="card lg:w-[222px] lg:h-[440px] mobile:w-[180px] mobile:h-[400px] bg-base-100 shadow-xl">
        <Image className="lg:w-[220px] lg:h-[154px] mobile:w-[180px] mobile:h-[126px]" src={img} width="220" height="154" alt="Shoes" />

        <div className="card-body px-[16px] inline">
          <h2 className="card-title text-[#FB641B] font-bold lg:text-[20px] mobile:text-[18px] inline-block mr-[4px] mb-[10px]">
            Tk {price}{" "}
          </h2>
          <span className="text-[#707070] lg:text-[12px] mobile:text-[10px]">
            <span className="line-through">{OriginalPrice}</span>
            {productOff}
          </span>
          <p className="font-bold lg:text-[16px] mobile:text-[14px] mb-[10px]">{pName}</p>
          <div className="flex justify-between items-center">
            <div className="flex lg:bg-[#FB641B] mobile:bg-[#026C51] text-white  rounded p-[2px] mr-[8px] mobile:w-[35px] mobile:h-[20px] ">
              <span className="text-[12px] ">{rating}</span>
              <FaStar className="my-auto ml-2 " ></FaStar>
            </div>
            <span className="lg:text-[12px] mobile:text-[11px] text-[#686868] inline-block my-auto ml-2 ">
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
              <button className="btn bg-[#FB641B] lg:w-[186px] mobile:w-[140px] mobile:px-[4px] mobile:py-[9px]">
                <span className="text-white mr-[4px] mobile:text-[13px]">Add to Cart</span>
                <FaShoppingCart className="text-white lg:h-[20px] lg:w-[24px] mobile:h-[18px] mobile:w-[22px] "></FaShoppingCart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProductCard;
