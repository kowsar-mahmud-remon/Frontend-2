import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import style from "../../../styles/componentsStyles/box-shaddow.module.css";
import trash from "../../../assets/images/trash.png";
import selected from "../../../assets/images/selet.jpg";

const EditYourDelivery = ({ modalIsOpen, setIsOpen, item }) => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [deleted, setDeleted] = useState(false)

  const {
    text,
    number,
    address,
    home,
    shiping,
    landmark,
    province,
    area,
    city,
  } = item || {};

  console.log(item, "lajlgfdjasfkljhoai");

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
      zIndex: 1000
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const lists = [
    { text: "Home", href: "" },
    { text: "Office", href: "" },
  ];

  const [select, setSelect] = useState({ text: "Home" });


  const handleSelected = (list) => {
    setSelect(list);
  };

  const handleDelete = () =>{
    setDeleted(true)
  }
  const handleConfirm = () =>{
    setDeleted(false)
  }
  const handleCancel = () =>{
    setDeleted(false)
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="lg:w-[780px] ">
          <div
            className={`h-[67px] ${style.modalShaddow} flex justify-between items-center px-[22px]`}
          >
            <p className=" text-[#001E00] font-medium text-base">
              Your Delivery Address
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
                  className="border border-[#686868] text-[#686868] px-4 rounded w-[360px] h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="Input full name"
                  id=""
                  defaultValue="Abdul Korim"
                />
              </div>
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Address
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-4 rounded w-[360px] h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="Input full name"
                  id=""
                  defaultValue="Ramgonj Tower-16/14, Giridhara, Matuail, Kodomtali, Dhaka-1362"
                />
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between mt-8">
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Mobile Number
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-4 rounded w-[360px] h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="Input Mobile Number"
                  id=""
                  defaultValue="+88 012 342 450 45"
                />
              </div>
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Landmark
                </label>
                <input
                  className="border border-[#686868] text-[#686868] px-4 rounded w-[360px] h-[40px] mt-2"
                  type="text"
                  name=""
                  placeholder="E.g. Beside train station"
                  id=""
                  defaultValue="Besite mohila madrash"
                />
              </div>
            </div>
            <div className="gap-2 px-[22px] flex flex-wrap justify-between mt-8">
              <div className="w-[360px]">
                <label htmlFor="" className="text-[#001E00]">
                  Province
                </label>
                <select
                  defaultValue=""
                  id="countries"
                  className="border border-[#686868] text-[#686868] px-4 rounded w-[360px] h-[40px] mt-2"
                >
                  <option selected>Dhaka</option>
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
                            <p className="text-center cursor-pointer">{list.text}</p>
                          </div>
                        </div>
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
                  defaultValue="Dhaka"
                  id="countries"
                  className="border border-[#686868] text-[#686868] px-4 rounded w-[360px] h-[40px] mt-2"
                >
                  <option selected>Dhaka</option>
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
                  defaultValue="Bashundara"
                  className="border border-[#686868] text-[#686868] px-4 rounded w-[360px] h-[40px] mt-2"
                >
                  <option selected>Bashundara</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            {
              deleted === true? <div
              className={`w-[316px] h-[138px] rounded-lg ${style.boxshaddow} absolute z-10 left-9 bg-[#FFFFFF]`}
            >
              <p className="font-semibold text-sm text-center pt-5 text-[#686868]">
                Are you sure you want to delete this address?
              </p>
              <div className="flex justify-end px-4 mt-12 ">
                <button onClick={handleCancel}
                  className={`w-[87px] h-[32px] mr-4 rounded text-[#686868] ${style.boxbuttonshadow}`}
                >
                  Cancel
                </button>
                <button onClick={handleConfirm}
                  className={`w-[87px] h-[32px] rounded text-[#F4253F] ${style.boxbuttonshadow}`}
                >
                  Delete
                </button>
              </div>
            </div> : ""
            }

            <div
              className={`modal-action flex justify-between items-center ${style.modalShaddow} h-[80px] px-[22px] mt-28 relative`}
            >
              <div className="flex items-center">
                <Image className="w-5" src={trash} alt=""></Image>
                <button onClick={handleDelete} className="ml-2 font-medium text-sm">
                  Delete Address
                </button>
              </div>
              <button
                onClick={closeModal}
                className="bg-[#FB641B] w-[172px] h-[48px] text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditYourDelivery;
