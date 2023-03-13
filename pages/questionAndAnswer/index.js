import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img1 from '../../assets/images/questionAnswer/image 346.png';
import img2 from '../../assets/images/image 6.png';

const questionAndAnswer = () => {
    return (
        <div className='main-container mx-auto'>
            <div>
                <h5 className='font-medium text-2xl leading-[28px] text-[#FB641B]'>Question and Answer</h5>
                <div className='shadow-[0_6px_28px_rgba(0,0,0,0.16) rounded-lg] border-[1px] border-[#F2F2F2] max-h-[491px] bg-[#FFFFFF] mt-8'>
                <div className="flex items-center pl-6 pt-6 pb-[18px]">
                <Image className='rounded-[75px] bg-[#F2F3F7]' src={img1} width={32} height={32} alt="" />
                <div className='ml-4'>
                    <h5 className='font-normal text-lg leading-[21px] text-[#001E00]'>Jakariya Sick</h5>
                    <p className='font-normal text-sm leading-[16px] text-[#686868]'>Question on: 21 Dec 2022</p>
                </div>
                </div>
                <div className='flex pl-[72px]'>
                    <div>
                        <Image className='shadow-[0_6px_30px_2px_rgba(0,0,0,0.08)] rounded' src={img2} width={57} height={46} alt="" />
                    </div>
                    <div className='ml-2'>
                    <h4 className='font-normal text-base leading-[19px] text-[#001E00]'>Tomato (Local) 500 ±30 gm</h4>
                    <p className='font-normal text-sm leading-[16px] text-[#686868]'>Product SKU: <span>HJ5248K25</span></p>
                    <p className='font-normal text-base leading-[24px] text-[#686868] pt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a  <Link className='text-[#287DF3]' href="/" >Read More...</Link></p>
                    </div>
                </div>
                <div className='pl-6 pt-8 pb-[133px]'>
                    <h3 className='font-normal text-lg leading-[21px] text-[#001E00] pt-3'>Reply</h3>
                    <div className='max-w-[775px] pt-4'>
                    <textarea className="textarea w-full h-auto border-[1px] border-[#B7B7B7] rounded-lg"></textarea>
                        </div>
                        <div className='float-right'>
                        <button className='font-normal text-base text-[#686868] px-8 py-[10px] border-[1px] border-[#686868] rounded leading-[19px] mb-6 hover:bg-[#FB641B] hover:text-[#FFFFFF]'>Cancel</button>
                        <button className='font-normal text-base text-[#686868] px-8 py-[10px] border-[1px] border-[#686868] rounded leading-[19px] ml-4 mb-6 mr-6 hover:bg-[#FB641B] hover:text-[#FFFFFF]'>Reply</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default questionAndAnswer;