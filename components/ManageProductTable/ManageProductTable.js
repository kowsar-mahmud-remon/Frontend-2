import Image from "next/image";
import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageProductTable = ({ product }) => {
  const { title, variation, price, stock, action, sku, image } = product;
  let colorClass = "";

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
    <>
      <tr className="bg-white border-b border-[#B7B7B7] text-[#001E00]">
        <td className="px-6 py-4">
          <Image width={40} height={40} src={image} alt="" />
        </td>
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
          {title}
        </th>
        <td className="px-6 py-4 font-medium whitespace-nowrap">{sku}</td>
        <td className="px-6 py-4 font-medium whitespace-nowrap">{variation}</td>
        <td className="px-6 py-4 font-medium whitespace-nowrap">TK{price}</td>
        <td className="px-6 py-4 font-medium whitespace-nowrap">{stock}</td>
        <td className={`px-6 py-4 font-medium ${colorClass} whitespace-nowrap`}>{action}</td>
        <td className="px-6 py-4">
          <div className="flex-col ">
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
    </>
  );
};

export default ManageProductTable;
