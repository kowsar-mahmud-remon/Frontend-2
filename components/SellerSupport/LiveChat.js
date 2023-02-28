import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../../assets/images/liveChat.png';


const LiveChat = () => {
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
        <div className="w-[362px] mx-auto">
          <Image
            className='w-[362px] h-[318px]'
            src={img}
            alt="Picture of the author"
            width={362}
            height={318}
          />
        </div>

        <p className='mt-[64px] text-[40px] xl:text-[48px] font-bold text-[#001E00]'>Start Live chat With Admin</p>

        <Link href="liveChatOne">
          <button className="font-medium mt-[48px] bg-[#FB641B] text-2xl py-[22px] w-[264px] rounded-md text-white normal-case">
            Start Now
          </button>
        </Link>
      </div>

    </div>
  );
};

export default LiveChat;