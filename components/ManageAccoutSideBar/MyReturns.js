import React, { useState } from 'react';
import img from '../../assets/images/image 7.png'
import Image from 'next/image'
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from "next/router";

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
        <div className='flex justify-center  pb-[227px]'>
            <div className='w-[924px]'>
                <h1 className='text-[24px] text-[#FB641B] font-semibold mt-[24px] mb-[32px] ml-4 md:ml-4 lg:ml-0'>Returns Details</h1>
                <div className='flex justify-between items-center px-[16px] shadow-md py-[20px] rounded-md mb-[16px] w-full'>
                    <div>
                        <p className='text-[16px] font-semibold text-[#001E00]'>Order <span className='text-[#287DF3]'>#12345678998745</span></p>
                        <p className='text-[14px] text-[#686868] font-semibold'>Placed On 21 Dce 2022 10:21:00</p>
                    </div>
                    <p className='text-[16px] font-semibold text-[#686868]'>Total: <span className='text-[#001E00]'>Tk 130</span></p>
                </div>
                <div className='shadow-md p-[16px] rounded-md'>
                    <div className='flex items-center gap-[8px]'>
                        <Image
                            className='w-[14px] h-[16px]'
                            src={img}

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
                        </div >
    {/* mobile */ }

    < div className = ' w-[70%] mt-4 hidden md:block ' >
    {
        vegs.map(veg => {
            return (
                <div key={veg.id} className='flex justify-between items-center mb-[32px]'>
                    <div className='flex items-center'>
                        <Image
                            className='w-[73px] h-[58px] md:w-[57px] md:h-[46px] mr-[16px]'
                            src={veg.img}

                            alt='Image' />
                        <div className='md:hidden w-full '>
                            <p className='text-[14px] text-[#001E00]'>{veg.title}</p>
                            <p className='text-[#686868] text-[14px]'>Tk {veg.tk}</p>
                            <p className='text-[#686868] text-[14px]'>Qty:<span className='text-[#001E00]'>{veg.qty}</span></p>
                        </div>
                        <p className='text-[16px] text-[#001E00] hidden md:block'>{veg.title}</p>


                    </div>
                    <div className='md:block hidden'><p className='text-[#686868] text-[16px]'>Tk {veg.tk}</p></div>
                    <div className='md:block hidden'><p className='text-[#686868] text-[16px]'>Qty:<span className='text-[#001E00]'>{veg.qty}</span></p></div>
                </div>
            )
        })
    }


                        </div >

                    </div >
                </div >


            </div >
        </div >
    );
};

export default MyReturns;