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

      <div className={`lg:max-w-[913px] mx-auto px-[16px] py-[18px] flex justify-between mt-8 text-[#001E00] items-center ${styles.inputShadow}`}>
        <p className='text-xl font-medium'>1. How do I send my products to Banglar Big Bazar?</p>
        <BsArrowRight className='text-2xl font-medium'></BsArrowRight>
      </div>

      <div className={`lg:max-w-[913px] mx-auto px-[16px] py-[18px] flex justify-between mt-4 text-[#001E00] items-center ${styles.inputShadow}`}>
        <p className='text-xl font-medium'>2. Can I change my bank account details?</p>
        <BsArrowRight className='text-2xl font-medium'></BsArrowRight>
      </div>

      <div className={`lg:max-w-[913px] mx-auto px-[16px] py-[18px] flex justify-between mt-4 text-[#001E00] items-center ${styles.inputShadow}`}>
        <p className='text-xl font-medium'>3. How can a seller get his returned product?</p>
        <BsArrowRight className='text-2xl font-medium'></BsArrowRight>
      </div>

    </div>
  );
};

export default HelpCenter;