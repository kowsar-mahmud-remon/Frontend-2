import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SellerVerificationPageSideNav from '../SellerVerificationPageSideNav/SellerVerificationPageSideNav';
import logo from '../../assets/images/logo/logo.png';


const SellerVerificationPage2 = () => {
  return (
    <div className="flex max-w-[1896px]">

<div className="mt-[45px] lg:block mobile:hidden">
        <div className="mx-6 mb-8">
          <Link href="/" className="">
            <Image className=""  src={logo} alt="img" width={224} />
           
          </Link>
        </div>
        <div className=" w-[282px] m-6">
          <SellerVerificationPageSideNav ></SellerVerificationPageSideNav>
        </div>
      </div>

      <div className="className='w-[1426px] px-6 mt-28">
        <p className=' text-2xl text-[#FB641B] font-medium'>New Seller Verification</p>
        <p className=' text-base mt-2 font-normal text-[#686868]'>YOUR STORE IS INACTIVE UNTIL YOU COMPLETE THE STEPS BELOW</p>

        <div className="flex items-center my-8">
            <div className="bg-[#FB641B] text-white border border-white rounded-3xl px-1 text-[5px] md:text-[12px]">
              1
            </div>
            <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] px-5 md:px-20 rounded-xl">
              Add Shop Name
            </div>
            <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] px-1 rounded-lg border border-white">
              2
            </div>
            <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] border border-white px-5 md:px-20 rounded-xl">
            Add Shop Address
            </div>
            <div className=" text-[5px] md:text-[12px] px-1 rounded-lg border border-black">
              3
            </div>
            <div className=" text-[5px] md:text-[12px] border border-black px-5 md:px-20 rounded-xl">
            Verify ID & Bank
            </div>
            <div className=" text-[5px] md:text-[12px] px-1 rounded-lg border border-black">
              4
            </div>
            <div className=" text-[5px] md:text-[12px] border border-black px-5 md:px-20 rounded-xl">
            Add Product
            </div>
            {/* for profile info */}
          </div>

        <div className="">
          <p className=' text-2xl text-[#686868] font-medium mt-10'>Please give your shop area address</p>

          <div className="grid grid-cols-2 gap-4 items-center justify-between flex-nowrap">
            <div className="mt-10">
              <label className="label">
                <span className="label-text text-base font-normal">Country Name*</span>
              </label>
              <input type="text" placeholder="Select State" className="input input-bordered w-full h-[72px]" />
            </div>

            <div className="mt-10">
              <label className="label">
                <span className="label-text text-base font-normal">State Name*</span>
              </label>
              <input type="text" placeholder="Select State" className="input input-bordered w-full h-[72px]" />
            </div>

            <div className="mt-10">
              <label className="label">
                <span className="label-text text-base font-normal">District Name*</span>
              </label>
              <input type="text" placeholder="Select District" className="input input-bordered w-full h-[72px]" />
            </div>

            <div className=" mt-10">
              <label className="label">
                <span className="label-text text-base font-normal">Shop Area*</span>
              </label>
              <input type="text" placeholder="Select Area" className="input input-bordered w-full h-[72px]" />
            </div>
          </div>
          <div className=" mt-10">
            <label className="label">
              <span className="label-text text-base font-normal">Type Pickup & Return Address*</span>
            </label>
            <textarea className="textarea textarea-bordered w-full h-[172px]" placeholder="Type your full address...."></textarea>
          </div>

          <div className="flex justify-end">
            <button className='btn w-[369px] h-[72px] bg-[#FB641B] mt-10 text-white'>Continue</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SellerVerificationPage2;