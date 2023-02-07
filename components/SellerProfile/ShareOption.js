import Image from "next/image";
import React from "react";
import follow from "../../assets/images/sellerProfile/follow.png";
import message from "../../assets/images/sellerProfile/message.png";
import share from "../../assets/images/sellerProfile/share.png";
import dot from "../../assets/images/sellerProfile/dot.png";

function ShareOption(props) {
  return (
    <div className="flex lg:justify-around mobile:justify-evenly  lg:w-[1090px] mobile:w-[376px] mx-auto  lg:mt-[24px] text-[24px]">
      <div className=" flex justify-center items-center  lg:w-[540px] mobile:w-[376px] mx-auto mt-4">
        {/* follow 100k+ */}
        <div className="bg-[#F2F3F7] lg:w-[160px] mobile:w-[151px] h-[48px] py-[10px] text-center rounded-xl lg:text-[18px] mobile:text-[16px] lg:mr-[16px] mobile:mr-[16px] mobile:font-semibold cursor-pointer">
          <Image
            className="inline"
            src={follow}
            alt="follow image"
            width="18"
            height="15"
          />
          <span className="ml-3 fw-semibold mobile:text-[16px]">
            Follow 100K+
          </span>
        </div>

        {/* share */}
        <div className="bg-[#F2F3F7] w-[160px] h-[48px] p-[10px] text-center rounded-xl text-[18px] mobile:w-[97px] mobile:text-[16px] mobile:font-semibold cursor-pointer">
          <Image
            className="inline"
            src={share}
            alt="follow image"
            width="20"
            height="15"
          />
          <span className="ml-3 fw-semibold">Share</span>
        </div>
      </div>
      <div className="mt-[16px]  lg:block">
        <Image
          className="inline "
          src={dot}
          alt="follow image"
          width="6"
          height="15"
        />
      </div>
    </div>
  );
}

export default ShareOption;
