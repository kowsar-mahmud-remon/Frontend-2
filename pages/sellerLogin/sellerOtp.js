import React, { useState } from 'react';
import NavicationLayout from '../../layouts/NavicationLayout';
import loginImg from '../../assets/images/securityImg.png';
import logo from '../../assets/images/logo/main_logo.png';
import logo_dic from '../../assets/images/logo/logo_dic.png';
import fbLogo from '../../assets/images/social_logos/Facebook logo.png';
import googleLogo from '../../assets/images/social_logos/google.png';

import Image from 'next/image';
import Link from 'next/link';
import { useLoginUserMutation } from '../../features/auth/authApi';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
const sellerOtp = () => {

 ;


    const handleForm = (e) => {

        e.preventDefault();

        if (e.target.email.value.match(/^(?:(?:\+|00)88|01)?\d{11}$/)) {
            loginUser({
                phone: e.target.email.value,
                password: e.target.pass.value
            });
        }
        if (e.target.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            loginUser({
                email: e.target.email.value,
                password: e.target.pass.value
            });
        }
    };

    return (
        <NavicationLayout>
            <div className='  md:mb-[214px] flex  justify-center lg:mx-[20px]'>
                <div>
                    <div className='hidden md:block'>

                        <p className='text-[#FB641B] font-semibold text-[16px] md:text-[24px] md:mt-[147px] md:mb-[64px]'>Login Your Banglar Big Store Seller Account</p>
                    </div>
                    <div className='  max-w-[1500px] md:flex   shadow-2xl rounded-2xl bg-white mt-10'>
                        <div className='px-[28px] md:px-[0px] md:w-[45%] h-auto w-full rounded-md'>
                            <Image alt="" className='md:h-[784px] md:w-[701px]' src={loginImg} />
                        </div>
                        <div className=' md:px-[86px] lg:mx-[10px] px-[28px] md:w-[55%] w-full '>
                            <div className='md:mt-[58px] md:block hidden'>
                                <Image alt="" src={logo} />

                            </div>
                             <div>
                                <h1 className='text-[24px] mt-[32px] font-[400] text-[400] text-[#FB641B]'>Please Enter OTP</h1>
                                <h2 className='text-[#707070] mt-[16px] text-[16px] '>We have sent you one time password to your mobile</h2>
                             </div>

                             <div className='mt-[32px] flex gap-[12px]'>
                                  <input className='bg-[#FFFFFF] border-[1px] border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" />
                                    <input className='bg-[#FFFFFF] border-[1px] border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" />
                                    <input className='bg-[#FFFFFF] border-[1px] border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" />
                                    <input className='bg-[#FFFFFF] border-[1px] border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" />
                                    <input className='bg-[#FFFFFF] border-[1px] border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" />
                                    <input className='bg-[#FFFFFF] border-[1px] border-solid border-[#287DF3]
                                  shadow-small rounded-[8px] w-[65px] h-[72px]' type="text" />
                             </div>
                             <div className='mt-[16px]'>
                                <h1 className='text-[#707070] text-[16px] font-[400]'>Don’t Receive the OTP? <span className='text-[#287DF3]'>RESEND</span></h1>
                             </div>
                             <div className='mt-[32px]'>
                                <button className='bg-[#FB641B] uppercase w-[455px] xl:w-[614px] xxl:w-[614px] h-[72px] rounded-[8px] text-white text-[18px] font-[500]'>Verify</button>
                             </div>

                        </div>
                    </div>
                </div>

            </div>
        </NavicationLayout>
    );
};

export default sellerOtp;