import React from 'react';
import Image from 'next/image';
const ToReceive = ({ data }) => {
    return (
        <div className='md:w-[765px]'>
            <div className="mt-[16px] ">
                <div className="w-[100%] h-[149px] rounded-[8px] bg-[#FFFFFF] shadow-lg pt-[12px]">
                    <div className="flex items-center justify-between">
                        <div className="mx-[16px] text-[15px] md:text-[16px] ">
                            <p className='mb-[4px]'><span className=" font-bold text-[#001E00]">Tracking Number</span> <span className="text-[#287DF3]">#{data.orderId}</span></p>
                            <p className='md:hidden  text-[#686868]'>Delivered by:{data.Delivered}</p>

                        </div>
                        <p className="text-[#287DF3] hidden md:block text-[16px] mr-[19px]">View More Details</p>
                    </div>
                    <hr className='border-[1px] border-[#686868]' />
                    <div className="flex justify-between ">
                        <div className=" flex ml-[56px] mt-[16px] mb-[16px] gap-[16px]">
                            <div>
                                <Image src={data.image} width="57" height="46" alt=""></Image>
                            </div>
                            <div>
                                <p className="text-[#287DF3] mt-[29px] text-[14px] md:text-[16px] md:mb-[30px] mr-[19px]">Track Packge</p>

                            </div>
                        </div>
                        <p className="text-[#287DF3] md:hidden mt-[-9px] flex justify-end  text-[14px] mb-[12px] mr-[19px]">View More Details</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToReceive;