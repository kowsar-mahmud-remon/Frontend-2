import React from 'react';
import Image from 'next/image';
import img from '../../assets/images/image 7.png'
import del from '../../assets/images/Vector (9).png'
import user from '../../assets/images/image 346.png'
import Link from 'next/link';

const QuestionAndAnswer01 = () => {
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
                    Question and Answer
                </h1>
            </div>
            <div className='px-[16px] shadow-small rounded-md'>
                <div className="mt-6 pt-[14px] flex ">
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
                            <div className='pb-[16px]'>
                                <p className='text-[16px] text-[#686868] w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here{','}, making it look like readable <span className='text-[#287DF3]'>Read More...</span></p>


                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-[69px]'>
                    <h1 className='text-[#001E00] text-[18px] mb-[16px]'>Reply</h1>
                    <textarea className="textarea  w-[70%] h-[103px] border-[#B7B7B7] rounded-[8px] focus:outline-none" placeholder="Reply"></textarea>
                </div>
                <div className='flex justify-end gap-4 pb-[16px]'>
                    <button className=' font-normal border border-[#686868]  rounded-[4px]  text-[#707070] text-[16px] w-[134px] h-[40px]'>Cancel</button>
                    <button className=' font-normal border border-[#FB641B] bg-[#FB641B] rounded-[4px]  text-white text-[16px] w-[134px] h-[40px]'>Reply</button>

                </div>
            </div>

        </div>
    );
};

export default QuestionAndAnswer01;