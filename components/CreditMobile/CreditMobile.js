import React from 'react';
import Image from 'next/image'
import cash from '../../assets/images/cash-on-delivery 1.png'
import icon from '../../assets/images/Group 2252.png'

const CreditMobile = () => {
    return (
        <div className='px-[24px]'>
            <div className="flex justify-center mt-[24px] mb-[16px]">
                <h1 className="text-[#FB641B] text-left flex items-center px-[3vw] justify-center w-full  md:w-[48%] h-[56px]  bg-[#FFDDCC] text-[3.7vw] md:text-[1vw] font-normal"> <Image className='w-[28px] h-[28px] mr-[16px]' src={icon} alt='image'></Image>Collect your Prepayment Voucher & Enjoy Extra Savings on Selected Cards</h1>
            </div>
        </div>
    );
};

export default CreditMobile;