import Image from "next/image";
import React from "react";
import visa from "/assets/payment/visa.png";
import bkash from "/assets/payment/bkash.png";
import style from "/styles/componentsStyles/box-shaddow.module.css";

const myPaymentOption = () => {
  return (
    <div className="w-[924px] mx-auto mb-12">
      <h2 className="text-[#FB641B] text-2xl mt-6 mb-8 font-semibold">
        My Payment Option
      </h2>
      <div className={`rounded-lg bg-[#FFFFFF] p-6 ${style.boxshaddow} mb-6 h-[210px]`}>
        <p className="text-[#001E00] text-base font-medium mb-8">
          Credit & Debit Card
        </p>
        <div className="grid grid-cols-3 items-center">
          <p className="text-[#686868] text-base font-normal">Card Number</p>
          <p className="text-[#686868] text-base font-normal text-center">
            Expiry Date
          </p>
          <p></p>
        </div>
        <div className="divider m-0 p-0"></div>
        <div className="mt-2 grid grid-cols-3 items-center">
          <div className="flex items-center">
            <Image className="w-16" src={visa} alt="" />
            <p className="ml-4  font-medium text-[#001E00]">425120******1452</p>
          </div>
          <p className="text-center font-medium text-[#001E00]">Expires 02/27</p>
          <p className="text-end text-[#287DF3] text-sm font-medium cursor-pointer">
            Delete
          </p>
        </div>
      </div>
      <div className={`rounded-lg bg-[#FFFFFF] p-6 ${style.boxshaddow} h-[210px]`}>
        <p className="text-[#001E00] text-base font-medium mb-8">
          Other Payment Methods
        </p>
        <div className="grid grid-cols-3 items-center">
          <p className="text-[#686868] text-base font-normal">Card Number</p>
          <p className="text-[#686868] text-base font-medium text-center">
          </p>
          <p></p>
        </div>
        <div className="divider m-0 p-0"></div>
        <div className="mt-2 grid grid-cols-3 items-center">
          <div className="flex items-center">
            <Image className="w-16" src={bkash} alt="" />
            <p className="ml-4  font-medium text-[#001E00] ">014*******452</p>
          </div>
          <p></p>
          <p className="text-end text-[#287DF3] text-sm font-medium cursor-pointer">
            Delete
          </p>
        </div>
      </div>
      <div className="mt-8">
        <button className="bg-[#FB641B] px-6 py-3 text-sm text-white font-normal rounded-lg ">Add New Payment Account</button>
      </div>
    </div>
  );
};

export default myPaymentOption;
