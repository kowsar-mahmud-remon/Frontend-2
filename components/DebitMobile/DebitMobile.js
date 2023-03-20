import React from 'react';
import Image from 'next/image'
import cash from '../../assets/images/cash-on-delivery 1.png'
import icon from '../../assets/images/Group 2252.png'
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';

const DebitMobileCashOn = () => {
    const router = useRouter()
    return (
        <div className='flex justify-center mb-[.2vw]'>
            <div className='w-[90%]'>
                <div>
                    <button onClick={() => router.back()} className='flex items-center mt-[6vw] gap-[13px]'>
                        <FaArrowLeft className='md:hidden'></FaArrowLeft>
                        <h1 className='text-[20px] md:text-[24px] md:mb-[32px]  font-[500] text-[#001E00] md:text-[#FB641B]'>Cash On Delivery</h1>
                    </button>
                </div>
                <div className="flex justify-center mt-[24px] mb-[16px]">
                    <h1 className="text-[#FB641B] text-left flex items-center px-[3vw] justify-center w-full  md:w-[48%] h-[56px]  bg-[#FFDDCC] text-[3.7vw] md:text-[1vw] font-normal"> <Image className='w-[28px] h-[28px] mr-[16px]' src={icon} alt='image'></Image>Collect your Prepayment Voucher & Enjoy Extra Savings on Selected Cards</h1>
                </div>
                <div className='md:flex  md:justify-center'>
                    <div className=''>

                        <div className=' md:flex md:gap-x-[20px]'>
                            <div className=''>

                                {/* For mobile */}
                                <div className={`md:w-[9vw]  md:hidden  md:h-[9vw] flex items-center h-[28vw] mb-[16px] rounded-[4px]  `}>

                                    <div className='mx-auto  shadow-small w-[100%] rounded-[4px]'>
                                        <div className='flex items-center  mb-[.2vw] px-[1.5vw] py-[8px] '>
                                            <Image
                                                className='w-[68px] h-[68px] flex item-center ml-[16px] mr-[36px]'
                                                src={cash}
                                                alt='image' />
                                            <h1 className='md:text-[.8vw] text-[4vw] font-[500] flex items-center  text-[#001E00] text-center'>Cash On Delivery</h1>
                                        </div>

                                    </div>

                                </div>
                                {/* For mobile */}


                                <div className={`  `}>
                                    <div className='w-full  rounded-[4px] h-[213px] '>
                                        <p className='text-[13px] text-[#001E00] '>You can pay in cash to our courier when you receive the goods at your doorstep.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[22vw] mt-[5vw] md:mt-[0] w-[90vw] md:h-[12vw] h-[24vw] px-[3vw] md:px-[.9vw] flex items-center  shadow-small rounded-[8px]'>
                                <div className='w-[88vw] md:w-[22vw]'>
                                    <h1 className='md:text-[1.3vw] text-[3.3vw]  font-[500] text-[#001E00]'>Order Summary</h1>
                                    <div className='flex justify-between md:text-[.8vw] text-[3vw] text-[#686868] my-[.7vw] '>
                                        <h1 >Subtotal (2 Items and shipping fee included)</h1>
                                        <h1>Tk 130</h1>
                                    </div>
                                    <div className='flex justify-between font-[500] text-[3.2vw] md:text-[1.2vw] text-[#686868]'>
                                        <h1 className='text-[#001E00]'>Total Amount:</h1>
                                        <h1 className='text-[#FB641B]'>Tk 130</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[24px]'>
                                <Link href='democashondelivery'> <button className='bg-[#FB641B] w-[100%] h-[48px] rounded-[8px] font-[500] text-white'> Confirm Order</button></Link>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default DebitMobileCashOn;