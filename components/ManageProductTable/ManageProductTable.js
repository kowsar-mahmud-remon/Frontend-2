import Image from "next/image";
import React from "react";

const ManageProductTable = ({ product }) => {
  const { title, variation, price, stock, action, sku, image } = product;

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#001E00]">
        <td className="px-6 py-4">
          <Image width={35} height={35} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBAVn0aSVV9kfTyEnxqqudMYb3wtXGmfjcEg&usqp=CAU" alt=""/>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
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