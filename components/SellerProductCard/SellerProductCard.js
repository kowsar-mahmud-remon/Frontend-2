/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const SellerProductCard = ({ product, img1 }) => {
  const { img, price, pName, rating, sellerVerify, productOff, OriginalPrice } =
    product;

  return (
    <div>
      <div className="card  h-full bg-base-100 shadow-xl">
        {/* <Image className="w-full" src={img} width="220" height="154" alt="Shoes" /> */}
        <label className="flex ">
          <Image
            className="w-full"
            src="/image 6.png"
            width={220}
            height={154}
            alt=""
          ></Image>
          <div className="sellerloveButton absolute  right-[10%] mt-[10%] w-[28px] h-[28px] flex items-center justify-center rounded-full">
            <FaHeart className=" text-[#F2F2F2]  w-[17px] h-[16px] hover:fill-[#FB641B]  "></FaHeart>
          </div>
        </label>

        <div className="card-body  px-[16px] inline">
          <h2 className="card-title text-[#FB641B] font-bold lg:text-[20px] mobile:text-[18px] inline-block mr-[4px] mb-[10px]">
            Tk {price}{" "}
          </h2>
          <span className="text-[#707070] lg:text-[12px] mobile:text-[10px]">
            <span className="line-through">{OriginalPrice}</span>
            {productOff}
          </span>
          <p className="font-bold lg:text-[16px] mobile:text-[14px] mb-[10px]">
            {pName}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex lg:bg-[#FB641B] mobile:bg-[#026C51] text-white  rounded p-[2px] mr-[8px] mobile:w-[35px] mobile:h-[20px] ">
              <span className="text-[12px] ">{rating}</span>
              <FaStar className="my-auto ml-2 "></FaStar>
            </div>
            <span className="lg:text-[12px] mobile:text-[11px] text-[#686868] inline-block my-auto ml-2 ">
              24 Ratings & 5 Reviews
            </span>
          </div>
          <div className="mt-[14px]">
            <Image
              className=" h-full  overflow-auto"
              src={sellerVerify}
              width="79"
              height="24"
              alt="logo image"
            />
            <div className="mt-[38px] mb-[16px]  ">
              <button className=" btn bg-[#FB641B] w-full mobile:px-[4px] mobile:py-[9px] text-white mr-[4px] mobile:text-[8px] lg:text-[16px]">
                Add to Cart
                <FaShoppingCart className="text-white lg:h-[20px] lg:w-[24px] mobile:h-[10px] mobile:w-[10px] inline"></FaShoppingCart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProductCard;
