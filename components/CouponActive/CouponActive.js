import React from 'react';
import img from '../../assets/images/VectorOk.png'
import Image from 'next/image'
const CouponActive = () => {
    return (
        <div className='md:mt-[45px]'>
            <p className='text-[1.3vw] font-semibold text-[#686868]'>Home {'>'} Tax & Offers {'>'}  <span className='text-[#001E00]'>Coupon Management</span></p>
            <h1 className='text-[24px] mb-[32px] text-[#FB641B] mt-[8px] font-semibold'>Coupon Active</h1>
            <div className='flex items-center justify-center'>
                <div ><Image
                    src={img}
                    alt='image'
                    className='w-[235px] h-[235px] flex justify-center ml-[47px]' />
                    <h1 className='text-[#FB641B] text-[44px] font-nornal flex justify-center mt-[32px] mb-[10px]'>{'"'}Congratulations{'"'}</h1>
                    <h1 className='text-[24px] text-[#063852] font-normal flex justify-center'>Coupon Active</h1></div>
            </div>

        </div>
    );
};

export default CouponActive;