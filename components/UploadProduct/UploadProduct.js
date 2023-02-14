
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

    <div className="mt-7">
      <div className="lg:max:w-[1426px] mx-auto text-lg text-[#686868]">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Products</p>
          <p className='text-[#001E00] font-medium'>{">"} Upload Products</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Upload Products</p>
      </div>

      <div className="p-6 max-w-[1426px] mt-8">
        <form action="">
          <div className="flex flex-col md:flex-row max-w-[1426px] rounded shadow-xl p-6">
            <div className="md:w-[40%]">
              <LeftSide></LeftSide>
            </div>

            <div className="md:w-[60%]">
              <RightSide options={options}></RightSide>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
