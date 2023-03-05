import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../../assets/images/VectorOk.png';
import styles from "../../styles/campaignManagementTwo.module.css";



const SubscriptionThree = () => {
  return (
    <div className='mt-7 lg:p-0 mb-20'>

      <div className="text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Promotions</p>
          <p className='text-[#001E00] font-medium'>{">"} Subscription</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Subscription</p>
      </div>

      <div className={`lg:w-[657px] mx-auto pt-[55px] pb-[50px] text-center ${styles.campaignManagementWithoutBorder}`}>
        <div className="w-[117px] mx-auto">
          <Image
            className='w-[117px] h-[117px] mr-5 object-cover'
            src={img}
            alt="Picture of the author"
            width={117}
            height={117}
          />
        </div>
        <p className='text-[34px] text-[#287DF3] mt-[27px] font-medium'>Congratulations</p>
        <p className='text-base text-[#001E00] font-medium'>Your Payment Success</p>
        <p className='text-[28px] text-[#FB641B] font-medium mt-8'>Premium Store<br /> Subscription is Active</p>
        <div className="lg:w-[481px] px-6 mt-8 mx-auto">
          <div className="flex justify-between items-center">
            <p className=' text-2xl text-[#001E00] font-medium'>Subscription</p>
            <div className="border border-dashed border-[#B7B7B7] w-[185px]"></div>
            <p className='text-2xl text-[#287DF3] font-medium'>Tk 4000</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className=' text-2xl text-[#001E00] font-medium'>Time Limit</p>
            <div className="border border-dashed border-[#B7B7B7] w-[200px]"></div>
            <p className='text-2xl text-[#287DF3] font-medium'>1 Month</p>
          </div>
        </div>

        <p className='text-[34px] text-[#287DF3] font-bold mt-[152px]'>Thank You!</p>

        <Link href="subscriptionPage">
          <button className='btn bg-[#FB641B] text-white w-[202px] text-2xl normal-case font-medium h-[56px] rounded mt-[138px]'>Got it</button>
        </Link>


      </div>

    </div>
  );
};

export default SubscriptionThree;