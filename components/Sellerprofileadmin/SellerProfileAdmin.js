import React from "react";

import BannerAndLogo from "../../components/SellerProfile/BannerAndLogo";
import NameAndAbout from "../../components/SellerProfile/NameAndAbout";
import ShareOption from "../../components/SellerProfile/ShareOption";
import AboutSection from "../../components/SellerProfile/AboutSection";
import ProductStore from "../../components/SellerProfile/ProductStore";

import ProfileBreadcrumb from "./ProfileBreadcrumb";
import BackButton from "./BackButton";

function SellerProfileAdmin(props) {
  return (
    <div className="p-[24px]">
      <ProfileBreadcrumb></ProfileBreadcrumb>
      <div className=" flex justify-center items-center">
        <div className="max-w-[1426px] mobile:w-full shadow-2xl lg:mt-[32px] mobile:mt-[20px] rounded-xl ">
          <BackButton></BackButton>
          {/* banner and logo */}
          <BannerAndLogo></BannerAndLogo>
          {/* Name and about section */}
          <NameAndAbout
            name="Banglar Big Store"
            isVerified="true"
          ></NameAndAbout>
          {/* share options */}
          <ShareOption></ShareOption>
          <hr className="text-[#686868] border-t-2 mt-[26px]  mb-[32px] max-w-[1090px] mobile:hidden md:block mx-auto" />

          {/* about section */}
          <AboutSection></AboutSection>

          {/* products store */}
          <ProductStore></ProductStore>
        </div>
      </div>
    </div>
  );
}

export default SellerProfileAdmin;
