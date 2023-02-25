import Image from 'next/image';
import React, { useState } from 'react';
import img from '../../assets/images/image 7.png';
import img2 from '../../assets/images/image 66.png';
import img3 from '../../assets/images/image 9.png';
import img4 from '../../assets/images/image 77.png';
import img5 from '../../assets/images/image 88.png';
import img6 from '../../assets/images/image 4.png';
import verified from '../../assets/images/verified.png';
import delivery from '../../assets/images/fast-delivery 1.png';
import delivery2 from '../../assets/images/cash-on-delivery 2.png';
import creditCard from '../../assets/images/credit-card 1.png';
import unnamed from '../../assets/images/unnamed.png';
import DBBL from '../../assets/images/DBBL.png';
import rocket from '../../assets/images/rocket.png';
import BKASH from '../../assets/images/BKASH.png';
import delivery3 from '../../assets/images/cash-on-delivery 1.png';
import VectorShare from '../../assets/images/VectorShare.png';
import { FaAngleUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { HiShoppingBag } from 'react-icons/hi';
import { AiFillHeart } from 'react-icons/ai';
import { ImStarFull } from 'react-icons/im';
import { FaAngleRight } from 'react-icons/fa';
import styles from "../../styles/campaignManagementTwo.module.css";



const EditProductsTwo = () => {
  const [newImg, setNewImg] = useState(img2);

  const productDetails =
    [
      {
        _id: 1,
        img: img2
      },
      {
        _id: 2,
        img: img3
      },
      {
        _id: 3,
        img: img4
      },
      {
        _id: 4,
        img: img5
      },
      {
        _id: 4,
        img: img6
      }
    ];
  return (
    <div className="my-7">

      <div className="lg:max:w-[1426px] mx-auto text-lg text-[#686868]">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Products</p>
          <p className='text-[#001E00] font-medium'>{">"} Edit Product</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>View Product</p>
      </div>


      <div className={`lg:max:w-[1426px] mx-auto p-6 lg:flex mt-8 ${styles.campaignManagementWithoutBorder}`}>

        <div className="lg:flex lg:flex-row-reverse">


          <div className="lg:mr-[38px] mb-10">
            <div className="flex justify-end mb-[-45px] mr-10 h-10 items-end">
              <div className={`p-2 z-10 ${styles.campaignManagementWithoutBorderRadius}`}>
                <AiFillHeart className={`text-2xl text-[#FB641B] z-10 `}></AiFillHeart>
              </div>
            </div>
            <Image
              className={`w-[500px] h-[500px] mb-2 mx-auto ${styles.campaignManagementWithoutBorder}`}
              src={newImg}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:mr-6 mb-5 lg:w-[96px] p-2  flex flex-wrap">
            <FaAngleUp className='mt-2 mb-4 w-full hidden lg:block'></FaAngleUp>

            {
              productDetails.map(productImg => <div key={productImg._id} className="">

                <Image
                  onMouseOver={e => setNewImg(e.currentTarget.src)}
                  className={`w-[80px] h-[80px] mb-2 ${styles.campaignManagementWithoutBorder}`}
                  src={productImg?.img}
                  alt="Picture of the author"
                  width={80}
                  height={80}
                />

              </div>)
            }
            <FaAngleDown className='mt-4 mb-2 w-full hidden lg:block'></FaAngleDown>
          </div>

        </div>

        <div className="">
          <div className="flex items-center">
            <p className=' text-[32px] text-[#001E00] font-medium mr-[104px]'>Tomato (Local) 500 ±30 gm</p>
            <div className={`p-2 ${styles.campaignManagementWithoutBorderRadius}`}>
              <Image
                className={`w-[29px] h-[24px] `}
                src={VectorShare}
                alt="Picture of the author"
                width={29}
                height={24}
              />
            </div>
          </div>
          <div className="mt-4 flex">
            <div className=" text-[#FB641B] text-2xl flex mr-8">
              <ImStarFull className='p-[1px]'></ImStarFull>
              <ImStarFull className='p-[1px]'></ImStarFull>
              <ImStarFull className='p-[1px]'></ImStarFull>
              <ImStarFull className='p-[1px]'></ImStarFull>
            </div>
            <p className='text-base text-[#FB641B] mr-[10px]'>4.0</p>
            <p className='text-base text-[#686868]'>24 Ratings & 5 Reviews</p>
          </div>

          <div className="mt-[18px] flex">
            <p className='text-base text-[#001E00] font-medium mr-4'>Brand: <span className='text-[#686868]'>No Brand</span></p>
            <p className='text-base text-[#001E00] font-medium'>Color: <span className='text-[#686868]'>Red Color</span></p>
          </div>

          <div className="mt-[18px] flex">
            <p className='text-base text-[#686868] mr-5'>Seller: <span className='text-[#287DF3]'>Profile</span></p>
            <div className="flex">
              <p className='text-base text-[#686868] mr-2'>Seller: </p>
              <Image
                className='w-[78px] h-[24px] mb-2'
                src={verified}
                alt="Picture of the author"
                width={78}
                height={24}
              />
            </div>
          </div>
          <div className="mt-[18px]">
            <div className=" text-[#707070] flex lg:block justify-between">
              <div className="flex items-center">
                <p className=' text-2xl text-[#FB641B] font-medium mb-2 mr-4'>TK 60</p>
                <p className='text-base line-through mb-2 mr-4'>Tk 80</p>
                <p className='text-base mb-4'>(20 % off)</p>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <button className="btn btn-ghost text-4xl w-[34px] h-[34px] pt-0 font-bold text-[#001E00] mr-5 ">-</button>
              <p className='text-2xl mr-5 text-[#FB641B]'>1</p>
              <button className='btn btn-ghost text-4xl w-[34px] h-[34px] pt-0 font-bold text-[#001E00]'>+</button>
            </div>

            <div className="lg:flex items-center mt-4">
              <div className="flex items-center lg:mr-6 mb-2">
                <Image
                  className='w-[28px] h-[28px] mr-3'
                  src={delivery}
                  alt="Picture of the author"
                  width={28}
                  height={28}
                />
                <p className='text-base text-[#686868]'>24 Hours To 72 Hours Delivery Time</p>
              </div>
              <div className="flex items-center mb-2">
                <Image
                  className='w-[28px] h-[28px] mr-3'
                  src={delivery2}
                  alt="Picture of the author"
                  width={28}
                  height={28}
                />
                <p className='text-base text-[#686868]'>24 Hours To 72 Hours Delivery Time</p>
              </div>
            </div>

            <div className="mt-8 lg:w-[547px]">
              <p className='text-[#001E00] text-2xl font-medium mb-4'>Description</p>
              <p className='text-base text-[#686868]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable ....</p>
            </div>

            <div className="mt-8 flex items-center">
              <p className='text-[#001E00] text-2xl font-medium mr-4'>Pay With:</p>
              <Image
                className='w-[28px] h-[28px] mr-4'
                src={creditCard}
                alt="Picture of the author"
                width={28}
                height={28}
              />
              <Image
                className='w-[28px] h-[28px] mr-4'
                src={unnamed}
                alt="Picture of the author"
                width={28}
                height={28}
              />
              <Image
                className='w-[28px] h-[28px] mr-4'
                src={DBBL}
                alt="Picture of the author"
                width={28}
                height={28}
              />
              <Image
                className='w-[28px] h-[28px] mr-4'
                src={rocket}
                alt="Picture of the author"
                width={28}
                height={28}
              />
              <Image
                className='w-[28px] h-[28px] mr-4'
                src={BKASH}
                alt="Picture of the author"
                width={28}
                height={28}
              />
              <Image
                className='w-[28px] h-[28px] mr-4'
                src={delivery3}
                alt="Picture of the author"
                width={28}
                height={28}
              />

            </div>

          </div>
        </div>


      </div>
    </div>
  );
};

export default EditProductsTwo;