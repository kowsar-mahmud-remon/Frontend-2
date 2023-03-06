import React, { useState } from 'react';
import NavicationLayout from '../../layouts/NavicationLayout';
import loginImg from '../../assets/images/securityImg.png';
import logo from '../../assets/images/logo/main_logo.png';


import Image from 'next/image';
import Link from 'next/link';

const sellerOtp = () => {

    ;



    return (
        <NavicationLayout>
            <div className='  mx-[100px] xl:mx-[209px] mt-[120px]'>
                <div>
                    <div className='hidden md:block'>

                        <p className='text-[#FB641B] font-[500] text-[24px]'>Login Your Banglar Big Store Seller Account</p>
                    </div>
                    <div className='  max-w-[1500px] mt-[32px]  h-[510px] shadow-small '>
                        <div className='flex  justify-center lg:mx-[30px] gap-[49px]'>
                            <div className='mt-[72px]'>
                                <Image alt="" className='h-[366px] w-[453px]' src={loginImg} />
                            </div>
                            <div className=' '>
                                <div className='mt-[68px]'>
                                    <Image alt="" src={logo} />
                                    <h1 className='text-[#FB641B] text-[24px] mt-[18px]'>Please Enter OTP</h1>
                                    <h2 className='text-[16px] mt-[16px]  text-[#707070]'>We have sent you one time password to your mobile</h2>
                                </div>

                                <form>

                                    <div className='flex gap-[12px] mt-[32px]'>
                                        <div>
                                            <input className='bg-[#FFFFFF]  outline-none text-[#707070] text-[24px] font-[500] text-center   border-[1px] border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" maxLength="1" />
                                        </div>
                                        <div>
                                            <input className='bg-[#FFFFFF] border-[1px] text-center  outline-none text-[#707070] text-[24px] font-[500]  border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" maxLength="1" />
                                        </div>
                                        <div>
                                            <input className='bg-[#FFFFFF] border-[1px] text-center  outline-none text-[#707070] text-[24px] font-[500]  border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" maxLength="1" />
                                        </div>
                                        <div>
                                            <input className='bg-[#FFFFFF] border-[1px] text-center  outline-none text-[#707070] text-[24px] font-[500]  border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" maxLength="1" />
                                        </div>
                                        <div>
                                            <input className='bg-[#FFFFFF] border-[1px] text-center  outline-none text-[#707070] text-[24px] font-[500]  border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" maxLength="1" />
                                        </div>
                                        <div>
                                            <input className='bg-[#FFFFFF] border-[1px] text-center  outline-none text-[#707070] text-[24px] font-[500]  border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" maxLength="1" />
                                        </div>
                                    </div>

                                    <div className='mt-[16px]'>
                                        <h1 className='text-[#707070] text-[16px] font-[400]'>Don’t Receive the OTP? <span className='text-[#287DF3]'>RESEND</span></h1>
                                    </div>
                                    <Link href="#">
                                        <button className='btn xxl:w-[614px]  bg-[#FB641B] text-[18px] md:h-[72px]  text-white md:mt-[25px]'>Verify</button>
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

export default sellerOtp;