import Image from "next/image";
import { useState } from "react";

const AllProductCard = ({ product, setModal }) => {
  const { name, image } = product;
  


  const handleModal = (product) => {
    setModal(product);
  };

  return (
    <div>
      <div className="bg-[#F2F2F2] p-1 rounded-lg h-[200px]">
        <label
          onClick={() => handleModal(product)}
          htmlFor="my-modal-2"
          className="cursor-pointer"
        >
          <Image
            className="rounded-md mx-auto h-[130px]"
            width={150}
            height={130}
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
