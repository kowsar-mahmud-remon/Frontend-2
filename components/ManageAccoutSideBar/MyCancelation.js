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
        <div>
            <h1 className='text-[24px] text-[#FB641B] font-semibold mt-[24px] mb-[32px]'>My Cancellations</h1>
            {
                cancels.map(cancel => {
                    return (
                        <div key={cancel.id} className='w-[924px] shadow-lg rounded-md mb-[16px]'>
                            <div className='flex justify-between items-center py-[20px]  mb-[16px] w-full px-[16px]'>
                                <div>
                                    <p className='text-[16px] font-semibold text-[#001E00]'>Order <span className='text-[#287DF3]'>#12345678998745</span></p>
                                    <p className='text-[14px] text-[#686868] font-semibold'>Placed On {cancel.time}</p>
                                </div>
                                <p className='text-[16px] font-semibold text-[#287DF3]'>View More Details</p>

                            </div>
                            <hr className='bg-[#686868] px-[0px]' />



                            <div className='flex justify-between items-center mb-[32px] px-[40px] w-[80%] py-[16px]'>
                                <div className='flex items-center'>
                                    <Image
                                        className='w-[57px] h-[46px] mr-[16px]'
                                        src={cancel.img}

                                        alt='Image' />
                                    <p className='text-[16px] text-[#001E00]'>{cancel.title}</p>

                                </div>

                                <div><p className='text-[#686868] text-[16px]'>Qty:<span className='text-[#001E00]'>{cancel.qty}</span></p></div>
                                <div>  <h1 className='text-[12px] bg-[#F2F3F7] rounded-lg text-[#686868] px-[8px]'>Cancelled</h1></div>
                            </div>



                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyCancelation;