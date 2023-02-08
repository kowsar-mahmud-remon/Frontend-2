import React from "react";

import BannerAndLogo from "../../components/SellerProfile/BannerAndLogo";
import NameAndAbout from "../../components/SellerProfile/NameAndAbout";
import ShareOption from "../../components/SellerProfile/ShareOption";
import AboutSection from "../../components/SellerProfile/AboutSection";
import ProductStore from "../../components/SellerProfile/ProductStore";
import BackButton from "../../components/SellerProfile/BackButton";

const seller = () => {
  return (
    <>
      <div className="lg:w-[1224px] mobile:w-[424px]  lg:mx-auto mobile:mx-auto shadow-2xl lg:mt-[116px] mobile:mt-[54px] rounded-xl ">
        {/* for small device */}
        <BackButton></BackButton>
        {/* banner and logo */}
        <BannerAndLogo></BannerAndLogo>
        {/* Name and about section */}
        <NameAndAbout name="Banglar Big Store" isVerified="true"></NameAndAbout>
        {/* share options */}
        <ShareOption></ShareOption>
        <hr className="text-[#686868] border-t-2 mt-[26px]  mb-[32px] w-[1090px] h-4 mx-auto mobile:hidden block" />

        {/* about section */}
        <AboutSection></AboutSection>

        {/* products store */}
        <ProductStore></ProductStore>
      </div>
    </>
  );
};

export default seller;
