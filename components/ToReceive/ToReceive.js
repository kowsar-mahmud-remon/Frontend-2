import React from 'react';
import Image from 'next/image';
const ToReceive = ({ data }) => {
    return (
        <div>
            <div className="mt-[16px]">
                <div className="w-[924px] h-[149px] rounded-[8px] bg-[#FFFFFF] shadow-lg">
                    <div className="flex items-center justify-between">
                        <div className="m-[16px]">
                            <p ><span className="text-[16px] font-bold text-black">Tracking Number</span> <span className="text-[#287DF3]">#{data.orderId}</span></p>

                        </div>
                        <p className="text-[#287DF3] text-[16px] mr-[19px]">MANAGE</p>
                    </div>
                    <hr className='border-[1px] border-[#686868]'/>
                    <div className="flex justify-between ">
                        <div className=" flex ml-[56px] mt-[16px] mb-[16px] gap-[16px]">
                            <div>
                                <Image src={data.image} width="57" height="46" alt=""></Image>
                            </div>
                            <div>
                                <p className='text-[#001E00] font-bold'>{data.peoductName}</p>
                                <p>Delivered by:{data.Delivered}</p>
                            </div>
                        </div>

                        <p className="text-[#287DF3] mt-[29px] mb-[30px] mr-[19px]">Track Packge</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToReceive;