import React from 'react';
import img from '../../assets/images/image 6.png';
import img2 from '../../assets/images/Group.png';
import img3 from '../../assets/images/Group 1913.png';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import vectorImg from '../../assets/images/Vector 3.png';
import vectorImg2 from '../../assets/images/Vector.png';

const OrderPlace = () => {
  return (
    <div className="mb-80 lg:flex mx-auto lg:w-[1200px]">
      <div className="lg:mr-6">
        <div className=" mt-6 p-4 lg:w-[788px]">
          <p className="text-base text-[#707070]">Deliver to: Abdul Korim</p>
          <div className="lg:flex mt-4">
            <p className="text-xs mr-6 text-[#287DF3] mt-1">Home</p>
            <p className=" text-base text-[#707070] mr-1 mt-1">+88 012 342 450 45</p>
            <p className=" text-base text-[#707070] mr-1 sm:hidden md:hidden mt-1">|</p>
            <p className=" text-base text-[#707070] mr-1 mt-1">Ramgonj Tower-16/14,</p>
            <p className=" text-base text-[#707070] mr-1 mt-1">Giridhara, Matuail, Kodomtali,</p>
            <p className='text-base text-[#707070] mr-4 mt-1'>Dhaka-1362</p>

            <p className="text-xs text-[#287DF3] mt-1">Change</p>
          </div>
          <div className="hidden lg:block border py-2 px-3 mt-6 border-[#686868] rounded-md">
            <p className=" text-base font-medium text-[#026C51] mb-2">Collect your parcel from the nearest Daraz Pick-up Point with a reduced shipping fee</p>
            <p className=" text-sm text-[#707070]">11 suggested collection point(s) nearby <span className="text-[#287DF3]"> Check Pick-up Points</span></p>
          </div>
          <div className="flex mt-[10px]">
            <p className="mr-6 text-base text-[#707070]">Bill to the same address</p>
            <p className=" text-[#287DF3]">Edit</p>
          </div>
          <div className="flex mt-4">
            <p className="mr-6 text-base text-[#707070]">Email to: abdulkorim@gmail.com</p>
            <p className=" text-[#287DF3]">Edit</p>
          </div>
        </div>

        <div className=" mt-4 p-4 lg:w-[788px]">
          <p className="text-base text-[#707070]">Banglar Big Store</p>
          <div className="flex mt-4 border-b border-[#B7B7B7] pb-4">
            <Image
              className=' mr-4'
              src={img}
              alt=""
              width={40}
              height={40}
            />
            <div className="lg:flex lg:justify-between items-center w-full">
              <div className="mb-2">
                <p className="text-base font-medium mb-1">Tomato (Local) 500 ±30 gm</p>
                <p className="text-xs text-[#707070]">No Brand, Color Family: Black</p>
              </div>

              <p className="text-base font-medium inline sm:mr-14 text-[#707070]">Qty: <span className='text-black   '>1</span></p>
              <div className="sm:inline lg:flex items-center">
                <p className="sm:inline mr-4 text-[10px] text-[#707070] line-through">Tk 80</p>
                <p className="sm:inline mr-4 text-[10px] text-[#707070]">(20% off)</p>
                <p className="sm:inline text-base text-[#FB641B]">Tk 60</p>
              </div>
            </div>

          </div>
          <div className="border border-[#026C51] w-[220px] mt-4 rounded-md">
            <div className=" ml-[-1.3px] mt-[-1.3px]">
              <Image
                className='w-[13px] h-[7px] absolute ml-[6px] mt-[5px]'
                src={vectorImg2}
                alt=""
                width={13}
                height={7}
              />
              <Image
                className='w-[33px] h-[25px]'
                src={vectorImg}
                alt=""
                width={33}
                height={25}
              />
            </div>
            <div className=" p-3 pt-0 mt-[-10px] ml-2">
              <p className=" text-sm text-[#026C51] font-medium">Standard Delivery TK. 30 <br />
                <span className="text-[#707070]">Receive by 25 Dec - 28 Dec</span></p>
            </div>
          </div>
        </div>

        <div className=" mt-4 pl-4 lg:w-[788px] lg:flex justify-between">
          <div className=" p-5 flex w-[468px] border border-[#707070] rounded-md justify-between">
            <div className="flex items-center">
              <Image
                className=' mr-2 w-[21px] h-[14px]'
                src={img2}
                alt=""
              // width={210}
              // height={5}
              />
              <p className="text-[#707070]">Enter Promo Code</p>
            </div>
            <div className="flex items-center">
              <p className="text-base mr-2 text-[#707070]">Ger Voucher</p>
              <FaAngleRight className='text-[#707070]'></FaAngleRight>
            </div>
          </div>

          <div className="p-4 sm:pl-0">
            <div className="flex">
              <p className=" mr-2 text-base">1 Item (s). Subtotal:</p>
              <p className="text-[#FB641B] text-base">Tk 60</p>
            </div>
            <div className="flex">
              <p className=" mr-2 text-[#707070] text-sm">1 Item (s). Subtotal:</p>
              <p className="text-[#707070] text-sm">Tk 20</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 lg:w-[388px] p-4">
        <p className=" text-base text-[#707070]">Discount and Payment</p>
        <div className="flex justify-between mt-8">
          <div className="flex items-center">
            <Image
              className=' mr-2 w-[21px] h-[14px]'
              src={img2}
              alt=""
            // width={210}
            // height={5}
            />
            <p className="text-xs text-[#707070]">Banglar Big Store Voucher</p>
          </div>
          <p className="text-xs text-[#707070]">No Applicable Voucher</p>
        </div>
        <div className="flex justify-between mt-8 pb-8 border-b border-[#686868]">
          <div className="flex items-center">
            <Image
              className=' mr-2 w-[21px] h-[14px]'
              src={img3}
              alt=""
            // width={210}
            // height={5}
            />
            <p className="text-xs text-[#707070]">Promo Code</p>
          </div>
          <div className="flex">
            <p className="text-xs mr-2 text-[#707070]">Enter Store/Banglar Big Store</p>
            <FaAngleRight className='text-[#707070]'></FaAngleRight>
          </div>
        </div>

        <div className=" mt-4">
          <p className=" text-base font-medium">Order Summary</p>
          <div className="flex justify-between mt-4">
            <p className="text-[#001E00] font-medium text-base">Order Summary</p>
            <p className=" font-medium text-base">Tk 60</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#001E00] text-base">Delivery Fee</p>
            <p className=" font-medium text-base">Tk 30</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#001E00] text-base">Total Payment</p>
            <p className=" font-medium text-base">Tk 90</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#001E00] text-base">Total:</p>
            <p className=" font-medium text-base text-[#FB641B]">Tk 90</p>
          </div>
          <div className=" mt-4 mb-8 text-end">
            <p className="text-xs justify-end text-[#707070]">VAT included, where applicable</p>
          </div>
          <button className="btn bg-[#FB641B] w-full h-12 rounded-md text-white">Place Order</button>
        </div>
      </div>

    </div>
  );
};

export default OrderPlace;