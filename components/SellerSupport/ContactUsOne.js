import Image from 'next/image';
import React from 'react';
import img from '../../assets/images/center.png';
import styles from "../../styles/campaignManagementTwo.module.css";

const ContactUsOne = () => {
  return (
    <div className='mt-7 lg:p-0 mb-20'>

      <div className="text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Help & Support</p>
          <p className='text-[#001E00] font-medium'>{">"} Email Support</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Contact Us</p>
      </div>

      <div className="w-[516px] mx-auto text-center mt-8">
        <Image
          className='w-[516px] h-[345px]'
          src={img}
          alt="Picture of the author"
          width={516}
          height={345}
        />

        <p className='mt-8 text-[30px] xl:text-[38px] font-bold text-[#001E00]'>Thank you!</p>
        <p className='mt-6 text-[30px] xl:text-[38px] font-bold text-[#001E00]'>We are received your Email</p>
        <p className='mt-4 text-[18px] font-medium text-[#001E00]'>Please keep an eye on your mail as our team will try to resolve your issue as soon as possible</p>
      </div>

    </div>
  );
};

export default ContactUsOne;