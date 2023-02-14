import Image from "next/image";
import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";

const ManageOrderModal = () => {

  return (
    <div className="text-[#686868]">
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className={`modal ${style.modalBackground}`}>
        <div className="modal-box rounded-lg relative w-11/12  max-w-[608px] scrollbar-hide m-0 p-0">
          <div className={`p-6 bg-[#FFFFFF] flex justify-between items-center `}>
            <p className=" text-[#001E00] font-medium text-base">
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
          <div className="flex justify-center items-center">
          <div>
          <div>
            <p className="font-bold text-xl text-[#001E00]">Are Your Conform Change Shipped</p>
          </div>
          <div className={`modal-action flex justify-evenly items-center mt-8 mb-[90px]`}>
            <button type="">
              <label  
                htmlFor="my-modal-2"
                className="bg-[#ffffff] px-10 py-[10px] text-sm rounded-lg  cursor-pointer text-[#686868] border border-[#686868]"
              >
                Cancel
              </label>
            </button>
            <button type="">
              <label
                htmlFor="my-modal-2"
                className="bg-[#FB641B] hover:bg-[#fc5907] px-10 py-[10px] rounded-lg  cursor-pointer text-white text-sm"
              >
                Conform
              </label>
            </button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrderModal;
