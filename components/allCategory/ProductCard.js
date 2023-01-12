import Image from 'next/image';
import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import styles from './category.module.css'
import logo from '../../assets/CategoryImages/ProductsImg/logo.jpg'
import cart from '../../assets/CategoryImages/ProductsImg/Vector (2).png'
import img2 from '../../assets/CategoryImages/ProductsImg/lemon.png'
import love from '../../assets/CategoryImages/ProductsImg/love.png'
import { useRouter } from 'next/router';
const ProductCard = ({ product }) => {
    const router=useRouter()
    const { regularPrice, productName, quantity, productTitle, discount, productPictures,_id,subCategory} = product || {}
   
    return (
        <div>
            <div
                onClick={()=>router.push(`/productpage/${_id}-${subCategory}`)}
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
                        <div className='flex justify-center mt-6'>
                            <button className='bg-[#FB641B] text-white w-[90%] flex justify-center items-center rounded-[10px] font-[500] text-[14px] md:text-[23px] gap-2 py-1 '>Add to Cart <span><Image src={cart} alt='cart' width={20} height={21} /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;