import React from 'react';
import img from '../../assets/images/image 6.png';
import img2 from '../../assets/images/Group.png';
import img3 from '../../assets/images/Group 1913.png';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const OrderPlace = () => {
  return (
    <div className="mb-80 lg:flex mx-auto w-[100%]">
      <div className="mr-6">
        <div className=" mt-6 ml-4 lg:w-[788px]">
          <p className="text-base text-[#707070]">Deliver to: Abdul Korim</p>
          <div className="flex mt-4">
            <p className="text-xs mr-6 text-[#287DF3]">Home</p>
            <p className=" text-base mr-4 text-[#707070]">+88 012 342 450 45 | Ramgonj Tower-16/14, Giridhara, Matuail, Kodomtali, Dhaka-1362</p>
            <p className="text-xs text-[#287DF3]">Change</p>
          </div>
          <div className="border py-2 px-3 mt-6 border-[#686868] rounded-md">
            <p className=" text-base font-medium text-[#026C51]">Collect your parcel from the nearest Daraz Pick-up Point with a reduced shipping fee</p>
            <p className=" text-sm text-[#707070]">11 suggested collection point(s) nearby <span className="text-[#287DF3]"> Check Pick-up Points</span></p>
          </div>
          <div className="flex mt-3">
            <p className="mr-6 text-base text-[#707070]">Bill to the same address</p>
            <p className=" text-[#287DF3]">Edit</p>
          </div>
          <div className="flex">
            <p className="mr-6 text-base text-[#707070]">Email to: abdulkorim@gmail.com</p>
            <p className=" text-[#287DF3]">Edit</p>
          </div>
        </div>

        <div className=" mt-8 ml-4 w-[788px]">
          <p className="text-base text-[#707070]">Banglar Big Store</p>
          <div className="flex justify-between mt-4 border-b border-[#686868] pb-4">
            <div className="flex">
              <Image
                className=' mr-4'
                src={img}
                alt=""
                width={40}
                height={40}
              />
              <div className="">
                <p className="text-base font-medium">Tomato (Local) 500 ±30 gm</p>
                <p className="text-xs text-[#707070]">No Brand, Color Family: Black</p>
              </div>
            </div>
            <p className="text-base font-medium">Qty: 1</p>
            <div className="flex">
              <p className=" mr-4 text-[10px] text-[#707070]">Tk 80</p>
              <p className=" mr-4 text-[10px] text-[#707070]">(20% off)</p>
              <p className="text-base text-[#FB641B]">Tk 60</p>
            </div>
          </div>
          <div className=" p-3 border border-[#026C51] w-[201px] mt-4 rounded-md">
            <p className=" text-sm text-[#026C51] font-medium">Standard Delivery TK. 30 <br />
              <span className="text-[#707070]">Receive by 25 Dec - 28 Dec</span></p>
          </div>
        </div>

        <div className=" mt-4 ml-4 w-[788px] flex justify-between">
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
              <FaArrowRight className='text-[#707070]'></FaArrowRight>
            </div>
          </div>

          <div className=" p-4">
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

      <div className="mt-6 w-[388px] p-4">
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
            <FaArrowRight className='text-[#707070]'></FaArrowRight>
          </div>
        </div>

        <div className=" mt-8">
          <p className=" text-base font-bold">Order Summary</p>
          <div className="flex justify-between mt-4">
            <p className=" font-medium text-base">Order Summary</p>
            <p className=" font-medium text-base">Tk 60</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className=" font-medium text-base">Delivery Fee</p>
            <p className=" font-medium text-base">Tk 30</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className=" font-medium text-base">Total Payment</p>
            <p className=" font-medium text-base">Tk 90</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className=" font-medium text-base">Total:</p>
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