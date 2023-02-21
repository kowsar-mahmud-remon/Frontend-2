import React from 'react';
import Image from 'next/image';
const ToReceive = ({ data }) => {
    return (
        <div className='md:w-[96%]'>
            <div className="mt-[16px] ">
                <div className="w-[100%]  rounded-[8px] bg-[#FFFFFF] shadow-lg pt-[12px]">
                    <div className="flex items-center justify-between">
                        <div className="mx-[16px] text-[4.3vw] md:text-[16px] ">
                            <p className='mb-[4px]'><span className=" font-bold text-[#001E00]">Tracking Number</span> <span className="text-[#287DF3]">#{data.orderId}</span></p>
                            <p className='md:hidden  text-[#686868]'>Delivered by:{data.Delivered}</p>

                        </div>
                        <p className="text-[#287DF3] hidden md:block text-[16px] mr-[19px]">View More Details</p>
                    </div>
                    <hr className='hidden md:block border-[1px] border-[#686868]' />
                    <div>
                        <div className="flex justify-between ">
                            <div className=" flex md:ml-[56px] md:mt-[16px] mt-[12px] md:mb-[16px] gap-[8px] md:gap-[16px]">
                                <div>
                                    <Image src={data.image} width="57" height="46" alt=""></Image>
                                </div>
                                <div>
                                    <p className='text-[#001E00] text-[3.4vw] md:text-[18px] font-bold'>{data.peoductName}</p>
                                    <p className='hidden md:block text-[#686868] text-[16px]'>Delivered by:{data.Delivered}</p>
                                    <p className=" md:hidden block  text-[3.4vw] text-[#686868] ">Qty: <span className='text-[#001E00]'>1</span></p>
                                </div>
                            </div>

                            <div>
                                <p className="text-[#287DF3] mt-[29px]  text-[3vw] md:text-[16px] md:mb-[30px] mr-[19px]">Track Packge</p>

                            </div>
                        </div>
                        <p className="text-[#287DF3]  md:hidden mt-[-13px] flex justify-end   text-[3vw] pb-[12px] mr-[19px]">View More Details</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToReceive;