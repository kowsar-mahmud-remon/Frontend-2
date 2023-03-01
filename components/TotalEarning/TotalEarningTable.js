import Image from "next/image";
import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";

const TotalEarningTable = ({ product }) => {
  const { deliveryDate, category, status, orderNum, kg, price, image, delivery } =
    product || {};
  return (
    <>
      <tr className="bg-white border-b border-t border-[#B7B7B7] text-[#001E00]">
        <td className="px-6 py-6  text-base font-medium whitespace-nowrap text-[#001E00]">
          {deliveryDate}
        </td>
        <td className="px-6 py-6  text-base font-medium whitespace-nowrap text-[#001E00]">
          {orderNum}
        </td>
        <td className="px-6 py-6  whitespace-nowrap text-base font-medium text-[#001E00]">
          {status}
        </td>
        <td className="px-6 py-6  text-base font-medium text-[#001E00]">Tk {price}</td>
        <td className="px-6 py-6 whitespace-nowrap  text-base font-medium text-[#001E00]">
        <button className={ delivery === "Paid" ? "w-[135px] h-[31px] rounded bg-[#287DF3] text-white text-center" : "w-[135px] h-[31px] rounded bg-[#F4253F] text-white text-center" }>{delivery}</button>{" "}
        </td>
      </tr>
    </>
  );
};

export default TotalEarningTable;
