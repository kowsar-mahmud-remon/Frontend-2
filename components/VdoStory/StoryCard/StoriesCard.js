import Image from "next/image";
import { useRouter } from "next/router";
import { AiTwotoneStar } from "react-icons/ai";
import verify from "../../../assets/images/storyVdo/Verified.png";
import profile from "../../../assets/images/storyVdo/image 346.png";
import eye from "../../../assets/images/storyVdo/Vector (5).png";
import sound from "../../../assets/images/storyVdo/Vector (6).png";
import threedot from "../../../assets/images/storyVdo/carbon.png";
// import vdo from '../../../assets/video/vdo.mp4';
import ReactPlayer from "react-player/youtube";
import { useEffect } from "react";
import { useState } from "react";


const StoriesCard = ({ story }) => {
  const router = useRouter();
  const [render,setRender]=useState(undefined)
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
  } = story || {};
  useEffect(()=>{
    setRender(true)
  },[])
  // console.log(vdo);
  if(!render) return;
  return (
    <div className="w-[332px]">
      <div className="rounded-lg shadow-xl ">
        <div className="relative">
          
          <ReactPlayer className='rounded-t-lg' width={'100%'} url="https://youtube.com/shorts/3l4B26DzMo8" />

          <div className="absolute top-3 w-full px-1 text-white">
            <div className="flex justify-between items-center">
              <Image src={profile} alt="img" />
              <p>Banglar Big...</p>
              <p>Follow 100k+</p>
              <div className="flex items-center">
                <Image src={eye} alt="img" />
                <p>250</p>
              </div>
              <Image src={sound} alt="img" />
              <Image src={threedot} alt="img" />
            </div>
          </div>
        </div>
        <div className="px-4 mt-1">
          <div>
            <div className="flex gap-2 justify-between items-center">
              <p className="text-[#FB641B] font-bold text-[20px]">
                Tk {regularPrice}
              </p>
              <div className="flex text-[#686868]">
                <p className="mr-1">Seller: </p>
                <Image src={verify} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-1">
            <p className="text-[12px] md:text-[16px] font-bold text-[#001E00]">
              {productTitle}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-[10px]">
            <span className="flex items-center justify-center gap-[2px] bg-[#001E00] text-white px-1 rounded-md">
              3.9
              <AiTwotoneStar />
            </span>
            <p className="text-[#686868] text-[10px] md:text-[14px]">
              24 Ratings & 5 Reviews
            </p>
          </div>
          <div className="mt-[15px] pb-3">
            <h2 className="text-center text-[#FB641B] font-[500] ">
              Visit Now
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesCard;
