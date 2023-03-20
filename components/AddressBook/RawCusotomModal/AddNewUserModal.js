import React from "react";
import style from "../../../styles/componentsStyles/box-shaddow.module.css";
import { useState } from "react";
import Select from "react-select";

const AddNewUserModal = ({ modal, handleClose }) => {
  const [select, setSelect] = useState({ text: "Home" });

  const lists = [
    { text: "Home", href: "" },
    { text: "Office", href: "" },
  ];

  const handleSelected = (list) => {
    setSelect(list);
  };

  if (!modal) {
    return null;
  }

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm z-[1000] flex justify-center items-center ${style.modalBackground}`}
    >
      <div
        className={`rounded-lg lg:w-[780px] max-h-full scrollbar-hide w-[376px] bg-white p-1 overflow-scroll`}
      >
        <div className="">
          <div
            className={`h-[67px] ${style.modalShaddow} flex justify-between items-center px-[22px] bg-white`}
          >
            <p className=" text-[#001E00] font-medium text-base">
              Add New Delivery Address
            </p>
            <button onClick={handleClose}>✕</button>
          </div>
          <div className="mt-[14px]">
            <div className="gap-2 px-[22px] flex flex-wrap justify-between">
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00] ">
                  Full Name
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-[22px] rounded lg:w-[360px] w-full h-[40px] mt-2 "
                  type="text"
                  name=""
                  placeholder="Input full name"
                  id=""
                />
              </div>
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00] ">
                  Full Name
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-[22px] rounded lg:w-[360px] w-full h-[40px] mt-2 "
                  type="text"
                  name=""
                  placeholder="Input full name"
                  id=""
                />
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between lg:pt-8 pt-4">
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00] ">
                  Mobile Number
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-[22px] rounded lg:w-[360px] w-full h-[40px] mt-2 "
                  type="text"
                  name=""
                  placeholder="Input Mobile Number"
                  id=""
                />
              </div>
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00] ">
                  Landmark
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-[22px] rounded lg:w-[360px] w-full h-[40px] mt-2 "
                  type="text"
                  name=""
                  placeholder="E.g. Beside train station"
                  id=""
                />
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between lg:pt-8 pt-4">
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00] ">
                  Province
                </label>
                <div className="mt-2">
                  <Select className="border border-[#686868] text-[#686868] rounded" options={options} />
                </div>
              </div>
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00]">
                  Select a label for effective delivery:
                </label>
                <div className="flex justify-between text-[#686868]  rounded lg:w-[360px] w-full h-[40px] gap-4 mt-2">
                  {lists.map((list, i) => {
                    return (
                      <>
                        <button
                          key={i}
                          onClick={() => handleSelected(list)}
                          className={`${
                            list.text === select.text
                              ? `w-[172px] text-[#686868] rounded border-[#026C51] border ${style.boxbuttonshadow}`
                              : `w-[172px] text-[#686868] rounded ${style.boxbuttonshadow}`
                          }`}
                        >
                          {list.text}
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between lg:pt-8 pt-4">
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00] ">
                  City
                </label>
                <div className="mt-2">
                  <Select  className="border border-[#686868] text-[#686868] rounded" options={options} />
                </div>
              </div>
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00] ">
                  Select a label for effective delivery:
                </label>
                <div className=" text-[#686868] rounded lg:w-[360px] w-full h-[140px] border border-[#686868] gap-4 mt-2">
                  <div className="p-3">
                    <div className="flex">
                      <input type="checkbox" />
                      <p className="text-sm ml-2">Default shipping address</p>
                    </div>
                    <div className="flex">
                      <input type="checkbox" />
                      <p className="text-sm ml-2">Default billing address</p>
                    </div>
                    <p className="mt-4">
                      Your existing default address setting will be replaced if
                      you make some changes here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between lg:-mt-20 lg:-0">
              <div className="lg:w-[360px] w-full mt-2">
                <label htmlFor="" className="text-[#001E00] ">
                  Area
                </label>
                <div className="mt-2">
                  <Select className="border border-[#686868] text-[#686868] rounded" options={options} />
                </div>
              </div>
            </div>
            <div
              className={`modal-action flex lg:justify-between md:justify-between justify-center items-center ${style.modalShaddow} h-[80px] px-[22px]`}
            >
              <div className="lg:block md:block hidden"></div>
              <button className="bg-[#FB641B] w-[172px] h-[48px] text-white rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUserModal;
