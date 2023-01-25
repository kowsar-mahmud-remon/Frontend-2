import React from "react";
import SellerProductCard from "../SellerProductCard/SellerProductCard";
import img1 from "../../assets/images/sellerProfile/product/image 4.png";
import img2 from "../../assets/images/sellerProfile/product/image 6.png";
import img3 from "../../assets/images/sellerProfile/product/image 7.png";
import img4 from "../../assets/images/sellerProfile/product/image 8.png";
import verified from "../../assets/images/sellerProfile/product/verified.png";
import MoreView from "./MoreView";

//dummy product
const products = [
  {
    id: 1,
    img: img1,
    price: "18",
    pName: "Kacha Morich (Green Chili) 250 ±15 gm",
    rating: "3.9",
    sellerVerify: verified,
    productOff: "(2% off)",
    OriginalPrice: "Tk 20",
  },
  {
    id: 2,
    img: img2,
    price: "160",
    pName: "Tomato (Local) 500 ±30 gm",
    rating: "1.9",
    sellerVerify: verified,
    productOff: "(20% off)",
    OriginalPrice: "Tk 80",
  },
  {
    id: 3,
    img: img3,
    price: "1024",
    pName: "Misti Kumra Fali (Sweet Pumpkin Fali)",
    rating: "4.9",
    sellerVerify: verified,
  },
  {
    id: 4,
    img: img4,
    price: "10018",
    pName: "Misti Kumra Fali (Sweet Pumpkin Fali)",
    rating: "4.9",
    sellerVerify: verified,
    productOff: "(27% off)",
    OriginalPrice: "Tk. 1025",
  },
];

function ProductStore(props) {
  return (
    <div className="w-[1090px] mx-auto mb-10 mt-[32px]">
      <h3 className="text-[24px] mb-[24px] font-semibold">Products</h3>
      <div className="flex mb-[26px]">
        <span className="text-[16px] font-bold mr-[8px]">Grocery</span>
        <hr className="text-[#686868] border-t-2 mt-3 w-[958px] h-4 mx-auto" />{" "}
        <span className="text-[14px] ml-8px cursor-pointer">See More</span>
      </div>
      <div className="grid grid-cols-4 w-[960px] mx-auto mb-10 gap-[20px]">
        {products.map((product) => (
          <SellerProductCard
            key={product.id}
            product={product}
          ></SellerProductCard>
        ))}
      </div>
      <div className="flex mb-[26px]">
        <span className="text-[16px] font-bold mr-[8px]">Kachabazar</span>
        <hr className="text-[#686868] border-t-2 mt-3 w-[930px] h-4 mx-auto" />{" "}
        <span className="text-[14px] ml-8px cursor-pointer">See More</span>
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
      <MoreView></MoreView>
    </div>
  );
}

export default ProductStore;
