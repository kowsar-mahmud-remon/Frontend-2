import Image from "next/image";
import React, { useState } from "react";

const OrderOverviewTable = ({ product }) => {
  const {
    title,
    variation,
    price,
    stock,
    action,
    sku,
    date,
    status,
    image,
    quantity,
    deliveryDate,
    paymentStatus,
    delivery
  } = product || {};

  const [alerts, setAlerts] = useState();

  const handleShipped = (id) => {
    if (id == "Shipped") {
      setAlerts("Shipped");
    }
  };

  const textColor =(statuss)=> {
    if (statuss === 'Processing') {
        return '#287DF3';
    }
    if (statuss === 'Ready') {
        return '#F4253F';
    }
    return '#FB641B';
}

  return (
    <>
      <tr className="bg-white last:border-b-0 border-b text-sm border-[#B7B7B7] text-[#001E00]">
        <td className="px-6 py-4">
          <Image className="w-[76px] h-[61px]" width={76} height={61} src={image} alt="" />
        </td>
        <th scope="row" className="px-6 py-4 font-medium text-base whitespace-nowrap">
          {title}
        </th>
        <td className="px-6 py-4 font-medium text-base">
          <label htmlFor="my-modal-2" className="cursor-pointer">
            KS515JKO
          </label>
        </td>
        <td className="px-6 py-4 font-medium text-base">{variation}</td>
        <td className="px-6 py-4 font-medium text-base">{quantity}</td>
        <td className="px-6 py-4 font-medium text-base">TK {price}</td>
        <td className="px-6 py-4 font-medium text-base">{date}</td>
        <td className="px-6 py-4 font-medium text-base" style={{ 'color': textColor(status)}}>{status}</td>
        <td className="px-6 py-4 font-medium">
          {" "}
          <button className={ delivery === "Paid" ? "w-[135px] h-[31px] rounded bg-[#2ECC71] text-white text-center" : "w-[135px] h-[31px] rounded bg-[#FB641B] text-white text-center" }>{delivery}</button>{" "}
        </td>
      </tr>
    </>
  );
};

export default OrderOverviewTable;
