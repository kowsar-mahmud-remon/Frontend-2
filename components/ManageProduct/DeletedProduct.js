/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const DeletedProduct = ({ product }) => {
  let colorClass = "";
  const { action } = product;

  return (
    <tr
      className="p-[16px] border-b-[1px] border-b-[#B7B7B7] last:border-0"
      key={product.id}
    >
      <td>
        <div className="flex items-center">
          <input type="checkbox" name="" id="" />
          <Image
            className="mx-auto p-[10px]"
            alt=""
            src={product.image}
            width={76}
            height={61}
          />
        </div>
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
        <p className=" p-[10px]">{product.Date}</p>
      </td>

      <td className=" p-[10px]">
        <div className="">
          <button className="border text-[12px] w-[106px] text-white bg-[#287DF3] py-[5px] px-[10px] rounded-lg mb-[12px] whitespace-nowrap">
            Restore Product
          </button>

          <label
            className="border text-[12px] w-[106px]  block bg-[#DEDEDE] text-black py-[5px] px-[10px] rounded-lg whitespace-nowrap hover:bg-[#FFC0C8] hover:text-red-500"
            htmlFor="my-modal-3"
            c
          >
            Confirm Delete
          </label>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal fixed inset-0   h-screen bg-black  bg-opacity-60 p-[10px] text-[16px] ">
            <div className="modal-box rounded-sm relative max-w-[1073px] scrollbar-hide bg-[#F2F2F2] p-[32px]">
              <div className="max-w-[1009px] bg-white mx-auto text-center mb-[32px]">
                <Image
                  className="mx-auto py-[16px]"
                  alt=""
                  src="/warning.png"
                  width={47}
                  height={43}
                />
                <p className="text-[#707070] max-w-[892px] mx-auto">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <Link
                  href="#"
                  className="text-[#287DF3] my-[16px] inline-block"
                >
                  Learn More
                </Link>
              </div>
              <p className="mb-[16px] font-semibold">Delete Product</p>
              <div className="flex justify-start items-center">
                <Image
                  className=""
                  alt=""
                  src={product.image}
                  width={76}
                  height={61}
                />

                <p>{product.title}</p>
              </div>
              <div>
                <p className="font-semibold mt-[30px]">
                  Permanently Delete Product?
                </p>
                <p className="text-[#001E00] mt-[16px]">
                  To Confirm deletion, Type Permanently delete in the text input
                  field.
                </p>
                <input
                  type="text"
                  placeholder="Permanently delete"
                  className="input w-full mt-[32px] border border-[#686868] placeholder:italic placeholder:text-[#686868] mb-[40px] focus:ring-[#686868] focus:outline-none"
                />
                <div className="flex gap-[16px] justify-end">
                  <label
                    htmlFor="my-modal-3"
                    className="text-black bg-[#DEDEDE] max-w-[133px] btn"
                  >
                    Cancel
                  </label>
                  <label
                    htmlFor="my-modal-3"
                    className="text-white bg-[#FB641B] max-w-[170px] btn"
                  >
                    Delete Product
                  </label>
                </div>
              </div>
              <div className="modal-action"></div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default DeletedProduct;
