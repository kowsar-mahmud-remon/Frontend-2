import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import logo from "../../assets/images/sellerProfile/logo.png";
import user from "../../assets/images/sellerProfile/sellerImg.png";

function AboutSection(props) {
  return (
    <div className="lg:w-[1090px] mobile:w-[424px]  lg:px-[0] mobile:mt-[24px] mobile:px-[24px] mobile:mx-auto">
      <div className="lg:text-[24px] mobile:text-[16px]">
        <h3 className="font-semibold mb-[16px] mobile:text-[18px] lg:text-[24px]">About</h3>
        <p className="mb-[24px]">
          <Image
            className="inline mr-3"
            src={user}
            width="30"
            height="30"
            alt="Seller image"
          />
          <span className="font-bold ml-[12px] ">Seller Name : </span>Nasir Uddin
        </p>
        <p className="mb-[24px]">
          <FaHome className="text-[#287DF3] inline mr-3 text-[20px] w-[26px] h-[24px]"></FaHome>
          <span className="ml-[12px]">Lives in Mirpur2, Dhaka.</span>
        </p>
        <p>
          <FaThumbsUp className="text-[#287DF3] inline mr-3  w-[26px] h-[24px]"></FaThumbsUp>
          <span className="mr-2 ml-[12px] font-bold">Likes</span>{" "}
          <span>Johir, Abdullah and Sonjoy</span>
          <span className="text-[#287DF3] ml-1">See More</span>
        </p>
        <p className="mt-[25px] ">
          <Image
            className="inline mr-2"
            src={logo}
            width="30"
            height="30"
            alt="Seller image"
          />
          <span className="ml-[12px]">
            Joined for Banglar Big Store in 1 Month Ago
          </span>
        </p>
      </div>
      <div className="mt-[25px]">
        <h3 className="mb-[8px] text-[24px] font-semibold mobile:text-[18px] lg:text-[24px]">Seller ratings</h3>
        <p className="text-[15px] text-[#686868] mb-[16px]">
          Based on 12 ratings
        </p>
        <div className="rating flex">
          <FaStar className="text-[#FB641B] mr-[4px] w-[32px] h-[30px]"></FaStar>
          <FaStar className="text-[#FB641B] mr-[4px] w-[32px] h-[30px]"></FaStar>
          <FaStar className="text-[#FB641B] mr-[4px] w-[32px] h-[30px]"></FaStar>
          <FaStar className="text-[#FB641B] mr-[4px] w-[32px] h-[30px]"></FaStar>
          <FaStar className="text-[#F2F3F7] mr-[4px] w-[32px] h-[30px]"></FaStar>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
