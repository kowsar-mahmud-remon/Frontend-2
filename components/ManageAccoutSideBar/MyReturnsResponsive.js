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
                <div className='  mt-[16px] mb-[41px]'>
                    <p className='text-[#026C51] text-[16px]'>Return By 16 Jan 2023</p>
                    <p className='text-[#686868] text-[16px]  flex items-center'><span><Image
                        className='w-[19px] h-[20px] mr-[16px]'
                        src={img2}

                        alt='Image' /></span>Return Product</p>
                </div>
                <div>
                    <div className='h-4 border-l-1 border-red-200'>

                    </div>
                </div>
                {/* small */}


            </div>



        </div>
    );
};

export default MyReturnsResponsive;