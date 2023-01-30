import React, { useRef } from 'react';
import img from '../../assets/CategoryImages/KachabazarIcon/shopping-bag 1.png'
import img2 from '../../assets/CategoryImages/ProductsImg/lemon.png'
import cart from '../../assets/CategoryImages/ProductsImg/Vector (2).png'
import love from '../../assets/CategoryImages/ProductsImg/love.png'
import logo from '../../assets/CategoryImages/ProductsImg/logo.jpg'
import styles from './category.module.css'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiTwotoneStar } from 'react-icons/ai';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import { settings } from '../../Utils/sliderConfig';

const AllCategoryCard = ({ result, products }) => {

    const slideRef = useRef(null)
    
    return (
        <>
            {
                products ? <div

                    className=' overflow-x-hidden my-16 md:px-0 px-3'>

                    {/* slider header  */}
                    <div className='flex gap-4 items-center justify-between'>
                        <div className='flex items-center gap-2 '>
                            <Image src={img} alt='img' width={28} height={28} />
                            <div className='text-[15px] lg:text-[24px] text-[#FB641B] font-bold mr-6 md:mr-4'>Exclusive</div>
                        </div>
                        <div className='bg-[#FB641B] md:w-[75%] w-[80%] h-[2px] md:h-[3px]'></div>
                        <div className='text-[12px] lg:text-[14px] text-[#FB641B] w-[70px] font-[500] cursor-pointer'>All View </div>
                        <div className='  gap-3 hidden md:flex'>
                            <div onClick={() => slideRef.current.slickNext()} className='bg-white w-[38px] h-[38px] rounded-full shadow-xl flex justify-center items-center cursor-pointer'><FiChevronLeft className='text-[26px]' /></div>
                            <div onClick={() => slideRef.current.slickPrev()} className='bg-white w-[38px] h-[38px] rounded-full shadow-xl flex justify-center items-center cursor-pointer'><FiChevronRight className='text-[26px]' /></div>
                        </div>
                    </div>

                    {/* slider card  */}
                    <div className='flex items-center pt-3'>

                        <Slider {...settings}
                            className='flex items-center w-full '
                            ref={slideRef}
                        >
                            {
                                products?.map((n, index) => <ProductCard
                                key={index}
                                product={n}
                                />)
                            }
                        </Slider>
                    </div>
                </div> :
                    <div className='text-center my-8'>
                        <p>Loading....</p>
                    </div>
            }
        </>
    );
};

export default AllCategoryCard;