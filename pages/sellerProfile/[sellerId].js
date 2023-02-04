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
      <div className="lg:w-[1224px] mobile:w-[424px]  mx-auto shadow-2xl lg:mt-[116px] mobile:mt-[54px] rounded-xl ">
        {/* for small device */}
        <BackButton></BackButton>
        {/* banner and logo */}
        <BannerAndLogo></BannerAndLogo>
        {/* Name and about section */}
        <NameAndAbout name="Banglar Big Store" isVerified="true"></NameAndAbout>
        {/* share options */}
<<<<<<< HEAD
        <ShareOption></ShareOption>
        <hr className="text-[#686868] border-t-2 mt-[26px]  mb-[32px] w-[1090px] h-4 mx-auto mobile:hidden block" />
=======
        <div className="flex justify-around">
          <div className="grid grid-cols-3 gap-0 w-3/5 mx-auto mt-4">
            <div className="bg-[#F2F3F7] w-[208px] h-[48px] p-2 text-center rounded-xl text-[18px]">
              <Image
                className="inline"
                src={follow}
                alt="follow image"
                width="18"
                height="15"
              />
              <span className="ml-3 fw-semibold">Followers 100K+</span>
            </div>
            <div className="bg-[#F2F3F7] w-[208px] h-[48px] p-2 text-center rounded-xl text-[18px]">
              <Image
                className="inline"
                src={message}
                alt="follow image"
                width="18"
                height="15"
              />
              <span className="ml-3 fw-semibold">Message</span>
            </div>
            <div className="bg-[#F2F3F7] w-[208px] h-[48px] p-2 text-center rounded-xl text-[18px]">
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
          <div className="mt-[25px] mr-[30px]">
            <Image
              className="inline"
              src={dot}
              alt="follow image"
              width="6"
              height="15"
            />
          </div>
        </div>
        <hr className="text-[#686868] border-t-2  my-10 w-[1090px] h-4 mx-auto" />
>>>>>>> b48f79b8c18ca84f4a9a2806d746d8da8514e337

        {/* about section */}
        <AboutSection></AboutSection>

        {/* products store */}
        <ProductStore></ProductStore>
      </div>
    </>
  );
};

export default seller;
