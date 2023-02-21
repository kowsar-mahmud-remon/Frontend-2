import Image from 'next/image';
import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiDotsHorizontal } from 'react-icons/hi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import img from '../../assets/images/image 346.png';
import img2 from '../../assets/images/Banglar Big Store B Logo.png';
import VectorSend from '../../assets/images/VectorSend.png';
import styles from "../../styles/campaignManagementTwo.module.css";




const LiveChatTwo = () => {
  return (
    <div className='mt-7 lg:p-0 mb-10'>

      <div className="text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Promotions</p>
          <p className='text-[#001E00] font-medium'>{">"} Live Chat</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Live Chat</p>
      </div>

      <div className={`max-w-[1426px] flex ${styles.inputShadow}`}>

        <div className="lg:w-[30%] xl:w-1/4">
          <div className="text-[#001E00]">
            <p className=' text-lg text-center font-bold pt-[17px] pb-[18px] bg-[#F2F3F7]'>Shot Question</p>
          </div>

          <div className="mx-6 mt-2 pb-[9px] border-b-2 border-[#F2F2F2]">
            <p className='text-base font-medium pl-4 pt-[8px] pb-[7px]'>What is a selling question?</p>
          </div>

          <div className="mx-6 mt-2 pb-[9px] border-b-2 border-[#F2F2F2]">
            <p className='text-base font-medium pl-4 pt-[8px] pb-[7px] bg-[#F2F2F2]'>Why is a seller important?</p>
          </div>

          <div className="mx-6 mt-2 pb-[9px] border-b-2 border-[#F2F2F2]">
            <p className='text-base font-medium pl-4 pt-[8px] pb-[7px]'>How do sell a my product?</p>
          </div>
        </div>

        <div className="lg:w-[70%] xl:w-3/4 border-l-2 border-[#B7B7B7]">

          <div className="px-6 py-[18px] flex justify-between border-b-2 border-[#B7B7B7] items-center">
            <div className="flex text-[#F4253F] font-medium items-center">
              <GoPrimitiveDot className='mr-1 text-[19px]'></GoPrimitiveDot>
              <p className=' text-lg'>Live Chet...</p>
            </div>
            <p className='text-lg text-[#001E00] font-medium'>Banglar Big Store</p>
            <HiDotsHorizontal className='text-xl text-[#063852]'></HiDotsHorizontal>
          </div>

          <div className="mt-[611px]">
            <div className="lg:flex justify-end items-center">
              <p className='text-2xl text-[#001E00] mr-6 py-3 px-8 rounded-full bg-[#F2F3F7]'>I have a question. Can you help?</p>
              <Image
                className='w-[48px] h-[48px] mr-6 bg-[#F2F3F7] rounded-full'
                src={img}
                alt="Picture of the author"
                width={48}
                height={48}
              />
            </div>

            <div className="flex items-center mt-8">
              <Image
                className={`w-[48px] h-[48px] ml-6 mr-6 p-2 ${styles.inputShadowWithRadius}`}
                src={img2}
                alt="Picture of the author"
                width={48}
                height={48}
              />
              <p className='text-2xl text-[#001E00] py-3 px-8 rounded-full bg-[#F2F3F7]'>How can i help you?</p>
            </div>
          </div>

          <div className="flex pt-[18px] pb-[17px] px-6 mt-6 items-center bg-[#F2F3F7]">
            <AiOutlinePlusCircle className='text-[32px] text-[#686868] mr-4'></AiOutlinePlusCircle>
            <BsFillEmojiSmileFill className='text-[32px] text-[#686868] mr-4'></BsFillEmojiSmileFill>
            <input type="text" placeholder="" className="input input-bordered w-full mr-4 h-[37px] rounded-full" />

            <Image
              className='w-[34px] h-[28px]'
              src={VectorSend}
              alt="Picture of the author"
              width={34}
              height={28}
            />
          </div>


        </div>



      </div>

    </div>
  );
};

export default LiveChatTwo;