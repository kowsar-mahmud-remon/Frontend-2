import Image from "next/image";
import React, { useState } from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css"

const SalesOverviewTableItems = ({ product }) => {
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
  } = product;

  const total = parseFloat(price * quantity);

  console.log("amoutn", total, price, quantity);

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
      <tr className="bg-white border-b text-base border-[#B7B7B7] text-[#001E00]">
        <td className="p-2">
          <Image className={`w-[76px] h-[61px] ${style.boxshaddow} rounded`} width={76} height={61} src={image} alt="" />
        </td>
        <th scope="row" className="px-6 py-8 font-medium text-base whitespace-nowrap">
          {title}
        </th>
        <td className="px-6 py-8 font-medium text-base">
          <label htmlFor="my-modal-2" className="cursor-pointer">
            KS515JKO
          </label>
        </td>
        <td className="px-6 py-8 font-medium text-base">{variation}</td>
        <td className="px-6 py-8 font-medium text-base">TK {price}</td>
        <td className="px-6 py-8 font-medium text-base">{quantity} kg</td>
        <td className="px-6 py-8 font-medium text-base">{date}</td>
        <td className="px-6 py-8 font-medium text-base">TK {total}</td>
      </tr>
    </>
  );
};

export default SalesOverviewTableItems;
