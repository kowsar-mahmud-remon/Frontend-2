import Image from "next/image";
import React, { useState } from "react";
import Select from "react-select";
import ManageOrderModal from "../ManageOrderModal/ManageOrderModal";
import img from "../../assets/images/image 66.png"

const ManageOrderTable = ({ product, selectedOption, setSelectedOption , modalIsOpen, setIsOpen}) => {
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
    delivery,
  } = product;

  const [alerts, setAlerts] = useState();

  const handleSelect = (id) => {
    if(id === "Shipped"){
      setIsOpen(true)
    }
  };

  const textColor = (statuss) => {
    if (statuss === "Processing") {
      return "#287DF3";
    }
    if (statuss === "Ready") {
      return "#F4253F";
    }
    return "#FB641B";
  };


  return (
    <>
      <ManageOrderModal></ManageOrderModal>
      <tr className="bg-white border-b text-sm border-[#B7B7B7] text-[#001E00]">
        <td className="p-1 border-r border-l border-[#B7B7B7]">
          <Image
            className="w-[76px]"
            width={76}
            height={61}
            src={img}
            alt=""
          />
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium border-r border-[#B7B7B7] text-base whitespace-nowrap"
        >
          {title}
        </th>
        <td className="px-6 py-4 font-medium border-r border-[#B7B7B7] text-base">
          <label htmlFor="my-modal-2" className="cursor-pointer">
            KS515JKO
          </label>
        </td>
        <td className="px-6 py-4 font-medium border-r border-[#B7B7B7] whitespace-nowrap text-base">
          {variation}
        </td>
        <td className="px-6 py-4 font-medium border-r whitespace-nowrap border-[#B7B7B7] text-base">
          TK {price}
        </td>
        <td className="px-6 py-4 font-medium border-r border-[#B7B7B7] text-base">
          {" "}
          {quantity}
        </td>
        <td className="px-6 py-4 font-medium border-r whitespace-nowrap border-[#B7B7B7] text-base">
          {delivery} 
        </td>
        <td className="px-6 py-4 font-medium border-r whitespace-nowrap border-[#B7B7B7] text-base">
          {deliveryDate} <br></br> to {date}
        </td>
        <td className="px-6 py-4 font-medium border-r border-[#B7B7B7]">
          <button className="link text-[#287DF3]"> Invoice</button>
        </td>
        <td className="px-6 py-4 border-r border-[#B7B7B7]">
          <select className="w-[138px] h-10 rounded px-2 border border-[#B7B7B7]" onChange={(e)=>handleSelect(e.target.value)}>
            <option defaultValue>Select</option>
            <option value="Shipped">Shipped</option>
            <option value="Processing">Processing</option>
            <option value="Ready">Ready</option>

          </select>
        </td>
      </tr>
    </>
  );
};

export default ManageOrderTable;
