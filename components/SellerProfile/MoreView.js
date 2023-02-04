import React from "react";
import { FaArrowRight } from "react-icons/fa";

function MoreView(props) {
  return (
    <div className="flex justify-center items-center text-[#FB641B] text-[24px]  py-[24px]  cursor-pointer">
      <p className=" mr-[8px] font-semibold">More View</p>
      <FaArrowRight className=""></FaArrowRight>
    </div>
  );
}

export default MoreView;
