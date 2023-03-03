import Image from "next/image";
import React from "react";
import style from "/styles/componentsStyles/box-shaddow.module.css";
import plus from "/assets/images/plus.png";
import selected from "../../assets/images/selected.png";
const YourDeliveryModal = () => {
  return (
    <div className="text-[#686868]">
      <input type="checkbox" id="your-delivary" className="modal-toggle" />
      <div className={`modal ${style.modalBackground}`}>
        <div className="modal-box relative w-11/12  max-w-[780px] scrollbar-hide m-0 p-0">
          <div
            className={`p-6 bg-[#FFFFFF] flex justify-between items-center ${style.modalShaddow}`}
          >
            <p className=" text-[#001E00] font-medium text-base">
              Add New Delivery Address
            </p>
            <button type="">
              <label
                htmlFor="your-delivary"
                className="cursor-pointer btn-sm btn-circle"
              >
                ✕
              </label>
            </button>
          </div>
          <div className="">
            <div className={`px-5 py-3 flex flex-wrap gap-5`}>
              <div className="rounded-lg border-[#026C51] border w-[360px]">
                <div className="flex justify-between items-center">
                  <div>
                    <Image src={selected} alt="" width={45}></Image>
                  </div>
                  <div className="">
                    <button className="text-[#287DF3] bg-[#F2F3F7] text-[12px] px-2 rounded cursor-pointer mr-4">
                      <label htmlFor="my-modal-1" className="">
                        Edit
                      </label>
                    </button>
                  </div>
                </div>
                <div className="px-[22px] address-card ">
                  <div className="flex flex-wrap justify-between items-center">
                    <h1 className="font-medium text-base mb-4 text-[#001E00] ">
                      Abdul Korim
                    </h1>
                  </div>
                  <p className="mb-3 text-[#686868] text-base">
                    +88 012 342 450 45
                  </p>
                  <p className="text-[#686868] mb-4 text-base">
                    Ramgonj Tower-16/14, Giridhara, Matuail, Kodomtali,
                    Dhaka-1362
                  </p>

                  <div className="flex flex-wrap gap-3 mb-5">
                    <p className="text-[#287DF3] bg-[#F2F3F7] text-[14px] px-2 rounded cursor-pointer">
                      Home
                    </p>
                    <p className="text-[#707070] bg-[#F2F3F7]  text-[14px]  px-2 rounded">
                      Default Shipping Address
                    </p>
                    <p className="text-[#707070] text-[14px] bg-[#F2F3F7] px-2 rounded">
                      Default Shipping Address
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`modal-action flex justify-between items-center ${style.modalShaddow} p-6`}
          >
            <div className="flex items-center">
              <Image className="w-[14px] mr-2" src={plus} alt="" />
              <button className="text-base text-[#686868] font-medium">
                <label htmlFor="your-delivary" className="cursor-pointer">
                  Add New Address
                </label>
              </button>
            </div>
            <button
              type=""
              className="w-[172px] h-[48px] bg-[#FB641B] hover:bg-[#fc5907] rounded-lg text-base  cursor-pointer text-white "
            >
              <label htmlFor="your-delivary" className="">
                Confirm
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourDeliveryModal;
