import React, { useState } from 'react';
import img from '../../assets/images/Vector (7).png'
import img2 from '../../assets/images/Vector (8).png'
import img3 from '../../assets/images/image 6.png'
import img4 from '../../assets/images//image 88.png'
import Image from 'next/image'

const MyReturns = () => {
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
        <div className='flex justify-center  pb-[227px]'>
            <div className='max-w-[924px] '>
                <h1 className='text-[24px] text-[#FB641B] font-semibold mt-[24px] mb-[32px] ml-4 md:ml-4 lg:ml-0'>Returns Details</h1>
               <div className='lg:mr-[20px]'>
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

                            alt='Image' /></span>Return Product</p>
                    </div>
                    <div>
                        <div className="hidden md:block mx-auto">
                            <div className="flex justify-center items-center relative w-[100%]">
                                <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                                <div className="h-1 w-4/5 border-[#026C51] bg-[#026C51]"></div>
                                <div className="w-3 h-3 rounded-full border-2 absolute left-2/4 z-10 border-[#026C51] bg-[#026C51]"></div>
                                <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                            </div>
                            <div className="flex justify-center items-center ">
                                <div className="flex justify-between items-center w-[95%]">
                                    <p className='text-[#001E00] text-[16px]'>Processing Return</p>
                                    <p className='text-[#001E00] text-[16px]'>Accept Return</p>
                                    <p className='text-[#001E00] text-[16px]'>Returned Product</p>
                                </div>
                            </div>
                            <div className="flex w-[100%] mb-[16px]">
                                <div className="w-4/5 p-7 bg-[#F2F3F7] ml-[30px] rounded mt-3 relative">
                                    <div className="w-5 h-5 bg-[#F2F3F7] absolute -top-2 left-[43px] rotate-45"></div>
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
                                </div>
                            </div>



                        </div>
                        {/* mobile */}

                        <div className=' w-[70%] mt-4 hidden md:block '>
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


                        </div>

                    </div>
                </div>

               </div>

            </div>
        </div>
    );
};

export default MyReturns;