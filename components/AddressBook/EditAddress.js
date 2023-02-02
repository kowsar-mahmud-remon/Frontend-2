import Image from "next/image";
import React from "react";
import style from "/styles/componentsStyles/box-shaddow.module.css";
import trash from "../../assets/images/trash.png";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const EditAddress = () => {
  const handleDelete = () => {
    confirmAlert({
      title: "Are you sure you want to delete this address?",
      message: "",
      buttons: [
        {
          label: "Yes",
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="text-[#686868]">
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className={`modal ${style.modalBackground}`}>
        <div className="modal-box relative ">
          <div className="py-2 bg-[#FFFFFF] flex justify-between items-center">
            <p className=" text-[#001E00] font-medium text-base">
              Add New Delivery Address
            </p>
            <button type="">
              <label
                htmlFor="my-modal-1"
                className="cursor-pointer btn-sm btn-circle"
              >
                ✕
              </label>
            </button>
          </div>
          <div className="shadow-inner py-8 px-4 rounded">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
              <div className="lg:mt-6 mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00]"
                  for=""
                >
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Abdul Korim"
                  placeholder="Input full name"
                  className={`input ${style.inputborder} w-full lg:mr-2 md:mr-2`}
                />
              </div>
              <div className="lg:mt-6 mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] lg:ml-2 md:ml-2"
                  for=""
                >
                  Address
                </label>
                <input
                  type="text"
                  defaultValue="ramgonj tawore"
                  placeholder="House no. Building/ Street/ area"
                  className={`input ${style.inputborder} w-full lg:ml-2 md:ml-2`}
                />
              </div>
              <div className="lg:mt-6 mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00]"
                  for=""
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  defaultValue="+88 012 342 450 45"
                  placeholder="Input Mobile Number"
                  className={`input ${style.inputborder} w-full lg:mr-2 md:mr-2`}
                />
              </div>
              <div className="lg:mt-6 mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] lg:ml-2 md:ml-2"
                  for=""
                >
                  Landmark
                </label>
                <input
                  type="text"
                  defaultValue="Besite mohila madrash"
                  placeholder="E.g. Beside train station"
                  className={`input ${style.inputborder} w-full lg:ml-2 md:ml-2`}
                />
              </div>

              <div className="lg:mt-6 mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] "
                  for=""
                >
                  Province
                </label>
                <select className={`select ${style.inputborder} w-full`}>
                  <option defaultChecked>Dhaka</option>
                  <option>Game of Thrones</option>
                  <option>Lost</option>
                  <option>Breaking Bad</option>
                  <option>Walking Dead</option>
                </select>
              </div>
              <div className="lg:mt-6 mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] lg:ml-2 md:ml-2"
                  for=""
                >
                  Select a label for effective delivery:
                </label>
                <div className="lg:ml-2 md:ml-2 flex justify-center items-center">
                  <button
                    className={`mr-2  text-[#686868] rounded py-2 px-6 ${style.boxbuttonshadow}`}
                  >
                    Home
                  </button>
                  <button
                    className={`ml-2 py-2 text-[#686868] rounded ${style.border} px-6 ${style.boxbuttonshadow}`}
                  >
                    Office
                  </button>
                </div>
              </div>

              <div className="lg:mt-6 mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00]"
                  for=""
                >
                  City
                </label>
                <select className={`select ${style.inputborder} w-full`}>
                  <option defaultChecked selected>
                    Dhaka South
                  </option>
                  <option>Game of Thrones</option>
                  <option>Lost</option>
                  <option>Breaking Bad</option>
                  <option>Walking Dead</option>
                </select>
              </div>
              <div className="lg:ml-2 md:ml-2 row-span-3 lg:mt-6 mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00] "
                  for=""
                >
                  Default Address (Optional)
                </label>
                <div className="border p-3 rounded-lg">
                  <div className="flex">
                    <input type="checkbox" />
                    <p className="text-sm  lg:ml-2 md:ml-2">
                      Default shipping address
                    </p>
                  </div>
                  <div className="flex">
                    <input type="checkbox" />
                    <p className="text-sm lg:ml-2 md:ml-2">
                      Default billing address
                    </p>
                  </div>
                  <p className="mt-4">
                    Your existing default address setting will be replaced if
                    you make some changes here.
                  </p>
                </div>
              </div>

              <div className="lg:mt-6 mt-4">
                <label
                  className="block text-sm font-medium text-[#001E00]"
                  for=""
                >
                  Area
                </label>
                <select className={`select ${style.inputborder} w-full`}>
                  <option defaultChecked>Giridara</option>
                  <option>Game of Thrones</option>
                  <option>Lost</option>
                  <option>Breaking Bad</option>
                  <option>Walking Dead</option>
                </select>
              </div>
            </div>
          </div>
          <div className="modal-action flex justify-between items-center">
            <div className="flex items-center">
              <Image className="w-5" src={trash} alt=""></Image>
              <button
                onClick={handleDelete}
                className="ml-2 font-medium text-sm"
              >
                Delete Address
              </button>
            </div>
            <button type="">
              <label
                htmlFor="my-modal-1"
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

export default EditAddress;
