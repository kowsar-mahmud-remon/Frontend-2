import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../../assets/images/image 346.png';
import Timer from './Timer';
import LottieReact from './LottieReact';


const LiveChatOne = () => {

  return (
    <div className='mt-7 lg:p-0 mb-20'>

      <div className="text-lg text-[#686868]">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Help & Support</p>
          <p className='text-[#001E00] font-medium'>{">"} Live Chat</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Live Chat</p>
      </div>

      <div className="text-center mt-8 ">
        <div className="w-[395px] mx-auto">
          <div className=" flex justify-center absolute mt-[159px] ml-[159px] z-10 ">
            <Image
              className='w-[75px] h-[75px] bg-[#F2F3F7] rounded-full'
              src={img}
              alt="Picture of the author"
              width={75}
              height={75}
            />
          </div>
          <div className="">
            <LottieReact></LottieReact>
          </div>
        </div>

        <div className="">
          <Timer></Timer>
        </div>

        <p className='mt-[48px] text-[40px] xl:text-[48px] font-bold text-[#001E00]'>Please Wait For Admin</p>

        <button className="font-medium mt-[48px] border-2 border-[#FB641B] text-[#FB641B] hover:bg-[#FB641B] hover:text-white text-2xl py-[22px] w-[264px] rounded-md normal-case">
          Cancel
        </button>

      </div>

    </div>
  );
};

export default LiveChatOne;