import Image from "next/image";
import { useState } from "react";

const AllProductCard = ({ product, setModal }) => {
  const { name, image } = product;

  const handleModal = (product) => {
    setModal(product);
  };

  return (
    <div>
      <div className="bg-[#F2F2F2] p-2 w-[183px] rounded-lg h-[215px]">
        <label
          onClick={() => handleModal(product)}
          htmlFor="my-modal-2"
          className="cursor-pointer"
        >
          <Image
            className="rounded-md mx-auto h-[130px]"
            width={167}
            height={126}
            src={image}
            alt=""
          ></Image>
        </label>
        <p className="text-sm px-2 font-medium pt-4 text-center text-[#001E00]">
          {name}
        </p>
      </div>
    </div>
  );
};

export default AllProductCard;
