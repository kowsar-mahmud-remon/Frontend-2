import React from 'react';
import img from '../../assets/images/image 6.png';
import img2 from '../../assets/images/Group.png';
import img3 from '../../assets/images/Group 1913.png';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

const OrderPlacePage = () => {
  const products =
    [
      {
        _id: 1,
        img: img,
        name: "Tomato (Local) 500 ±30 gm",
        subTitle: "No Brand, Color Family:Black",
        price: 60,
        previousPrice: 80,
        discount: 20,
        Qty: 1
      }
    ];
  return (
    <div className="mb-80 lg:flex mx-auto lg:w-[1200px]">
      <div className="lg:mr-6 mb-10 mx-6 lg:mx-0">
        <div className=" mt-6 p-4 lg:w-[788px]">
          <p className="text-base text-[#707070]">Deliver to: Abdul Korim</p>
          <div className="lg:flex mt-4 items-center">
            <p className="text-xs mr-6 text-[#287DF3] mt-1">Home</p>
            <p className=" text-base text-[#707070] mr-1 mt-1">+88 012 342 450 45</p>
            <p className=" text-base text-[#707070] mr-1 sm:hidden md:hidden mt-1">|</p>
            <p className=" text-base text-[#707070] mr-1 mt-1">Ramgonj Tower-16/14,</p>
            <p className=" text-base text-[#707070] mr-1 mt-1">Giridhara, Matuail, Kodomtali,</p>
            <p className='text-base text-[#707070] mr-4 mt-1'>Dhaka-1362</p>

            <p className="text-xs text-[#287DF3] mt-1">Change</p>
          </div>
          <div className="hidden lg:block border py-2 px-3 mt-6 border-[#686868] rounded-md">
            <p className=" text-base font-medium text-[#026C51]">Collect your parcel from the nearest Daraz Pick-up Point with a reduced shipping fee</p>
            <p className=" text-sm text-[#707070]">11 suggested collection point(s) nearby <span className="text-[#287DF3]"> Check Pick-up Points</span></p>
          </div>
          <div className="flex mt-3">
            <p className="mr-6 text-base text-[#707070]">Bill to the same address</p>
            <p className=" text-[#287DF3]">Edit</p>
          </div>
          <div className="flex mt-3">
            <p className="mr-6 text-base text-[#707070]">Email to: abdulkorim@gmail.com</p>
            <p className=" text-[#287DF3]">Edit</p>
          </div>
        </div>

        <div className=" mt-8 p-4 lg:w-[788px] border-b border-[#B7B7B7]">
          <p className="text-base text-[#707070]">Banglar Big Store</p>

          {
            products.map(product => <div
              key={product._id}
              className="flex mt-4">
              <Image
                className=' mr-4 w-10 h-10'
                src={product.img}
                alt=""
                width={40}
                height={40}
              />
              <div className="lg:flex lg:justify-between items-center w-full">
                <div className="mb-2">
                  <p className="text-base font-medium text-[#001E00]">{product.name}</p>
                  <p className="text-xs text-[#707070]">{product.subTitle}</p>
                </div>

                <p className="text-base font-medium inline sm:mr-14 text-[#686868]">Qty: {product.Qty}</p>
                <div className="sm:inline lg:flex items-center">
                  <p className="sm:inline mr-4 text-[10px] text-[#707070] line-through">Tk {product.previousPrice}</p>
                  <p className="sm:inline mr-4 text-[10px] text-[#707070]">({product.discount}% off)</p>
                  <p className="sm:inline text-base text-[#FB641B] font-medium">Tk {product.price}</p>
                </div>
              </div>
            </div>)
          }

        </div>
        <div className=" p-4 lg:w-[788px]">
          <div className=" p-3 border border-[#026C51] w-[201px] mt-4 rounded-md">
            <p className=" text-sm text-[#026C51] font-medium">Standard Delivery TK. 30 <br />
              <span className="text-[#707070]">Receive by 25 Dec - 28 Dec</span></p>
          </div>
        </div>
      </div>

      <div className="lg:mt-6 lg:w-[388px] p-4 mx-6 lg:mx-0">
        <p className=" text-base text-[#707070]">Discount and Payment</p>
        <div className="flex justify-between mt-8 border-b border-[#B7B7B7] pb-5">
          <div className="flex items-center">
            <Image
              className=' mr-2 w-[21px] h-[14px]'
              src={img2}
              alt=""
            // width={210}
            // height={5}
            />
            <p className="text-xs text-[#707070]">Product Discount</p>
          </div>
          <div className="flex">
            <p className='text-[10px] text-[#707070] font-medium mr-2'>Tk 80</p>
            <p className='text-[10px] text-[#707070]'>(20% off)</p>
          </div>

        </div>

        <div className=" mt-8">
          <p className=" text-base font-medium text-[#FB641B]">Order Summary</p>
          <div className="flex justify-between mt-4 text-[#686868]">
            <p className=" text-base">Subtotal (1 items)</p>
            <p className=" font-medium text-base">Tk 60</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-base text-[#001E00]">Delivery Fee</p>
            <p className=" font-medium text-base">Tk 30</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-base text-[#001E00]">Total Payment</p>
            <p className=" font-medium text-base">Tk 90</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-base text-[#001E00]">Total:</p>
            <p className=" font-medium text-base text-[#FB641B]">Tk 90</p>
          </div>
          <div className=" mt-4 mb-8 text-end">
            <p className="text-xs justify-end text-[#707070]">VAT included, where applicable</p>
          </div>
          <button className="btn bg-[#FB641B] w-full h-12 rounded-md text-white normal-case text-base font-medium">Place Order</button>
        </div>
      </div>

    </div>
  );
};

export default OrderPlacePage;