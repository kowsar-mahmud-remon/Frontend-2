import React from "react";

import ProfileBreadcrumb from "./ProfileBreadcrumb";
import BackButton from "./BackButton";
import BannerAndLogo from "./BannerAndLogo";
import NameAndAbout from "./NameAndAbout";

import AboutSection from "./AboutSection";
import ProductStore from "./ProductStore";

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

          <hr className="text-[#686868] border-t-2 mt-[26px]  mb-[32px] max-w-[1294px] mobile:hidden md:block mx-auto" />

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
