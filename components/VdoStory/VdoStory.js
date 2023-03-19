import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Slider from 'react-slick';
import { settings, storySettings } from '../../Utils/sliderConfig';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/CategoryImages/KachabazarIcon/shopping-bag 1.png";
import instagram from "../../assets/images/instagram-stories 1.png";

import StoriesCard from "./StoryCard/StoriesCard";
import Link from 'next/link';
const VdoStory = () => {
  const slideRef = useRef(null);
  const stories = [
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9'
    },
    {
      vdo: "",
      taka: "222",
      title: "T-shirt For Unisex T-shirt For Unisex",
      rate: '4.9'
    },
  ];

  const products = [
    {
      regularPrice: '200',
      productName: 'alu ptoroed',
      quantity: '20',
      productTitle: 'blabal',
      discount: '30%',
      productPictures: img,
      _id: 'sdlfslkdfs',
      subCategory: 'sdfsdf',
      slug: 'sdfsd',
      category: 'sdfsdf',
    },
    {
      regularPrice: '200',
      productName: 'alu ptoroed',
      quantity: '20',
      productTitle: 'blabal',
      discount: '30%',
      productPictures: img,
      _id: 'sdlfslkdfs',
      subCategory: 'sdfsdf',
      slug: 'sdfsd',
      category: 'sdfsdf',
    },
    {
      regularPrice: '200',
      productName: 'alu ptoroed',
      quantity: '20',
      productTitle: 'blabal',
      discount: '30%',
      productPictures: img,
      _id: 'sdlfslkdfs',
      subCategory: 'sdfsdf',
      slug: 'sdfsd',
      category: 'sdfsdf',
    },
    {
      regularPrice: '200',
      productName: 'alu ptoroed',
      quantity: '20',
      productTitle: 'blabal',
      discount: '30%',
      productPictures: img,
      _id: 'sdlfslkdfs',
      subCategory: 'sdfsdf',
      slug: 'sdfsd',
      category: 'sdfsdf',
    },
    {
      regularPrice: '200',
      productName: 'alu ptoroed',
      quantity: '20',
      productTitle: 'blabal',
      discount: '30%',
      productPictures: img,
      _id: 'sdlfslkdfs',
      subCategory: 'sdfsdf',
      slug: 'sdfsd',
      category: 'sdfsdf',
    },
    {
      regularPrice: '200',
      productName: 'alu ptoroed',
      quantity: '20',
      productTitle: 'blabal',
      discount: '30%',
      productPictures: img,
      _id: 'sdlfslkdfs',
      subCategory: 'sdfsdf',
      slug: 'sdfsd',
      category: 'sdfsdf',
    },
  ];

  return (
    <>
      {products ? (
        <div className=" overflow-x-hidden my-16 md:px-0 px-3">
          {/* slider header  */}
          <div className="flex gap-4 items-center justify-between">
            <div className="flex items-center gap-3">
              <Image className=' cursor-pointer' src={instagram} alt="img" width={28} height={28} />
              <div className="text-[15px] lg:text-[24px] text-[#FB641B] font-bold mr-6 md:mr-4">
                Stories
              </div>
            </div>
            <div className="bg-[#FB641B] w-[50%] md:w-[75%] h-[2px] md:h-[3px]"></div>
            <div className="text-[12px] lg:text-[14px] text-[#FB641B] w-[70px] font-[500] cursor-pointer">
              <Link href="#">All View</Link>{" "}
            </div>
            <div className="  gap-3 hidden md:flex">
              <div
                onClick={() => slideRef.current.slickNext()}
                className="bg-white w-[38px] h-[38px] rounded-full shadow-xl flex justify-center items-center cursor-pointer"
              >
                <FiChevronLeft className="text-[26px]" />
              </div>
              <div
                onClick={() => slideRef.current.slickPrev()}
                className="bg-white w-[38px] h-[38px] rounded-full shadow-xl flex justify-center items-center cursor-pointer"
              >
                <FiChevronRight className="text-[26px]" />
              </div>
            </div>
          </div>

          {/* slider card  */}
          <div className=" items-center pt-3">
            <Slider
              {...storySettings}
              className=" items-center w-full "
              ref={slideRef}
            >
              {products?.map((n, index) => (
                <StoriesCard key={index} story={n} />
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <div className="text-center my-8">
          <p>Loading....</p>
        </div>
      )}
    </>
  );
};

export default VdoStory;
