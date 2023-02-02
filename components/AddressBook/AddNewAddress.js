import React from "react";
import style from "/styles/componentsStyles/box-shaddow.module.css";

const AddNewAddress = () => {
  return (
    <div className="">
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className={`modal ${style.modalBackground}`}>
        <div className="modal-box relative ">
          <div className="py-2 bg-[#FFFFFF] flex justify-between items-center">
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
          <div className="shadow-inner py-8 px-4 rounded">
            <div className="flex">
              <div>
                <label className="block" for="">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-[#686868] w-full max-w-xs mr-2"
                />
              </div>
              <div>
                <label className="block ml-2" for="">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-[#686868] w-full max-w-xs ml-2"
                />
              </div>
            </div>
            <div className="flex">
              <div>
                <label className="block" for="">
                  Mobile Number
                </label>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input border-[#686868] w-full max-w-xs mr-2"
                />
              </div>
              <div>
                <label className="block ml-2" for="">
                  Landmark
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-[#686868] w-full max-w-xs ml-2"
                />
              </div>
            </div>
            <div className="flex">
              <div>
                <label className="block" for="">
                  Province
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-[#686868] w-full max-w-xs mr-2"
                />
              </div>
              <div>
                <label className="block ml-2 text-sm" for="">
                  Select a label for effective delivery:
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-[#686868] w-full max-w-xs ml-2"
                />
              </div>
            </div>
            <div className="flex">
              <div>
                <label className="block" for="">
                City
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-[#686868] w-full max-w-xs mr-2"
                />
              </div>
              <div>
                <label className="block ml-2" for="">
                Default Address (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-[#686868] w-full max-w-xs ml-2"
                />
              </div>
            </div>
            <div className="flex">
              <div>
                <label className="block" for="">
                Area
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-[#686868] w-full max-w-xs mr-2"
                />
              </div>
              <div>
                <label className="block ml-2" for="">
                Default Address (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-[#686868] w-full max-w-xs ml-2"
                />
              </div>
            </div>
          </div>
          <div className="modal-action flex justify-between items-center">
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
