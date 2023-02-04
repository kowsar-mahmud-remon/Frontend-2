import Image from "next/image";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import dot from "../../assets/images/sellerProfile/dot.png";

function BackButton(props) {
  return (
    <div className="flex justify-between items-center  lg:hidden md:hidden mt-[54px] mobile:mb-[24px] px-[24px]">
      <div className="flex justify-start items-center text-[#001E00] text-[24px]    cursor-pointer mr-[227px]  ">
        <FaArrowLeft></FaArrowLeft>
        <p className=" ml-[12px] font-semibold mobile:text-[18px]">
          Seller Profile
        </p>
      </div>
      <div className="lg:mt-[16px] ">
        <Image
          className="inline mb-[0px] "
          src={dot}
          alt="follow image"
          width="6"
          height="15"
        />
      </div>
    </div>
  );
}

export default BackButton;
