import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SellerVerificationPageSideNav from '../SellerVerificationPageSideNav/SellerVerificationPageSideNav';
import logo from '../../assets/images/logo/main_logo.png';
import logoDis from '../../assets/images/logo/logo_dic.png';

const SellerVerificationPage2 = () => {
  return (
    <div className="flex w-[1920px]">

      <div className="">
        <div className="mx-6 mb-8">
          <Link href="/" className=''>
            <Image src={logo} alt="img" width={255} />
            <Image src={logoDis} alt="img" width={255} />
          </Link>
        </div>
        <div className=" w-[282px] m-6">
          <SellerVerificationPageSideNav></SellerVerificationPageSideNav>
        </div>
      </div>

      <div className="className='w-[1426px] px-6 mt-28">
        <p className=' text-2xl text-[#FB641B] font-medium'>New Seller Verification</p>
        <p className=' text-base mt-2 font-normal text-[#686868]'>YOUR STORE IS INACTIVE UNTIL YOU COMPLETE THE STEPS BELOW</p>

        <div className="">
          <p className=' text-2xl text-[#686868] font-medium mt-10'>Profile Information</p>

          <div className="grid gap-5 grid-cols-2 lg:grid-cols-2">
            <div className="mt-10">
              <label className="label">
                <span className="label-text text-base font-normal">Country Name*</span>
              </label>
              <input type="text" placeholder="Select State" className="input input-bordered w-[680px] h-[72px]" />
            </div>

            <div className="mt-10">
              <label className="label">
                <span className="label-text text-base font-normal">State Name*</span>
              </label>
              <input type="text" placeholder="Select State" className="input input-bordered w-[680px] h-[72px]" />
            </div>

            <div className="mt-10">
              <label className="label">
                <span className="label-text text-base font-normal">District Name*</span>
              </label>
              <input type="text" placeholder="Select District" className="input input-bordered w-[680px] h-[72px]" />
            </div>

            <div className=" mt-10">
              <label className="label">
                <span className="label-text text-base font-normal">Shop Area*</span>
              </label>
              <input type="text" placeholder="Select Area" className="input input-bordered w-[678px] h-[72px]" />
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