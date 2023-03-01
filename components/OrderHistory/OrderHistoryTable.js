import Image from "next/image";
import React from "react";
import { useState } from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css"

const OrderHistoryTable = ({ product }) => {
  const { title, category, status, orderNum, kg, price, image, deliveryDate } = product || {};

  return (
    <>
      <tr className="bg-white last:border-b-0 border-b border-[#B7B7B7] text-[#001E00]">
        <td className="p-2">
          <Image className={`w-[76px] h-[61px] ${style.boxshaddow} rounded`} width={76} height={61} src={image} alt="" />
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
        <td className="px-6 py-4 font-medium text-base whitespace-nowrap text-[#001E00]">
          {category}
        </td>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-base text-[#001E00]">
          TK {price}
        </td>
        <td className="px-6 py-4 font-medium text-base text-[#001E00]">{kg}</td>
        <td className="px-6 py-4 whitespace-nowrap font-medium text-base text-[#001E00]">
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
