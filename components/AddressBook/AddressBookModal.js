import Image from "next/image";
import React from "react";
import plus from "../../assets/images/plus.png";
import style from "/styles/componentsStyles/box-shaddow.module.css"

const AddressBookModal = () => {
  return (
    <div className="">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className={`modal ${style.modalBackground}`}>
        <div className="modal-box relative w-11/12 max-w-[780px]">
          <div className="py-2 bg-[#FFFFFF] flex justify-between items-center">
            <p className=" text-[#001E00] font-medium text-base">
              Your Delivery Address
            </p>
            <button type="">
              <label
                htmlFor="my-modal-3"
                className="cursor-pointer btn-sm btn-circle"
              >
                ✕
              </label>
            </button>
          </div>
          <div className="shadow-inner py-8 px-4 rounded">
            <div className="p-4 mb-2 rounded-lg border-[#026C51] border address-card mr-4 lg:w-[428px] md:w-[428px] w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-base text-[#001E00] ">
                  Abdul Korim
                </h1>
                <div>
                  <label
                    htmlFor="my-modal-3"
                    className="text-[#287DF3] bg-[#F2F3F7] text-[12px] px-2 rounded cursor-pointer"
                  >
                    Edit
                  </label>
                </div>
              </div>
              <p className="py-3 text-[#686868]">+88 012 342 450 45</p>
              <p className="text-[#686868]">
                Ramgonj Tower-16/14, Giridhara, Matuail, Kodomtali, Dhaka-1362
              </p>

              <div className="flex mt-5">
                <p className="text-[#287DF3] bg-[#F2F3F7] text-[12px] px-2 rounded cursor-pointer">
                  Home
                </p>
                <p className="text-[#707070] bg-[#F2F3F7] text-[12px]  px-2 rounded ml-4">
                  Default Shipping Address
                </p>
                <p className="text-[#707070] text-[12px] bg-[#F2F3F7] px-2 rounded ml-4">
                  Default Shipping Address
                </p>
              </div>
            </div>
          </div>
          <div className="modal-action flex justify-between items-center">
            <div className="flex items-center">
              <Image className="w-[14px] mr-2" src={plus} alt="" />
              <button className="text-base text-[#686868] font-normal">
                Add New Address
              </button>
            </div>
            <button type="">
              <label
                htmlFor="my-modal-3"
                className="bg-[#FB641B] hover:bg-[#fc5907]  rounded-md  cursor-pointer text-white px-14 py-3"
              >
                Confirm
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressBookModal;
