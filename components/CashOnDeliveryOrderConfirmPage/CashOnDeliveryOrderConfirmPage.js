import Image from 'next/image';
import React from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaAngleRight } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import img from '../../assets/images/image 7.png';
import Vectorimg from '../../assets/images/Vectorimg.png';
import Vectorimg2 from '../../assets/images/Vector2.png';
import img2 from '../../assets/images/image 77.png';
import img3 from '../../assets/images/image 4.png';
import img4 from '../../assets/images/image 7.png';
import img5 from '../../assets/images/image 88.png';
import img6 from '../../assets/images/image 9.png';
import sellerImg from '../../assets/images/seller.png';
import { FaStar } from 'react-icons/fa';



const CashOnDeliveryOrderConfirmPage = () => {
  const productDetails =
    [
      {
        id: 1,
        img: img4,
        price: 124,
        title: "Misti Kumra Fali (Sweet Pumpkin Fali)",
        rating: 4.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 2,
        img: img2,
        price: 18,
        title: "Kacha Morich (Green Chili) 250 ±15 gm",
        rating: 3.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 3,
        img: img5,
        price: 160,
        title: "Tomato (Local) 500 ±30 gm",
        rating: 1.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 4,
        img: img6,
        price: 10018,
        title: "Potol (Pointed Gourd ) 500 ±30 gm",
        rating: 4.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 5,
        img: img4,
        price: 124,
        title: "Misti Kumra Fali (Sweet Pumpkin Fali)",
        rating: 4.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 6,
        img: img2,
        price: 18,
        title: "Kacha Morich (Green Chili) 250 ±15 gm",
        rating: 3.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 7,
        img: img5,
        price: 160,
        title: "Tomato (Local) 500 ±30 gm",
        rating: 1.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 8,
        img: img6,
        price: 10018,
        title: "Potol (Pointed Gourd ) 500 ±30 gm",
        rating: 4.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      }
    ];
  return (
    <div className="lg:w-[1200px] mx-auto mb-12 px-2 lg:px-0">
      <div className='py-8'>
        <div className="justify-center">
          <div className="text-[#FB641B] flex justify-center">
            <AiFillClockCircle className=' w-8 h-8 mr-3'></AiFillClockCircle>
            <p className=' text-2xl'>Thank you for your purchase!</p>
          </div>
          <p className='text-base text-[#001E00] text-center lg:mt-8 mt-4'>Your order number is 636567003339341</p>
          <p className='text-base text-[#001E00] text-center lg:mt-16 mt-4'>Please have this amount ready on delivery day.</p>
          <h4 className=' text-[34px] text-[#FB641B] text-center mt-4'>Tk 130</h4>
        </div>

        <div className="lg:w-[938px] mt-8 mx-auto">
          <h4 className=' text-2xl text-[#001E00]'>Your delivery dates</h4>

          <div className="border border-[#686868] mt-3">
            <div className="flex justify-between mt-3 items-center  m-4 pb-4 border-b border-[#686868]">
              <Image
                className=' mr-4'
                src={img}
                alt=""
                width={127}
                height={103}
              />
              <div className=" text-base font-medium text-[#001E00] text-end">
                <p>Est. 02 Jan 2023</p>
                <p className=' hidden lg:block'>24 Hours To 72 Hours Delivery Time</p>
              </div>
            </div>

            <div className="mt-7 m-4 lg:flex justify-between text-center items-center">
              <div className="text-base text-[#686868] items-center mb-6 lg:mb-0">
                <p className='mr-1 items-center'>
                  <span>For more details, track your delivery status under</span>
                  <span className='text-[#001E00] ml-1 font-medium'>My Account</span>
                  <FaAngleRight className='text-[#001E00] ml-1 inline'></FaAngleRight>
                  <span className='text-[#001E00] ml-1 font-medium'>My Order</span>
                </p>
              </div>
              <button className="btn bg-[#FB641B] w-[134px] h-10 rounded-md text-white normal-case text-base font-medium">View Order</button>
            </div>

          </div>
        </div>

        <div className="lg:w-[938px] mt-6 mx-auto p-4 border border-[#686868] flex lg:items-center">
          <IoMdMail className='w-[47px] h-[38px] lg:text-[#287DF3] text-[#686868] mr-6 lg:mr-4'></IoMdMail>
          <p className='text-base text-[#686868]'>We’ve sent a confirmation email to abdulkorim@gmail.com with the order details.</p>
        </div>

        <div className="lg:w-[938px] mt-8 mx-auto p-4 flex items-center justify-between">
          <p className='text-2xl font-medium text-[#001E00]'>Order Summary</p>
          <h4 className='text-[38px] text-[#FB641B]'>Tk 130</h4>
        </div>

        <div className="lg:w-[938px] mt-14 mx-auto text-center">
          <button className="btn bg-[#FB641B] w-[186px] h-12 rounded-md text-white normal-case text-base font-medium">Continue Shoping</button>
        </div>

      </div>

      <div className="lg:w-[938px] mt-6 mx-auto">
        <p className='mb-4 text-2xl font-medium'>Just For You</p>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {
            productDetails?.map(details => <div key={details.id} className="card pb-10">
              <figure>
                <Image
                  className='w-[220px] h-[154px] mb-3' src={details.img.src}
                  alt=""
                  width={220}
                  height={154}
                />
              </figure>
              <div className="card-body p-4">
                <p className=' text-xl text-[#FB641B] font-medium mb-[10px]'>Tk {details.price}</p>
                <p className=' text-base font-medium mb-[10px]'>{details.title}</p>
                <div className="flex mb-[10px]">
                  <div className="">
                    <p className='bg-[#026C51] w-10px p-[2px]  items-center rounded-sm flex text-white pl-1 text-xs'>{details.rating} <FaStar className='ml-2 bg-[#026C51] text-white'></FaStar></p>

                  </div>
                  <p className='text-[#686868] ml-2'>{details.ratingDetails}</p>
                </div>
                <div className="flex mb-[10px]">
                  <span className=' text-sm text-[#686868] mr-2'>Seller: </span>
                  <Image
                    className=' mr-5 w-[80px]' src={details.seller.src}
                    alt="Picture of the author"
                    width={90}
                    height={10}
                  />
                </div>
                <button className='btn bg-[#FB641B] h-[38px] text-white normal-case text-xl pt-2'>Add to Cart
                  <Image
                    className='w-[24px]' src={Vectorimg2}
                    alt="Picture of the author"
                    width={24}
                    height={20}
                  />
                </button>
              </div>
            </div>)
          }
        </div>
      </div>

    </div>
  );
};

export default CashOnDeliveryOrderConfirmPage;