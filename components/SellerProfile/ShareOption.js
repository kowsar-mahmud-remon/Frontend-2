import Image from "next/image";
import React from "react";
import follow from "../../assets/images/sellerProfile/follow.png";
import message from "../../assets/images/sellerProfile/message.png";
import share from "../../assets/images/sellerProfile/share.png";
import dot from "../../assets/images/sellerProfile/dot.png";
import logo from "../../assets/images/sellerProfile/small.png";
import { FaWifi, FaShare, FaCopy, FaExclamationTriangle } from "react-icons/fa";
import { BiBlock } from "react-icons/bi";
import Link from "next/link";

function ShareOption(props) {
  return (
    <div className="flex   max-w-[1175px]  justify-end lg:mt-[24px] text-[24px]">
      <div className=" flex justify-center items-center w-full  mt-4">
        {/* follow 100k+ */}
        <div className="bg-[#F2F3F7] px-[10px] py-[10px] text-center rounded-xl lg:text-[18px] mobile:text-[14px] lg:mr-[16px] mobile:mr-[16px] mobile:font-semibold cursor-pointer">
          <Link href="#">
            <FaWifi className="inline rotate-45  text-[#287DF3]"></FaWifi>
            <span className="ml-3 fw-semibold mobile:text-[14px] lg:text-[18px]">
              Follow 100K+
            </span>
          </Link>
        </div>

        {/* share */}
        <div className="bg-[#F2F3F7]  px-[20px] py-[10px] text-center rounded-xl lg:text-[18px]  mobile:text-[14px] mobile:font-semibold cursor-pointer">
          <Link href="#">
            <FaShare className="inline text-[#287DF3]"></FaShare>
            <span className="ml-3 fw-semibold mobile:text-[14px] lg:text-[18px]">
              Share
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-[16px] ">
        {/* The button to open modal */}
        <label htmlFor="my-modal" className="btn bg-transparent border-none ">
          <Image
            className="inline "
            src={dot}
            alt="follow image"
            width="6"
            height="15"
          />
        </label>

        {/* modal for edit */}
        <input
          type="checkbox"
          id="my-modal"
          className="modal-toggle bg-trasparent border-none"
        />
        <div className="modal fixed inset-0   h-screen bg-black  bg-opacity-60 ">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2 border-none bg-transparent"
            >
              ✕
            </label>
            <ul className="list-none lg:text-[24px] mobile:text-[14px]">
              <li className="flex mb-[15px]">
                <Image
                  className="mr-[30px]"
                  src={logo}
                  width={48}
                  height={48}
                  alt="logo"
                />
                <span className="">Seller Profile</span>
              </li>
              <li className="mb-[20px]">
                <Link href="#">
                  <FaWifi className="inline rotate-45 mr-[45px] ml-[10px] "></FaWifi>
                  <span className="">Follow</span>
                </Link>
              </li>
              <li className="mb-[20px]">
                <Link href="#">
                  <FaShare className="inline  mr-[45px] ml-[10px]"></FaShare>
                  <span className="">Share</span>
                </Link>
              </li>
              <li className="mb-[20px]">
                <Link href="#">
                  <FaCopy className="inline  mr-[45px] ml-[10px]"></FaCopy>
                  <span className="">Copy Link</span>
                </Link>
              </li>
              <li className="mb-[20px]">
                <Link href="#">
                  <BiBlock className="inline  mr-[45px] ml-[10px]"></BiBlock>

                  <span className="">Not interested</span>
                </Link>
              </li>
              <li className="mb-[20px]">
                <Link href="#">
                  <FaExclamationTriangle className="inline  mr-[45px] ml-[10px]"></FaExclamationTriangle>
                  <span className="">Report</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareOption;
