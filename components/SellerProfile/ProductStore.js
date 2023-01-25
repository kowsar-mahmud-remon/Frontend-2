import React from "react";
import SellerProductCard from "../SellerProductCard/SellerProductCard";
import img1 from "../../assets/images/sellerProfile/product/image 4.png";
import img2 from "../../assets/images/sellerProfile/product/image 6.png";
import img3 from "../../assets/images/sellerProfile/product/image 7.png";
import img4 from "../../assets/images/sellerProfile/product/image 8.png";
import verified from "../../assets/images/sellerProfile/product/verified.png";
import Image from "next/image";
//dummy product
const products = [
  {
    id: 1,
    img: img1,
    price: "18",
    pName: "Kacha Morich (Green Chili) 250 ±15 gm",
    rating: "3.9",
    sellerVerify: { verified },
  },
  {
    id: 2,
    img: img2,
    price: "160",
    pName: "Tomato (Local) 500 ±30 gm",
    rating: "1.9",
    sellerVerify: { verified },
  },
  {
    id: 3,
    img: img3,
    price: "1024",
    pName: "Misti Kumra Fali (Sweet Pumpkin Fali)",
    rating: "4.9",
    sellerVerify: { verified },
  },
  {
    id: 4,
    img: img4,
    price: "10018",
    pName: "Misti Kumra Fali (Sweet Pumpkin Fali)",
    rating: "4.9",
    sellerVerify: { verified },
  },
];

function ProductStore(props) {
  return (
    <div className="w-[1090px] mx-auto mb-10 mt-[32px]">
      <h3 className="text-[24px] mb-[24px] font-semibold">Products</h3>
      <div className="flex ">
        <span className="text-[16px] font-bold">Grocerysss</span>
        <hr className="text-[#686868] border-t-2 mt-3 w-[958px] h-4 mx-auto" />{" "}
        <span className="text-[14px]">See More</span>
      </div>
      <div className="grid grid-cols-4 w-[960px] mx-auto mb-10">
        {products.map((product) => (
          <SellerProductCard
            key={product.id}
            product={product}
          ></SellerProductCard>
        ))}
      </div>
      <div className="flex ">
        <span className="text-[12px] font-bold">Kachabazar</span>
        <hr className="text-[#686868] border-t-2 mt-3 w-[964px] h-4 mx-auto my-4" />{" "}
        <span className="text-[12px]">See More</span>
      </div>
      <div className="grid grid-cols-4 w-[960px] mx-auto pb-10">
        {products.map((product) => (
          <SellerProductCard
            key={product.id}
            product={product}
            img1={img1}
          ></SellerProductCard>
        ))}
      </div>
    </div>
  );
}

export default ProductStore;
