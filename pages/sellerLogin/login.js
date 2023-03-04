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
    const [check, setCheck] = useState(false);

    const [loginUser, { data, isLoading, error }] = useLoginUserMutation();
    const [formError, setError] = useState('');
    const [cookies, setCookie] = useCookies(['banglarBigStore']);
    const router = useRouter();
    useEffect(() => {

        if (data) {
            setError('');
            setCookie('banglarBigStore', data?.token, { path: '/' });
            if (router?.query?.from) router.push(router.query?.from);
            // router.push('/account/profile')
        }
    }, [data, error, cookies, setCookie, router]);


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
                    <div className='  max-w-[1500px] md:flex  shadow-2xl rounded-2xl bg-white mt-10'>
                        <div className='px-[28px] md:px-[0px] md:w-[45%] h-auto w-full rounded-md'>
                            <Image alt="" className='md:h-[784px] md:w-[701px]' src={loginImg} />
                        </div>
                        <div className=' md:px-[86px] px-[28px] md:w-[55%] w-full '>
                            <div className='md:mt-[58px] md:block hidden'>
                                <Image alt="" src={logo} />

                            </div>
                            <form
                                onSubmit={handleForm}
                                className=' flex flex-col md:mt-[32px]'>
                                <label className='text-[24px] text-[#FB641B] md:mb-[12px] mt-[20px] font-semibold'>Login</label>
                                <p className='block  md:hidden sm:hidden mt-[24px] mb-2 text-[14px] text-[#001E00]'>Email Or Phone Number*</p>
                                <input
                                    name='email'
                                    className='input border focus:outline-none border-[#707070] md:mb-[32px] mb-[20px] bg-white h-[48px]  md:h-[72px] md:text-[16px]' type="text" placeholder='Enter Your Phone Number or Email' />
                                {
                                    formError && <p className='text-red-500 text-[15px] '>{formError}</p>
                                }
                                <p className='block  md:hidden sm:hidden mt-[20px] mb-2 text-[14px]  text-[#001E00]'>Password*</p>
                                <input
                                    name='pass'
                                    className='input focus:outline-none border border-[#707070]  md:h-[72px] md:text-[16px]' type={check ? 'text' : 'password'} placeholder='******' />
                                <div className='flex justify-between mt-[12px] mb-[20px]'>
                                    <div className='flex gap-[12px] '>
                                        <input className='h[19px]  w-[19px] border border-[#686868]' onChange={e => setCheck(e.target.checked)} type="checkbox" />
                                        <p className='text-[#686868] font-[400] text-[16px]'>Show Passwords</p>
                                    </div>
                                    <Link href="/sellerLogin/forgetPassword">  <p className='text-[#287DF3] text-[16px] font font-[400] '>Forgot Password?</p></Link>
                                </div>

                                {
                                    error?.data?.message && <p className='text-red-500 text-[19px] mb-2 text-center '>{error?.data?.message}</p>
                                }

                                <Link href="/sellerLogin/sellerOtp">
                                    <button className='btn bg-[#FB641B] text-[18px] md:h-[72px]  text-white md:mt-[25px]'>Login</button></Link>
                                <span className='mx-auto text-[#FB641B] md:mt-[8px] text-[24px] mt-[20px]'>Or</span>

                            </form>


                            <div className='flex flex-col gap-6 md:mt-3  pb-[145px] md:pb-[50px] '>
                                <p className='mx-auto font-[400] md:text-[18px] text-[16px] text-[#001E00]'>You have no Seller account? <Link className='text-[#287DF3]' href='/registation'>Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </NavicationLayout>
    );
};

export default Login;