import React from "react";
import img1 from "../../assets/images/generalShopping/quotation.png";
import img2 from "../../assets/images/generalShopping/ReadyShip.png";
import img3 from "../../assets/images/generalShopping/LogisticsServices.png";
import banner from "../../assets/images/images.jpeg";
import Image from "next/image";
import Link from "next/link";

const TopSection = () => {
  return (
    <div className="h-[300px] md:h-[200px] relative text-white">
      <Image
        src={banner}
        alt=""
        className="absolute h-[300px] md:h-[200px] w-full"
      />
      <div className="absolute h-[300px] md:h-[200px] w-full flex flex-col justify-center items-center">
        <div className="w-11/12 bg-white rounded-xl">
          <div className="md:flex items-center">
            <Link
              href="/"
              className="flex items-center px-0 md:px-6 border-r-[1px] h-[80px] flex-1"
            >
              <div className="h-10 ml-4 md:ml-0">
                <Image src={img1} width={40} height={40} alt="" />
              </div>
              <div className="ml-[19px]">
                <h4 className="text-base font-semibold leading-[22px] cursor-pointer text-[#000]">
                  Request for Quotation
                </h4>
                <p className="text-[#767676] text-xs leading-[17px] mt-1">
                  One request, multiple quotes
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center px-0 md:px-6 border-r-[1px] h-[80px] flex-1"
            >
              <div className="h-10 ml-4 md:ml-0">
                <Image src={img2} width={40} height={40} alt="" />
              </div>
              <div className="ml-[19px]">
                <h4 className="text-base font-semibold leading-[22px] cursor-pointer text-[#000]">
                  Ready to Ship
                </h4>
                <p className="text-[#767676] text-xs leading-[17px] mt-1">
                  Order directly with fast dispatch
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center px-0 md:px-6 h-[80px] flex-1"
            >
              <div className="h-10 ml-4 md:ml-0">
                <Image src={img3} width={40} height={40} alt="" />
              </div>
              <div className="ml-[19px]">
                <h4 className="text-base font-semibold leading-[22px] cursor-pointer text-[#000]">
                  Logistics services
                </h4>
                <p className="text-[#767676] text-xs leading-[17px] mt-1">
                  Reliable shipping by ocean and air
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
// https://www.alibaba.com/
