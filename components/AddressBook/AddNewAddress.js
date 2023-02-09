import React, { useState } from "react";
import style from "/styles/componentsStyles/box-shaddow.module.css";

const AddNewAddress = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <div className="text-[#686868]">
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className={`modal ${style.modalBackground}`}>
        <div className="modal-box relative w-11/12  max-w-[780px] scrollbar-hide m-0 p-0">
          <div className={`p-6 bg-[#FFFFFF] flex justify-between items-center ${style.modalShaddow}`}>
            <p className=" text-[#001E00] font-medium text-base">
              Add New Delivery Address
            </p>
            <button type="">
              <label
                htmlFor="my-modal-2"
                className="cursor-pointer btn-sm btn-circle"
              >
                ✕
              </label>
            </button>
          </div>
          <div className="px-6 rounded">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
              <div className=" mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] mb-2 "
                  for=""
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Input full name"
                  className={`input ${style.inputborder} w-full lg:mr-2 md:mr-2`}
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] mb-2 lg:ml-2 md:ml-2"
                  for=""
                >
                  Address
                </label>
                <input
                  type="text"
                  placeholder="House no. Building/ Street/ area"
                  className={`input ${style.inputborder} w-full lg:ml-2 md:ml-2`}
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] mb-2"
                  for=""
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Input Mobile Number"
                  className={`input ${style.inputborder} w-full lg:mr-2 md:mr-2`}
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] mb-2 lg:ml-2 md:ml-2"
                  for=""
                >
                  Landmark
                </label>
                <input
                  type="text"
                  placeholder="E.g. Beside train station"
                  className={`input ${style.inputborder} w-full lg:ml-2 md:ml-2`}
                />
              </div>

              <div className="mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] mb-2 "
                  for=""
                >
                  Province
                </label>
                <select className={`select ${style.inputborder} w-full`}>
                  <option disabled selected>
                    Please choose your provice
                  </option>
                  <option>Game of Thrones</option>
                  <option>Lost</option>
                  <option>Breaking Bad</option>
                  <option>Walking Dead</option>
                </select>
              </div>
              <div className="mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] mb-2 lg:ml-2 md:ml-2"
                  for=""
                >
                  Select a label for effective delivery:
                </label>
                <div className="lg:ml-2 md:ml-2 flex justify-center items-center mt-1">
                  <button 
                    onClick={() => setActive(!active)}
                    className={`mr-2  text-[#686868] rounded py-2 px-6 ${
                      style.boxbuttonshadow
                    } ${active ? "border-[#026C51] border" : ""}`}
                  >
                    Home
                  </button>
                  <button
                  onClick={()=> setActive2(!active2)}
                    className={`ml-2 py-2 text-[#686868] rounded px-6 ${
                      style.boxbuttonshadow
                    } ${active2 ? "border-[#026C51] border" : ""}`}
                  >
                    Office
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] mb-2"
                  for=""
                >
                  City
                </label>
                <select className={`select ${style.inputborder} w-full`}>
                  <option disabled selected>
                    Please choose your city/municipality
                  </option>
                  <option>Game of Thrones</option>
                  <option>Lost</option>
                  <option>Breaking Bad</option>
                  <option>Walking Dead</option>
                </select>
              </div>
              <div className="lg:ml-2 md:ml-2 row-span-3 mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] mb-2 "
                  for=""
                >
                  Default Address (Optional)
                </label>
                <div className="border p-3 rounded-lg">
                  <div className="flex">
                    <input type="checkbox" />
                    <p className="text-sm ml-2">
                      Default shipping address
                    </p>
                  </div>
                  <div className="flex">
                    <input type="checkbox" />
                    <p className="text-sm ml-2">
                      Default billing address
                    </p>
                  </div>
                  <p className="mt-4">
                    Your existing default address setting will be replaced if
                    you make some changes here.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] mb-2"
                  for=""
                >
                  Area
                </label>
                <select className={`select ${style.inputborder} w-full`}>
                  <option disabled selected>
                    Please choose your area
                  </option>
                  <option>Game of Thrones</option>
                  <option>Lost</option>
                  <option>Breaking Bad</option>
                  <option>Walking Dead</option>
                </select>
              </div>
            </div>
          </div>
          <div className={`modal-action flex justify-between items-center ${style.modalShaddow} p-6`}>
            <div className=""></div>
            <button type="">
              <label
                htmlFor="my-modal-2"
                className="bg-[#FB641B] hover:bg-[#fc5907]  rounded-md  cursor-pointer text-white px-14 py-3"
              >
                Save
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAddress;
