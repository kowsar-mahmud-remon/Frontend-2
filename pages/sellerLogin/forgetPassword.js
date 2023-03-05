import Image from "next/image";
import NavicationLayout from "../../layouts/NavicationLayout";
import React, { useState } from 'react';
import loginImg from '../../assets/images/securityImg.png';
import logo from '../../assets/images/logo/main_logo.png';
import Link from "next/link";

const forgetPassword = () => {
    return (
        <div>
            <NavicationLayout>
                <div className='  mx-[100px] xl:mx-[209px] mt-[120px]'>
                    <div>
                        <div className='hidden md:block'>

                            <p className='text-[#FB641B] font-[500] text-[24px]'>Login Your Banglar Big Store Seller Account</p>
                        </div>
                        <div className='  max-w-[1500px] mt-[32px]  h-[498px] shadow-small '>
                            <div className='flex  justify-center items-center pt-[66px]  gap-[49px]'>
                                <div className=''>
                                    <Image alt="" className='h-[366px] w-[453px]' src={loginImg} />
                                </div>
                                <div className=' '>
                                    <div className=''>
                                        <Image alt="" src={logo} />
                                        <h1 className='text-[#FB641B] text-[24px] mt-[18px]'>Forgot Password</h1>
                                    </div>
                                    <form className='mt-[12px]'>
                                        <div>
                                            <input
                                                name='email'
                                                className='xxl:w-[614px]   w-full border-solid focus:outline-none border-[#287DF3] border-[1px] hover:shadow-small rounded-[8px] h-[72px] px-[25px] placeholder:text-[1vw] placeholder:text-[#707070]' type="text" placeholder='Enter Your Phone Number or Email' />
                                        </div>
                                        <Link href="/sellerLogin/sellerOtp">
                                            <button className='btn bg-[#FB641B] text-[18px] md:h-[72px]  text-white md:mt-[25px]'>Forgot Password</button>
                                        </Link>



                                    </form>



                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </NavicationLayout>
        </div>
    );
};

export default forgetPassword;