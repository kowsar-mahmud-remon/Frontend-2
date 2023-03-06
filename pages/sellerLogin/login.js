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
const Login = () => {




    return (
        <NavicationLayout>
            <div className='  mx-[100px] xl:mx-[209px] mt-[120px]'>
                <div>
                    <div className='hidden md:block'>

                        <p className='text-[#FB641B] font-[500] text-[24px]'>Login Your Banglar Big Store Seller Account</p>
                    </div>
                    <div className='  max-w-[1500px] mt-[32px]  h-[652px] shadow-small '>
                        <div className='flex  justify-center  gap-[49px]'>
                            <div className='mt-[143px]'>
                                <Image alt="" className='xl:h-[366px] xl:w-[453px] w-[250px] h-[300px]' src={loginImg} />
                            </div>
                            <div className=' '>
                                <div className='mt-[68px]'>
                                    <Image alt="" src={logo} />
                                    <h1 className='text-[#FB641B] text-[24px] mt-[18px]'>Login</h1>
                                </div>
                                <form className='mt-[12px]'>
                                    <div>
                                        <input
                                            name='email'
                                            className='xxl:w-[614px]   w-full border-solid focus:outline-none border-[#287DF3] border-[1px] hover:shadow-small rounded-[8px] h-[72px] px-[25px] placeholder:text-[1vw] placeholder:text-[#707070]' type="text" placeholder='Enter Your Phone Number or Email' />
                                    </div>
                                    <div>
                                        <input
                                            name='password'
                                            className='xxl:w-[614px]  mt-[32px] w-full border-solid focus:outline-none border-[#287DF3] border-[1px] hover:shadow-small rounded-[8px] h-[72px] px-[25px] placeholder:text-[1vw] placeholder:text-[#707070]' type="password" placeholder='*****' />
                                    </div>
                                    <div className='flex justify-between mt-[12px] mb-[20px]'>
                                        <div className='flex gap-[12px] '>
                                            <input className='h[19px] w-[19px] border border-[#686868]' type="checkbox" />
                                            <p className='text-[#686868]  text-[16px]'>Show Passwords</p>
                                        </div>
                                        <Link href="/sellerLogin/forgetPassword">
                                            <p className='text-[#287DF3] text-[16px]'>Forgot Password?</p></Link>
                                    </div>


                                    <Link href="/sellerLogin/sellerOtp">
                                        <button className='btn hover:bg-[#FB641B] bg-[#FB641B] text-[18px] md:h-[72px]  text-white md:mt-[25px]'>Login</button>
                                    </Link>
                                    <div className='flex justify-center'>
                                        <span className='mx-auto text-[#FB641B] md:mt-[8px] text-[24px]  mt-[20px]'>Or</span>
                                    </div>


                                </form>


                                <div className='flex flex-col gap-6 md:mt-3  pb-[145px] md:pb-[50px] '>
                                    <p className='mx-auto font-[400] md:text-[18px] text-[16px] text-[#001E00]'>You have no Seller account? <Link className='text-[#287DF3]' href='/sellerLogin/sellerRegister'>Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </NavicationLayout>
    );
};

export default Login;