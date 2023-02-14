
import React from "react";
import LeftSide from "./LeftSide/LeftSide";


import RightSide from "./RightSide/RightSide";
const UploadProduct = () => {
  const options = [
    {
      option: "Delivery time is too long",
      value: "Delivery time is too long",
    },
    {
      option: "Wrong Delivery Address",
      value: "Wrong Delivery Address",
    },
    {
      option: "Currently No need this Product",
      value: "Currently No need this Product",
    },
    {
      option: "Not Good This Product",
      value: "Not Good This Product",
    },
    {
      option: "Not Original Product",
      value: "Not Original Product",
    },
  ];
  return (
    <div className="p-6 max-w-[1426px]">
      <form action="">
        <div className="flex flex-col md:flex-row max-w-[1426px] rounded shadow-xl p-6">
          <div className="md:w-[40%]">
            <LeftSide></LeftSide>
          </div>

          <div className="md:w-[60%] md:mt-0 mt-10">
            <RightSide options={options}></RightSide>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:justify-end items-center mt-8">
          <div>
            <button className="px-[75px] py-[22px] border-2 rounded-lg md:mb-0 mb-2 mr-2 font-[500] border-[#686868] text-[#686868]">
              Save Draft
            </button>
          </div>
          <input
            className="px-[75px] py-[22px] rounded-lg font-[500] bg-[#FB641B] text-white"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default UploadProduct;
