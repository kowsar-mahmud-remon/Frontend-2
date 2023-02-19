import React from 'react';
import Image from 'next/image'
import img3 from '../../assets/images/image 6.png'
import img4 from '../../assets/images//image 88.png'


const MyCancelation = () => {
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
    const cancels = [
        {
            id: 1,
            img: img4,
            time: '21 Dce 2022 10:21:00',
            title: 'Tomato (Local) 500 ±30 gm',
            qty: 1
        },
        {
            id: 2,
            img: img4,
            time: '21 Dce 2022 10:21:00',
            title: 'Tomato (Local) 500 ±30 gm',
            qty: 1
        },
        {
            id: 3,
            img: img4,
            time: '21 Dce 2022 10:21:00',
            title: 'Tomato (Local) 500 ±30 gm',
            qty: 1
        },
        {
            id: 4,
            img: img4,
            time: '21 Dce 2022 10:21:00',
            title: 'Tomato (Local) 500 ±30 gm',
            qty: 1
        },

    ]


    return (
        <div className='px-4 '>
            <h1 className='text-[24px] md:text-[#FB641B] text-[#001E00] font-semibold mt-[24px] mb-[32px]'>My Cancellations</h1>
            {
                cancels.map(cancel => {
                    return (
                        <div key={cancel.id} className='md:w-[765px]  shadow-lg rounded-md mb-[16px]'>
                            <div className='flex justify-between items-center md:py-[20px]  md:mb-[16px] w-full px-[16px]'>
                                <div>
                                    <p className='md:text-[16px] text-[14px] font-semibold text-[#001E00]'>Order <span className='text-[#287DF3]'>#12345678998745</span></p>
                                    <p className='text-[14px] text-[#686868] md:font-semibold'>Placed On {cancel.time}</p>
                                </div>
                                <p className='text-[16px] font-semibold text-[#287DF3] md:block hidden'>View More Details</p>
                                <p className='text-[14px] font-semibold text-[#287DF3] block md:hidden mt-[-19px]'>View More </p>

                            </div>
                            <hr className='bg-[#686868] px-[0px] md:block hidden' />



                            <div className='flex justify-between items-center py-[16px] mb-[32px] md:px-[40px] px-[16px] md:w-[80%] w-full md:py-[16px]'>
                                <div className='flex items-center'>
                                    <Image
                                        className='md:w-[57px] w-[44px] h-[36px] md:h-[46px] mr-[16px] shadow-sm'
                                        src={cancel.img}

                                        alt='Image' />
                                    <div>
                                        <p className='text-[12px] md:text-[16px] text-[#001E00]'>{cancel.title}</p>
                                        <p className='text-[#686868] text-[12px]  block md:hidden md:text-[16px]'>Qty:<span className='text-[#001E00]'>{cancel.qty}</span></p>
                                    </div>

                                </div>

                                <div><p className='text-[#686868] text-[12px] md:block hidden md:text-[16px]'>Qty:<span className='text-[#001E00]'>{cancel.qty}</span></p></div>
                                <div>  <h1 className='text-[12px] bg-[#F2F3F7] rounded-lg md:text-[#686868] text-[#FB641B] mt-[-37px] md:mt-[0px] px-[8px]'>Cancelled</h1></div>
                            </div>



                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyCancelation;