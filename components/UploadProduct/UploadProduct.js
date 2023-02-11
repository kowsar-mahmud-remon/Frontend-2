
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
        <div className="flex max-w-[1426px] rounded shadow-xl p-6">
          <div className="w-2/5">
            <LeftSide></LeftSide>
          </div>

          <div className="w-3/5">
            <RightSide options={options}></RightSide>
        </div>
        </div>
      </form>
    </div>
  );
};

export default UploadProduct;
