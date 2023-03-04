import React from 'react';
import styles from "../../styles/campaignManagementTwo.module.css";


const AccountType = () => {
  return (
    <div className='mt-7 lg:p-0 mb-20'>

      <div className="text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Promotions</p>
          <p className='text-[#001E00] font-medium'>{">"} Account Type</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Account Type</p>
      </div>


      <div className={`lg:w-full mt-8`}>
        <form>

          <div className={`flex items-center mb-6 bg-[#FB641B] w-[332px] h-[75px] px-6 py-[27px] ${styles.inputShadowWithOutBorder}`}>
            <input type='radio' checked id="1" name="fav_language" value="HTML1" className='radio w-[21px] h-[21px] border-2 border-white radio-success	  ' />
            <label for="1">
              <div className='flex items-center ml-4'>
                <p className='text-lg text-white font-medium'>Move General Shop</p>
              </div>
            </label><br />
          </div>

          <div className={`flex items-center mb-6 bg-[#FB641B] w-[332px] h-[75px] px-6 py-[27px] ${styles.inputShadowWithOutBorder}`}>
            <input type="radio" id="2" name="fav_language" value="HTML2" className='radio w-[21px] h-[21px] border-2 border-white radio-success	' />
            <label for="2">
              <div className='flex items-center ml-4'>
                <p className='text-lg text-white font-medium'>Move Instant Shop</p>
              </div>
            </label><br />
          </div>

          <div className={`flex items-center mb-6 bg-[#FB641B] w-[332px] h-[75px] px-6 py-[27px] ${styles.inputShadowWithOutBorder}`}>
            <input type="radio" id="3" name="fav_language" value="HTML3" className='radio w-[21px] h-[21px] border-2 border-white radio-success	' />
            <label for="3">
              <div className='flex items-center ml-4'>
                <p className='text-lg text-white font-medium'>Move Live Shop</p>
              </div>
            </label><br />
          </div>

          <div className={`flex items-center mb-6 bg-[#FB641B] w-[332px] h-[75px] px-6 py-[27px] ${styles.inputShadowWithOutBorder}`}>
            <input type="radio" id="4" name="fav_language" value="HTML4" className='radio w-[21px] h-[21px] border-2 border-white radio-success	' />
            <label for="4">
              <div className='flex items-center ml-4'>
                <p className='text-lg text-white font-medium'>Move Wholesale</p>
              </div>
            </label><br />
          </div>

        </form>
      </div>

    </div>
  );
};

export default AccountType;