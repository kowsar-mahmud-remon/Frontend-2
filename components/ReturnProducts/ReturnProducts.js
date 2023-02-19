import Image from "next/image";
import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import potol from "../../assets/images/image 88.png";
import vector from "../../assets/images/Vector1.png";

const ReturnProducts = () => {
  return (
    <section className="bg-[#FFFFFF] min-h-screen pt-10 mb-80 w-full">
      <div className="w-full">
        <div className="w-full">
          <div>
            <div className="text-lg text-[#686868] breadcrumbs">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Orders & Reviews</a>
                </li>
                <li className="text-[#001E00] font-medium">Returns Product</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-[#FB641B] font-semibold text-2xl">
              Returns Product
              </h1>
            </div>
          </div>
          <div className=" flex lg:justify-between flex-wrap gap-2 z-10 mt-8 w-full"></div>
          <div className="">
            <div
              className={`rounded-lg  pb-10 ${style.boxshaddow} bg-[#FFFFFF]  `}
            >
              <div className="p-6 ">
                <div className="mb-4">
                  <p className="text-lg font-medium w-full text-[#001E00]">
                  Return Details
                  </p>
                </div>
                <div className="flex flex-wrap">
                  <div className="mr-[34px]">
                    <Image className={`lg:w-[314px] md:w-[314px] w-full h-[252px] ${style.boxbuttonshadow} rounded`} src={potol} width={314} alt=""></Image>
                  </div>
                  <div>  
                    <div className="flex items-center mb-4 lg:mt-0 md:mt-0 mt-14">
                      <h2 className="text-lg mr-4 font-semibold text-[#001E00] ">Local Title:</h2>
                      <p className=" text-lg text-[#001E00]">Potol (Pointed Gourd) 500 ±30 gm</p>
                    </div>
                    <div className="flex items-center mb-4">
                      <h2 className="text-lg mr-4 font-semibold text-[#001E00]">Order Number:</h2>
                      <p>54872</p>
                    </div>
                    <div className="flex items-center mb-4">
                      <h2 className="text-lg mr-4 font-semibold text-[#001E00]">Category:</h2>
                      <p>Kacha Bazar</p>
                    </div>
                    <div className="flex items-center mb-4">
                      <h2 className="text-lg mr-4 font-semibold text-[#001E00]">Price:</h2>
                      <p>Tk 60</p>
                    </div>
                    <div className="flex items-center mb-4">
                      <h2 className="text-lg mr-4 font-semibold text-[#001E00]">Quantity:</h2>
                      <p>1 kg</p>
                    </div>
                    <div className="flex items-center">
                      <h2 className="text-lg mr-4 font-semibold text-[#001E00]">Delivered Date:</h2>
                      <p>03 Feb 2023</p>
                    </div>
                  </div>
                  <div className="lg:block hidden">
                    <div className="border-[2px] border-[#B7B7B7] h-[262px] mx-24">
                      
                    </div>
                  </div>
                  <div className="lg:mt-0 md:mt-0 mt-14">
                    <h2 className="text-lg font-semibold text-[#001E00] mb-3">Why Cancel This Order</h2>
                    <p className="mb-5 text-base text-[#001E00] ">Delivery time is too long</p>
                    <h1 className="mb-4 text-[#001E00] font-semibold text-lg">Cancellation Message</h1>
                    <div className="border border-[#B7B7B7] rounded p-4 lg:w-[380px]">
                      <p className="text-base text-[#686868]">I changed my mind” is the top reason for cancelling an order, according to Statista. High shipping costs and long delivery time are other popular reasons.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[839px] w-full bg-[#EAF2FE] border border-[#287DF3] mx-auto px-6 py-8 flex items-center lg:mt-[328px] md:mt-[328px] mt-8">
                  <Image className="w-5 h-5" src={vector} width={20} alt=""></Image>
                  <p className="text-[#001E00] font-semibold text-base ml-[18px]">Notice: Delivery of notice will not cancel the order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnProducts;
