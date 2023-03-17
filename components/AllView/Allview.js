import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import instagram from "../../assets/images/instagram-stories 1.png";
import AllviewCard from "./AllviewCard";
const Allview = () => {
  const allProducts = [

    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9',
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: ""
    },

  ]

  const [products, setProducts] = useState([]);
  return (
    <div className="lg:mx-[245px]">
      <div className="mt-[24px]">
        <div className="flex items-center ">
          <div className="">
            <Image className='' src={instagram} alt="img" width={28} height={28} />

          </div>
          <div className="text-[24px] ml-[4px] text-[#FB641B] font-[500] ">
            <h1>Stories</h1>
          </div>
          <div className="bg-[#FB641B]  w-full h-[2px] ml-[8px] md:h-[3px]"></div>
          <div className="text-[16px] ml-[8px] whitespace-nowrap  text-[#FB641B]  font-[500] cursor-pointer">
            <Link href="allview/moreview">More View</Link>{" "}
          </div>
          <div className="ml-[8px]">
            <FaArrowRight className="text-[#FB641B] w-[22px]"></FaArrowRight>
          </div>
        </div>

        <div className="mt-[29px]">
          <div className="grid xxl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-[20px] ">
            {
              allProducts?.slice(0, 12).map((data, index) => (
                <AllviewCard data={data} key={index}></AllviewCard>))
            }
          </div>


        </div>
        <div className="mt-[24px]">
          <div className="flex justify-center">
            <button className="text-[#FB641B] text-[14px] lg:text-[24px] font-[500] lg:w-[235px] w-[100px] lg:h-[72px] h-[40px] border-[2px] border-solid border-[#FB641B] ">Load More</button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Allview;