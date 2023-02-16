import Image from "next/image";
import React from "react";
import style from "/styles/componentsStyles/box-shaddow.module.css";
import cashon from "/assets/images/cash-on-delivery 1.png";
import delivery from "/assets/images/cash-on-delivery 2.png";
import Link from "next/link";

const ProductCampaignModal = ({ modal }) => {
  const { name, image, disprice, price, color, brand } = modal;

  return (
    <div className="text-[#686868]">
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className={`modal ${style.modalBackground}`}>
        <div className="modal-box relative w-11/12  max-w-[750px] scrollbar-hide m-0 p-0">
          <div className={`p-6 bg-[#FFFFFF] ${style.modalShaddow}`}>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1">
              <div>
                <Image
                  className={` ${style.boxshaddow} p-1 rounded h-[170px]`}
                  width={220}
                  src={image}
                  alt=""
                ></Image>
              </div>
              <div className="col-span-2 pl-4">
                <div>
                  <p className="text-[#001E00] font-bold">{name}</p>
                </div>
                <div className="flex items-center pt-3">
                  <p className="text-[#001E00] font-semibold mr-4">
                    Brand:{" "}
                    <span className="text-[#686868] text-sm">{brand}</span>
                  </p>
                  <p className="text-[#001E00] font-semibold">
                    Color:{" "}
                    <span className="text-[#686868] text-sm">{color}</span>
                  </p>
                </div>
                <div className="flex items-center pt-2">
                  <p className="text-[#FB641B] text-xl mr-4 font-semibold">Tk {price}</p>
                  <p className="mr-4 line-through font-medium">Tk {disprice}</p>
                  <p>(20% off)</p>
                </div>
                <div className="flex items-center pt-3">
                  <Image width={20} src={cashon} alt=""></Image>
                  <p className="text-xs ml-3 font-medium">
                    24 Hours To 72 Hours Delivery Time
                  </p>
                </div>
                <div className="flex items-center pt-3">
                  <Image width={20} src={delivery} alt=""></Image>
                  <p className="text-xs ml-3 font-medium">Cash on Delivery Available</p>
                </div>
              </div>
              <div className="justify-end text-end">
                <button type="">
                  <label
                    htmlFor="my-modal-2"
                    className="cursor-pointer text-[#001E00]"
                  >
                    ✕
                  </label>
                </button>
              </div>
            </div>
            <div className="flex justify-end mt-[220px]">
              <button type="">
                <label
                  htmlFor="my-modal-3"
                  className="text-[#686868]  rounded-md  cursor-pointer border px-10 py-3 mr-4"
                >
                  Cancel
                </label>
              </button>
              <Link href="productCampaignThree">
                <button type="">
                  <label
                    htmlFor="my-modal-2"
                    className="bg-[#FB641B] hover:bg-[#fc5907]  rounded-md  cursor-pointer text-white px-10 py-3"
                  >
                    Continue
                  </label>
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCampaignModal;
