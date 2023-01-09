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
import { useGetCategoryQuery } from '../../features/category/categoryApi';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiTwotoneStar } from 'react-icons/ai';
import Slider from 'react-slick';
const AllCategory = () => {
    const { data, isLoading, isError, error } = useGetCategoryQuery()
    console.log(data)
    const slideRef = useRef(null)
    let settings = {
        arrows: true,
        // infinite: true,
        speed: 500,
        // autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear",
        // centerMode:true,

        /* mobileFirst: true, */
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2]




    return (
        <div 
        
        className='mt-10 overflow-x-hidden'>

            <div className='flex gap-4 items-center justify-between mb-10   '>
                <div className='flex items-center gap-2 '>
                    <Image src={img} alt='img' width={28} height={28} />
                    <div className='text-[17px] md:text-[24px] text-[#FB641B] font-bold mr-6 md:mr-4'>Exclusive</div>
                </div>
                <div className='bg-[#FB641B] w-[85%] h-[2px] md:h-[3px]'></div>
                <div className='text-[12px] md:text-[16px] text-[#FB641B] w-[70px] font-[500] cursor-pointer'>All View </div>
                <div className='  gap-3 hidden md:flex'>
                    <div onClick={() => slideRef.current.slickNext()} className='bg-white w-[38px] h-[38px] rounded-full shadow-xl flex justify-center items-center cursor-pointer'><FiChevronLeft className='text-[26px]' /></div>
                    <div onClick={() => slideRef.current.slickPrev()} className='bg-white w-[38px] h-[38px] rounded-full shadow-xl flex justify-center items-center cursor-pointer'><FiChevronRight className='text-[26px]' /></div>
                </div>
            </div>


            {/* <div className='w-[222px] h-auto'>
                <div className='relative '>
                    <Image src={img2} width={222} alt='img' />
                    <div className='absolute top-3 right-3 bg-white rounded-full p-3 w-[38px] h-[38px] flex justify-center items-center cursor-pointer'>
                        <Image src={love} width={30} alt='img' />
                    </div >
                </div>
                <div>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <span className='text-[#FB641B] font-bold text-[20px]'>TK 18</span>
                            <span className='text-[#707070] text-[12px] line-through font-[500]'>TK 20</span>
                            <span className='text-[#707070] text-[12px] '>(2% off)</span>
                        </div>
                    </div>
                    <div className='mt-1'>
                        <p className='text-[16px] font-bold text-[#001E00]'>Kacha Morich (Green Chili) 250 ±15 gm</p>
                    </div>
                    <div className='flex items-center gap-2 mt-[10px]'>
                        <span className='flex items-center justify-center gap-[2px] bg-[#FB641B] text-white px-1 rounded-md'>
                            3.9
                            <AiTwotoneStar />
                        </span>
                        <p className='text-[#686868]  text-[14px]'>24 Ratings & 5 Reviews</p>
                    </div>
                    <div className='mt-[15px]'>
                        <div className='text-[#686868]  text-[13.27px] font-[400]'>
                            <p className='flex items-center gap-2 relative text-[#686868] font-[500]'>Seller:
                                <span className='rounded-full justify-center items-center border-2 border-[#026C51] flex w-[34px] h-[34px] text-[16px] font-bold absolute top-[-3px] left-10 z-30 bg-slate-50'>B</span> <span className='bg-[#026C51] px-3 rounded-md py-1 text-white font-bold ml-5'>Assured</span></p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button className='bg-[#FB641B] text-white w-[90%] flex justify-center items-center rounded-[10px] font-[500] text-[23px] gap-2 py-1 '>Add to Cart <span><Image src={cart} alt='cart' width={25} height={21} /></span></button>
                    </div>
                </div>
            </div> */}


            <div className='flex justify-center items-center'>

                <Slider {...settings}
                    className='flex justify-center items-center w-full '
                    ref={slideRef}
                >
                    {
                        number.map((n, index) => <div
                            key={index}
                            className={` w-[180px] md:w-[100%] h-auto  cursor-pointer rounded-md pb-2 ${styles.cardCategory} duration-[.3s]  `}>
                            <div className=''>
                                <div className='relative '>
                                    <Image src={img2} width={222} alt='img' />
                                    <div className='absolute top-3 right-3 bg-white rounded-full p-3 w-[38px] h-[38px] flex justify-center items-center cursor-pointer'>
                                        <Image src={love} width={30} alt='img' />
                                    </div >
                                </div>
                                <div className='px-4'>
                                    <div>
                                        <div className='flex gap-2 items-center'>
                                            <span className='text-[#FB641B] font-bold text-[20px]'>TK 18</span>
                                            <span className='text-[#707070] text-[12px] line-through font-[500]'>TK 20</span>
                                            <span className='text-[#707070] text-[12px] '>(2% off)</span>
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <p className='text-[12px] md:text-[16px] font-bold text-[#001E00]'>Kacha Morich (Green Chili) 250 ±15 gm</p>
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
                                        <button className='bg-[#FB641B] text-white w-[80%] flex justify-center items-center rounded-[10px] font-[500] text-[14px] md:text-[23px] gap-2 py-1 '>Add to Cart <span><Image src={cart} alt='cart' width={20} height={21} /></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default AllCategory;