/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import dot from "../../assets/images/sellerProfile/dot.png";

function BackButton(props) {
  return (
    <div className="lg:hidden mb-[16px] pl-[22px] md:hidden mobile:block text-[#001E00] text-[24px]    cursor-pointer ">
      <Link href="#">
        <FaArrowLeft className="inline"></FaArrowLeft>
      </Link>
      <p className="inline ml-[12px] font-semibold mobile:text-[18px]">
        Seller Profile
      </p>
    </div>
  );
}

export default BackButton;
