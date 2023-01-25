import React from "react";

import BannerAndLogo from "../../components/SellerProfile/BannerAndLogo";
import NameAndAbout from "../../components/SellerProfile/NameAndAbout";
import ShareOption from "../../components/SellerProfile/ShareOption";
import AboutSection from "../../components/SellerProfile/AboutSection";
import ProductStore from "../../components/SellerProfile/ProductStore";

const seller = () => {
  return (
    <>
      <div className="w-[1224px] mx-auto shadow-2xl mt-[116px] rounded-xl ">
        {/* banner and logo */}
        <BannerAndLogo></BannerAndLogo>
        {/* Name and about section */}
        <NameAndAbout></NameAndAbout>
        {/* share options */}
        <ShareOption></ShareOption>
        <hr className="text-[#686868] border-t-2 mt-[26px]  mb-[32px] w-[1090px] h-4 mx-auto" />

        {/* about section */}
        <AboutSection></AboutSection>

        {/* products store */}
        <ProductStore></ProductStore>
      </div>
    </>
  );
};

export default seller;
