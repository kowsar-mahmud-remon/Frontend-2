import Image from "next/image";
import React from "react";
import visa from "/assets/payment/visa.png";
import bkash from "/assets/payment/bkash.png";
import style from "/styles/componentsStyles/box-shaddow.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const MyPaymentOption = () => {
  const router = useRouter()
  return (
    <div>
      <div className="hidden lg:block ">
        <div className="w-full   px-0   mb-12">
          <h2 className="text-[#FB641B] text-2xl  mb-8 font-semibold">
            My Payment Option
          </h2>
          <div className={`rounded-lg lg:mr-[20px] bg-[#FFFFFF] p-6 ${style.boxshaddow} mb-6 h-[210px] max-w-[924px]`}>
            <p className="text-[#001E00] text-base font-medium mb-8">
              Credit & Debit Card
            </p>
            <div className="grid grid-cols-3 items-center">
              <p className="text-[#686868] text-base font-normal">Card Number</p>
              <p className="text-[#686868] text-base font-normal text-center">
                Expiry Date
              </p>
              <p></p>
            </div>
            <div className="divider m-0 p-0"></div>
            <div className="mt-2 grid grid-cols-3 items-center">
              <div className="flex items-center">
                <Image className="w-16" src={visa} alt="" />
                <p className="ml-4  font-medium text-[#001E00] lg:block md:block hidden ">425120******1452</p>
              </div>
              <div>
                <p className="text-center font-medium text-[#001E00] lg:hidden md:hidden block">
                  425120******1452
                </p>
                <p className="text-center font-medium text-[#001E00]">
                  Expires 02/27
                </p>
              </div>
              <label htmlFor="my-modal-1">
                <p className="text-end text-[#287DF3] text-sm font-medium cursor-pointer">
                  Delete
                </p>
              </label>
            </div>
          </div>
          <div
            className={`rounded-lg bg-[#FFFFFF] lg:mr-[20px] p-6 ${style.boxshaddow} max-w-[924px] h-[210px]`}
          >
            <p className="text-[#001E00] text-base font-medium mb-8">
              Other Payment Methods
            </p>
            <div className="grid grid-cols-3 items-center">
              <p className="text-[#686868] text-base font-normal">Card Number</p>
              <p className="text-[#686868] text-base font-medium text-center"></p>
              <p></p>
            </div>
            <div className="divider m-0 p-0"></div>
            <div className="mt-2 grid grid-cols-3 items-center">
              <div className="flex items-center">
                <Image className="w-16" src={bkash} alt="" />
                <p className="ml-4  font-medium text-[#001E00] ">014*******452</p>
              </div>
              <p></p>

              <label htmlFor="my-modal-1">
                <p className="text-end text-[#287DF3] text-sm font-medium cursor-pointer">
                  Delete
                </p>
              </label>

            </div>
          </div>
          <div className="mt-8">
            <button className="bg-[#FB641B] px-6 py-3 text-sm text-white font-normal rounded-lg ">
              Add New Payment Account
            </button>
          </div>
        </div>

        <input type="checkbox" id="my-modal-1" className="modal-toggle" />
        <div className="modal fixed inset-0   h-screen bg-black  bg-opacity-60">
          <div className="max-w-[751px]   h-[363px] bg-[#FFFFFF] rounded-[8px] relative">
            <label htmlFor="my-modal-1" className="absolute right-4 top-2">✕</label>
            <div>
              <h1 className="text-[#001E00] text-[24px] lg:mr-[24px] mt-[78px] ml-[24px]">Do you want to delete bKash account +88 014 ******452</h1>
              <div className="flex items-center justify-end mt-[185px] mx-[24px] gap-[16px]">

                <label htmlFor="my-modal-1" className="  flex items-center justify-center text-[#686868] text-[16px] font-[500] rounded-[8px] border-[1px] border-solid border-[#B7B7B7] w-[122px] h-[48px]">

                  Cancel
                </label>


                <button className=" text-[#FFFFFF] text-[16px] font-[500] rounded-[8px] border-[1px] border-solid border-[#B7B7B7] bg-[#FB641B] w-[172px] h-[48px]">Delete</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='lg:hidden block'>
        <div className="mt-[34px] px-[24px] w-full">
          <div>
            <button onClick={() => router.back()} className='flex items-center gap-[13px]'>
              <FaArrowLeft className=''></FaArrowLeft>
              <h1 className='text-[20px]  font-[500] text-[#001E00]'>My Payment Options</h1>
            </button>
          </div>
          <div className="mt-[16px] w-full">
            <h1 className="text-[#001E00] font-[500] text-[16px] ">Credit & Debit Card</h1>
            <div className="text-[#686868] paymentOption  pl-[16px] text-[16px] font-[400] w-full mt-[12px] h-[81px] bg-[#FFFFFF] rounded-[4px] profileBox placeholder:text-[#686868]">
              <div className="flex items-center justify-between mx-[16px]">
                <div className="flex items-center pt-[15px] gap-[27px]">
                  <Image className="w-[44px]" src={visa} alt="" />
                  <div>
                    <h1 className="text-[#001E00] text-[3.8vw] md:text-[16px]">425120******1452</h1>
                    <h2 className="text-[#686868] text-[3.4vw] md:text-[12px]">Expires 02/27</h2>
                  </div>
                </div>
                <div>
                  <label htmlFor="delete-modal-3">
                    <h1 className="text-[#287DF3] text-[3.6vw] pt-[15px] md:text-[14px]">Delete</h1>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[16px] w-full">
            <h1 className="text-[#001E00] text-[16px] font-[500]">Other Payment Methods</h1>
            <div className="text-[#686868]  pl-[16px] text-[16px] font-[400] w-full mt-[12px] h-[64px] bg-[#FFFFFF] rounded-[4px] profileBox placeholder:text-[#686868]">
              <div className="flex items-center justify-between mx-[16px]">
                <div className="flex items-center pt-[15px] gap-[27px]">
                  <Image className="w-[56px]" src={bkash} alt="" />
                  <h1 className="text-[#001E00] text-[3.8vw] md:text-[16px]">014*******452</h1>
                </div>
                <div>
                  <label htmlFor="">
                    <h1 className="text-[#287DF3] text-[3.6vw] pt-[15px] md:text-[14px]">Delete</h1>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <input type="checkbox" id="delete-modal-3" className="modal-toggle" />
          <div className="modal fixed inset-0   h-screen bg-black  bg-opacity-60 ">
            <div className="w-full mx-[24px] h-[138px] bg-[#FFFFFF] rounded-[8px] relative">
              <div className="mt-[18px]">
                <h1 className="text-[#686868] whitespace-nowrap overflow-hidden text-center text-[16px] font-[500] mx-[10px]">Do you want to delete bKash account</h1>
                <h2 className="text-[#686868] text-center text-[16px] font-[500]">+88 014 ******452</h2>
              </div>

              <div className="flex items-center justify-center gap-[39px] mt-[28px]">
                <label htmlFor="delete-modal-3" className="paymentOptionResponsiveModalButton text-center pt-[4px]  text-[#686868] w-[87px] h-[32px]" >
                  Cancel
                </label>

                <button className="paymentOptionResponsiveModalButton text-[#F4253F] w-[87px] h-[32px]">Delete</button>
              </div>

              {/* <label htmlFor="delete-modal-3" className="btn btn-sm btn-circle ">✕</label> */}


            </div>
          </div>
          <div>
          </div>


        </div>




      </div>
    </div>
  );
};

export default MyPaymentOption;
