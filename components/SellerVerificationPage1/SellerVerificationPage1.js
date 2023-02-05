import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img from "../../assets/images/Seller_Verification_page/image 175.png";
import SellerGuidelineImg from "../../assets/images/Seller_Verification_page/Rectangle 607.png";
import logo from "../../assets/images/logo/logo.png";

import SellerVerificationPageSideNav from "../SellerVerificationPageSideNav/SellerVerificationPageSideNav";
import { MdArrowForwardIos } from "react-icons/md";

const SellerVerificationPage1 = () => {
  return (
    <div className="flex max-w-[1896px] mt-[33px]">
      <div className="mt-[45px] ">
        <div className="mx-6 mb-8">
          <Link href="/" className="">
            <Image src={logo} alt="img" width={224} />
           
          </Link>
        </div>
        <div className=" w-[282px] m-6">
          <SellerVerificationPageSideNav ></SellerVerificationPageSideNav>
        </div>
      </div>
      <div className="">
        <div className="w-full">
          <Image className=" mr-4" src={img} alt="" width={1426} height={123} />

          <div className=" p-6 mt-12">
            <p className=" text-2xl text-[#FB641B] font-medium">
              New Seller Verification
            </p>
            <p className=" text-base mt-2 font-normal text-[#686868]">
              YOUR STORE IS INACTIVE UNTIL YOU COMPLETE THE STEPS BELOW
            </p>
{/* for progress bar */}
<div className="flex items-center my-8">
            <div className="bg-[#FB641B] text-white border border-white rounded-3xl px-1 text-[5px] md:text-[12px]">
              1
            </div>
            <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] px-5 md:px-20 rounded-xl">
              Add Shop Name
            </div>
            <div className=" text-[5px] md:text-[12px] px-1 rounded-lg border border-black">
              2
            </div>
            <div className=" text-[5px] md:text-[12px] border border-black px-5 md:px-20 rounded-xl">
            Add Shop Address
            </div>
            <div className=" text-[5px] md:text-[12px] px-1 rounded-lg border border-black">
              3
            </div>
            <div className=" text-[5px] md:text-[12px] border border-black px-5 md:px-20 rounded-xl">
            Verify ID & Bank
            </div>
            <div className=" text-[5px] md:text-[12px] px-1 rounded-lg border border-black">
              4
            </div>
            <div className=" text-[5px] md:text-[12px] border border-black px-5 md:px-20 rounded-xl">
            Add Product
            </div>
            {/* for profile info */}
          </div>
            <div className="">
              <p className=" text-2xl text-[#686868] font-medium mt-10">
                Profile Information
              </p>

              <div className="grid grid-cols-2 gap-4 items-center justify-between flex-nowrap">
                <div className="mt-10">
                  <label className="label">
                    <span className="label-text text-base font-normal">
                      Your Shop Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your shop name"
                    className="input input-bordered w-full h-[72px]"
                  />
                </div>

                <div className=" mt-10">
                  <label className="label">
                    <span className="label-text text-base font-normal">
                      Phone Number*
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="+880 123 456 789"
                    className="input input-bordered w-full h-[72px]"
                  />
                </div>

                <div className=" mt-10">
                  <label className="label">
                    <span className="label-text text-base font-normal">
                      Email Address*
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Verified Email"
                    className="input input-bordered w-full h-[72px]"
                  />
                </div>
              </div>
              <button className="btn w-[369px] h-[72px] bg-[#FB641B] mt-10 text-white">
                Continue
              </button>
            </div>

            <div className=" mt-[78px]">
              <div className="flex justify-between">
                <p className="text-2xl  font-medium">Seller Guideline</p>
                <Link href="" className="flex items-center">
                  <p className="text-[#287DF3] mr-2">Visit</p>
                  <MdArrowForwardIos className="text-[#287DF3]"></MdArrowForwardIos>
                </Link>
              </div>
              <p className="text-[#686868] mt-9">
                Join courses and tutorials to grow your business online
              </p>
              <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="">
                  <Image
                    className=" mr-4"
                    src={SellerGuidelineImg}
                    alt=""
                    width={448}
                    height={154}
                  />
                  <p className=" text-base text-[#686868] mt-2">
                    Seller signup rejection reasons
                  </p>
                </div>
                <div className="">
                  <Image
                    className=" mr-4"
                    src={SellerGuidelineImg}
                    alt=""
                    width={448}
                    height={154}
                  />
                  <p className=" text-base text-[#686868] mt-2">
                    Seller signup rejection reasons
                  </p>
                </div>
                <div className="">
                  <Image
                    className=" mr-4"
                    src={SellerGuidelineImg}
                    alt=""
                    width={448}
                    height={154}
                  />
                  <p className=" text-base text-[#686868] mt-2">
                    Seller signup rejection reasons
                  </p>
                </div>
              </div>
            </div>

            <div className=" mt-[78px] grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="">
                <div className="flex justify-between">
                  <p className="text-2xl font-medium">Facebook Group</p>
                  <Link href="" className="flex items-center">
                    <p className="text-[#287DF3] mr-2">Visit</p>
                    <MdArrowForwardIos className="text-[#287DF3]"></MdArrowForwardIos>
                  </Link>
                </div>
                <p className=" mt-9 text-lg text-[#686868]">
                  Join the Banglar Big Store Seller Facebook group for exclusive
                  tips on selling more.{" "}
                  <Link href="" className="text-[#287DF3]">
                    Learn More
                  </Link>
                </p>
              </div>

              <div className="">
                <div className="flex justify-between">
                  <p className="text-2xl font-medium">Live Chat</p>
                  <Link href="" className="flex items-center">
                    <p className="text-[#287DF3] mr-2">Visit</p>
                    <MdArrowForwardIos className="text-[#287DF3]"></MdArrowForwardIos>
                  </Link>
                </div>
                <p className=" mt-9 text-lg text-[#686868]">
                  Directly chat with our Seller Support Team regarding any
                  questions or concerns.{" "}
                  <Link href="" className="text-[#287DF3]">
                    Learn More
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerVerificationPage1;
