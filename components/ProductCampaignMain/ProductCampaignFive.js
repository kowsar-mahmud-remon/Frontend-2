import Image from 'next/image';
import React from 'react';
import credit from '../../assets/images/credit-card 1.png';
import unnamed from '../../assets/images/unnamed.png';
import DBBL from '../../assets/images/DBBL.png';
import rocket from '../../assets/images/rocket.png';
import BKASH from '../../assets/images/BKASH.png';
import delivery2 from '../../assets/images/cash-on-delivery 2.png';
import styles from "../../styles/campaignManagementTwo.module.css";
import Link from 'next/link';

const ProductCampaignFive = () => {
  return (
    <div className='mt-7 p-4 lg:p-0'>

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

          <form>

            <div className='flex items-center mb-4'>
              <input type='radio' checked id="1" name="fav_language" value="HTML1" className='radio w-[18px] h-[18px] border-2 border-[#026C51] radio-success	  ' />
              <label for="1">
                <div className='flex items-center ml-[13px]'>
                  <Image
                    className='w-[68px] h-[68px] mr-[20px]'
                    src={credit}
                    alt='image'
                  />
                  <p className='text-[12px] font-medium text-[#001E00]'>Credit/Debit Card</p>
                </div>
              </label><br />
            </div>

            <div className='flex items-center mb-4'>
              <input type="radio" id="2" name="fav_language" value="HTML2" className='radio w-[18px] h-[18px] border-2 border-[#026C51] radio-success	' />
              <label for="2">
                <div className='flex items-center ml-[13px]'>
                  <Image
                    className='w-[68px] h-[68px] mr-[20px]'
                    src={unnamed}
                    alt='image'
                  />
                  <p className='text-[12px] font-medium text-[#686868]'>IBBL Cell fin</p>
                </div>
              </label><br />
            </div>

            <div className='flex items-center mb-4'>
              <input type="radio" id="3" name="fav_language" value="HTML3" className='radio w-[18px] h-[18px] border-2 border-[#026C51] radio-success	' />
              <label for="3">
                <div className='flex items-center ml-[13px]'>
                  <Image
                    className='w-[68px] h-[68px] mr-[20px]'
                    src={DBBL}
                    alt='image'
                  />
                  <p className='text-[12px] font-medium text-[#686868]'>DBBL Nexus Card</p>
                </div>
              </label><br />
            </div>

            <div className='flex items-center mb-4'>
              <input type="radio" id="4" name="fav_language" value="HTML4" className='radio w-[18px] h-[18px] border-2 border-[#026C51] radio-success	' />
              <label for="4">
                <div className='flex items-center ml-[13px]'>
                  <Image
                    className='w-[68px] h-[68px] mr-[20px]'
                    src={rocket}
                    alt='image'
                  />
                  <p className='text-[12px] font-medium text-[#686868]'>Rocket</p>
                </div>
              </label><br />
            </div>

            <div className='flex items-center mb-4'>
              <input type="radio" id="5" name="fav_language" value="HTML5" className='radio w-[18px] h-[18px] border-2 border-[#026C51] radio-success	' />
              <label for="5">
                <div className='flex items-center ml-[13px]'>
                  <Image
                    className='w-[68px] h-[68px] mr-[20px]'
                    src={BKASH}
                    alt='image'
                  />
                  <p className='text-[12px] font-medium text-[#686868]'>bKash Account</p>
                </div>
              </label><br />
            </div>

          </form>


        </div>

        <div className='border-b border-[#B7B7B7] mx-6'></div>

        <div className="mx-6 mt-[59px]">
          <p className='text-2xl text-[#001E00] font-bold'>Payment Summary</p>

          <div className="border-b border-[#B7B7B7]">

            <div className="lg:w-[501px] flex lg:justify-end items-center mb-4 mt-6">
              <p className='text-[#001E00] mr-4 text-base font-medium'>Campaign Will Be Promoted:</p>
              <div className="flex w-[172px]">
                <p className=' text-[#001E00] text-base font-medium'>3 <span className='text-[#707070]'>Days</span></p>
              </div>
            </div>

            <div className="lg:w-[501px] flex lg:justify-end items-center mb-4">
              <p className='text-[#001E00] mr-4 text-base font-medium'>Campaign for Pay:</p>
              <div className="flex w-[172px] font-medium">
                <p className='text-[#001E00]'>Tk 100 <span className='text-[#707070]'>Daily</span></p>
              </div>
            </div>

            <div className="lg:w-[501px] flex lg:justify-end items-center mb-4">
              <p className='text-[#001E00] mr-4 text-base font-medium'>Campaign Objective:</p>
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
          <Link href="productCampaignSix">
            <button
              className="w-full btn lg:w-[264px] h-[72px] bg-[#FB641B] text-white rounded-md mb-4 normal-case text-2xl font-normal"
            >Pay
            </button>
          </Link>

        </div>
      </div>

    </div >
  );
};

export default ProductCampaignFive;