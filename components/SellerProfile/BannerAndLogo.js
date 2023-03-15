import Image from "next/image";
import React from "react";
import banner from "../../assets/images/sellerProfile/banner.png";

import logo from "../../assets/images/sellerProfile/logo.png";

const BannerAndLogo = () => {
  return (
    <div className="relative w-full  lg:px-[0px] px-[24px]">
      {/* for desktop */}
      <Image
        className=" mobile:h-[141px]  lg:h-[251px]"
        src={banner}
        width="1224"
        height="251"
        alt="banner image"
      />

      <Image
        className="absolute top-50 left-[50%] transform -translate-y-1/2 -translate-x-1/2"
        src={logo}
        width="170"
        height="170"
        imageSizes
        deviceSizes
        alt="logo image"
      />
    </div>
  );
};

export default BannerAndLogo;
