import Image from 'next/image';
import React from 'react';
import img from '../../assets/images/center.png';
import styles from "../../styles/campaignManagementTwo.module.css";


const ContactUs = () => {
  return (
    <div className='mt-7 lg:p-0 mb-10'>

      <div className="text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Promotions</p>
          <p className='text-[#001E00] font-medium'>{">"} Contact Us</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Contact Us</p>
      </div>

      <div className="w-[516px] mx-auto text-center mt-8">
        <Image
          className='w-[516px] h-[345px]'
          src={img}
          alt="Picture of the author"
          width={516}
          height={345}
        />

        <p className='mt-8 text-[40px] xl:text-[48px] font-bold text-[#001E00]'>Send Your Problem</p>

      </div>

      <div className="lg:max-w-[913px] mx-auto">
        <div className="mt-8 text-[#001E00] items-center">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg text-[#001E00] font-medium mb-4">Subject*</span>
            </label>
            <input type="text" placeholder="Type Your Subject" className={`input input-bordered w-full px-[16px] pt-[14px] pb-[15px] h-[55px] text-base font-medium ${styles.inputShadow}`} />
          </div>
        </div>

        <div className="mt-8 text-[#001E00] items-center">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg text-[#001E00] font-medium mb-4">Messages*</span>
            </label>
            <textarea className={`textarea textarea-bordered w-full h-[200px] text-base font-medium px-[16px] pt-[16px] pb-[15px] ${styles.inputShadow}`} placeholder="Type Your Full Messages"></textarea>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            className="w-full btn btn-outline lg:w-[114px] h-[40px] text-base normal-case text-[#686868] border border-[#686868] rounded-md lg:mr-4 mb-4"
          >Cancel
          </button>
          <button
            className="w-full btn bg-[#FB641B] lg:w-[134px] h-[40px] text-base normal-case text-white rounded-md mb-4"
          >Submit
          </button>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;