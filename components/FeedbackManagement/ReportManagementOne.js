import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../../assets/images/image 346.png';
import img2 from '../../assets/images/image 88.png';
import styles from "../../styles/campaignManagementTwo.module.css";
import { AiFillExclamationCircle } from 'react-icons/ai';


const ReportManagementOne = () => {
  return (
    <div className='mt-7 lg:p-0 mb-10'>

      <div className="text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Promotions</p>
          <p className='text-[#001E00] font-medium'>{">"} Report Management</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Report Management List</p>
      </div>

      <div className={`lg:max-w-1426px p-4 mt-8 mb-6 ${styles.campaignManagement}`}>
        <div className="flex items-center">

          <Image
            className='w-[32px] h-[32px] mr-4 bg-[#F2F3F7] rounded-full'
            src={img}
            alt="Picture of the author"
            width={32}
            height={32}
          />
          <div className="flex justify-between w-full items-center">
            <p className=' text-lg font-medium text-[#001E00]'>Jakariya Sick</p>
            <p className=' text-sm text-[#686868]'>21 Dec 2022</p>
          </div>
        </div>

        <div className="flex mt-[25px] ml-[50px]">
          <p className='text-base font-bold text-[#F4253F] mr-3'>Report Product:</p>
          <p className='text-base text-[#686868] lg:w-3/4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a  <span className='text-[#287DF3]'>Read More...</span></p>
        </div>
        <div className="flex items-center mt-4 ml-[177px]">
          <Image
            className={`w-[74px] h-[59px] mr-4 ${styles.imgShadow}`}
            src={img2}
            alt="Picture of the author"
            width={74}
            height={59}
          />
          <div className="font-bold text-base text-[#001E00]">
            <p className='mb-3'>Local Title:<span className='ml-2 font-medium'>Potol (Pointed Gourd) 500 ±30 gm</span></p>
            <p>Product SKU:<span className='ml-2 font-medium'>KI548L72</span></p>
          </div>
        </div>

        <div className="mt-[64px] flex justify-center ">
          <div className="lg:w-3/4 flex items-center px-[26px] pt-[33px] pb-[35px] border border-[#F4253F] text-[#F4253F] bg-[#FFCDCD]">
            <AiFillExclamationCircle className='mr-[18px] text-[22px]'></AiFillExclamationCircle>
            <p className=' text-base font-bold'>Notice: <span className='font-medium'>Delivery of notice will not cancel the order</span></p>
          </div>
        </div>

        <div className="flex justify-center mt-[48px]">
          <button
            className=" btn btn-outline lg:w-[134px] h-[40px] text-base normal-case text-[#FB641B] border border-[#FB641B] rounded-md mt-8"
          >Got it
          </button>
        </div>

      </div>

    </div>
  );
};

export default ReportManagementOne;