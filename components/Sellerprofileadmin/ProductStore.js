/* eslint-disable react-hooks/rules-of-hooks */

import img1 from "../../assets/images/sellerProfile/product/image 4.png";
import img2 from "../../assets/images/sellerProfile/product/image 6.png";
import img3 from "../../assets/images/sellerProfile/product/image 7.png";
import img4 from "../../assets/images/sellerProfile/product/image 8.png";
import verified from "../../assets/images/sellerProfile/product/verified.png";



import StoryCard from "./StoryCard";
import { useState } from "react";
import SellerProductCard from "./SellerProductCard";

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
    pName: "Paka Tomato (Local) 500 ±30 gm",
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
  {
    id: 5,
    img: img4,
    price: "1018",
    pName: "Misti Kumra Fali (Sweet Pumpkin Fali)",
    rating: "4.9",
    sellerVerify: verified,
    productOff: "(27% off)",
    OriginalPrice: "Tk. 1025",
  },
  {
    id: 6,
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
  {
    id: 4,
    video: "https://www.youtube.com/embed/yAoLSRbwxL8",
    price: "224",
    pName: "T-shirt For Unisex T-shirt For Unisex",
    rating: "4.9",
    sellerVerify: verified,
    total: "24 Ragings & 5 Reviews",
  },
  {
    id: 5,
    video: "https://www.youtube.com/embed/yAoLSRbwxL8",
    price: "224",
    pName: "T-shirt For Unisex T-shirt For Unisex",
    rating: "4.9",
    sellerVerify: verified,
    total: "24 Ragings & 5 Reviews",
  },
  {
    id: 6,
    video: "https://www.youtube.com/embed/yAoLSRbwxL8",
    price: "224",
    pName: "T-shirt For Unisex T-shirt For Unisex",
    rating: "4.9",
    sellerVerify: verified,
    total: "24 Ragings & 5 Reviews",
  },
];

function ProductStore(props) {
  // for stories see more
  const [folded, setFolded] = useState(true);

  const toggleFolded = () => {
    setFolded((prevFolded) => !prevFolded);
  };
  // for grocery see more
  const [gfolded, setGfolded] = useState(true);

  const toggleGfolded = () => {
    setGfolded((prevFolded) => !prevFolded);
  };
  // for kacha bajar see more
  const [kfolded, setKfolded] = useState(true);

  const toggleKfolded = () => {
    setKfolded((prevFolded) => !prevFolded);
  };

  return (
    <div className="max-w-[1100px] mx-auto mobile:px-[15px] mb-10 mt-[32px] xl:ml-[10%]">
      <h3 className="lg:text-[24px] mobile:text-[18px] mb-[24px] font-semibold block mobile:hidden">
        Products
      </h3>
      {/* for stories */}

      <div className="">
        <div className="flex justify-between mb-[26px] mx-auto ">
          <span className="text-[14px] font-bold lg:mr-[8px] mobile:mr-[4px]">
            Stories
          </span>
          <hr className="text-[#686868] border-t-2 mt-3  w-full h-4 mx-auto" />{" "}
          <span className="text-[14px] lg:ml-8px mobile:ml-[4px] cursor-pointer whitespace-nowrap">
            {stories.length > 3 && (
              <button onClick={toggleFolded}>See More</button>
            )}
          </span>
        </div>
        {folded ? (
          <>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[10px] w-full  mx-auto">
              {stories.slice(0, 3).map((story) => (
                <StoryCard key={story.id} story={story}></StoryCard>
              ))}
            </div>
          </>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[10px] w-full  mx-auto">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story}></StoryCard>
            ))}
          </div>
        )}
      </div>

      {/* for grocery */}
      <div className="flex mb-[26px] mt-[24px]  mx-auto ">
        <span className="text-[14px] font-bold lg:mr-[8px] mobile:mr-[4px]">
          Grocery
        </span>
        <hr className="text-[#686868] border-t-2 mt-3  w-full h-4 mx-auto" />{" "}
        <span className="text-[12px] lg:ml-8px mobile:ml-[4px] cursor-pointer whitespace-nowrap">
          {products.length > 4 && (
            <button onClick={toggleGfolded}>See More</button>
          )}
        </span>
      </div>
      {gfolded ? (
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 mobile:grid-cols-2 w-full mx-auto mb-10 gap-[20px]">
          {products.slice(0, 4).map((product) => (
            <SellerProductCard
              key={product.id}
              product={product}
            ></SellerProductCard>
          ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 mobile:grid-cols-2 w-full mx-auto mb-10 gap-[20px]">
          {products.map((product) => (
            <SellerProductCard
              key={product.id}
              product={product}
            ></SellerProductCard>
          ))}
        </div>
      )}

      {/* for kacha bazar */}
      <div className="flex mb-[26px]  mx-auto">
        <span className="text-[14px] font-bold lg:mr-[8px] mobile:mr-[4px]">
          kachabazar
        </span>
        <hr className="text-[#686868] border-t-2 mt-3  w-full h-4 mx-auto" />{" "}
        <span className="text-[12px] lg:ml-8px mobile:ml-[4px] cursor-pointer whitespace-nowrap">
          {products.length > 4 && (
            <button onClick={toggleKfolded}>See More</button>
          )}
        </span>
      </div>
      {kfolded ? (
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 mobile:grid-cols-2 w-full mx-auto mb-10 gap-[20px]">
          {products.slice(0, 4).map((product) => (
            <SellerProductCard
              key={product.id}
              product={product}
              img1={img1}
            ></SellerProductCard>
          ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 mobile:grid-cols-2 w-full mx-auto mb-10 gap-[20px]">
          {products.map((product) => (
            <SellerProductCard
              key={product.id}
              product={product}
              img1={img1}
            ></SellerProductCard>
          ))}
        </div>
      )}
      
    </div>
  );
}

export default ProductStore;
