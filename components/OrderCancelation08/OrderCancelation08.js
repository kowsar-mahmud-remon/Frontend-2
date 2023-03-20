import { useRouter } from 'next/router';
import React from 'react';
import tick from '../../assets/images/tick.png'
import img from '../../assets/images/image 7.png'
import Image from "next/image";
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const OrderCancelation08 = () => {
    const router = useRouter()
    const datas = {
        id: "1",
        orderId: "121312323213432",
        orderDate: "Returns On 21 Dec 2022 10:21:00",
        image: img,
        peoductName: "Tomato(Local) 500+30 gm",
        qty: "1",
        status: "Your request for refund is accepted",
        deliveredDate: "View More Details",
        taka: '40'
    }
    return (
        <div className='px-[16px]'>
            <div>
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-[13px]"
                >
                    <FaArrowLeft className=""></FaArrowLeft>
                    <h1 className="text-[20px]  font-[500] text-[#001E00] my-4">
                        Cancellation Request
                    </h1>
                </button>
            </div>
            <div className='flex justify-center mt-[60px]'>
                <Image
                    src={tick}
                    alt='image'
                    className='h-[68px] w-[68px]  '
                />
            </div>
            <h1 className='text-center text-[24px] text-[#0BD838] mt-[8px]'>Your Cancellation Was Successful!</h1>
            <h1 className='text-center text-[#001E00] text-[4.5vw] mt-[8px]'>Your order number was 636567003339341</h1>
            <div className='shadow-small w-full rounded-[8px] divide-y divide-gray-400 mt-[24px]'>
                <div className='ml-[12px] mb-[16px]'>
                    <h1 className='text-[#686868] text-[12px] pt-[12px]'>Sold by <span className='text-[#287DF3]'>Banglar Big Store</span></h1>
                </div>

                <div className="flex justify-between md:text-[1.3vw]">
                    <div className="flex md:items-center w-[100%] justify-between md:mt-[16px] md:mb-[16px] gap-[12px]  mt-[16px]">
                        <div className='flex md:items-center w-[100%] gap-[16px]'>
                            <Image className='w-[44px] h-[36px] md:w-[57px] md:h-[46px] ml-[12px]' src={datas.image} width="57" height="46" alt=""></Image>
                            <div className='w-full'>
                                <p className='text-[4vw]  md:text-[1.3vw]  text-[#001E00]'>{datas.peoductName}</p>
                                <div className='flex justify-between w-full'>
                                    <p className=" md:hidden block text-[4vw] text-[#686868]  mb-[30px]">Qty: <span className='text-[#001E00]'>{datas.qty}</span></p>

                                </div>
                            </div>
                        </div>
                        <div className='flex mt-[5vw]  mr-[2vw] text-[#686868] text-[4.5vw] gap-[2px]'>
                            <h1 className=''> Tk</h1>
                            <h1>{datas.taka}</h1>
                        </div>
                    </div>
                    <p className=" hidden md:block mt-[31px] mb-[30px]">Qty: {datas.qty}</p>
                    <p className=" hidden md:block mt-[33px] lg:mt-[33px] xl:mt-[36px] w-[186px] h-[41px] bg-[#F2F3F7] text-[#686868] rounded-[54px] text-[0.8rem] text-center mb-[30px]">
                        {datas.status}
                    </p>
                    <p className=" hidden  text-[#287DF3] md:block mt-[31px] mb-[30px] mr-[19px]">
                        <Link href={`myReturns/myreturns01`}>{datas.deliveredDate}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderCancelation08;