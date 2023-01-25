import React from 'react';
import { RiDeleteBinFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import img from '../../assets/images/image 7.png';
import img2 from '../../assets/images/image 88.png';




const DontSelectProductCheckout = () => {
  return (
    <div className=' mt-8 mb-72 lg:mx-20'>
      <div className="">
        <p className=' text-base text-[#686868] mb-2'>Home / Add to Cart / <span>Checkout</span></p>
        <h4 className=' text-2xl font-medium text-[#FB641B]'>Ready to Checkout!</h4>
      </div>

      <div className="lg:flex">
        <div className="w-[788px] mr-6">
          <div className="text-[#686868] flex justify-between p-6 shadow-lg mt-4">
            <div className="flex">
              <input type="checkbox" className="checkbox mr-4 border border-[#686868]" />
              <p className=' text-base'>SELECT ALL 1 ITEM(S)</p>
            </div>
            <div className="flex">
              <RiDeleteBinFill className='text-[18px] mr-2'></RiDeleteBinFill>
              <p className='text-[10px]'>Delete</p>
            </div>
          </div>
          <div className="p-6 mt-4">
            <div className="pb-4 flex text-[#686868] border-b border-[#B7B7B7]">
              <input type="checkbox" className="checkbox mr-4 border border-[#686868]" />
              <div className="flex items-center">
                <p className=' text-base mr-1'>Banglar Big Store</p>
                <FaAngleRight></FaAngleRight>
              </div>
            </div>
            <div className="flex mt-5 items-center justify-between">
              <input type="checkbox" className="checkbox mr-4 border border-[#686868]" />
              <Image
                className='w-auto mr-5' src={img}
                alt="Picture of the author"
                width={127}
                height={103}
              />
              <div className="mr-[88px]">
                <p className='text-lg font-medium mb-4'>Tomato (Local) 500 ±30 gm</p>
                <p className='text-[#686868] text-base'>No Brand, Color Family:Black</p>
              </div>
              <div className=" text-[#707070] mr-[90px]">
                <p className='text-base text-[#FB641B] font-medium mb-4'>Tk 60</p>
                <p className='text-[10px] mb-4 line-through'>Tk 80</p>
                <p className='text-[10px] mb-4'>(20% off)</p>
                <div className="flex">
                  <AiOutlineHeart className='text-[20px] mr-4'></AiOutlineHeart>
                  <RiDeleteBinFill className='text-[18px]'></RiDeleteBinFill>
                </div>
              </div>
              <div className="flex">
                <p className=' text-3xl mr-5 text-[#686868] font-bold'>-</p>
                <p className='text-2xl mr-5 text-[#FB641B]'>1</p>
                <p className=' text-3xl text-[#686868] font-bold'>+</p>
              </div>
            </div>
          </div>

          <div className="p-6 mt-4">
            <div className="pb-4 flex text-[#686868] border-b border-[#B7B7B7]">
              <input type="checkbox" className="checkbox mr-4 border border-[#686868]" />
              <div className="flex items-center">
                <p className=' text-base mr-1'>Banglar Big Store</p>
                <FaAngleRight></FaAngleRight>
              </div>
            </div>
            <div className="flex mt-5 items-center justify-between">
              <input type="checkbox" className="checkbox mr-4 border border-[#686868]" />
              <Image
                className='w-auto mr-5' src={img2}
                alt="Picture of the author"
                width={127}
                height={103}
              />
              <div className="mr-[88px]">
                <p className='text-lg font-medium mb-4'>Potol (Pointed Gourd ) 500 ±30 gm</p>
                <p className='text-[#686868] text-base'>No Brand, Color Family:Black</p>
              </div>
              <div className=" text-[#707070] mr-[90px]">
                <p className='text-base text-[#FB641B] font-medium mb-4'>Tk 40</p>
                <p className='text-[10px] mb-4 line-through'>Tk 50</p>
                <p className='text-[10px] mb-4'>(10% off)</p>
                <div className="flex">
                  <AiOutlineHeart className='text-[20px] mr-4'></AiOutlineHeart>
                  <RiDeleteBinFill className='text-[18px]'></RiDeleteBinFill>
                </div>
              </div>
              <div className="flex">
                <p className=' text-3xl mr-5 text-[#686868] font-bold'>-</p>
                <p className='text-2xl mr-5 text-[#FB641B]'>1</p>
                <p className=' text-3xl text-[#686868] font-bold'>+</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[388px] p-4 mt-2">
          <p className=" text-lg font-medium text-[#FB641B]">Order Summary</p>
          <div className="flex justify-between mt-4 text-[#686868]">
            <p className="text-base">Subtotal (items)</p>
            <p className="text-base font-medium">Tk 0</p>
          </div>
          <div className="flex justify-between mt-4 mb-52">
            <p className=" text-base text-[#001E00]">Total:</p>
            <p className=" text-base font-medium text-[#FB641B]">Tk 0</p>
          </div>
          <button className="btn bg-[#FB641B] w-full h-12 rounded-md text-white">PROCEED TO CHECKOUT (0)</button>
        </div>
      </div>
    </div>
  );
};

export default DontSelectProductCheckout;