import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../../assets/images/image 346.png';
import img2 from '../../assets/images/image 345.png';
import styles from "../../styles/campaignManagementTwo.module.css";
import { useState } from 'react';



const ReportManagement = () => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const para = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable";

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

      <div className={`lg:w-1426px p-4 mt-8 mb-6 ${styles.campaignManagement}`}>
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
          {/* <p className='text-base text-[#686868] lg:w-3/4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a  <span className='text-[#287DF3]'>Read More...</span></p> */}
          {
            show1 ? <>
              <p className='text-[16px] text-[#686868] w-[70%]'>{para}</p>
            </>
              :
              <>
                <p className='text-[16px] text-[#686868] w-[70%]'>{para.slice(0, 250)} <span onClick={() => setShow1(true)} className='text-[#287DF3] cursor-pointer'>Read More...</span></p>
              </>
          }
        </div>

        <div className="flex justify-center">
          <Link href="reportManagementOne">
            <button
              className=" btn bg-[#FB641B] lg:w-[134px] h-[40px] text-base normal-case text-white rounded-md mt-8"
            >View
            </button>
          </Link>
        </div>

      </div>

      <div className={`lg:w-1426px p-4 mt-8 mb-6 ${styles.campaignManagement}`}>
        <div className="flex items-center">

          <Image
            className='w-[32px] h-[32px] mr-4 bg-[#F2F3F7] rounded-full'
            src={img2}
            alt="Picture of the author"
            width={32}
            height={32}
          />
          <div className="flex justify-between w-full items-center">
            <p className=' text-lg font-medium text-[#001E00]'>Aklima Aktar</p>
            <p className=' text-sm text-[#686868]'>21 Dec 2022</p>
          </div>
        </div>

        <div className="flex mt-[25px] ml-[50px]">
          <p className='text-base font-bold text-[#F4253F] mr-3'>Seller Report:</p>
          {/* <p className='text-base text-[#686868] lg:w-3/4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a  <span className='text-[#287DF3]'>Read More...</span></p> */}
          {
            show2 ? <>
              <p className='text-[16px] text-[#686868] w-[70%]'>{para}</p>
            </>
              :
              <>
                <p className='text-[16px] text-[#686868] w-[70%]'>{para.slice(0, 250)} <span onClick={() => setShow2(true)} className='text-[#287DF3] cursor-pointer'>Read More...</span></p>
              </>
          }
        </div>

        <div className="flex justify-center">
          <Link href="reportManagementOne">
            <button
              className=" btn bg-[#FB641B] lg:w-[134px] h-[40px] text-base normal-case text-white rounded-md mt-8"
            >View
            </button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default ReportManagement;