import Image from "next/image";
import React from "react";
import follow from "../../assets/images/sellerProfile/follow.png";
import message from "../../assets/images/sellerProfile/message.png";
import share from "../../assets/images/sellerProfile/share.png";
import dot from "../../assets/images/sellerProfile/dot.png";

function ShareOption(props) {
  return (
    <div className="flex justify-around w-[1090px] mx-auto mt-[24px] text-[24px]">
      <div className="grid grid-cols-3 gap-0 w-[540px] mx-auto mt-4">
        <div className="bg-[#F2F3F7] w-[160px] h-[48px] p-[10px] text-center rounded-xl text-[18px]">
          <Image
            className="inline"
            src={follow}
            alt="follow image"
            width="18"
            height="15"
          />
          <span className="ml-3 fw-semibold">Follow 100K+</span>
        </div>
        <div className="bg-[#F2F3F7] w-[160px] h-[48px] p-[10px] text-center rounded-xl text-[18px]">
          <Image
            className="inline"
            src={message}
            alt="follow image"
            width="18"
            height="15"
          />
          <span className="ml-3 fw-semibold">Message</span>
        </div>
        <div className="bg-[#F2F3F7] w-[160px] h-[48px] p-[10px] text-center rounded-xl text-[18px]">
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
      <div className="mt-[16px] ]">
        <Image
          className="inline"
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
