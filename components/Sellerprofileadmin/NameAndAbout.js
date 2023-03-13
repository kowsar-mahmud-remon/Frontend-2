import Image from "next/image";
import React from "react";
import small from "../../assets/images/sellerProfile/smallLogo.png";

function NameAndAbout({ name, isVerified }) {
  return (
    <div className="lg:mt-20 mobile:mt-[62px] mobile:mb-[18px] w-full mobile:text-[22px]  ml-[10%]">
      <div className="text-start  text-[24px]  mt-[100px] ">
        <p className="">Shop Name: <span className="font-semibold">{name}</span></p>
        <div className="flex items-center mt-[16px]">
        <p>Shop Status:</p>
        {isVerified && (
          
          <Image
            className="inline ml-[20px] w-[100px] h-[30px]  "
            src={small}
            width="70"
            height="24"
            alt="small logo image"
          />
        )}
        </div>
      </div>
    </div>
  );
}

export default NameAndAbout;
