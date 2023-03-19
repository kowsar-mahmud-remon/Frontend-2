import { useRef } from "react";
import {
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

import MoreViewCard from "./MoreViewCard";

const MoreView = () => {
  const slideRef = useRef(null);
  const allProducts = [
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: "4.9",
      totalrating: "24",
      totalreview: "5",
      sellerverifaction: "",
      view: "",
      follow: "",
    },
  ];

    const handleClickUp = () => {
       slideRef.current.scrollBy({
         top: -764,
         behavior: "smooth",
       });
  }
    const handleClickDown = () => {
       slideRef.current.scrollBy({
         top: 764,
         behavior: "smooth",
       });
  }

  return (
    <div className="flex justify-center mt-[24px] gap-[16px] h-screen">
      <div ref={slideRef} className="grid grid-cols-1  overflow-auto gap-[24px] scrollbar-hide">
        {allProducts.map((data, index) => (
          <MoreViewCard data={data} key={index}></MoreViewCard>
        ))}
      </div>

      <div className="mb-12 gap-3 flex flex-col justify-between">
        <div
          onClick={handleClickUp}
          className="bg-white w-[38px] h-[38px] rounded-full shadow-xl flex justify-center items-center cursor-pointer "
        >
          <FiChevronUp className="text-[26px]" />
        </div>
        <div
          onClick={handleClickDown}
          className="bg-white w-[38px] h-[38px] rounded-full shadow-xl flex justify-center items-center cursor-pointer"
        >
          <FiChevronDown className="text-[26px]" />
        </div>
      </div>
    </div>
  );
};

export default MoreView;
