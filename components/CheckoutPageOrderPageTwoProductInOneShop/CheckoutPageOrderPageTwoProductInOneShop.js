import React from 'react';
import img from '../../assets/images/image 6.png';
import img2 from '../../assets/images/Group.png';
import img3 from '../../assets/images/Group 1913.png';
import img4 from '../../assets/images/image 9.png';
import deleteImg from '../../assets/images/deleteImg.png';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import style from "../../styles/campaignManagementTwo.module.css";
import vectorImg from '../../assets/images/Vector 3.png';
import vectorImg2 from '../../assets/images/Vector.png';
import arrowLeft from '../../assets/images/arrowLeft.png';

const CheckoutPageOrderPageTwoProductInOneShop = () => {
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
      },
      {
        _id: 2,
        img: img4,
        name: "Tomato (Local) 500 ±30 gm",
        subTitle: "No Brand, Color Family:Black",
        price: 60,
        previousPrice: 80,
        discount: 20,
        Qty: 1
      }
    ];
  return (
    <div className="">
      <div className="flex mx-6 items-center mt-3 md:hidden">
        <Image
          className=' mr-3 w-[20px] h-[14px] cursor-pointer'
          src={arrowLeft}
          alt=""
          width={20}
          height={14}
        />
        <p className='text-xl text-[#001E00] font-medium'>Place Order</p>
      </div>
      <div className="mb-80 lg:flex mx-auto lg:max-w-[1200px]">
        <div className="lg:mr-6 mb-10 mx-6 lg:mx-0">
          <div className={`mt-4 md:mt-6 p-4 lg:max-w-[788px] ${style.campaignManagementWithoutBorder}`}>
            <div className="flex justify-between">
              <p className="text-base lg:text-[#707070] text-[#001E00] font-medium lg:font-normal">Deliver to: Abdul Korim</p>
              <p className="text-xs text-[#287DF3] mt-1 lg:hidden cursor-pointer">Change</p>
            </div>
            <div className="flex mt-4 lg:items-center">
              <p className="text-xs mr-6 text-[#287DF3] mt-1 cursor-pointer">Home</p>
              <div className="lg:flex items-center">
                <p className=" text-base text-[#707070] mr-1 mt-1">+88 012 342 450 45</p>
                {/* <p className=" text-base text-[#707070] mr-1 sm:hidden md:hidden mt-1">|</p> */}
                <p className=" text-base text-[#707070] mr-1 mt-1">Ramgonj Tower-16/14,</p>
                <p className=" text-base text-[#707070] mr-1 mt-1">Giridhara, Matuail, Kodomtali,</p>
                <p className='text-base text-[#707070] mr-4 mt-1'>Dhaka-1362</p>
              </div>

              <p className="text-xs text-[#287DF3] mt-1 hidden lg:block cursor-pointer">Change</p>
            </div>
            <div className=" border py-2 px-3 mt-6 border-[#686868] rounded-md">
              <p className=" text-xs lg:text-base font-medium text-[#026C51]">Collect your parcel from the nearest Daraz Pick-up Point with a reduced shipping fee</p>
              <p className=" text-sm mt-1 text-[#707070]">11 suggested collection point(s) nearby <span className="text-[#287DF3]"> Check Pick-up Points</span></p>
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

          <div className={`mt-4 p-4 lg:max-w-[788px]  ${style.campaignManagementWithoutBorder}`}>
            <p className="text-base lg:text-[#707070] text-[#001E00] font-medium lg:font-normal">Banglar Big Store</p>

            <div className="border-b border-[#B7B7B7] pb-4">
              {
                products.map(product => <div
                  key={product._id}
                  className="lg:flex mt-4 w-full">
                  <div className="flex lg:mr-10 lg:w-[40%]">
                    <Image
                      className=' mr-4 w-[40px] h-[40px]'
                      src={product.img}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div className="mb-2">
                      <p className="text-base font-medium text-[#001E00]">{product.name}</p>
                      <p className="text-xs text-[#707070]">{product.subTitle}</p>
                    </div>
                  </div>
                  <div className="pl-[56px] lg:pl-0 flex lg:justify-between items-center lg:w-[60%] ">


                    <div className="flex lg:flex-row-reverse justify-between w-full">

                      <div className=" items-center flex lg:justify-end flex-row-reverse lg:flex-row lg:w-[60%]">
                        <div className="flex">
                          <p className=" mr-4 text-[10px] text-[#707070] line-through">Tk {product.previousPrice}</p>
                          <p className=" mr-4 text-[10px] text-[#707070]">({product.discount}% off)</p>
                        </div>
                        <div className="mr-2 lg:mr-0">
                          <p className=" text-base font-medium text-[#FB641B]">Tk {product.price}</p>
                        </div>
                      </div>

                      <div className="flex lg:justify-between lg:w-[40%]">
                        <p className="text-base font-medium inline sm:mr-4 text-[#686868]">Qty: {product.Qty}</p>

                        <Image
                          className=' w-[18px] h-[21px] cursor-pointer hidden lg:block'
                          src={deleteImg}
                          alt=""
                          width={18}
                          height={21}
                        />

                      </div>

                    </div>

                  </div>
                </div>)
              }
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

          <div className={`mt-4 p-4 lg:max-w-[788px]  ${style.campaignManagementWithoutBorder}`}>
            <p className="text-base lg:text-[#707070] text-[#001E00] font-medium lg:font-normal">Family Bazar</p>

            <div className="border-b border-[#B7B7B7] pb-4">
              {
                products.map(product => <div
                  key={product._id}
                  className="lg:flex mt-4 w-full">
                  <div className="flex lg:mr-10 lg:w-[40%]">
                    <Image
                      className=' mr-4 w-[40px] h-[40px]'
                      src={product.img}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div className="mb-2">
                      <p className="text-base font-medium text-[#001E00]">{product.name}</p>
                      <p className="text-xs text-[#707070]">{product.subTitle}</p>
                    </div>
                  </div>
                  <div className="pl-[56px] lg:pl-0 flex lg:justify-between items-center lg:w-[60%] ">


                    <div className="flex lg:flex-row-reverse justify-between w-full">

                      <div className=" items-center flex lg:justify-end flex-row-reverse lg:flex-row lg:w-[60%]">
                        <div className="flex">
                          <p className=" mr-4 text-[10px] text-[#707070] line-through">Tk {product.previousPrice}</p>
                          <p className=" mr-4 text-[10px] text-[#707070]">({product.discount}% off)</p>
                        </div>
                        <div className="mr-2 lg:mr-0">
                          <p className=" text-base font-medium text-[#FB641B]">Tk {product.price}</p>
                        </div>
                      </div>

                      <div className="flex lg:justify-between lg:w-[40%]">
                        <p className="text-base font-medium inline sm:mr-4 text-[#686868]">Qty: {product.Qty}</p>

                        <Image
                          className=' w-[18px] h-[21px] cursor-pointer hidden lg:block'
                          src={deleteImg}
                          alt=""
                          width={18}
                          height={21}
                        />

                      </div>

                    </div>

                  </div>
                </div>)
              }
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

        </div>

        <div className={`lg:mt-6 lg:w-[388px] p-4 mx-6 lg:mx-0 ${style.campaignManagementWithoutBorder}`}>
          <p className=" text-base text-[#001E00] font-medium">Discount and Payment</p>
          <div className="flex justify-between mt-8">
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
              <p className='text-[10px] text-[#707070] font-medium mr-2 line-through'>Tk 80</p>
              <p className='text-[10px] text-[#707070]'>(20% off)</p>
            </div>

          </div>
          <div className="flex justify-between mt-4 border-b border-[#B7B7B7] pb-5">
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
              <p className='text-[10px] text-[#707070] font-medium mr-2 line-through'>Tk 80</p>
              <p className='text-[10px] text-[#707070]'>(20% off)</p>
            </div>

          </div>

          <div className="">
            <p className='text-base text-[#001E00] font-medium mt-4 lg:mt-[44px]'>Coupon Cord</p>

            <div className="flex mt-[15px] border rounded border-[#FB641B] w-full h-[50px]">
              <input type="text" className="input w-full h-full" />
              <button className=' w-[150px] h-full bg-[#FB641B] text-base text-white'>Apply</button>
            </div>
          </div>

          <div className=" mt-4">
            <p className=" text-base font-medium text-[#FB641B]">Order Summary</p>
            <div className="flex justify-between mt-4 text-[#686868]">
              <p className=" text-base">Subtotal (2 items)</p>
              <p className=" font-medium text-base">Tk 120</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-base text-[#001E00]">Delivery Fee</p>
              <p className=" font-medium text-base">Tk 30</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-base text-[#001E00]">Total Payment</p>
              <p className=" font-medium text-base">Tk 150</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-base text-[#001E00]">Total:</p>
              <p className=" font-medium text-base text-[#FB641B]">Tk 150</p>
            </div>
            <div className=" mt-4 mb-8 text-end">
              <p className="text-xs justify-end text-[#707070]">VAT included, where applicable</p>
            </div>
            <button className="btn bg-[#FB641B] w-full h-12 rounded-md text-white normal-case text-base font-medium hover:bg-[#FB641B]">Place Order</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPageOrderPageTwoProductInOneShop;