import React from 'react';
import NavicationLayout from '../../layouts/NavicationLayout';
import loginImg from '../../assets/images/securityImg.png';
import logo from '../../assets/images/logo/main_logo.png';
import logo_dic from '../../assets/images/logo/logo_dic.png';
import fbLogo from '../../assets/images/social_logos/Facebook logo.png';
import googleLogo from '../../assets/images/social_logos/google.png';

import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
    return (
        <NavicationLayout>
            <div className=' h-[100%] mx-[20px] md:mx-[50px] xl:mx-[150px] 2xl:mx-[210px] pt-10 pb-16'>
                <div>
                    <h6 className='text-[686868]'>Home/<span className='text-blue-600/100'>Login</span></h6>
                    <p className='text-red-600/100 font-semibold text-[16px] xl:text-[24px]'>Edit Your Banglar Big Bazar Account</p>
                </div>
                <div className='w-[100%] h-[750px] flex gap-[50px] shadow-2xl rounded-2xl bg-white mt-10'>
                    <div className='h-[100%] w-[100%]'>
                        <Image alt="" className='h-[100%]' src={loginImg} />
                    </div>
                    <div className='w-[100%] my-1 xl:my-auto pr-5 pl-5 sm:pr-16 xl:pr-[100px] sm:pl-16 '>
                        <div>
                            <Image alt="" src={logo} />
                            <Image alt="" src={logo_dic} />
                        </div>
                        <form className=' flex flex-col gap-6 mt-10'>
                            <label className='text-red-600/100'>Login</label>
                            <input className='input' type="text" placeholder='Enter Your Phone Number or Email' />
                            <input className='input ' type="password" placeholder='Enter Your Password' />
                            <div className='flex justify-between'>
                                <div className='flex gap-1 '>
                                    <input type="checkbox" />
                                    <p>Show Passowrd</p>
                                </div>
                                <p className='text-blue-600/100 underline '>Forgot Password?</p>
                            </div>
                            <button className='btn bg-[#FB641B] h-[45px] sm:h-[55px] xl:h-[70px] text-white'>Login</button>
                            <span className='mx-auto text-[#FB641B]'>Or</span>
                        </form>
                        <div className='flex flex-col gap-6 mt-6 pb-16'>
                            <div className='flex gap-5'>
                                <button className='btn bg-[#3B5998] text-white'>
                                    <Image alt="" src={fbLogo} />
                                    Facebook
                                </button>
                                <button className='btn bg-[#D34836] text-white'>
                                    <Image alt="" src={googleLogo} />
                                    Google
                                </button>
                            </div>
                            <p className='mx-auto'>You have no account? <Link className='text-blue-600/100' href='/registation'>Register</Link></p>
                        </div>
                    </div>
                </div>

            </div>
        </NavicationLayout>
    );
};

export default Login;