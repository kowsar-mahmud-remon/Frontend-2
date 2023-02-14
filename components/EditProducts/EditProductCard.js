import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const EditProductCard = ({ product }) => {
  console.log("dld", product);
  const { name, img } = product;
  return (
    <div className="bg-[#F2F2F2] w-[183px] p-2 rounded-lg h-[215px] relative mx-auto">
      <div className="">
        <Image
          className="rounded-md mx-auto lg:w-[167px] md:w-[167px] w-full h-[130px] "
          width={167}
          height={126}
          src={img}
          alt=""
        ></Image>
        <div className="dropdown absolute right-4 top-[14px]">
          <label tabIndex={0} className="cursor-pointer ">
            <HiDotsHorizontal className="text-[#686868]"></HiDotsHorizontal>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu shadow rounded border border-[#B7B7B7] w-[125px] bg-[#FFFFFF] text-[#686868]"
          >
            <li>
              <Link href="editProductsTwo">View Detail</Link>
            </li>
            <li>
              <a>Edit</a>
            </li>
            <li>
              <a>Delete</a>
            </li>
            <li>
              <a>Copy Link</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm px-2 font-medium pt-4 text-center text-[#001E00]">
        {name}
      </p>
    </div>
  );
};

export default EditProductCard;
