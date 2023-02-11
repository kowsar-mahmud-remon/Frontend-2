import Image from "next/image";
import React from "react";

const ManageProductTable = ({ product }) => {
  const { title, variation, price, stock, action, sku, image } = product;

  return (
    <>
      <tr className="bg-white border-b border-[#B7B7B7] text-[#001E00]">
        <td className="px-6 py-4">
          <Image width={40} height={40} src={image} alt="" />
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium whitespace-nowrap"
        >
          {title}
        </th>
        <td className="px-6 py-4 font-medium">{sku}</td>
        <td className="px-6 py-4 font-medium">{variation}</td>
        <td className="px-6 py-4 font-medium">TK{price}</td>
        <td className="px-6 py-4 font-medium">{stock}</td>
        <td className="px-6 py-4 font-medium">{action}</td>
      </tr>
    </>
  );
};

export default ManageProductTable;
