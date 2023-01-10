/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React from "react";
import banner from "../../assets/images/sellerProfile/banner.png";
import logo from "../../assets/images/sellerProfile/logo.png";
import small from "../../assets/images/sellerProfile/smallLogo.png";
import follow from "../../assets/images/sellerProfile/follow.png";
import message from "../../assets/images/sellerProfile/message.png";
import share from "../../assets/images/sellerProfile/share.png";
import dot from "../../assets/images/sellerProfile/dot.png";
import user from "../../assets/images/sellerProfile/sellerImg.png";
import sm from "../../assets/images/sellerProfile/small.png";
import Image from "next/image";
import Navication from "../../components/Navication/Navication";
import { FaHome } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import SellerProductCard from "../../components/SellerProductCard/SellerProductCard";

const products = [
  {
    id: 1,
    img: "https://i.ibb.co/KX74hmC/image-4.png",
    price: "18",
    pName: "Kacha Morich (Green Chili) 250 ±15 gm",
    rating: "3.9",
    sellerVerify: "https://i.ibb.co/TWNnSzq/verified.png",
  },
  {
    id: 2,
    img: "https://i.ibb.co/0JnZRtt/image-6.png",
    price: "160",
    pName: "Tomato (Local) 500 ±30 gm",
    rating: "1.9",
    sellerVerify: "",
  },
  {
    id: 3,
    img: "https://i.ibb.co/MMp8j7R/image-7.png",
    price: "1024",
    pName: "Misti Kumra Fali (Sweet Pumpkin Fali)",
    rating: "4.9",
    sellerVerify: "https://i.ibb.co/TWNnSzq/verified.png",
  },
  {
    id: 4,
    img: "https://i.ibb.co/d4GmF44/image-8.png",
    price: "10018",
    pName: "Misti Kumra Fali (Sweet Pumpkin Fali)",
    rating: "4.9",
    sellerVerify: "https://i.ibb.co/TWNnSzq/verified.png",
  },
];

const seller = () => {
  const router = useRouter();
  const sellerId = router.query.sellerId;

  return (
    <>
 
      <div className="w-3/5 mx-auto shadow-2xl mt-4 rounded-xl">
        {/* banner and logo */}
        <div className="">
          <Image
            className="relative"
            src={banner}
            width="1224"
            height="251"
            alt="banner image"
          />
          <Image
            className="absolute top-1/2 left-1/2 lg:top-[369px] lg:left-[882px]"
            src={logo}
            width="170"
            height="170"
            alt="logo image"
          />
        </div>
        {/* Name and about section */}
        <div className="mt-20 w-full mx-auto text-center">
          <Image
            className="mx-auto"
            src={small}
            width="200"
            height="40"
            alt="small logo image"
          />
        </div>
        {/* share options */}
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
              <span className="ml-3 fw-semibold">Follow 100K+</span>
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

        {/* about section */}
        <div className="w-[1090px] mx-auto flex justify-between">
          <div>
            <h3 className="font-bold mb-3">About</h3>
            <p className="mb-[11px]">
              <Image
                className="inline mr-3"
                src={user}
                width="25"
                height="25"
                alt="Seller image"
              />
              <span className="font-semibold">Seller Name : </span>Nasir Uddin
            </p>
            <p className="mb-[11px]">
              <FaHome className="text-[#287DF3] inline mr-3 text-[20px]"></FaHome>
              Lives in Mirpur2, Dhaka.
            </p>
            <p>
              <FaThumbsUp className="text-[#287DF3] inline mr-3 text-[20px]"></FaThumbsUp>
              <span className="mr-2">Likes</span>{" "}
              <span>Johir, Abdullah and Sonjoy</span>
              <span className="text-[#287DF3] ml-1">See More</span>
            </p>
            <p className="mt-[11px]">
              <Image
                className="inline mr-2"
                src={logo}
                width="30"
                height="30"
                alt="Seller image"
              />
              Joined for Banglar Big Store in 1 Month Ago
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3">Seller ratings</h3>
            <div className="rating flex">
              <FaStar className="text-[#FB641B] mr-2"></FaStar>
              <FaStar className="text-[#FB641B] mr-2"></FaStar>
              <FaStar className="text-[#FB641B] mr-2"></FaStar>
              <FaStar className="text-[#FB641B] mr-2"></FaStar>
              <FaStar className="text-[#F2F3F7] mr-2"></FaStar>
            </div>
            <p>Based on 12 ratings</p>
          </div>
        </div>

        {/* products store */}
        <div className="w-[1090px] mx-auto mb-10">
          <h3 className="font-bold my-6">Product Store</h3>
          <div className="flex ">
            <span className="text-[12px] font-bold">Grocery</span>
            <hr className="text-[#686868] border-t-2 mt-3 w-[958px] h-4 mx-auto" />{" "}
            <span className="text-[12px]">See More</span>
          </div>
          <div className="grid grid-cols-4 w-[960px] mx-auto mb-10">
            {products.map((product) => (
              <SellerProductCard
                key={product.id}
                product={product}
              ></SellerProductCard>
            ))}
          </div>
          <div className="flex ">
            <span className="text-[12px] font-bold">Kachabazar</span>
            <hr className="text-[#686868] border-t-2 mt-3 w-[958px] h-4 mx-auto my-4" />{" "}
            <span className="text-[12px]">See More</span>
          </div>
          <div className="grid grid-cols-4 w-[960px] mx-auto pb-10">
            {products.map((product) => (
              <SellerProductCard
                key={product.id}
                product={product}
              ></SellerProductCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default seller;
