import React, { useState } from 'react';
import NavicationLayout from '../../layouts/NavicationLayout';
import loginImg from '../../assets/images/securityImg.png';
import logo from '../../assets/images/logo/main_logo.png';


import Image from 'next/image';
import Link from 'next/link';

const customerOtp = () => {

    return (
        <NavicationLayout>
            <div className='md:mb-[214px] flex  justify-center  '>
                <div className='w-[80%]'>
                    <div className='hidden md:block'>

                        <p className='text-[#FB641B] font-semibold text-[16px] md:text-[24px] md:mt-[147px] md:mb-[3vw]'>Login Your Banglar Big Bazar Account</p>
                    </div>
                    <div className='  max-w-[1500px] md:flex  shadow-small rounded-2xl bg-white mt-10'>
                        <div className='px-[28px] md:px-[0px] md:w-[45%] h-auto w-full rounded-md '>
                            <Image alt="" className='md:h-[46vw] md:w-[36.6vw]' src={loginImg} />
                        </div>
                        <div className=' flex items-center md:w-[55%]'>
                            <div className='md:px-[86px] px-[28px]  w-full'>
                                <div className='mt-[68px]'>
                                    <Image alt="" src={logo} />
                                    <h1 className='text-[#FB641B] text-[24px] mt-[18px]'>Please Enter OTP</h1>
                                    <h2 className='text-[16px] mt-[16px]  text-[#707070]'>We have sent you one time password to your mobile</h2>
                                </div>

                                <form>

                                    <div className='flex gap-[12px] mt-[32px]'>
                                        <div>
                                            <input className='bg-[#FFFFFF]  outline-none text-[#707070] text-[24px] font-[500] text-center   border-[1px] border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[3.3vw] h-[3.7vw]' type="text" maxLength="1" />
                                        </div>
                                        <div>
                                            <input className='bg-[#FFFFFF] border-[1px] text-center  outline-none text-[#707070] text-[24px] font-[500]  border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[3.3vw] h-[3.7vw]' type="text" maxLength="1" />
                                        </div>
                                        <div>
                                            <input className='bg-[#FFFFFF] border-[1px] text-center  outline-none text-[#707070] text-[24px] font-[500]  border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[3.3vw] h-[3.7vw]' type="text" maxLength="1" />
                                        </div>
                                        <div>
                                            <input className='bg-[#FFFFFF] border-[1px] text-center  outline-none text-[#707070] text-[24px] font-[500]  border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[3.3vw] h-[3.7vw]' type="text" maxLength="1" />
                                        </div>
                                        <div>
                                            <input className='bg-[#FFFFFF] border-[1px] text-center  outline-none text-[#707070] text-[24px] font-[500]  border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[3.3vw] h-[3.7vw]' type="text" maxLength="1" />
                                        </div>
                                        <div>
                                            <input className='bg-[#FFFFFF] border-[1px] text-center  outline-none text-[#707070] text-[24px] font-[500]  border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[3.3vw] h-[3.7vw]' type="text" maxLength="1" />
                                        </div>
                                    </div>

                                    <div className='mt-[16px]'>
                                        <h1 className='text-[#707070] text-[16px] font-[400]'>Don’t Receive the OTP? <span className='text-[#287DF3]'>RESEND</span></h1>
                                    </div>
                                    <Link href="#">
                                        <button className='btn xxl:w-[614px] font-[500]  bg-[#FB641B] hover:bg-[#FB641B] text-[18px] md:h-[3.7vw]   text-white md:mt-[25px]'>Verify</button>
                                    </Link>
                                </form>
                            </div>





                        </div>
                    </div>
                </div>

            </div>
        </NavicationLayout>
    );
};

export default customerOtp;
