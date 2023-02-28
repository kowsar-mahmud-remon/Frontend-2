import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css"

const OrderNotificationTable = ({ product }) => {
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
        <td className="p-1 whitespace-nowrap border-r border-l border-[#B7B7B7]">
          <Image className={`w-[76px] ${style.boxshaddow}`} width={76} height={61} src={image} alt="" />
        </td>
        <th scope="row" className="px-6 py-4 font-medium border-r border-[#B7B7B7] text-base whitespace-nowrap">
          {title}
        </th>
        <td className="px-6 py-4 font-medium border-r border-[#B7B7B7] text-base">
          <label htmlFor="my-modal-2" className="cursor-pointer">
            KS515JKO
          </label>
        </td>
        <td className="px-6 whitespace-nowrap py-4 font-medium border-r border-[#B7B7B7] text-base">{variation}</td>
        <td className="px-6 py-4 font-medium border-r whitespace-nowrap border-[#B7B7B7] text-base">TK {price}</td>
        <td className="px-6 py-4 whitespace-nowrap font-medium border-r border-[#B7B7B7] text-base"> {quantity}</td>
        <td className="px-6 whitespace-nowrap py-4 font-medium border-r border-[#B7B7B7] text-base">{delivery}</td>
        <td className="px-6 py-4 font-medium whitespace-nowrap border-r border-[#B7B7B7] text-base">{deliveryDate} <br></br>to {date}</td>
        <td className="px-6 py-4 font-medium border-r border-[#B7B7B7]">
          <button className="text-[#287DF3]"> <Link href="productInvoicesDetails">Invoice</Link></button>
        </td>
        <td className="px-6 py-4 border-r border-[#B7B7B7]">
          <button className="w-[135px] h-[31px] bg-[#2ECC71] rounded text-white text-base"> Accept Order</button>
        </td>
      </tr>
    </>
  );
};

export default OrderNotificationTable;
