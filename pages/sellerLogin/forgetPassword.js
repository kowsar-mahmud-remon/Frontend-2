import Image from "next/image";
import NavicationLayout from "../../layouts/NavicationLayout";
import React, { useState } from 'react';
import loginImg from '../../assets/images/securityImg.png';
import logo from '../../assets/images/logo/main_logo.png';

const forgetPassword = () => {
    return (
        <div>
            <NavicationLayout>
                <div className='  md:mb-[214px] flex  justify-center'>
                    <div>
                        <div className='hidden md:block'>

                            <p className='text-[#FB641B] font-semibold text-[16px] md:text-[24px] md:mt-[147px] md:mb-[64px]'>Login Your Banglar Big Store Seller Account</p>
                        </div>
                        <div className='  max-w-[1500px] md:flex h-[754px] shadow-2xl rounded-2xl bg-white mt-10'>
                            <div className='px-[28px] md:px-[0px] md:w-[45%] h-auto w-full rounded-md'>
                                <Image alt="" className='md:h-[754px] md:w-[701px]' src={loginImg} />
                            </div>
                            <div className=' md:px-[86px] px-[28px] md:w-[55%] w-full '>
                                <div className='md:mt-[200px] md:block hidden'>
                                    <Image alt="" src={logo} />

                                </div>
                                <div className="mt-[32px]">
                                    <h1 className="text-[#FB641B] text-[24px] font-[400]">Forgot Password</h1>
                                </div>
                                <div>
                                    <form

                                        className=' flex flex-col md:mt-[32px]'>

                                        <input
                                            name='email'
                                            className='input border-solid focus:outline-none border-[#287DF3] border-[1px] md:mb-[32px] mb-[20px] bg-white h-[48px]  md:h-[72px] md:text-[16px]' type="text" placeholder='Enter Your Phone Number or Email' />
                                            <button className='btn bg-[#FB641B] text-[18px] md:h-[72px]  text-white md:mt-[25px]'>Forgot Password</button>
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