/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import React from "react";
import LeftSide from "./LeftSide/LeftSide";

import RightSide from "./RightSide/RightSide";
import img1 from "../../assets/images/image 6.png";
import styles from './uploadProduct.module.css'
const UploadProduct = () => {
  const options = [
    {
      option: "Delivery time is too long",
      value: "Delivery time is too long",
    },
    {
      option: "Wrong Delivery Address",
      value: "Wrong Delivery Address",
    },
    {
      option: "Currently No need this Product",
      value: "Currently No need this Product",
    },
    {
      option: "Not Good This Product",
      value: "Not Good This Product",
    },
    {
      option: "Not Original Product",
      value: "Not Original Product",
    },
  ];

  const productDetails = [
    {
      id: 1,
      img: img1,
      productname: "Tomato (Local) 500 gm",
      brandname: "No Brand",
      color: "Red, Green",
      discountprice: "60 12%",
      price: "80",
      productstock: "100kg",
      deliverytime: "General Delivery 24/72h",
      paymentoption: "Cash On Delivery Available",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable ....",
      category: "Kachabazar/Tomato",
      productcomission: "5%",
    },
  ];
  return (
    <div>
      <div className="p-6 max-w-[1426px] mt-8">
        <div className="lg:max:w-[1426px] mx-auto text-lg text-[#686868]">
          <div className=" flex items-center mb-2">
            <p className="mr-1">Home</p>
            <p className="mr-1">{">"} Products</p>
            <p className="text-[#001E00] font-medium">{">"} Upload Products</p>
          </div>

          <p className=" text-2xl text-[#FB641B] font-medium">
            Upload Products
          </p>
        </div>
        <form className="mt-7">
          <div className="flex flex-col md:flex-row max-w-[1426px] rounded shadow-xl p-6">
            <div className="md:w-[40%]">
              <LeftSide></LeftSide>
            </div>

            <div className="md:w-[60%]">
              <RightSide options={options}></RightSide>
            </div>
          </div>
        </form>
        <div className="flex md:flex-row flex-col md:justify-end items-center mt-8">
          <div>
            <button className="px-[75px] py-[22px] border-2 rounded-lg md:mb-0 mb-2 mr-2 font-[500] border-[#686868] text-[#686868]">
              Save Draft
            </button>
          </div>

          <button
            htmlFor="my-modal-5"
            className="px-[75px] py-[22px] rounded-lg font-[500] bg-[#FB641B] text-white"
          >
            <label className="cursor-pointer" htmlFor="my-modal-5">Continue</label>
          </button>
          {/* for modal */}

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal fixed inset-0   h-screen bg-black  bg-opacity-[65%] ">
            <div className="modal-box w-[90%] lg:w-1/2  max-w-[100%]  px-[44px] rounded-lg scrollbar-hide">
              <h3 className="text-[28px] text-center font-semibold mb-[30px]">
                Confirm Check
              </h3>
              {productDetails.map((productdetail) => {
                return (
                  <div className="grid grid-cols-6  gap-[18px]">
                    <div className="md:col-span-2 col-span-6 border-[2px] border-dashed border-[#B7B7B7] rounded-lg mt-[5px] h-[224px]">
                      <Image
                        src={productdetail.img}
                        width={224}
                        height={224}
                        alt=""
                      />
                    </div>
                    <div className="md:col-span-4 col-span-6">
                      <p className="mb-[8px]">
                        <span className="text-[16px] font-semibold text-[#001E00] mr-[16px]">
                          Product Name:
                        </span>
                        <span className="text-[16px]">
                          {productdetail.productname}
                        </span>
                      </p>
                      <p className="mb-[14px]">
                        <span className="text-[16px] font-semibold text-[#001E00] mr-[16px]">
                          Brand Name:
                        </span>
                        <span className="text-[16px]">
                          {productdetail.brandname}
                        </span>
                      </p>
                      <p className="mb-[14px]">
                        <span className="text-[16px] font-semibold text-[#001E00] mr-[16px]">
                          Color:
                        </span>
                        <span className="text-[16px]">
                          {productdetail.color}
                        </span>
                      </p>
                      <p className="mb-[14px]">
                        <span className="text-[16px] font-semibold text-[#001E00] mr-[16px]">
                          Discount Price:
                        </span>
                        <span className="text-[16px]">
                          {productdetail.discountprice}
                        </span>
                      </p>
                      <p className="mb-[14px]">
                        <span className="text-[16px] font-semibold text-[#001E00] mr-[16px]">
                          Price:
                        </span>
                        <span className="text-[16px]">
                          {productdetail.price}
                        </span>
                      </p>
                      <p className="mb-[14px]">
                        <span className="text-[16px] font-semibold text-[#001E00] mr-[16px]">
                          Product Stock:
                        </span>
                        <span className="text-[16px]">
                          {productdetail.productstock}
                        </span>
                      </p>
                      <p className="mb-[14px]">
                        <span className="text-[16px] font-semibold text-[#001E00] mr-[16px]">
                          Delivery Time:
                        </span>

                        <span className="text-[16px] ">
                          <input
                            className="checked:text-[#026C51] mr-[4px]"
                            
                            type="radio"
                            name=""
                            id=""
                            checked
                          />
                          {productdetail.deliverytime}
                        </span>
                      </p>
                      <p className="mb-[14px]">
                        <span className="text-[18px] font-semibold text-[#001E00] mr-[16px]">
                          Payment Option:
                        </span>

                        <span className="text-[16px] ">
                          <input
                            className=" mr-[4px]"
                            type="radio"
                            name=""
                            id=""
                          />
                          {productdetail.paymentoption}
                        </span>
                      </p>
                      <p className="mb-[14px] flex lg:flex-row flex-col">
                        <p className="text-[18px] font-semibold text-[#001E00] mr-[16px]">
                          Description:
                        </p>
                        <p className="text-[16px] text-[#686868]">
                          {productdetail.description}
                        </p>
                      </p>
                      <p className="mb-[14px]">
                        <span className="text-[18px] font-semibold text-[#001E00] mr-[16px]">
                          Category:
                        </span>
                        <span className="text-[16px]">
                          {productdetail.category}
                        </span>
                      </p>
                    </div>
                    <div className="col-span-6">
                      <p className="text-[24px] text-[#FB641B] text-center my-[30px]">
                        <span className="mr-[8px]">
                          This Product Commission is:
                        </span>
                        {productdetail.productcomission}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="modal-action flex justify-center">
                <label
                  className="bg-[#FFFFFF] border-[#686868] btn text-[#686868] rounded-lg w-[152px]"
                  htmlFor="my-modal-5"
                >
                  Save Draft
                </label>
                <label
                  htmlFor="my-modal-5"
                  className="btn bg-[#FB641B] text-white  rounded-lg  w-[152px]"
                >
                  Submit
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
