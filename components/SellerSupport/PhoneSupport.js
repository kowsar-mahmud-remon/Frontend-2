import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../../assets/images/phoneSupport.png';



const PhoneSupport = () => {
  return (
    <div className='mt-7 lg:p-0 mb-10'>

      <div className="text-lg text-[#686868]">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Help & Support</p>
          <p className='text-[#001E00] font-medium'>{">"} Phone Support</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Phone Call Support</p>
      </div>

      <div className="text-center mt-[102px] ">
        <div className="w-[470px] mx-auto">
          <Image
            className='w-[470px] h-[382px]'
            src={img}
            alt="Picture of the author"
            width={470}
            height={382}
          />
        </div>

        <p className='mt-8 text-2xl font-bold text-[#001E00]'>Call: +8801820-254872</p>
        <p className='mt-4 text-base font-medium text-[#001E00]'>Open: 10:00 AM to 09:00 PM</p>


      </div>

    </div>
  );
};

export default PhoneSupport;