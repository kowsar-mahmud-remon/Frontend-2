import Image from "next/image";
import React from "react";

const ManageOrderTable = ({ product }) => {
  const {
    title,
    variation,
    price,
    stock,
    action,
    sku,
    image,
    deliveryDate,
    paymentStatus,
  } = product;
  return (
    <>
      <tr className="bg-white border-b text-sm border-[#B7B7B7] text-[#001E00]">
        <td className="px-6 py-4">
          <Image width={40} height={40} src={image} alt="" />
        </td>
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
          {title}
        </th>
        <td className="px-6 py-4 font-medium">{sku}</td>
        <td className="px-6 py-4 font-medium">{variation}</td>
        <td className="px-6 py-4 font-medium">TK{price}</td>
        <td className="px-6 py-4 font-medium">{stock}</td>
        <td className="px-6 py-4 font-medium">{paymentStatus}</td>
        <td className="px-6 py-4 font-medium">{deliveryDate}</td>
        <td className="px-6 py-4 font-medium">
          <select className="font-medium h-10 border rounded text-[#001E00] px-2 border-[#B7B7B7]">
            <option disabled selected>
            Processing
            </option>
            <option className="rounded">Ready</option>
            <option className="rounded">Shipped</option>
          </select>
        </td>
      </tr>
    </>
  );
};

export default ManageOrderTable;
