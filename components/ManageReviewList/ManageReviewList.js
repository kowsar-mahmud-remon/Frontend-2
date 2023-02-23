import React from 'react';
import img from '../../assets/images/image 7.png'
import Image from 'next/image';
import Link from 'next/link';

const ManageReviewList = () => {
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

            <div className='p-[24px] shadow-lg  rounded-md'>
                {/* div number 1 start */}
                <div className='shadow-lg p-[16px] rounded-md mb-[16px]'>
                    <p className='text-[14px] text-[#686868]'>Delivery on: 21 Dec 2022 10:21:00</p>
                    <div className='flex gap-[16px] mt-[16px]'>
                        <Image className='w-[57px] h-[46px]'
                            src={img}
                            alt='image' />
                        <div>
                            <p className='text-[16px] text-[#001E00] font-semibold'>Tomato (Local) 500 ±30 gm</p>
                            <div className='flex justify-between'>
                                <p className='text-[16px] text-[#686868] w-[90%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here{','}, making it look like readable <span className='text-[#287DF3]'>Read More...</span></p>

                                <h1 className='text-[#FB641B] text-[16px] border border-[#FB641B] cursor-pointer h-[26px] px-[5px]'>Feedback</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* div number 1 end */}
                {/* div number 2 start */}
                <div className='shadow-lg p-[16px] rounded-md mb-[16px]'>
                    <p className='text-[14px] text-[#686868]'>Delivery on: 21 Dec 2022 10:21:00</p>
                    <div className='flex gap-[16px] mt-[16px]'>
                        <Image className='w-[57px] h-[46px]'
                            src={img}
                            alt='image' />
                        <div>
                            <p className='text-[16px] text-[#001E00] font-semibold'>Tomato (Local) 500 ±30 gm</p>
                            <div className='flex justify-between'>
                                <p className='text-[16px] text-[#686868] w-[90%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here{','}, making it look like readable <span className='text-[#287DF3]'>Read More...</span></p>

                                <h1 className='text-[#FB641B] text-[16px] border border-[#FB641B] cursor-pointer h-[26px] px-[5px]'>Feedback</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* div number 2 end */}
                {/* div number 3 start */}
                <div className='shadow-lg p-[16px] rounded-md mb-[16px]'>
                    <p className='text-[14px] text-[#686868]'>Delivery on: 21 Dec 2022 10:21:00</p>
                    <div className='md:flex gap-[16px] mt-[16px]'>
                        <Image className='w-[57px] h-[46px]'
                            src={img}
                            alt='image' />
                        <div>
                            <p className='text-[16px] text-[#001E00] font-semibold'>Tomato (Local) 500 ±30 gm</p>
                            <div className='flex justify-between'>
                                <p className='text-[16px] text-[#686868] w-[90%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here{','}, making it look like readable <span className='text-[#287DF3]'>Read More...</span></p>

                                <Link href="feedback">    <h1 className='text-[#FB641B] text-[16px] border border-[#FB641B] cursor-pointer h-[26px] px-[5px]'>Feedback</h1></Link>
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