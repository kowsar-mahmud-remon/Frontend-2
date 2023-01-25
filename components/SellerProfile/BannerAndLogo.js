import Image from "next/image";
import React from "react";
import banner from "../../assets/images/sellerProfile/banner.png";
import sm from "../../assets/images/sellerProfile/small.png";
import logo from "../../assets/images/sellerProfile/logo.png";

const BannerAndLogo = () => {
  return (
    <div className="relative">
      <Image
        className=""
        src={banner}
        width="1224"
        height="251"
        alt="banner image"
      />
      <Image
        className="absolute   lg:top-[166px] lg:left-[525px] top-[175px] left-[525px]"
        src={logo}
        width="170"
        height="170"
        alt="logo image"
      />
    </div>
  );
};

export default BannerAndLogo;
