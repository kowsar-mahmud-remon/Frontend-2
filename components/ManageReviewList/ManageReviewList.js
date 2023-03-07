import React, { useState } from 'react';
import img from '../../assets/images/image 7.png'
import Image from 'next/image';
import Link from 'next/link';

const ManageReviewList = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const para = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here{','}, making it look like readable"
    return (
        <div className='max-w-[1426px] px-[24px]'>
            <div className="text-[18px] breadcrumbs text-[#686868] hidden md:block mt-[45px]">
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Feedback Mangements</a>
                    </li>
                    <li className="font-medium text-[#001E00]">Manage Reviews</li>
                </ul>
            </div>
            <h1 className='text-[24px] font-semibold text-[#FB641B] mb-[32px]'>Manage Review List</h1>

            <div className='p-[24px] shadow-small  rounded-md'>
                {/* div number 1 start */}
                <div className='shadow-small p-[16px] rounded-md mb-[16px]'>
                    <p className='text-[14px] text-[#686868]'>Delivery on: 21 Dec 2022 10:21:00</p>
                    <div className='flex gap-[16px] mt-[16px]'>
                        <Image className='w-[57px] h-[46px]'
                            src={img}
                            alt='image' />
                        <div>
                            <p className='text-[16px] text-[#001E00] font-semibold'>Tomato (Local) 500 ±30 gm</p>
                            <div className='flex justify-between'>
                                {
                                    show1 ? <>
                                        <p className='text-[16px] text-[#686868] w-[90%]'>{para} <span onClick={() => setShow1(false)} className='text-[#287DF3] cursor-pointer'> Show less...</span></p>
                                    </>
                                        :
                                        <>
                                            <p className='text-[16px] text-[#686868] w-[90%]'>{para.slice(0, 250)} <span onClick={() => setShow1(true)} className='text-[#287DF3] cursor-pointer'>Read More...</span></p>
                                        </>
                                }

                                <Link href="feedback">    <h1 className='text-[#FB641B] text-[16px] border border-[#FB641B] rounded-[4px] cursor-pointer h-[26px] px-[5px]'>Feedback</h1></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* div number 1 end */}
                {/* div number 2 start */}
                <div className='shadow-small p-[16px] rounded-md mb-[16px]'>
                    <p className='text-[14px] text-[#686868]'>Delivery on: 21 Dec 2022 10:21:00</p>
                    <div className='flex gap-[16px] mt-[16px]'>
                        <Image className='w-[57px] h-[46px]'
                            src={img}
                            alt='image' />
                        <div>
                            <p className='text-[16px] text-[#001E00] font-semibold'>Tomato (Local) 500 ±30 gm</p>
                            <div className='flex justify-between'>
                                {
                                    show2 ? <>
                                        <p className='text-[16px] text-[#686868] w-[90%]'>{para} <span onClick={() => setShow2(false)} className='text-[#287DF3] cursor-pointer'> Show less...</span></p>
                                    </>
                                        :
                                        <>
                                            <p className='text-[16px] text-[#686868] w-[90%]'>{para.slice(0, 250)} <span onClick={() => setShow2(true)} className='text-[#287DF3] cursor-pointer'>Read More...</span></p>
                                        </>
                                }

                                <Link href="feedback">    <h1 className='text-[#FB641B] text-[16px] border border-[#FB641B] cursor-pointer h-[26px] px-[5px] rounded-[4px]'>Feedback</h1></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* div number 2 end */}
                {/* div number 3 start */}
                <div className='shadow-small p-[16px] rounded-md mb-[16px]'>
                    <p className='text-[14px] text-[#686868]'>Delivery on: 21 Dec 2022 10:21:00</p>
                    <div className='md:flex gap-[16px] mt-[16px]'>
                        <Image className='w-[57px] h-[46px]'
                            src={img}
                            alt='image' />
                        <div>
                            <p className='text-[16px] text-[#001E00] font-semibold'>Tomato (Local) 500 ±30 gm</p>
                            <div className='flex justify-between'>
                                {
                                    show3 ? <>
                                        <p className='text-[16px] text-[#686868] w-[90%]'>{para} <span onClick={() => setShow3(false)} className='text-[#287DF3] cursor-pointer'> Show less...</span></p>
                                    </>
                                        :
                                        <>
                                            <p className='text-[16px] text-[#686868] w-[90%]'>{para.slice(0, 250)} <span onClick={() => setShow3(true)} className='text-[#287DF3] cursor-pointer'>Read More...</span></p>
                                        </>
                                }

                                <Link href="feedback">    <h1 className='text-[#FB641B] text-[16px] border border-[#FB641B] cursor-pointer h-[26px] px-[5px] rounded-[4px]'>Feedback</h1></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* div number 3 end */}

            </div>
        </div>
    );
};

export default ManageReviewList;