import Image from "next/image";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import banner from "../../assets/images/Seller_Verification_page/image 175.png";
import SellerGuidelineImg from "../../assets/images/Seller_Verification_page/Rectangle 607.png";
import style from "../../styles/componentsStyles/box-shaddow.module.css";

const addShopName = () => {
  return (
    <div className="lg:max-w-[1426px] md:w-9/12 w-full">
      <div className="mt-[46px] mb-[33px]">
        <Image src={banner} alt=""></Image>
      </div>
      <div className={`${style.boxshaddow} rounded-lg p-6`}>
        <h2 className="text-2xl font-bold text-[#001E00] mb-2">
          New Seller Verification
        </h2>
        <p className="text-[#686868] text-sm font-medium">
          YOUR STORE IS INACTIVE UNTIL YOU COMPLETE THE STEPS BELOW
        </p>

        <div className="mt-9 mb-8 flex">
          <div className="flex items-center font-semibold text-[#001E00]">
            <p className="w-8 h-8 flex justify-center items-center bg-[#FB641B] rounded-full text-white border-white border-2 absolute z-10">
              1
            </p>
            <p className="w-[200px] h-[22px] flex justify-center items-center bg-[#FB641B] left-12 text-white text-xs absolute">
              Add Shop Name
            </p>
            <p className="w-8 h-8 flex justify-center items-center bg-[#FFFFFF] ml-[220px] rounded-full text-[#001E00] border-2 absolute z-10">
              2
            </p>
            <p className="w-[200px] h-[22px] ml-[220px] flex justify-center items-center bg-[#F2F3F7] left-12  text-xs absolute">
              Add Shop Address
            </p>
            <p className="w-8 h-8 flex justify-center items-center bg-[#FFFFFF] ml-[440px] rounded-full text-[#001E00] border-2 absolute z-10">
              3
            </p>
            <p className="w-[200px] h-[22px] ml-[440px] flex justify-center items-center bg-[#F2F3F7] left-12  text-xs absolute">
              Verify ID & Bank
            </p>
            <p className="w-8 h-8 flex justify-center items-center bg-[#FFFFFF] ml-[640px] rounded-full text-[#001E00] border-2 absolute z-10">
              4
            </p>
            <p className="w-[200px] h-[22px] ml-[640px] flex justify-center items-center bg-[#F2F3F7] left-12 text-xs absolute">
              Add Product
            </p>
          </div>
        </div>
        <div className="">
          <h2 className="font-semibold text-[#001E00] text-lg">
            Profile Information
          </h2>
        </div>
        <div>
            <div>
                <label for="">Shop Name*</label>
            </div>
        </div>
      </div>
    </div>
  );
};

export default addShopName;
