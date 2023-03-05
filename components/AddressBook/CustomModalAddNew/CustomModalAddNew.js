import React, { useState } from "react";
import Modal from "react-modal";
import style from "../../../styles/componentsStyles/box-shaddow.module.css";

const CustomModalAddNew = ({ addNew, setAddNew }) => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      padding: 0,
      margin: 0,
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.6)",
    },
  };

  function openModal() {
    setAddNew(true);
  }

  function closeModal() {
    setAddNew(false);
  }

  const lists = [
    { text: "Home", href: "" },
    { text: "Office", href: "" },
  ];

  const [select, setSelect] = useState({ text: "Home" });

  const handleSelected = (list) => {
    setSelect(list);
  };

  return (
    <div>
      <Modal
        isOpen={addNew}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="lg:w-[780px] ">
          <div
            className={`h-[67px] ${style.modalShaddow} flex justify-between items-center px-[22px]`}
          >
            <p className=" text-[#001E00] font-medium text-base">
              Add New Delivery Address
            </p>
            <button onClick={closeModal}>✕</button>
          </div>
          <div className="mt-[14px]">
            <div className="gap-2 px-[22px] flex flex-wrap justify-between">
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Full Name
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-[22px] rounded w-[360px] h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="Input full name"
                  id=""
                />
              </div>
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Full Name
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-[22px] rounded w-[360px] h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="Input full name"
                  id=""
                />
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between mt-8">
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Mobile Number
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-[22px] rounded w-[360px] h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="Input Mobile Number"
                  id=""
                />
              </div>
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Landmark
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-[22px] rounded w-[360px] h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="E.g. Beside train station"
                  id=""
                />
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between mt-8">
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Province
                </label>
                <select
                  id="countries"
                  className="border border-[#686868] text-[#686868] px-[22px] rounded w-[360px] h-[40px] mt-2"
                >
                  <option selected>Please choose your provice</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Select a label for effective delivery:
                </label>
                <div className="flex justify-between text-[#686868] rounded w-[360px] h-[40px] gap-4 mt-2">
        
                  {lists.map((list, i) => {
                    return (
                      <>
                        <button
                          key={i}
                          onClick={() => handleSelected(list)}
                          className={`${list.text === select.text? `w-[172px] text-[#686868] rounded border-[#026C51] border ${
                            style.boxbuttonshadow
                          }` : `w-[172px] text-[#686868] rounded ${
                            style.boxbuttonshadow
                          }`}`}
                        >
                          {list.text}
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between mt-8">
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  City
                </label>
                <select
                  id="countries"
                  className="border border-[#686868] text-[#686868] px-[22px] rounded w-[360px] h-[40px] mt-2"
                >
                  <option selected>Please choose your city/municipality</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Select a label for effective delivery:
                </label>
                <div className=" text-[#686868] rounded w-[360px] h-[140px] border border-[#686868] gap-4 mt-2">
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
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Area
                </label>
                <select
                  id="countries"
                  className="border border-[#686868] text-[#686868] px-[22px] rounded w-[360px] h-[40px] mt-2"
                >
                  <option selected>Please choose your Area</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div
              className={`modal-action flex justify-between items-center ${style.modalShaddow} h-[80px] px-[22px] mt-28`}
            >
              <div></div>
              <button onClick={closeModal} className="bg-[#FB641B] w-[172px] h-[48px] text-white rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModalAddNew;
