import React from 'react';
import { RiDeleteBinFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import img from '../../assets/images/image 7.png';
import img2 from '../../assets/images/image 88.png';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, productDecrement, productIncrement } from '../../features/product/productSlice';




const DontSelectProductCheckout = () => {
  const counter = useSelector((state) => state.counter.count);
  const counter2 = useSelector((state) => state.counter.count2);
  const price = useSelector((state) => state.counter.price);
  const price2 = useSelector((state) => state.counter.price2);
  const totalCount = useSelector((state) => state.counter.totalCount);
  const totalPrice = useSelector((state) => state.counter.totalPrice);
  console.log('counterr', price);

  const dispatch = useDispatch();


  const banglarBigStoreProduct =
    [
      {
        _id: 1,
        img: img,
        title: "Tomato (Local) 500 ±30 gm",
        subTitle: "No Brand, Color Family:Black",
        price: 60,
        previousPrice: 80,
        discount: "(20)"
      }
    ];

  const familyBazarProduct =
    [
      {
        _id: 1,
        img: img2,
        title: "Potol (Pointed Gourd ) 500 ±30 gm",
        subTitle: "No Brand, Color Family:Black",
        price: 40,
        previousPrice: 50,
        discount: "(10)"
      }
    ];
  return (
    <div className=' mt-8 mb-72 lg:w-[1200px] mx-auto'>
      <div className="m-4 lg:m-0">
        <p className=' text-base text-[#686868] mb-2'>Home / Add to Cart / <span>Checkout</span></p>
        <h4 className=' text-2xl font-medium text-[#FB641B]'>Ready to Checkout!</h4>
      </div>

      <div className="lg:flex m-6 lg:m-0">
        <div className="lg:w-[788px] mr-6 mb-28">
          <div className="text-[#686868] flex justify-between p-6 shadow-lg mt-4">
            <div className="flex">
              <input type="checkbox" className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]" />
              <p className=' text-base'>SELECT ALL 1 ITEM(S)</p>
            </div>
            <div className="flex">
              <RiDeleteBinFill className='text-[18px] mr-2'></RiDeleteBinFill>
              <p className='text-[10px]'>Delete</p>
            </div>
          </div>
          <div className="p-6 mt-4">
            <div className="pb-4 flex text-[#686868] border-b border-[#B7B7B7]">
              <input type="checkbox" className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]" />

              <div className="flex items-center">
                <p className=' text-base mr-1'>Banglar Big Store</p>
                <FaAngleRight></FaAngleRight>
              </div>
            </div>
            {
              banglarBigStoreProduct.map(details => <div key={details._id} className="flex mt-5 items-center">
                <input type="checkbox" className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]" />
                <Image
                  className='w-auto mr-5' src={details.img}
                  alt="Picture of the author"
                  width={127}
                  height={103}
                />
                <div className="justify-between lg:flex w-full">
                  <div className="mb-2">
                    <p className='text-lg font-medium mb-4'>{details.title}</p>
                    <p className='text-[#686868] text-base'>{details.subTitle}</p>
                  </div>
                  <div className=" text-[#707070] flex lg:block justify-between">
                    <div className="flex lg:block items-center">
                      <p className='text-base text-[#FB641B] font-medium mb-4 mr-2'>TK {details.price}</p>
                      <p className='text-[10px] mb-4 line-through mr-1'>Tk {details.previousPrice}</p>
                      <p className='text-[10px] mb-4'>{details.discount}</p>
                    </div>
                    <div className="flex">
                      <AiOutlineHeart className='text-[20px] mr-4'></AiOutlineHeart>
                      <RiDeleteBinFill className='text-[18px]'></RiDeleteBinFill>
                    </div>
                  </div>
                  <div className="flex">
                    <button onClick={() => { dispatch(decrement(details.price)); }} className={`btn btn-ghost text-3xl w-[34px] h-[34px] pt-0 font-bold text-[#686868] mr-5 ${counter > 0 ? "" : "btn-disabled"}`}>-</button>
                    <p className='text-2xl mr-5 text-[#FB641B]'>{counter}</p>
                    <button onClick={() => { dispatch(increment(details.price)); }} className='btn btn-ghost text-3xl w-[34px] h-[34px] pt-0 font-bold text-[#686868]'>+</button>

                  </div>
                </div>
              </div>)

            }
          </div>

          <div className="p-6 mt-4">
            <div className="pb-4 flex text-[#686868] border-b border-[#B7B7B7]">
              <input type="checkbox" className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]" />
              <div className="flex items-center">
                <p className=' text-base mr-1'>Banglar Big Store</p>
                <FaAngleRight></FaAngleRight>
              </div>
            </div>
            {
              familyBazarProduct.map(details => <div key={details._id} className="flex mt-5 items-center">
                <input type="checkbox" className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]" />
                <Image
                  className='w-auto mr-5' src={details.img}
                  alt="Picture of the author"
                  width={127}
                  height={103}
                />
                <div className="justify-between lg:flex w-full">
                  <div className="mb-2">
                    <p className='text-lg font-medium mb-4'>{details.title}</p>
                    <p className='text-[#686868] text-base'>{details.subTitle}</p>
                  </div>
                  <div className=" text-[#707070] flex lg:block justify-between">
                    <div className="flex lg:block items-center">
                      <p className='text-base text-[#FB641B] font-medium mb-4 mr-2'>TK {details.price}</p>
                      <p className='text-[10px] mb-4 line-through mr-1'>Tk {details.previousPrice}</p>
                      <p className='text-[10px] mb-4'>{details.discount}</p>
                    </div>
                    <div className="flex">
                      <AiOutlineHeart className='text-[20px] mr-4'></AiOutlineHeart>
                      <RiDeleteBinFill className='text-[18px]'></RiDeleteBinFill>
                    </div>
                  </div>
                  <div className="flex">
                    <button onClick={() => { dispatch(productDecrement(details.price)); }} className={`btn btn-ghost text-3xl w-[34px] h-[34px] pt-0 font-bold text-[#686868] mr-5 ${counter2 > 0 ? "" : "btn-disabled"}`}>-</button>
                    <p className='text-2xl mr-5 text-[#FB641B]'>{counter2}</p>
                    <button onClick={() => { dispatch(productIncrement(details.price)); }} className='btn btn-ghost text-3xl w-[34px] h-[34px] pt-0 font-bold text-[#686868]'>+</button>

                  </div>
                </div>
              </div>)

            }
          </div>

        </div>

        <div className="lg:w-[388px] p-4 mt-2">
          <p className=" text-lg font-medium text-[#FB641B]">Order Summary</p>
          <div className="flex justify-between mt-4 text-[#686868]">
            <p className="text-base">Subtotal ({totalCount} items)</p>
            <p className="text-base font-medium">Tk {totalPrice}</p>
          </div>
          <div className="flex mt-4 lg:hidden">
            <input type="text" placeholder="Enter Promo Code" className="input input-bordered w-full max-w-xs mr-4" />
            <button className="btn bg-[#FB641B] w-20 h-9 rounded-md text-white">APPLY</button>
          </div>
          <div className="flex justify-between mt-4 mb-52">
            <p className=" text-base text-[#001E00]">Total: </p>
            <p className=" text-base font-medium text-[#FB641B]">Tk {totalPrice}</p>
          </div>
          <button className="btn bg-[#FB641B] w-full h-12 rounded-md text-white">PROCEED TO CHECKOUT ({totalCount})</button>
        </div>
      </div>
    </div>
  );
};

export default DontSelectProductCheckout;