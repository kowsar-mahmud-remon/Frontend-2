import Image from "next/image";
import React from "react";
import banner from "../../assets/images/sellerProfile/banner.png";

import logo from "../../assets/images/sellerProfile/logo.png";

const BannerAndLogo = () => {
  return (
    <div className="relative lg:w-[1224px] lg:h-[251px]  lg:px-[0px] px-[24px]">
      {/* for desktop */}
      <Image
        className="mobile:w-[376px] mobile:h-[141px] lg:w-[1224px] lg:h-[251px]"
        src={banner}
        width="1224"
        height="251"
        alt="banner image"
      />

      <div className="">
        <Image
          className="absolute  lg:w-[170px] lg:h-[170px]   lg:top-[166px] lg:left-[525px] mobile:w-[109px] mobile:h-[109px] mobile:top-[86px] mobile:left-[158px]"
          src={logo}
          width="150"
          height="150"
          imageSizes
          deviceSizes
          alt="logo image"
        />
      </div>
    </div>
  );
};

export default BannerAndLogo;
