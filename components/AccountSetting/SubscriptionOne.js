import Image from 'next/image';
import React from 'react';
import img1 from '../../assets/images/credit-card 1.png';
import img2 from '../../assets/images/unnamed.png';
import img3 from '../../assets/images/DBBL.png';
import img4 from '../../assets/images/rocket.png';
import img5 from '../../assets/images/BKASH.png';
import styles from "../../styles/campaignManagementTwo.module.css";
import { TbCurrencyTaka } from 'react-icons/tb';




const SubscriptionOne = () => {
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
          <div className={`lg:w-full px-[49px] pt-[34px] pb-[97px] ${styles.campaignManagement}`}>
            <form>

              <div className='flex items-center mb-[16px]'>
                <input type='radio' checked id="1" name="fav_language" value="HTML1" className='radio w-[18px] h-[18px] border-2 border-[#026C51] radio-success	  ' />
                <label for="1">
                  <div className='flex items-center ml-[13px]'>
                    <Image
                      className='w-[68px] h-[68px] mr-[20px]'
                      src={img1}
                      alt='image'
                    />
                    <p className='text-[12px] font-medium text-[#001E00]'>Credit/Debit Card</p>
                  </div>
                </label><br />
              </div>

              <div className='flex items-center mb-[16px]'>
                <input type="radio" id="2" name="fav_language" value="HTML2" className='radio w-[18px] h-[18px] border-2 border-[#026C51] radio-success	' />
                <label for="2">
                  <div className='flex items-center ml-[13px]'>
                    <Image
                      className='w-[68px] h-[68px] mr-[20px]'
                      src={img2}
                      alt='image'
                    />
                    <p className='text-[12px] font-medium text-[#686868]'>IBBL Cell fin</p>
                  </div>
                </label><br />
              </div>

              <div className='flex items-center mb-[16px]'>
                <input type="radio" id="3" name="fav_language" value="HTML3" className='radio w-[18px] h-[18px] border-2 border-[#026C51] radio-success	' />
                <label for="3">
                  <div className='flex items-center ml-[13px]'>
                    <Image
                      className='w-[68px] h-[68px] mr-[20px]'
                      src={img3}
                      alt='image'
                    />
                    <p className='text-[12px] font-medium text-[#686868]'>DBBL Nexus Card</p>
                  </div>
                </label><br />
              </div>

              <div className='flex items-center mb-[16px]'>
                <input type="radio" id="4" name="fav_language" value="HTML4" className='radio w-[18px] h-[18px] border-2 border-[#026C51] radio-success	' />
                <label for="4">
                  <div className='flex items-center ml-[13px]'>
                    <Image
                      className='w-[68px] h-[68px] mr-[20px]'
                      src={img4}
                      alt='image'
                    />
                    <p className='text-[12px] font-medium text-[#686868]'>Rocket</p>
                  </div>
                </label><br />
              </div>

              <div className='flex items-center mb-[16px]'>
                <input type="radio" id="5" name="fav_language" value="HTML5" className='radio w-[18px] h-[18px] border-2 border-[#026C51] radio-success	' />
                <label for="5">
                  <div className='flex items-center ml-[13px]'>
                    <Image
                      className='w-[68px] h-[68px] mr-[20px]'
                      src={img5}
                      alt='image'
                    />
                    <p className='text-[12px] font-medium text-[#686868]'>bKash Account</p>
                  </div>
                </label><br />
              </div>

            </form>
          </div>

          <div className='flex justify-center gap-4 pb-[16px] mt-8'>
            <button className='btn btn-outline btn-[#686868] text-[#686868] text-2xl normal-case font-medium w-[264px] h-[72px] rounded'>Cancel</button>
            <button className='btn bg-[#FB641B] text-white w-[264px] text-2xl normal-case font-medium h-[72px] rounded'>Continue</button>
          </div>


        </div>

        <div className="lg:w-[100%] flex lg:justify-center xl:justify-start">
          <div className=" ">
            <div className="lg:w-[481px] flex justify-between border-2 border-[#287DF3] rounded-lg items-center text-[#001E00]">
              <p className='text-2xl font-bold p-4'>Choose Others:</p>
              <div className="bg-[#F2F3F7] py-2 rounded-lg">
                <select className="select w-[215px] text-2xl bg-[#F2F3F7]">
                  <option>1 Month</option>
                  <option>2 Months</option>
                  <option>3 Months</option>
                  <option>4 Months</option>
                </select>
              </div>

            </div>

            <div className={`lg:w-[481px] px-6 pt-6 pb-16 mt-[15px] ${styles.SubscriptionShadow}`}>
              <p className='text-2xl text-[#001E00] font-bold mb-4'>Premium Store</p>
              <p className=' text-lg text-[#686868]'>For high volume sellers who have an extensive product catalog or are running a business that would benefit from dedicated customer support.</p>

              <div className="flex items-center mt-8">
                <TbCurrencyTaka className='text-[44px] text-[#001E00] font-bold mr-1'></TbCurrencyTaka>
                <p className='text-[44px] text-[#001E00] font-bold mr-[13px]'>4000</p>
                <p className='text-[24px] text-[#001E00] font-medium mt-4'>/1 month</p>
              </div>

              <p className=' text-lg text-[#686868] mt-4'>with annual subscription</p>
              <p className=' text-lg text-[#686868] mt-8'>250/mo <br />
                Free fixed-price listings <br />
                18Tk insertion fee for additional listing</p>
              <p className=' text-lg text-[#686868] mt-4'>350/mo <br />
                Free auction listings in select categories <br />
                15Tk insertion fee for additional listing</p>

            </div>

          </div>
        </div>

      </div>




    </div>
  );
};

export default SubscriptionOne;