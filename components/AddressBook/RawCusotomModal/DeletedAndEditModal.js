import React from "react";
import style from "../../../styles/componentsStyles/box-shaddow.module.css";
import { useState } from "react";
import Select from "react-select";
import Image from "next/image";
import trash from "../../../assets/images/trash.png";
import selected from "../../../assets/images/selet.jpg";

const DeletedAndEditModal = ({ editClose, edit }) => {
  const [select, setSelect] = useState({ text: "Home" });
  const [deleted, setDeleted] = useState(false);

  const lists = [
    { text: "Home", href: "" },
    { text: "Office", href: "" },
  ];

  const handleSelected = (list) => {
    setSelect(list);
  };

  const handleDelete = () => {
    setDeleted(true);
  };
  const handleConfirm = () => {
    setDeleted(false);
  };
  const handleCancel = () => {
    setDeleted(false);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  if (!edit) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm z-[1000] flex justify-center items-center bg-[rgba(0,0,0,0.6)] `}
    >
      <div
        className={`rounded-lg lg:w-[780px] max-h-full scrollbar-hide w-[376px]  overflow-scroll bg-white absolute `}
      >
        <div className="">
          <div
            className={`h-[67px] ${style.modalShaddow} flex justify-between items-center px-[22px] `}
          >
            <p className=" text-[#001E00] font-medium text-base">
              Edit Delivery Address
            </p>
            <button onClick={editClose}>✕</button>
          </div>
          <div className="mt-[14px]">
            <div className="gap-2 px-[22px] flex flex-wrap justify-between">
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00]">
                  Full Name
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-4 rounded lg:w-[360px] w-full h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="Input full name"
                  id=""
                  defaultValue="Abdul Korim"
                />
              </div>
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00]">
                  Address
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-4 rounded lg:w-[360px] w-full h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="Input full name"
                  id=""
                  defaultValue="Ramgonj Tower-16/14, Giridhara, Matuail, Kodomtali, Dhaka-1362"
                />
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between lg:mt-8 mt-2">
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00]">
                  Mobile Number
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-4 rounded lg:w-[360px] w-full h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="Input Mobile Number"
                  id=""
                  defaultValue="+88 012 342 450 45"
                />
              </div>
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00]">
                  Landmark
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-4 rounded lg:w-[360px] w-full h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="E.g. Beside train station"
                  id=""
                  defaultValue="Besite mohila madrash"
                />
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between lg:mt-8 mt-2">
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00]">
                  Province
                </label>
                <div className="mt-2">
                  <Select
                    className="border border-[#686868] text-[#686868] rounded"
                    options={options}
                  />
                </div>
              </div>
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00]">
                  Select a label for effective delivery:
                </label>
                <div className="flex justify-between text-[#686868] rounded lg:w-[360px] w-full h-[40px] gap-4 mt-2">
                  {lists.map((list, i) => {
                    return (
                      <>
                        <div
                          key={i}
                          onClick={() => handleSelected(list)}
                          className={`${
                            list.text === select.text
                              ? `w-[172px] text-[#686868] rounded border-[#026C51] border ${style.boxbuttonshadow} inline-block`
                              : `w-[172px] text-[#686868] rounded ${style.boxbuttonshadow}`
                          }`}
                        >
                          <div className="w-6 h-4">
                            {list.text === select.text ? (
                              <Image
                                className="w-6 h-4"
                                src={selected}
                                alt=""
                                width={23}
                                height={16}
                              ></Image>
                            ) : (
                              ""
                            )}
                          </div>

                          <div className="flex justify-center -m-[9px]">
                            <p className="text-center cursor-pointer">
                              {list.text}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between lg:mt-8 mt-2">
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00]">
                  City
                </label>
                <div className="mt-2">
                  <Select
                    className="border border-[#686868] text-[#686868] rounded"
                    options={options}
                  />
                </div>
              </div>
              <div className="lg:w-[360px] w-full">
                <label htmlFor="" className="text-[#001E00]">
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
            <div className="gap-2 px-[22px] flex flex-wrap justify-between lg:-mt-20">
              <div className="lg:w-[360px] w-full lg:mt-0 mt-2">
                <label htmlFor="" className="text-[#001E00]">
                  Area
                </label>
                <div className="mt-2">
                  <Select
                    className="border border-[#686868] text-[#686868] rounded"
                    options={options}
                  />
                </div>
              </div>
            </div>

            {deleted === true ? (
              <div>
                <div className="fixed inset-0 backdrop-blur-sm z-[1000] flex justify-center items-center bg-[rgba(0,0,0,0.6)] lg:hidden">
                  <div
                    className={`rounded-lg h-[138px] scrollbar-hide w-[316px]  overflow-scroll bg-white absolute `}
                  >
                    <p className="font-semibold text-sm text-center pt-5 text-[#686868]">
                      Are you sure you want to delete this address?
                    </p>
                    <div className="flex justify-center gap-4 mt-12 ">
                      <button
                        onClick={handleCancel}
                        className={`w-[87px] h-[32px] rounded text-[#686868] ${style.boxbuttonshadow}`}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleConfirm}
                        className={`w-[87px] h-[32px] rounded text-[#F4253F] ${style.boxbuttonshadow}`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className={`w-[316px] h-[138px] rounded-lg ${style.boxshaddow} absolute z-10 left-9 bg-[#FFFFFF] lg:block`}
                >
                  <p className="font-semibold text-sm text-center pt-5 text-[#686868]">
                    Are you sure you want to delete this address?
                  </p>
                  <div className="flex justify-end px-4 mt-12 ">
                    <button
                      onClick={handleCancel}
                      className={`w-[87px] h-[32px] mr-4 rounded text-[#686868] ${style.boxbuttonshadow}`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirm}
                      className={`w-[87px] h-[32px] rounded text-[#F4253F] ${style.boxbuttonshadow}`}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div
              className={`modal-action flex justify-between items-center ${style.modalShaddow} h-[80px] px-[22px] lg:mt-32 mt-[44px] relative`}
            >
              <div className="flex justify-center items-center gap-2 lg:border-none border border-[#F4253F] w-[164px] h-[48px] rounded-lg">
                <Image className="w-5" src={trash} alt=""></Image>
                <button
                  onClick={handleDelete}
                  className="text-[#F4253F] font-medium text-sm"
                >
                  Delete Address
                </button>
              </div>
              <button
                onClick={editClose}
                className="bg-[#FB641B] w-[172px] h-[48px] text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletedAndEditModal;
