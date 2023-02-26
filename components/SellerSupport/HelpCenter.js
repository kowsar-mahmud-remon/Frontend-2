import Image from 'next/image';
import React from 'react';
import img from '../../assets/images/center.png';
import { BsArrowRight } from 'react-icons/bs';
import styles from "../../styles/campaignManagementTwo.module.css";



const HelpCenter = () => {
  return (
    <div className='mt-7 lg:p-0 mb-10'>

      <div className="text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Promotions</p>
          <p className='text-[#001E00] font-medium'>{">"} Help Center</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Help Center</p>
      </div>

      <div className="w-[516px] mx-auto text-center mt-8">
        <Image
          className='w-[516px] h-[345px]'
          src={img}
          alt="Picture of the author"
          width={516}
          height={345}
        />

        <p className='mt-8 text-[48px] font-bold text-[#001E00]'>FAQ</p>

      </div>

      <div tabIndex={0} className={`collapse collapse-plus rounded-box lg:max-w-[913px] mx-auto mt-8 text-[#001E00]`}>
        <div className="collapse-title text-xl font-medium p-0">
          <p className={`text-xl font-medium px-[16px] py-[18px] ${styles.inputShadow}`}>1. How do I send my products to Banglar Big Bazar?</p>
        </div>
        <div className="collapse-content">
          <div className={`p-4 ${styles.inputShadow}`}>
            <p className='text-base font-medium pr-10 mb-3'>1 How do I send my products to Banglar Big Bazar?</p>
            <p className='text-base font-medium pr-10 mb-3'>2 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
              layout. The point of using</p>
            <p className='text-base font-medium pr-10 mb-3'>3 How do I send my products to Banglar Big Bazar?</p>
          </div>
        </div>
      </div>
      <div tabIndex={0} className={`collapse collapse-plus rounded-box lg:max-w-[913px] mx-auto mt-4 text-[#001E00]`}>
        <div className="collapse-title text-xl font-medium p-0">
          <p className={`text-xl font-medium px-[16px] py-[18px] ${styles.inputShadow}`}>2. Can I change my bank account details?</p>
        </div>
        <div className="collapse-content">
          <div className={`p-4 ${styles.inputShadow}`}>
            <p className='text-base font-medium pr-10 mb-3'>1 How do I send my products to Banglar Big Bazar?</p>
            <p className='text-base font-medium pr-10 mb-3'>2 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
              layout. The point of using</p>
            <p className='text-base font-medium pr-10 mb-3'>3 How do I send my products to Banglar Big Bazar?</p>
          </div>
        </div>
      </div>
      <div tabIndex={0} className={`collapse collapse-plus rounded-box lg:max-w-[913px] mx-auto mt-4 text-[#001E00]`}>
        <div className="collapse-title text-xl font-medium p-0">
          <p className={`text-xl font-medium px-[16px] py-[18px] ${styles.inputShadow}`}>3. How can a seller get his returned product?</p>
        </div>
        <div className="collapse-content">
          <div className={`p-4 ${styles.inputShadow}`}>
            <p className='text-base font-medium pr-10 mb-3'>1 How do I send my products to Banglar Big Bazar?</p>
            <p className='text-base font-medium pr-10 mb-3'>2 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
              layout. The point of using</p>
            <p className='text-base font-medium pr-10 mb-3'>3 How do I send my products to Banglar Big Bazar?</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HelpCenter;