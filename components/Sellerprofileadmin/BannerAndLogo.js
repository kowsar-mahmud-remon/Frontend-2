import Image from "next/image";
import React, { useState } from "react";
import banner from "../../assets/images/sellerProfile/banner.png";
import banner2 from "../../assets/images/sellerProfile/Rectangle 362.png";

import logo from "../../assets/images/sellerProfile/Ellipse 31.png";
import logo1 from "../../assets/images/sellerProfile/Vector.png";

const BannerAndLogo = () => {
  // for background image
  const [updateBackgroundImage, setUpdateBackgroundImage] = useState(null);
  function handleUpdateBG(event) {
    console.log(event.target.files[0]);
    setUpdateBackgroundImage(event.target.files[0]);
  }
  // for profile image
  const [updateProfile, setUpdateProfile] = useState(null);
  function handleUpdateProfile(event) {
    console.log(event.target.files[0]);
    setUpdateProfile(event.target.files[0]);
  }
  return (
    <div className="relative w-full  lg:px-[0px] px-[24px]">
      {/* for desktop */}

      {updateBackgroundImage ? (
        <Image
          className=" mobile:h-[141px]  lg:h-[342px]"
          src={URL.createObjectURL(updateBackgroundImage)}
          width="1426"
          height="342"
          alt="banner image"
        />
      ) : (
        <Image
          className=" mobile:h-[141px]  lg:h-[342px]"
          src={banner2}
          width="1426"
          height="342"
          alt="banner image"
        />
      )}

      <label className="absolute  right-[20px] bottom-[16px]   cursor-pointer">
        <div className=" flex justify-center max-w-[221px] h-[40px] bg-black rounded-lg   px-[12px] py-[8px] bg-opacity-60">
          <div className="flex justify-center items-center gap-[11px]">
            <Image src="/upload.png" width={27} height={18} alt=""></Image>
            <p className="text-[#FFFFFF] text-[16px] ">Upload Cover Photo</p>
          </div>
          <input type="file" className="hidden" onChange={handleUpdateBG} />
        </div>
      </label>

      <div className="absolute top-50 left-[18%] transform -translate-y-1/2 -translate-x-1/2 border-[2px] border-[#287DF3] rounded-full bg-white xl:w-[214px] xl:h-[214px] lg:w-[170px] lg:h-[170px]">
        <div className="relative h-full w-full">
          <div className="">
            {updateProfile ? (
              <Image
                src={URL.createObjectURL(updateProfile)}
                className="rounded-full "
                layout="fill"
                objectFit="cover"
                alt="logo image"
              />
            ) : (
              <Image
                src={logo}
                layout="fill"
                objectFit="cover"
                alt="logo image"
              />
            )}
          </div>
          <label>
            <Image
              className="absolute  top-[61%] left-[87%] border-[2px] border-[#287DF3] rounded-full px-[8px] py-[11px] bg-white"
              src={logo1}
              width="42"
              height="42"
              imageSizes
              deviceSizes
              alt="logo image"
            />
            <input
              type="file"
              className="hidden"
              onChange={handleUpdateProfile}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default BannerAndLogo;
