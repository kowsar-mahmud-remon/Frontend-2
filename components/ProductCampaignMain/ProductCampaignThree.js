import Image from 'next/image';
import React from 'react';
import img from '../../assets/images/image 66.png';
import delivery from '../../assets/images/fast-delivery 1.png';
import delivery2 from '../../assets/images/cash-on-delivery 2.png';
import styles from "../../styles/campaignManagementTwo.module.css";
import Link from 'next/link';



const ProductCampaignThree = () => {
  return (
    <div className='mt-7 p-4 lg:p-0 lg:w-[1426px]'>

      <div className="text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Promotions</p>
          <p className='text-[#001E00] font-medium'>{">"} Product Campaign</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Product Campaign</p>
      </div>

      <div className={`lg:w-[642px] mx-auto pb-[376px] ${styles.campaignManagement}`}>
        <div className="lg:flex mt-[27px] mb-8">
          <Image
            className='w-[241px] h-[182px] mb-2 lg:ml-[45px] lg:mr-4 object-cover	shadow-xl'
            src={img}
            alt="Picture of the author"
            width={241}
            height={182}
          />

          <div className="">
            <p className=' text-xl font-bold text-[#001E00]'>Tomato (Local) 500 ±30 gm</p>

            <div className="mt-4 flex">
              <p className='text-base text-[#001E00] mr-4 font-medium'>Brand: <span className='text-[#686868]'>No Brand</span></p>
              <p className='text-base text-[#001E00] font-medium'>Color: <span className='text-[#686868]'>Red Color</span></p>
            </div>

            <div className=" text-[#707070] flex lg:block justify-between mt-4">
              <div className="flex items-center">
                <p className=' text-2xl text-[#FB641B] font-medium mb-2 mr-4'>TK 60</p>
                <p className='text-base line-through mb-2 mr-4 font-medium'>Tk 80</p>
                <p className='text-base mb-4'>(20 % off)</p>
              </div>
            </div>

            <div className="items-center mt-4">
              <div className="flex items-center mb-4">
                <Image
                  className='w-[28px] h-[28px] mr-3'
                  src={delivery}
                  alt="Picture of the author"
                  width={28}
                  height={28}
                />
                <p className='text-base text-[#686868]'>24 Hours To 72 Hours Delivery Time</p>
              </div>
              <div className="flex items-center">
                <Image
                  className='w-[28px] h-[28px] mr-3'
                  src={delivery2}
                  alt="Picture of the author"
                  width={28}
                  height={28}
                />
                <p className='text-base text-[#686868]'>Cash on Delivery Available</p>
              </div>
            </div>

          </div>

        </div>

        <div className="lg:w-[474px] flex lg:justify-end items-center mb-4">
          <p className='text-[#001E00] mr-4 text-base font-medium'>Campaign Will Be Promoted:</p>
          <div className="flex w-[172px] border border-[#B7B7B7] justify-between rounded">
            <p className='pl-[16px] py-[10px] text-[#001E00] text-base font-medium'>3</p>
            <p className='pr-[16px] py-[10px] text-[#707070]'>Days</p>
          </div>
        </div>

        <div className="lg:w-[474px] flex lg:justify-end items-center mb-4">
          <p className='text-[#001E00] mr-4 text-base font-medium'>Campaign for Pay:</p>
          <div className="flex w-[172px] border border-[#B7B7B7] justify-between rounded text-[#707070]">
            <p className='pl-[16px] py-[10px]'>Tk 100</p>
            <p className='pr-[16px] py-[10px]'>Daily</p>
          </div>
        </div>

        <div className="lg:w-[474px] flex lg:justify-end items-center mb-4">
          <p className='text-[#001E00] mr-4 text-base font-medium'>Choose a Campaign Objective:</p>
          <div className="flex w-[172px] border border-[#B7B7B7] justify-between rounded">
            <select className="select w-full text-sm text-[#001E00]">
              {/* <option disabled selected>Social</option> */}
              <option className='flex'>
                <input type="radio" name="radio-5" className="radio radio-success" checked />
                <Image
                  className='w-[16px] h-[16px]'
                  src={img}
                  alt="Picture of the author"
                  width={16}
                  height={16}
                />
                Category 01
              </option>
              <option>
                <input type="radio" name="radio-5" className="radio radio-success" />
                Category 02
              </option>
            </select>
          </div>
        </div>

      </div>

      <div className="lg:w-[642px] mx-auto mt-[52px]">
        <div className="mb-10 justify-center lg:flex">
          <button
            className="w-full btn btn-outline lg:w-[264px] h-[72px] border border-[#686868] rounded-md lg:mr-4 mb-4 text-2xl font-normal text-[#686868] normal-case"
          >Cancel
          </button>
          <Link href="productCampaignFour">
            <button
              className="w-full btn lg:w-[264px] h-[72px] bg-[#FB641B] text-white rounded-md mb-4 text-2xl font-normal normal-case"
            >Continue
            </button>
          </Link>
        </div>
      </div>

    </div >
  );
};

export default ProductCampaignThree;