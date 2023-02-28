import Image from "next/image";
import React from "react";
import { useState } from "react";

const OrderHistoryTable = ({ product }) => {
  const { title, category, status, orderNum, kg, price, image, deliveryDate, } = product || {};

  

  return (
    <>
      <tr className="bg-white border-b border-[#B7B7B7] text-[#001E00]">
        <td className="px-6 py-4">
          <Image width={65} height={55} src={image} alt="" />
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-base text-[#001E00] whitespace-nowrap"
        >
          {title}
        </th>
        <td className="px-6 py-4 font-medium text-base text-[#001E00]">
          <label htmlFor="my-modal-2" className="cursor-pointer">
            {orderNum}
          </label>
        </td>
        <td className="px-6 py-4 font-medium text-base text-[#001E00]">
          {category}
        </td>
        <td className="px-6 py-4 font-medium text-base text-[#001E00]">
          TK {price}
        </td>
        <td className="px-6 py-4 font-medium text-base text-[#001E00]">
          {kg}
        </td>
        <td className="px-6 py-4 font-medium text-base text-[#001E00]">
          {deliveryDate}
        </td>
        <td className="px-6 py-4 font-medium text-base text-[#001E00]">
          {status}
        </td>
      </tr>
    </>
  );
};

export default OrderHistoryTable;
