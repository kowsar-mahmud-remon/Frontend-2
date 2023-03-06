import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BKASH from '../../assets/images/BKASH.png';
import styles from "../../styles/campaignManagementTwo.module.css";


const SubscriptionTwo = () => {
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

      <div className="mt-[34px] lg:block xl:flex gap-6">

        <div className="lg:w-[100%] xl-w-[60%] mb-10">
          <div className={`lg:w-full px-[49px] pt-[34px] pb-[398px] ${styles.campaignManagement}`}>
            <div className=" flex justify-between items-center">
              <p className='text-2xl text-[#001E00] font-medium'>Pay with bKash</p>
              <Image
                className='w-[129px] h-[53px] mr-5 object-cover'
                src={BKASH}
                alt="Picture of the author"
                width={129}
                height={53}
              />
            </div>

            <div className="form-control w-full mt-9">
              <label className="label mb-2">
                <span className="label-text text-sm font-medium text-[#001E00]">bKash Number</span>
              </label>
              <input type="text" placeholder="Card Number" className="input rounded-md border border-[#686868] text-sm text-[#686868] w-[360px] h-[40px]" />
            </div>

          </div>

          <div className='flex justify-center gap-4 pb-[16px] mt-8'>
            <button className='btn btn-outline btn-[#686868] text-[#686868] text-2xl normal-case font-medium w-[264px] h-[72px] rounded'>Cancel</button>
            <Link href="subscriptionThree">
              <button className='btn bg-[#FB641B] text-white w-[264px] text-2xl normal-case font-medium h-[72px] rounded'>Pay Now</button>
            </Link>
          </div>


        </div>

        <div className="lg:w-[100%] flex lg:justify-center xl:justify-start">
          <div className="">

            <div className={`lg:w-[481px] px-6 pt-6 pb-[74px] ${styles.SubscriptionShadow}`}>
              <p className='text-2xl text-[#001E00] font-bold mb-4'>Premium Store</p>

              <div className="flex justify-between items-center mt-[63px]">
                <p className=' text-2xl text-[#001E00] font-medium'>Subscription</p>
                <div className="border border-dashed border-[#B7B7B7] w-[185px]"></div>
                <p className='text-2xl text-[#287DF3] font-medium'>Tk 4000</p>
              </div>
              <div className="flex justify-between items-center mt-[22px]">
                <p className=' text-2xl text-[#001E00] font-medium'>Time Limit</p>
                <div className="border border-dashed border-[#B7B7B7] w-[200px]"></div>
                <p className='text-2xl text-[#287DF3] font-medium'>1 Month</p>
              </div>

              <p className=' text-lg text-[#686868] mt-8'>with annual subscription</p>
              <p className=' text-lg text-[#686868] mt-8'>250/mo <br />
                Free fixed-price listings <br />
                18Tk insertion fee for additional listing</p>
              <p className=' text-lg text-[#686868] mt-8'>350/mo <br />
                Free auction listings in select categories <br />
                15Tk insertion fee for additional listing</p>

            </div>

          </div>
        </div>

      </div>




    </div>
  );
};

export default SubscriptionTwo;