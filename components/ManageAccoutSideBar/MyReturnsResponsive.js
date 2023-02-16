import React, { useState } from 'react';
import img from '../../assets/images/Vector (7).png'
import img2 from '../../assets/images/Vector (8).png'
import img3 from '../../assets/images/image 6.png'
import img4 from '../../assets/images//image 88.png'
import Image from 'next/image'

const MyReturnsResponsive = () => {

    const [show, setShow] = useState(false)
    const vegs = [
        {
            id: 1,
            title: 'Tomato (Local) 500 ±30 gm',
            img: img3,
            tk: 40,
            qty: 1
        },
        {
            id: 2,
            title: 'Tomato (Local) 500 ±30 gm',
            img: img4,
            tk: 40,
            qty: 1
        },
    ]
    const details = [
        {
            id: 1,
            info: '02 Jan 2023 - 16:52  Your package has been handed over to BD-RedX-API.',
            time: '02 Jan 2023 - 16:52 '
        },
        {
            id: 2,
            info: 'Your package has been packed and is being handed over to a logistics partner.',
            time: '02 Jan 2023 - 16:52 '

        },
        {
            id: 3,
            info: 'Your order has been successfully verified',
            time: '02 Jan 2023 - 16:52 '
        },

    ]
    return (
        <div className='pb-[127px]'>


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

                        alt='Image' />
                    <p>Package 1</p>
                </div>
                <p className='text-[14px] text-[#686868]'>Sold by <span className='text-[#287DF3]'>Banglar Big Store</span></p>
                <hr className='bg-[#686868] my-[16px]' />
                <div className='flex justify-between  mt-[16px] mb-[41px]'>
                    <p className='text-[#026C51] text-[16px]'>Return By 16 Jan 2023</p>
                    <p className='text-[#686868] text-[16px]  flex items-center'><span><Image
                        className='w-[19px] h-[20px] mr-[16px]'
                        src={img2}

                        alt='Image' /></span>Retune Product</p>
                </div>
                {/* small */}
                <div className="md:hidden flex h-[260px] ">
                    <div className="flex flex-col justify-center items-center  my-1">
                        <div className="h-full w-1 my-1">
                            <div className="w-full h-full bg-[#026C51] "></div>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <div className="flex flex-col justify-between h-full  absolute  -left-2 w-full">
                            <div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                                    <p className="ml-2">Processing Return</p>
                                </div>
                                <div className="">
                                    <div className="  p-2 bg-[#F2F3F7] rounded mt-3 relative text-[12px] ml-6 ">
                                        {/* <div className="w-3 h-3 bg-[#F2F3F7] absolute -top-1 -z-10 left-4 rotate-45"></div> */}
                                        <div className="w-3 h- bg-[#F2F3F7] absolute -top-2 left-[43px] rotate-45"></div>
                                        {/* eta dynamic hobe */}
                                        {
                                            !show && details.map(detail => {
                                                return (
                                                    <div key={detail.id}>
                                                        <p className='text-[15px] text-[#001E00]'>
                                                            <span className='text-[#686868]'>{detail.time}</span>{detail.info}
                                                        </p>
                                                    </div>
                                                )
                                            }).slice(0, 1)
                                        }
                                        {
                                            show && details.map(detail => {
                                                return (
                                                    <div key={detail.id}>
                                                        <p className='text-[15px] text-[#001E00]'>
                                                            <span className='text-[#686868]'>{detail.time}</span>{detail.info}
                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }
                                        {!show && <p onClick={() => setShow(true)} className="text-[#287DF3] text-center cursor-pointer">View More</p>}
                                        {show && <p onClick={() => setShow(false)} className="text-[#287DF3] text-center cursor-pointer">View less</p>}
                                        {/* <p>
                                                    31 Dec 2022 - 16:52{" "}
                                                    <span className="font-[500]">
                                                        Your order has been successfully verified
                                                    </span>
                                                </p>
                                                <p className="text-[#287DF3] ">View More</p> */}
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                                        <p className="ml-2">Accept Return</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                                <p className="ml-2">Returned Product</p>
                            </div>
                            <div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* small */}

        </div>
    );
};

export default MyReturnsResponsive;