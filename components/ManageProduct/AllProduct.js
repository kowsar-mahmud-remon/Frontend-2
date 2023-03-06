import Image from "next/image";
import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const AllProduct = ({ product }) => {
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
    case "Deleted":
      colorClass = "text-black";
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
        <p className=" p-[10px] whitespace-nowrap">{product.title}</p>
      </td>
      <td>
        <p className=" p-[10px]">{product.sku}</p>
      </td>
      <td>
        <p className=" p-[10px] whitespace-nowrap">{product.variation}</p>
      </td>
      <td>
        <p className=" p-[10px] whitespace-nowrap">Tk {product.price}</p>
      </td>
      <td>
        <p className=" p-[10px]">{product.stock}</p>
      </td>
      <td>
        <p className={`p-[10px ] ${colorClass} `}>{action}</p>
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

export default AllProduct;
