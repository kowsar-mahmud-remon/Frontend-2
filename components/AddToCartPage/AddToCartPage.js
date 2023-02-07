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


const AddToCartPage = () => {
  const [hidden, setHidden] = useState(false);


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
    <div className="">
      <label htmlFor="my-modal-4" onClick={() => setHidden(!hidden)} className="btn">open modal</label>
      {
        hidden && (
          <OutsideClickHandler onOutsideClick={() => {
            setHidden(!hidden);
          }}>

            <div className="">

              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer bg-black bg-opacity-70">
                <label className="modal-box relative w-full lg:max-w-[1225px]" htmlFor="">
                  <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>



                  <div className=" lg:mt-[62px] mb-11">
                    <div className="lg:flex justify-between border-b border-[#B7B7B7]">
                      <div className="lg:w-[753px]">
                        <div className="flex items-center">
                          <Image
                            className='mr-1 w-5 h-5'
                            src={Vectorimg}
                            alt="Picture of the author"
                          // width={20}
                          // height={20}
                          />
                          <h2 className=' text-lg text-[#026C51] font-medium'>1 new item(s) have been added to your cart</h2>
                        </div>
                        <div className="">
                          <div className="flex mt-3 mb-3">
                            <Image
                              className=' mr-5' src={img}
                              alt="Picture of the author"
                              width={127}
                              height={103}
                            />
                            <div className="w-full">
                              <h4 className='text-lg text-[#001E00] mb-2'>Tomato (Local) 500 ±30 gm</h4>
                              <p className=' text-base text-[#686868] mb-2'>No Brand, Color Family:Black</p>
                              <p className='text-base text-[#FB641B] mb-2'>Tk 60</p>
                              <div className=" text-[10px] text-[#707070] flex mb-2">
                                <p className=' mr-[10px]'>Tk 80</p>
                                <p>(20% off)</p>
                              </div>
                              <p className='text-base text-[#686868] w-full lg:text-end pr-10'>Qty: 1</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 w-[388px] justify-end mb-12">
                        <h4 className='text-lg text-[#FB641B] mb-4'>My Shopping Cart</h4>
                        <div className="flex justify-between mb-4">
                          <p className='text-base text-[#686868]'>Subtotal (0 items)</p>
                          <p className='text-base text-[#686868]'>Tk 0</p>
                        </div>
                        <div className="flex justify-between mb-4">
                          <p className=' text-base text-[#001E00]'>Total:</p>
                          <p className='text-base text-[#FB641B]'>Tk 0</p>
                        </div>
                        <button className='btn text-[#FB641B] border border-[#FB641B] btn-outline w-[166px] h-[48px] mr-6'>GO TO CART</button>
                        <button className='btn bg-[#FB641B] text-white w-[166px] h-[48px]'>CHECK OUT</button>
                      </div>

                    </div>

                    <div className=" lg:mx-[138px] grid gap-5 grid-cols-2 lg:grid-cols-4 mt-12">
                      {
                        productDetails?.map(details => <div key={details.id} className="card pb-10">
                          <figure>
                            <Image
                              className='w-auto mb-3' src={details.img.src}
                              alt="Picture of the author"
                              width={180}
                              height={130}
                            />
                          </figure>
                          <div className="card-body mt-3 p-0">
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
                            <button className='btn bg-[#FB641B] text-white lg:hidden '>Add to Cart</button>
                          </div>
                        </div>)
                      }
                    </div>
                  </div>

                </label>
              </label>
            </div>
          </OutsideClickHandler>
        )
      }
    </div >
  );
};

export default AddToCartPage;