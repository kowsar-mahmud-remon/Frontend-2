import React from 'react';
import Image from 'next/image'
import icon from '../../assets/images/Group 2252.png'
import debit from '../../assets/images/credit-card 1.png'
import cell from '../../assets/images/unnamed.png'
import dbbl from '../../assets/images/DBBL.png'
import rocket from '../../assets/images/rocket.png'
import bkash from '../../assets/images/BKASH.png'
import cash from '../../assets/images/cash-on-delivery 1.png'
import { useState } from 'react';


const Debit = () => {
    const [cashOn, setCashOn] = useState('hidden')
    const [bground, setBGround] = useState('bg-[#F2F2F2]')

    const handlecash = () => {
        setCashOn('block')
        setBGround('bg-white shadow-small')
    }
    return (
        <div className='flex justify-center mb-[.2vw]'>
            <div className='w-[90%]'>
                <div className="flex justify-center mt-[24px] mb-[24px]">
                    <h1 className="text-[#FB641B] flex items-center justify-center w-[46%] h-[56px] text-center bg-[#FFDDCC]  text-[1vw] font-normal"> <Image className='w-[28px] h-[28px] mr-[16px]' src={icon} alt='image'></Image>Collect your Prepayment Voucher & Enjoy Extra Savings on Selected Cards</h1>
                </div>
                <div className='flex  justify-center'>
                    <div>
                        <h1 className='text-[24px] text-[#FB641B] '>Select Payment Method</h1>
                        <div className='mt-[32px] flex gap-x-[20px]'>
                            <div>
                                <div className='flex gap-x-[10px] mb-[16px]'>
                                    <div className='w-[9vw] h-[9vw] bg-[#F2F2F2] rounded-[4px] flex items-center'>
                                        <div className='mx-auto'>
                                            <div className='flex justify-center mb-[.2vw]'>
                                                <Image
                                                    className='w-[68px] h-[68px] '
                                                    src={debit}
                                                    alt='image' />
                                            </div>
                                            <h1 className='text-[.8vw] text-[#001E00] text-center'>Credit/Debit Card</h1>
                                        </div>
                                    </div>
                                    <div className='w-[9vw] h-[9vw] bg-[#F2F2F2] rounded-[4px] flex items-center '>
                                        <div className='mx-auto'>
                                            <div className='flex justify-center mb-[.2vw]'>
                                                <Image
                                                    className='w-[68px] h-[68px] '
                                                    src={cell}
                                                    alt='image' />
                                            </div>
                                            <h1 className='text-[.8vw] text-[#001E00] text-center'>IBBL Cell fin</h1>
                                        </div>
                                    </div>
                                    <div className='w-[9vw] h-[9vw] bg-[#F2F2F2] rounded-[4px] flex items-center'>
                                        <div className='mx-auto'>
                                            <div className='flex justify-center mb-[.2vw]'>
                                                <Image
                                                    className='w-[68px] h-[68px] '
                                                    src={dbbl}
                                                    alt='image' />
                                            </div>
                                            <h1 className='text-[.8vw] text-[#001E00] text-center'>DBBL Nexus Card</h1>
                                        </div>
                                    </div>
                                    <div className='w-[9vw] h-[9vw] bg-[#F2F2F2] rounded-[4px] flex items-center'>
                                        <div className='mx-auto'>
                                            <div className='flex justify-center mb-[.2vw]'>
                                                <Image
                                                    className='w-[68px] h-[68px] '
                                                    src={rocket}
                                                    alt='image' />
                                            </div>
                                            <h1 className='text-[.8vw] text-[#001E00] text-center'>Rocket</h1>
                                        </div>
                                    </div>
                                    <div className='w-[9vw] h-[9vw] bg-[#F2F2F2] rounded-[4px] flex items-center'>
                                        <div className='mx-auto'>
                                            <div className='flex justify-center mb-[.2vw]'>
                                                <Image
                                                    className='w-[68px] h-[68px] '
                                                    src={bkash}
                                                    alt='image' />
                                            </div>
                                            <h1 className='text-[.8vw] text-[#001E00] text-center'>Save bKash Account</h1>
                                        </div>
                                    </div>
                                    <div onClick={() => { handlecash() }} className={`w-[9vw] h-[9vw] ${bground} rounded-[4px] flex items-center`}>
                                        <div className='mx-auto'>
                                            <div className='flex justify-center mb-[.2vw]'>
                                                <Image
                                                    className='w-[68px] h-[68px] '
                                                    src={cash}
                                                    alt='image' />
                                            </div>
                                            <h1 className='text-[.8vw] text-[#001E00] text-center'>Cash On Delivery</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${cashOn}`}>
                                    <div className='w-full shadow-small rounded-[4px] h-[213px] px-[24px]'>
                                        <p className='text-[13px] text-[#001E00] pt-[55px]'>You can pay in cash to our courier when you receive the goods at your doorstep.</p>
                                        <div className='mt-[71px]'>
                                            <button className='bg-[#FB641B] w-[260px] h-[48px] rounded-[8px] font-[500] text-white'> Confirm Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[22vw] h-[12vw] px-[.9vw] flex items-center  shadow-small rounded-[8px]'>
                                <div className='w-[22vw]'>
                                    <h1 className='text-[1.3vw]  font-[500] text-[#001E00]'>Order Summary</h1>
                                    <div className='flex justify-between text-[.8vw] text-[#686868] my-[.7vw] '>
                                        <h1 >Subtotal (2 Items and shipping fee included)</h1>
                                        <h1>Tk 130</h1>
                                    </div>
                                    <div className='flex justify-between font-[500] text-[1.2vw] text-[#686868]'>
                                        <h1 className='text-[#001E00]'>Total Amount:</h1>
                                        <h1 className='text-[#FB641B]'>Tk 130</h1>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Debit;