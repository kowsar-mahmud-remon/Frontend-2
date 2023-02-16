import Image from 'next/image';
import React from 'react';
import credit from '../../assets/images/credit-card 1.png';
import unnamed from '../../assets/images/unnamed.png';
import DBBL from '../../assets/images/DBBL.png';
import rocket from '../../assets/images/rocket.png';
import BKASH from '../../assets/images/BKASH.png';
import delivery2 from '../../assets/images/cash-on-delivery 2.png';
import styles from "../../styles/campaignManagementTwo.module.css";

const ProductCampaignFive = () => {
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

      <div className={`lg:w-[642px] mx-auto ${styles.campaignManagement}`}>
        <div className="ml-[49px] mt-[68px] mb-11">

          <div className="flex items-center mb-4 ">
            <input type="radio" name="radio-5" className="radio radio-success mr-[13px] w-[18px] h-[18px] border-2 border-[#026C51]" checked />
            <Image
              className='w-[68px] h-[68px] mr-5'
              src={credit}
              alt="Picture of the author"
              width={68}
              height={68}
            />
            <p className=' text-xs font-bold text-[#001E00]'>Credit/Debit Card</p>
          </div>

          <div className="flex items-center mb-4 ">
            <input type="radio" name="radio-5" className="radio radio-success mr-[13px] w-[18px] h-[18px] border-2 border-[#026C51]" />
            <Image
              className='w-[68px] h-[68px] mr-5'
              src={unnamed}
              alt="Picture of the author"
              width={68}
              height={68}
            />
            <p className=' text-xs font-bold text-[#686868]'>IBBL Cell fin</p>
          </div>

          <div className="flex items-center mb-4 ">
            <input type="radio" name="radio-5" className="radio radio-success mr-[13px] w-[18px] h-[18px] border-2 border-[#026C51]" />
            <Image
              className='w-[68px] h-[68px] mr-5'
              src={DBBL}
              alt="Picture of the author"
              width={68}
              height={68}
            />
            <p className=' text-xs font-bold text-[#686868]'>DBBL Nexus Card</p>
          </div>

          <div className="flex items-center mb-4 ">
            <input type="radio" name="radio-5" className="radio radio-success mr-[13px] w-[18px] h-[18px] border-2 border-[#026C51]" />
            <Image
              className='w-[68px] h-[68px] mr-5'
              src={rocket}
              alt="Picture of the author"
              width={68}
              height={68}
            />
            <p className=' text-xs font-bold text-[#686868]'>Rocket</p>
          </div>

          <div className="flex items-center mb-4 ">
            <input type="radio" name="radio-5" className="radio radio-success mr-[13px] w-[18px] h-[18px] border-2 border-[#026C51]" />
            <Image
              className='w-[68px] h-[68px] mr-5'
              src={BKASH}
              alt="Picture of the author"
              width={68}
              height={68}
            />
            <p className=' text-xs font-bold text-[#686868]'>bKash Account</p>
          </div>
        </div>

        <div className='border-b border-[#B7B7B7] mx-6'></div>

        <div className="mx-6 mt-[59px]">
          <p className='text-2xl text-[#001E00] font-bold'>Payment Summary</p>

          <div className="border-b border-[#B7B7B7]">
            <div className="lg:w-[501px] flex lg:justify-end items-center mb-4 mt-6">
              <p className='text-[#001E00] mr-4 text-base font-medium'>Campaign for Pay:</p>
              <div className="flex w-[172px] text-[#707070]">
                <p className=''>Tk 100 Daily</p>
              </div>
            </div>

            <div className="lg:w-[501px] flex lg:justify-end items-center mb-4">
              <p className='text-[#001E00] mr-4 text-base font-medium'>Campaign Will Be Promoted:</p>
              <div className="flex w-[172px]">
                <p className=' text-[#001E00] text-base font-medium'>3 <span className='text-[#707070]'>Days</span></p>
              </div>
            </div>

            <div className="lg:w-[501px] flex lg:justify-end items-center mb-4">
              <p className='text-[#001E00] mr-4 text-base font-medium'>Campaign Bid Strategy:</p>
              <div className="flex w-[172px]">
                <p className=' text-[#001E00] font-medium '>Social</p>
              </div>
            </div>
          </div>

          <div className="lg:w-[501px] flex lg:justify-end items-center mt-4 mb-6">
            <p className='text-[#001E00] mr-4 text-base font-medium'>Total Pay:</p>
            <div className="flex w-[172px]">
              <p className=' text-[#001E00] font-medium '>Tk 300</p>
            </div>
          </div>

        </div>
      </div>

      <div className="lg:w-[642px] mx-auto mt-[32px]">
        <div className="mb-10 justify-center lg:flex">
          <button
            className="w-full btn btn-outline lg:w-[264px] h-[72px] border border-[#686868] rounded-md lg:mr-4 mb-4 normal-case text-2xl font-normal text-[#686868]"
          >Cancel
          </button>
          <button
            className="w-full btn lg:w-[264px] h-[72px] bg-[#FB641B] text-white rounded-md mb-4 normal-case text-2xl font-normal"
          >Pay
          </button>
        </div>
      </div>

    </div >
  );
};

export default ProductCampaignFive;