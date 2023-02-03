import React from "react";
import SellerProductCard from "../SellerProductCard/SellerProductCard";
import img1 from "../../assets/images/sellerProfile/product/image 4.png";
import img2 from "../../assets/images/sellerProfile/product/image 6.png";
import img3 from "../../assets/images/sellerProfile/product/image 7.png";
import img4 from "../../assets/images/sellerProfile/product/image 8.png";
import verified from "../../assets/images/sellerProfile/product/verified.png";

import MoreView from "./MoreView";
import StoryCard from "./StoryCard";

//dummy product data
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
    price: "1018",
    pName: "Misti Kumra Fali (Sweet Pumpkin Fali)",
    rating: "4.9",
    sellerVerify: verified,
    productOff: "(27% off)",
    OriginalPrice: "Tk. 1025",
  },
];

// dummy stories data
const stories = [
  {
    id: 1,
    video: "https://www.youtube.com/embed/yAoLSRbwxL8",
    price: "224",
    pName: "T-shirt For Unisex T-shirt For Unisex",
    rating: "4.9",
    sellerVerify: verified,
    total: "24 Ragings & 5 Reviews",
  },
  {
    id: 2,
    video: "https://www.youtube.com/embed/yAoLSRbwxL8",
    price: "224",
    pName: "T-shirt For Unisex T-shirt For Unisex",
    rating: "4.9",
    sellerVerify: verified,
    total: "24 Ragings & 5 Reviews",
  },
  {
    id: 3,
    video: "https://www.youtube.com/embed/yAoLSRbwxL8",
    price: "224",
    pName: "T-shirt For Unisex T-shirt For Unisex",
    rating: "4.9",
    sellerVerify: verified,
    total: "24 Ragings & 5 Reviews",
  },
];

function ProductStore(props) {
  return (
    <div className="lg:w-[1090px] mobile:w-[424px] mx-auto mb-10 mt-[32px]">
      <h3 className="lg:text-[24px] mobile:text-[18px] mb-[24px] font-semibold block mobile:hidden">Products</h3>
      {/* for stories */}
      <div className="">
        <div className="flex mb-[26px] mobile:w-[376px] lg:w-[1090px] mx-auto ">
        <span className="text-[16px] font-bold lg:mr-[8px] mobile:mr-[4px]">Stories</span>
        <hr className="text-[#686868] border-t-2 mt-3 lg:w-[930px] mobile:w-[248px] h-4 mx-auto" />{" "}
        <span className="text-[14px] lg:ml-8px mobile:ml-[4px] cursor-pointer">See More</span>
        </div>
        <div className="grid grid-cols-3 gap-3 lg:w-[1066px] mobile:w-[376px] mx-auto">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story}></StoryCard>
          ))}
        </div>
      </div>

      {/* for grocery */}
      <div className="flex mb-[26px] mt-[24px]  mobile:w-[376px] lg:w-[1090px] mx-auto ">
        <span className="text-[16px] font-bold lg:mr-[8px] mobile:mr-[4px]">Grocery</span>
        <hr className="text-[#686868] border-t-2 mt-3 lg:w-[930px] mobile:w-[248px] h-4 mx-auto" />{" "}
        <span className="text-[14px] lg:ml-8px mobile:ml-[4px] cursor-pointer">See More</span>
      </div>
      <div className="grid lg:grid-cols-4 mobile:grid-cols-2  lg:w-[960px] mobile:w-[376px] mx-auto mb-10 gap-[20px]">
        {products.map((product) => (
          <SellerProductCard
            key={product.id}
            product={product}
          ></SellerProductCard>
        ))}
      </div>

      {/* for kacha bazar */}
      <div className="flex mb-[26px] mobile:w-[376px] lg:w-[1090px] mx-auto">
      <span className="text-[16px] font-bold lg:mr-[8px] mobile:mr-[4px]">KachaBazar</span>
        <hr className="text-[#686868] border-t-2 mt-3 lg:w-[930px] mobile:w-[220px] h-4 mx-auto" />{" "}
        <span className="text-[14px] lg:ml-8px mobile:ml-[4px] cursor-pointer">See More</span>
      </div>
      <div className="grid lg:grid-cols-4 mobile:grid-cols-2  lg:w-[960px] mobile:w-[376px] mx-auto pb-10 gap-[20px]">
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
