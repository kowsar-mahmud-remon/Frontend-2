import React from 'react';
import Image from 'next/image';
import img from '../../assets/images/image 7.png'
import del from '../../assets/images/Vector (9).png'
import user from '../../assets/images/image 346.png'

const QuestionAndAnswer = () => {
    return (
        <div >
            <div className="md:text-[18px] text-[14px] breadcrumbs font-semibold text-[#686868]">
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Feedback Management</a>
                    </li>
                    <li className="text-[#001E00]">Question and Answer</li>
                </ul>
            </div>
            <div className="mb-8">
                <h1 className="text-[#FB641B] font-semibold text-2xl">
                    Product Reviews
                </h1>
            </div>
            <div className='shadow-lg rounded-md p-[16px]'>
                <div className='px-[16px] shadow-lg rounded-md'>
                    <div className="mt-6 flex ">
                        <Image
                            className="w-8 h-8 mt-2"
                            src={user}
                            width={32}
                            alt=""
                        ></Image>
                        <div className="ml-4">
                            <h2 className="text-lg font-medium">Jakariya Sick</h2>
                            <span className="text-[#686868] text-sm">Question on: 21 Dec 2022</span>
                        </div>

                    </div>
                    <div className=' mb-[16px] md:ml-[52px]'>

                        <div className='md:flex gap-[16px] mt-[16px]'>
                            <Image className='w-[57px] h-[46px]'
                                src={img}
                                alt='image' />
                            <div>
                                <p className='text-[16px] text-[#001E00] font-semibold'>Tomato (Local) 500 ±30 gm</p>
                                <div className='flex justify-between pb-[16px]'>
                                    <p className='text-[16px] text-[#686868] w-[80%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here{','}, making it look like readable <span className='text-[#287DF3]'>Read More...</span></p>

                                    <div>
                                        <h1 className='text-[#FB641B] text-[16px] border border-[#FB641B] cursor-pointer w-[121px] text-center h-[32px] px-[5px] mb-[16px]'>Answer</h1>
                                        <h1 className='text-[#F4253F] flex text-[16px] border border-[#F4253F] cursor-pointer w-[121px] text-center h-[32px] px-[5px]'> <span><Image
                                            className="w-[16px]   ml-[4px]  h-[19px] mt-[5px]"
                                            src={del}

                                            alt=""
                                        ></Image></span> <span className='mt-[4px]'>Delete</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-[16px] shadow-lg rounded-md'>
                    <div className="mt-6 flex ">
                        <Image
                            className="w-8 h-8 mt-2"
                            src={user}
                            width={32}
                            alt=""
                        ></Image>
                        <div className="ml-[16px]">
                            <h2 className="text-lg font-medium">Jakariya Sick</h2>
                            <span className="text-[#686868] text-sm">Question on: 21 Dec 2022</span>
                        </div>

                    </div>
                    <div className=' mb-[16px] md:ml-[52px]'>

                        <div className='md:flex gap-[16px] mt-[16px]'>
                            <Image className='w-[57px] h-[46px]'
                                src={img}
                                alt='image' />
                            <div>
                                <p className='text-[16px] text-[#001E00] font-semibold'>Tomato (Local) 500 ±30 gm</p>
                                <div className='flex justify-between pb-[16px]'>
                                    <p className='text-[16px] text-[#686868] w-[80%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here{','}, making it look like readable <span className='text-[#287DF3]'>Read More...</span></p>

                                    <h1 className='text-[#FB641B] text-[16px] border border-[#FB641B] cursor-pointer h-[26px] px-[5px]'>Feedback</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAndAnswer;