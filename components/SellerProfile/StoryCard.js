/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

function StoryCard({ story }) {
  const { video, price, pName, rating, sellerVerify, total } = story;
  return (
    <div className="card lg:w-[342px] mobile:w-[122px]  bg-base-100 shadow-xl">
      <iframe
        className="rounded-t-lg lg:w-[342px] lg:h-[461px] mobile:w-[122px] mobile:h-[163px]"
        width="342"
        height="461"
        src={video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="card-body mobile:p-[6px] lg:p-[32px]">
        <div className="flex justify-between">
          <p className="text-[#FB641B] lg:text-[18px] mobile:text-[10px]">Tk{price}</p>
          <Image src={sellerVerify} className="mobile:w-[60px] mobile:h-[12px] lg:w-[106px] lg:h-[20px]" width={106} height={20} />
        </div>

        <p className="lg:text-[16px] mobile:text-[7px] w-[176px]">{pName}</p>
        <div className="flex justify-start items-center ">
          <div className="flex bg-[#026C51] text-white  rounded p-[2px] lg:text-[12px] mobile:text-[5px] mr-[8px]">
            <span>{rating}</span>
            <FaStar className="my-auto ml-2"></FaStar>
          </div>
          <span className=" lg:text-[13px] mobile:text-[7px] text-[#686868] inline-block my-auto ml-2 ">
            24 Ratings & 5 Reviews
          </span>
        </div>
        <button className="text-center mt-[16px] text-[#FB641B] mobile:text-[9px] lg:text-[18px]">Visit Now</button>
      </div>
    </div>
  );
}

export default StoryCard;