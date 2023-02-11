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
    const [check, setCheck] = useState(false)

    const [loginUser, { data, isLoading, error }] = useLoginUserMutation()
    const [formError, setError] = useState('')
    const [cookies, setCookie] = useCookies(['banglarBigStore']);
    const router = useRouter()
    useEffect(() => {
    
        if (data) {
            setError('')
            setCookie('banglarBigStore', data?.token, { path: '/' });
            if(router?.query?.from) router.push(router.query?.from)
            // router.push('/account/profile')
        }
    }, [data, error, cookies, setCookie,router])
  

    const handleForm = (e) => {

        e.preventDefault();

        if (e.target.email.value.match(/^(?:(?:\+|00)88|01)?\d{11}$/)) {
            loginUser({
                phone: e.target.email.value,
                password: e.target.pass.value
            })
        }
        if (e.target.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            loginUser({
                email: e.target.email.value,
                password: e.target.pass.value
            })
        }
    }
   
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
                        <form
                            onSubmit={handleForm}
                            className=' flex flex-col gap-6 mt-10'>
                            <label className='text-red-600/100'>Login</label>
                            <input
                                name='email'
                                className='input border-2 border-gray-400' type="text" placeholder='Enter Your Phone Number or Email' />
                            {
                                formError && <p className='text-red-500 text-[15px] '>{formError}</p>
                            }
                            <input
                                name='pass'
                                className='input border-2 border-gray-400' type={check ? 'text' : 'password'} placeholder='Enter Your Password' />
                            <div className='flex justify-between'>
                                <div className='flex gap-1 '>
                                    <input onChange={e => setCheck(e.target.checked)} type="checkbox" />
                                    <p>Show Passwords</p>
                                </div>
                                <p className='text-blue-600/100 underline '>Forgot Password?</p>
                            </div>

                            {
                                error?.data?.message && <p className='text-red-500 text-[19px] mb-2 text-center '>{error?.data?.message}</p>
                            }

                            <button className='btn bg-[#FB641B] h-[45px] sm:h-[55px] xl:h-[70px] text-white'>Login</button>
                            <span className='mx-auto text-[#FB641B]'>Or</span>
                        </form>
                        <div className='flex flex-col gap-6 mt-6 pb-16 '>
                            <div className='w-full flex justify-between items-center gap-4 '>
                                <button className='btn bg-[#3B5998] text-white w-[220px] flex-nowrap'>
                                    <Image alt="" src={fbLogo} />
                                    Facebook
                                </button>
                                <button className='btn bg-[#D34836] text-white w-[220px] flex-nowrap'>
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