import React from 'react';
import Image from 'next/image'
import img2 from '../../assets/images/img2.webp'
import img3 from '../../assets/images/img3.webp'

const JustForYou = () => {
    const datas = [
        {
            id: 1,
            image: img2,
            details: '2023 best cotton plated dress which comfortable...',
            price: '$5.00 - $7.00',
            qunatity: 40

        },
        {
            id: 2,
            image: img3,
            details: '2023 best cotton plated dress which comfortable...',
            price: '$5.00 - $7.00',
            qunatity: 40

        },
        {
            id: 3,
            image: img3,
            details: '2023 best cotton plated dress which comfortable...',
            price: '$5.00 - $7.00',
            qunatity: 40

        },
        {
            id: 4,
            image: img2,
            details: '2023 best cotton plated dress which comfortable...',
            price: '$5.00 - $7.00',
            qunatity: 40

        },
        {
            id: 5,
            image: img2,
            details: '2023 best cotton plated dress which comfortable...',
            price: '$5.00 - $7.00',
            qunatity: 40

        },
        {
            id: 6,
            image: img2,
            details: '2023 best cotton plated dress which comfortable...',
            price: '$5.00 - $7.00',
            qunatity: 40

        },
        {
            id: 7,
            image: img3,
            details: '2023 best cotton plated dress which comfortable...',
            price: '$5.00 - $7.00',
            qunatity: 40

        },
        {
            id: 8,
            image: img3,
            details: '2023 best cotton plated dress which comfortable...',
            price: '$5.00 - $7.00',
            qunatity: 40

        },
    ]
    return (
        <div className=' w-[90%] mx-auto'>
            <div className='mx-auto '>
                <h1 className='text-[1.6vw] mb-[16px] font-[700]'> Just For You</h1>

                <div className='flex gap-[16px] flex-wrap '>
                    {
                        datas.map(data => {
                            return (
                                <div key={data.id} className='bg-white w-[16.2vw] h-auto rounded-[10px]'>
                                    <Image className=' h-auto rounded-t-[10px]'
                                        src={data.image}
                                        alt='Image' />
                                    <div className='p-[16px]'>
                                        <p className='text-[1.2vw] text-[#001E00] mb-[12px]'>{data.details}</p>
                                        <p className='text-[1.4vw] font-[700] mb-[4px]'>{data.price}</p>
                                        <p className='text-[1.2vw] text-[#001E00]'>MOQ: {data.qunatity} pieces</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default JustForYou;