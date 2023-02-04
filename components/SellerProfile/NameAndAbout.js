import Image from "next/image";
import React from "react";
import small from "../../assets/images/sellerProfile/smallLogo.png";

function NameAndAbout({ name, isVerified }) {
  return (
    <div className="lg:mt-20 mobile:mt-[62px] mobile:mb-[18px] w-full mx-auto mobile:text-[22px] mobile:px-[24px]">
      <div className="text-center mt-[16px]">
        <span className="text-[24px] font-semibold">{name}</span>
        {isVerified && (
          <Image
            className="inline ml-[20px]"
            src={small}
            width="70"
            height="24"
            alt="small logo image"
          />
        )}
      </div>
    </div>
  );
}

export default NameAndAbout;
