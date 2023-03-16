import Image from "next/image";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import styles from "./category.module.css";
import logo from "../../assets/CategoryImages/ProductsImg/logo.jpg";
import cart from "../../assets/CategoryImages/ProductsImg/Vector (2).png";
import img2 from "../../assets/CategoryImages/ProductsImg/lemon.png";
import love from "../../assets/CategoryImages/ProductsImg/love.png";
import star from "../../assets/images/star.png";
import hearts from "../../assets/images/hearts.png";
import { useRouter } from "next/router";
import style from "../../styles/componentsStyles/Search.module.css";
import { FaShoppingCart } from "react-icons/fa";
import isVerify from "../../assets/images/verified.png";
import shoping from '../../assets/images/cart.png'

const ProductCard = ({ product }) => {
  const router = useRouter();
  const {
    regularPrice,
    productName,
    quantity,
    productTitle,
    discount,
    productPictures,
    _id,
    subCategory,
    slug,
    category,
  } = product || {};

  console.log(product);

  const rating = 4.5;

  const ratingColor = (statuss) => {
    if (statuss < 3) {
      return "#F4253F";
    }
    if (statuss < 4) {
      return "#FB641B";
    }
    return "#026C51";
  };

  return (
    <div>
      {/* <div
        onClick={() =>
          router.push(
            `/productpage/${slug}/${_id}?categoryId=${category}&subCategoryId=${subCategory}`
          )
        }
        className={`${style.collectionCard} w-[222px] rounded`}
      >
        <div className="">
          <div className="relative ">
            <div className="flex justify-center">
              <Image
                className="object-cover w-[220px] h-[154px]"
                loader={() => productPictures[4].img}
                loading="lazy"
                src={productPictures[4].img}
                height={40}
                width={222}
                alt="img"
              />
            </div>

            <div className={`w-7 h-7 flex justify-center items-center rounded-full ${style.love} absolute right-3 top-3`}>
              <Image className="p-1 w-[26px] h-[26px] cursor-pointer" src={love} width={30} alt="img" />
            </div>
          </div>
          <div className="px-4 mt-1">
            <div>
              <div className="flex gap-2 items-center">
                <span className="text-[#FB641B] font-bold text-[20px]">
                  Tk{" "}
                  {discount
                    ? (regularPrice - (regularPrice * discount) / 100).toFixed(
                        0
                      )
                    : regularPrice}
                </span>
                {discount && (
                  <>
                    <span className="text-[#707070] text-[12px] line-through font-[500]">
                      TK {regularPrice}
                    </span>
                    <span className="text-[#707070] text-[12px] ">
                      ({discount}% off)
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="mt-1">
              <p className="text-[12px] md:text-[16px] font-bold text-[#001E00]">
                {productTitle
                  ? productTitle
                  : "Kacha Morich (Green Chili) 250 ±15 gm"}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-[10px]">
              <span className="flex items-center justify-center gap-[2px] bg-[#FB641B] text-white px-1 rounded-md">
                3.9
                <AiTwotoneStar />
              </span>
              <p className="text-[#686868] text-[10px] md:text-[14px]">
                24 Ratings & 5 Reviews
              </p>
            </div>
            <div className="mt-[15px]">
              <div className="text-[#686868]  text-[13.27px] font-[400]">
                <p className="flex items-center gap-2 relative text-[#686868] font-[500]">
                  Seller:
                  <span className="rounded-full justify-center items-center border-4 border-[#026C51] flex w-[34px] h-[34px] text-[16px] font-bold absolute top-[-3px] left-10 z-30 bg-slate-50">
                    <Image
                      className="rounded-full"
                      src={logo}
                      width={30}
                      alt="img"
                    />
                  </span>{" "}
                  <span className="bg-[#026C51] px-3 rounded-md py-1 text-white font-bold ml-2 ">
                    Assured
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-[#FB641B] text-white w-[90%] flex justify-center items-center rounded-[10px] font-[500] text-[14px] md:text-[23px] gap-2 py-1 ">
                Add to Cart{" "}
                <span>
                  <Image src={cart} alt="cart" width={20} height={21} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div
        onClick={() =>
          router.push(
            `/productpage/${slug}/${_id}?categoryId=${category}&subCategoryId=${subCategory}`
          )
        }
        key={product.id}
        className={`${style.collectionCard} w-[222px] rounded my-6`}
      >
        <div className="relative">
          <div className="flex justify-center">
            <Image
              className="object-cover w-[220px] h-[154px]"
              loader={() => productPictures[4].img}
              loading="lazy"
              src={productPictures[2].img}
              width={220}
              height={154}
              alt=""
            />
          </div>
          <div
            onClick={() => clickHandler(product.id)}
            className={`w-7 h-7 flex justify-center items-center rounded-full ${style.love} absolute right-3 top-3`}
          >
            <Image
              className="p-1 w-[26px] h-[26px] mt-1 cursor-pointer"
              src={hearts}
              alt=""
            ></Image>
          </div>
          <div className="p-4">
            <div className="">
              <div className="">
                <div>
                  <div className="flex gap-2 items-center">
                    <span className="text-[#FB641B] font-bold text-[20px]">
                      Tk{" "}
                      {discount
                        ? (
                            regularPrice -
                            (regularPrice * discount) / 100
                          ).toFixed(0)
                        : regularPrice}
                    </span>
                    {discount && (
                      <>
                        <span className="text-[#707070] text-[12px] line-through font-[500]">
                          TK {regularPrice}
                        </span>
                        <span className="text-[#707070] text-[12px] ">
                          ({discount}% off)
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#001E00] font-semibold text-base my-2">
              {product.pName}
            </p>
            <div className="flex items-center mb-[10px]">
              <div
                style={{
                  backgroundColor: ratingColor(product.rating),
                }}
                className="rounded-[2px] px-[2] w-[35px] h-[16px] flex items-center justify-between mr-2"
              >
                <p className="text-xs text-white">{rating}</p>
                <div className="">
                  <Image className="" src={star} alt="" width={12}></Image>
                </div>
              </div>
              <p className="text-[14px] text-[#686868]">
                24 Ratings & 5 Reviews
              </p>
            </div>
            <div className="mb-[34px] flex items-center">
              <div className="flex items-center">
                <p className="pr-2">Seller:</p>
                <Image className="h-6" src={isVerify} alt="logo image" />
              </div>
            </div>
            <div className="">
              <button className="w-[186px] h-[38px] bg-[#FB641B] text-white flex justify-center items-center rounded-lg">
                <p className="pr-1">Add to Cart</p>
                <Image src={shoping} width={24} height={20} alt=""></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
