import React, { useState } from 'react';
import img from '../../assets/images/image 7.png'
import Image from 'next/image'
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';

const MyReturns = () => {
    const router = useRouter()
    const datas = [
        {
            id: "1",
            orderId: "121312323213432",
            orderDate: "Returns On 21 Dec 2022 10:21:00",
            image: img,
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Your request for refund is accepted",
            deliveredDate: "View More Details",
            taka: '40'
        },
        {
            id: "2",
            orderId: "121312323213432",
            orderDate: "Returns On 21 Dec 2022 10:21:00",
            image: img,
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Your request for refund is accepted",
            deliveredDate: "View More Details",
            taka: '40'
        },
        {
            id: "3",
            orderId: "121312323213432",
            orderDate: "Returns On 21 Dec 2022 10:21:00",
            image: img,
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Your request for refund is accepted",
            deliveredDate: "View More Details",
            taka: '40'
        },
        {
            id: "4",
            orderId: "121312323213432",
            orderDate: "Returns On 21 Dec 2022 10:21:00",
            image: img,
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Your request for refund is accepted",
            deliveredDate: "View More Details",
            taka: '40'
        },
        {
            id: "5",
            orderId: "121312323213432",
            orderDate: "Returns On 21 Dec 2022 10:21:00",
            image: img,
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Your request for refund is accepted",
            deliveredDate: "View More Details",
            taka: '40'
        },
        {
            id: "6",
            orderId: "121312323213432",
            orderDate: "Returns On 21 Dec 2022 10:21:00",
            image: img,
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Your request for refund is accepted",
            deliveredDate: "View More Details",
            taka: '40'
        },

    ];


    return (
        <div className="mt-[20px]  ">
            <button onClick={() => router.back()} className='flex items-center md:pl-0 pl-[10px] gap-[13px]'>
                <FaArrowLeft className='md:hidden'></FaArrowLeft>
                <h1 className='text-[20px] md:text-[24px] md:mb-[32px]  font-[500] text-[#001E00] md:text-[#FB641B]'>My Returns</h1>
            </button>

            {
                datas.map(data => {
                    return (
                        <div key={data.id} className="mt-[16px]  ">
                            <div className="md:w-[90%] w-[100%] h-auto rounded-[8px] bg-[#FFFFFF] shadow-lg">
                                <div className="flex md:items-center ">
                                    <div className="ml-[12px] md:mt-[16px] mt-[16px] md:w-[36%] w-[100%]">
                                        <p className='text-[11px] hidden md:block md:text-[14px] text-[#686868] '>{data.orderDate}</p>

                                        <p>
                                            <span className="md:text-[1.3vw] text-[14px] font-bold text-black">Order</span>{" "}
                                            <span className="md:text-[#287DF3] text-[14px] md:text-[1.3vw] ">#{data.orderId}</span>
                                        </p>
                                        <p className='text-[11px] md:hidden block md:text-[14px] text-[#686868] '>{data.orderDate}</p>
                                        <p className='text-[11px] md:hidden block md:text-[14px] text-[#686868] '>   Returns To Banglar BigStore</p>


                                    </div>
                                    <div className='mt-[16px] md:mt-[-16px] w-[74%] md:flex  md:px-[10px]'>
                                        <Link
                                            href={`/profile/myOrderDetails`}
                                            className="text-[#287DF3] md:text-[1.3vw] hidden text-[14px] "
                                        >
                                            <span className='md:text-[1.3vw] text-[#686868]'>Return to Banglar Big Store</span>
                                        </Link>
                                        <div className='md:hidden '>
                                            <p>
                                                <Link
                                                    href={`myOrders/myOrderDetails`}
                                                    className="text-[#287DF3] md:text-[1.3vw]  text-[14px] mr-[10px] flex justify-end "
                                                >
                                                    <span className='md:text-[1.3vw] text-[#287DF3] '>View More</span>
                                                </Link>
                                            </p>
                                            <p className=" md:hidden mt-[16px]  mr-[4px] w-[120px] h-[32px]  rounded-[54px] px-[5px] text-center  md:text-[#FB641B] text-[#686868] text-[10px]  bg-[#F2F3F7]  mb-[14px]">
                                                {data.status}
                                            </p>

                                        </div>

                                    </div>
                                </div>
                                <hr className="border-[1px] mt-[16px] hidden md:block border-[#686868]" />
                                <div className="flex justify-between md:text-[1.3vw]">
                                    <div className="flex md:items-center md:mt-[16px] md:mb-[16px] gap-[16px]">
                                        <Image className='w-[44px] h-[36px] md:w-[57px] md:h-[46px] ml-[12px]' src={data.image} width="57" height="46" alt=""></Image>
                                        <div>
                                            <p className='text-[12px]  md:text-[1.3vw]  text-[#001E00]'>{data.peoductName}</p>
                                            <p className=" md:hidden block text-[12px] text-[#686868]  mb-[30px]">Qty: <span className='text-[#001E00]'>{data.qty}</span></p>
                                        </div>
                                    </div>
                                    <p className=" hidden md:block mt-[31px] mb-[30px]">Qty: {data.qty}</p>
                                    <p className=" hidden md:block mt-[33px] lg:mt-[33px] xl:mt-[36px] w-[186px] h-[41px] bg-[#F2F3F7] text-[#686868] rounded-[54px] text-[0.8rem] text-center mb-[30px]">
                                        {data.status}
                                    </p>
                                    <p className=" hidden  text-[#287DF3] md:block mt-[31px] mb-[30px] mr-[19px]">
                                        {data.deliveredDate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyReturns;