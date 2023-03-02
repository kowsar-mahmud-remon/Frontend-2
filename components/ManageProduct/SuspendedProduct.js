/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const SuspendedProduct = ({ product }) => {
  const [showTextArea, setShowTextArea] = useState(false);
  let colorClass = "";
  const { action } = product;
  switch (action) {
    case "Active":
      colorClass = "text-[#0BD838]";
      break;
    case "Draft":
      colorClass = "text-[#063852]";
      break;
    case "Pending":
      colorClass = "text-[#026C51]";
      break;
    case "Inactive":
      colorClass = "text-[#F4253F]";
      break;
    default:
      colorClass = "bg-gray-500";
  }
  return (
    <tr
      className="p-[16px]  border-b-[1px] border-b-[#B7B7B7] last:border-0"
      key={product.id}
    >
      <td>
        <Image
          className="mx-auto p-[10px]"
          alt=""
          src={product.image}
          width={76}
          height={61}
        />
      </td>
      <td>
        <p className=" p-[10px]">{product.title}</p>
      </td>
      <td>
        <p className=" p-[10px]">{product.sku}</p>
      </td>
      <td>
        <p className=" p-[10px]">{product.variation}</p>
      </td>
      <td>
        <p className=" p-[10px]">Tk {product.price}</p>
      </td>
      <td>
        <p className=" p-[10px]">{product.stock}</p>
      </td>
      <td>
        <p className={`p-[10px ]`}>
          {action}{" "}
          <label
            className="block text-[#287DF3] cursor-pointer"
            htmlFor="my-modal-3"
            c
          >
            Violation <br /> Description
          </label>
          {/* for modal */}
          {/* The button to open modal */}
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal  fixed inset-0   h-screen bg-black  bg-opacity-60 p-[10px] text-[16px] ">
            <div className="modal-box rounded-sm relative max-w-[670px] scrollbar-hide">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <div className="flex justify-start items-center">
                <Image
                  className=""
                  alt=""
                  src={product.image}
                  width={76}
                  height={61}
                />
                <div className="ml-[10px]">
                  <p>{product.title}</p>
                  <p className="">Category:{product.variation}</p>
                </div>
              </div>
              <hr className="bg-[#B7B7B7] border-b-[1px] border-b-[#B7B7B7] mt-[24px]" />
              <p className="text-[#686868] mt-[24px]">
                <span className="text-black font-semibold">1.</span> Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
              <p className="text-[#686868] mt-[24px]">
                <span className="text-black font-semibold">2.</span> Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
              <p className="text-[#686868] mt-[24px]">
                <span className="text-black font-semibold">3. </span> Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="text-[#686868] mt-[24px]">
                <span className="text-black font-semibold">4. </span> Lorem
                Ipsum is simply dummy text of the printing.
              </p>
              {!showTextArea && (
                <p className="text-[#F4253F] mt-[96px] text-center">
                  Notice: <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              )}
              <div className="flex justify-center">
                {!showTextArea && (
                  <button
                    onClick={() => setShowTextArea(true)}
                    className="bg-[#FB641B] px-[36px] py-[14px] rounded-md text-white cursor-pointer  mt-[14px] max-w-[225px] "
                  >
                    Explain Right Product
                  </button>
                )}
              </div>
              {showTextArea && (
                <>
                  <p className="mt-[32px] mb-[16px] font-semibold">
                    Please Explain Your Product is Right
                  </p>
                  <textarea
                    className="border border-[#B7B7B7]  focus:ring-white w-full block h-[199px] bg-white rounded-sm p-4"
                    rows="4"
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowTextArea(true)}
                      className="bg-[#FB641B] px-[36px] py-[14px] rounded-md text-white cursor-pointer  mt-[14px] max-w-[225px] "
                    >
                      Active Request
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </p>
      </td>
      <td className=" p-[10px]">
        <div className="flex-col gap-[10px]">
          <button className="border flex items-center  text-[#686868] bg-white py-[5px] px-[27px] rounded-lg mb-[12px]">
            <FaEdit className="mr-[6px] " />
            Edit
          </button>
          <button className="border flex items-center  bg-[#F4253F] text-white py-[5px] px-[20px] rounded-lg">
            <FaTrashAlt className="mr-[6px] " />
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SuspendedProduct;
