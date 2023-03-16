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

const forgetPassword = () => {
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
        <div>
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
                                    <div className='md:mt-[3vw] md:block hidden'>
                                        <Image alt="" src={logo} />

                                    </div>
                                    <form
                                        onSubmit={handleForm}
                                        className=' flex flex-col '>
                                        <label className='text-[24px] text-[#FB641B] md:mb-[12px] mt-[20px] font-semibold'>Forget Password</label>
                                        <p className='block  md:hidden sm:hidden mt-[24px] mb-2 text-[14px] text-[#001E00]'>Enter Your Phone Number or Email</p>
                                        <input
                                            name='email'
                                            className='input border border-[#707070] focus:outline-none md:mb-[1.4vw] mb-[20px] bg-white h-[48px]  md:h-[3.7vw] md:text-[16px]' type="text" placeholder='Enter Your Phone Number or Email' />

                                        <Link href='/customerLogin/customerOtp' className=''>  <button className=' rounded-[8px] w-[100%] bg-[#FB641B] hover:bg-[#FB641B]  text-[18px] md:h-[3.7vw]  text-white md:mt-[1vw]'>Forgot Password</button></Link>




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
