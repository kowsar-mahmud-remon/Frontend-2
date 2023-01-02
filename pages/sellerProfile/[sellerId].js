/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React from "react";
import banner from "../../assets/images/sellerProfile/banner.png";
import logo from "../../assets/images/sellerProfile/logo.png";
import Image from "next/image";
import Navication from "../../components/Navication/Navication";

const seller = () => {
  const router = useRouter();
  const sellerId = router.query.sellerId;

  return (
    <>
      <Navication></Navication>
      <div className="w-3/5 mx-auto shadow-2xl mt-4">
        <div className="relative">
          <Image
            className="absolute top-0 left-0 "
            src={banner}
            width="1224"
            height="251"
            alt="banner image"
          />
          <Image
            className="absolute top-1/2 left-1/2 lg:top-[155px] lg:left-[500px]"
            src={logo}
            width="170"
            height="170"
            alt="logo image"
          />
        </div>
      </div>
    </>
  );
};

export default seller;
