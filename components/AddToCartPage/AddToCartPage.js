import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import img from '../../assets/images/image 7.png';
import Vectorimg from '../../assets/images/Vectorimg.png';
import img2 from '../../assets/images/image 77.png';
import img3 from '../../assets/images/image 4.png';
import img4 from '../../assets/images/image 7.png';
import img5 from '../../assets/images/image 88.png';
import sellerImg from '../../assets/images/seller.png';
import { FaStar } from 'react-icons/fa';
import { AiFillHeart, AiTwotoneStar } from 'react-icons/ai';
import styles from '../allCategory/category.module.css'
import love from '../../assets/CategoryImages/ProductsImg/love.png'
import logo from '../../assets/CategoryImages/ProductsImg/logo.jpg'
import cart from '../../assets/CategoryImages/ProductsImg/Vector (2).png'
import { useRouter } from 'next/router';


const AddToCartPage = ({ hidden, setHidden, categoryData }) => {
  const router=useRouter()
  console.log('hidden', hidden);
  const productDetails =
    [
      {
        id: 1,
        img: img2,
        price: 124,
        title: "Misti Kumra Fali (Sweet Pumpkin Fali)",
        rating: 4.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 2,
        img: img3,
        price: 18,
        title: "Kacha Morich (Green Chili) 250 ±15 gm",
        rating: 3.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 3,
        img: img4,
        price: 160,
        title: "Tomato (Local) 500 ±30 gm",
        rating: 1.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 4,
        img: img5,
        price: 10018,
        title: "Potol (Pointed Gourd ) 500 ±30 gm",
        rating: 4.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 5,
        img: img2,
        price: 124,
        title: "Misti Kumra Fali (Sweet Pumpkin Fali)",
        rating: 4.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 6,
        img: img3,
        price: 18,
        title: "Kacha Morich (Green Chili) 250 ±15 gm",
        rating: 3.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 7,
        img: img4,
        price: 160,
        title: "Tomato (Local) 500 ±30 gm",
        rating: 1.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      },
      {
        id: 8,
        img: img5,
        price: 10018,
        title: "Potol (Pointed Gourd ) 500 ±30 gm",
        rating: 4.9,
        ratingDetails: "24 Ratings & 5 Reviews",
        seller: sellerImg
      }
    ];

  return (
    <div style={{
      background:'rgba(242, 242, 242, 1)'
    }} className="">
      <OutsideClickHandler onOutsideClick={() => {
        setHidden(null);
      }}>

        <div className="">

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer bg-black bg-opacity-70">
            <label className="modal-box lg:px-10 p-6 relative w-full lg:max-w-[1225px]" htmlFor="">
              <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

              <div className=" lg:mt-[22px] mb-11">
                <div className="lg:flex justify-between lg:border-b border-[#B7B7B7]">
                  <div className="lg:w-[715px] border-b lg:border-none  border-[#B7B7B7] pb-4 mb-4">
                    <div className="flex items-center">
                      <Image
                        className='mr-1 w-5 h-5'
                        src={Vectorimg}
                        alt="Picture of the author"
                      // width={20}
                      // height={20}
                      />
                      <h2 className=' text-lg text-[#026C51] font-[600]'>1 new item(s) have been added to your cart</h2>
                    </div>
                    <div className="">
                      <div className="flex mt-3 mb-3">
                        <Image
                          className=' mr-5 h-[103] imgs' src={img}
                          alt="Picture of the author"
                          width={127}
                          height={103}
                        />
                        <div className="w-full">
                          <h4 className='text-lg text-[#001E00] mb-2'>Tomato (Local) 500 ±30 gm</h4>
                          <p className=' text-base text-[#686868] mb-2'>No Brand, Color Family:Black</p>
                          <p className='text-base text-[#FB641B] mb-2'>Tk 60</p>
                          <div className=" text-[10px] text-[#707070] flex mb-2">
                            <p className=' mr-[10px] line-through'>Tk 80</p>
                            <p>(20% off)</p>
                          </div>
                          <p className='text-base text-[#686868] w-full lg:text-end'>Qty: <span className='text-black'>1</span></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:p-4 lg:w-[388px] justify-end mb-12">
                    <h4 className='text-lg text-[#FB641B] mb-4 font-bold'>My Shopping Cart</h4>
                    <div className="flex justify-between mb-4">
                      <p className='text-base text-[#686868] font-[600]'>Subtotal (0 items)</p>
                      <p className='text-base text-[#686868]'>Tk 0</p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p className=' text-base text-[#001E00]'>Total:</p>
                      <p className='text-base text-[#FB641B]'>Tk 0</p>
                    </div>
                    <div className="flex">
                      <button className='btn text-[#FB641B] border border-[#FB641B] btn-outline w-1/2 lg:max-w-[166px] h-[48px] lg:mr-6 mr-3'>GO TO CART</button>
                      <button className='btn bg-[#FB641B] text-white w-1/2 lg:max-w-[166px] h-[48px]'>CHECK OUT</button>
                    </div>
                  </div>

                </div>

                <div
                  className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-[28px] mt-10  md:ml-0 lg:ml-0">
                  {
                    categoryData?.result.map(({ productPictures, regularPrice, productName,discount,productTitle,category:{_id:categoryId},slug,_id,subCategory }, i) => <div
                      key={i}
                    >
                      <div
                        onClick={() =>{ 
                          router.push(`/productpage/${slug}/${_id}?categoryId=${categoryId}&subCategoryId=${subCategory}`)
                          setHidden(null)
                        }}
                        className={` w-[180px] md:w-[240px] h-auto cursor-pointer rounded-md pb-4 ${styles.cardCategory} duration-[.3s] rounded-md`}>
                        <div className=''>
                          <div className='relative '>
                            <Image
                              className='h-[154px] object-cover'
                              loader={() => productPictures[4].img}
                              loading='lazy'
                              src={productPictures[4].img}
                              height={40}
                              width={222}
                              alt='img'
                            />
                            <div className='absolute top-3 right-[25px] bg-white rounded-full p-3 w-[38px] h-[38px] flex justify-center items-center cursor-pointer'>
                              <Image src={love} width={30} alt='img' />
                            </div >
                          </div>
                          <div className='px-4 mt-1'>
                            <div>
                              <div className='flex gap-2 items-center'>
                                <span className='text-[#FB641B] font-bold text-[20px]'>
                                  Tk  {discount ? (regularPrice - (regularPrice * discount) / 100).toFixed(0) : regularPrice}
                                </span>
                                {
                                  discount && (<>
                                    <span className='text-[#707070] text-[12px] line-through font-[500]'>TK {regularPrice}</span>
                                    <span className='text-[#707070] text-[12px] '>({discount}% off)</span>
                                  </>)
                                }
                              </div>
                            </div>
                            <div className='mt-1'>
                              <p className='text-[12px] md:text-[16px] font-bold text-[#001E00]'>{productTitle ? productTitle : "Kacha Morich (Green Chili) 250 ±15 gm"}</p>
                            </div>
                            <div className='flex items-center gap-2 mt-[10px]'>
                              <span className='flex items-center justify-center gap-[2px] bg-[#FB641B] text-white px-1 rounded-md'>
                                3.9
                                <AiTwotoneStar />
                              </span>
                              <p className='text-[#686868] text-[10px] md:text-[14px]'>24 Ratings & 5 Reviews</p>
                            </div>
                            <div className='mt-[15px]'>
                              <div className='text-[#686868]  text-[13.27px] font-[400]'>
                                <p className='flex items-center gap-2 relative text-[#686868] font-[500]'>Seller:
                                  <span className='rounded-full justify-center items-center border-4 border-[#026C51] flex w-[34px] h-[34px] text-[16px] font-bold absolute top-[-3px] left-10 z-30 bg-slate-50'>
                                    <Image className='rounded-full' src={logo} width={30} alt='img' />
                                  </span> <span className='bg-[#026C51] px-3 rounded-md py-1 text-white font-bold ml-2 '>Assured</span></p>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  }
                </div>

              </div>

            </label>
          </label>
        </div>
      </OutsideClickHandler>


    </div >
  );
};

export default AddToCartPage;