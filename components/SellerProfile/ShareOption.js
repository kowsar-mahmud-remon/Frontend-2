import Image from "next/image";
import React from "react";
import follow from "../../assets/images/sellerProfile/follow.png";
import message from "../../assets/images/sellerProfile/message.png";
import share from "../../assets/images/sellerProfile/share.png";
import dot from "../../assets/images/sellerProfile/dot.png";
import logo from "../../assets/images/sellerProfile/small.png";
import { FaWifi,FaShare,FaCopy,FaExclamationTriangle } from "react-icons/fa";
import { BiBlock, } from "react-icons/bi";
import Link from "next/link";

function ShareOption(props) {
  return (
    <div className="flex lg:justify-around mobile:justify-evenly  lg:w-[1090px] mobile:w-[376px] mx-auto  lg:mt-[24px] text-[24px]">
      <div className=" flex justify-center items-center  lg:w-[540px] mobile:w-[376px] mx-auto mt-4">
        {/* follow 100k+ */}
        <div className="bg-[#F2F3F7] lg:w-[160px] mobile:w-[151px] h-[48px] py-[10px] text-center rounded-xl lg:text-[18px] mobile:text-[16px] lg:mr-[16px] mobile:mr-[16px] mobile:font-semibold cursor-pointer">
          <Link href="#">
          <FaWifi className="inline rotate-45  text-[#287DF3]"></FaWifi>
          <span className="ml-3 fw-semibold mobile:text-[16px]">
            Follow 100K+
          </span>
          </Link>
        </div>

        {/* share */}
        <div className="bg-[#F2F3F7] w-[160px] h-[48px] p-[10px] text-center rounded-xl text-[18px] mobile:w-[97px] mobile:text-[16px] mobile:font-semibold cursor-pointer">
        <Link href="#">
        <FaShare className="inline text-[#287DF3]"></FaShare>
          <span className="ml-3 fw-semibold mobile:text-[16px]">
            Share
          </span>
          </Link>
        </div>
      </div>
      <div className="mt-[16px]  lg:block">
        
        {/* The button to open modal */}
<label htmlFor="my-modal" className="btn bg-transparent border-none"><Image
          className="inline "
          src={dot}
          alt="follow image"
          width="6"
          height="15"
        /></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle bg-trasparent border-none" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2 border-none bg-transparent">✕</label>
    <ul className="list-none text-[24px] ">
      <li className="flex mb-[15px]">
        <Image className="mr-[30px]" src={logo} width={48} height={48}alt="logo" />
        <span className="">Seller Profile</span>
        </li>
        <li className="mb-[20px]">
          <Link href='#'>
          <FaWifi className="inline rotate-45 mr-[45px] ml-[10px] "></FaWifi>
          <span className="">Follow</span>
          </Link>
        </li>
        <li className="mb-[20px]">
          <Link href='#'>
          <FaShare className="inline  mr-[45px] ml-[10px]"></FaShare>
          <span className="">Share</span>
          </Link>
        </li>
        <li className="mb-[20px]">
          <Link href='#'>
          <FaCopy className="inline  mr-[45px] ml-[10px]"></FaCopy>
          <span className="">Copy Link</span>
          </Link>
        </li>
        <li className="mb-[20px]">
          <Link href='#'>
            <BiBlock className="inline  mr-[45px] ml-[10px]"></BiBlock>
          
          <span className="">Not interested</span>
          </Link>
        </li>
        <li className="mb-[20px]">
          <Link href='#'>
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
