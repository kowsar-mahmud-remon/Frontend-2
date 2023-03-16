import React, { useEffect, useState } from 'react';
import NavicationLayout from '../../layouts/NavicationLayout';
import fbLogo from '../../assets/images/social_logos/Facebook logo.png';
import googleLogo from '../../assets/images/social_logos/google.png';
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import AsyncSelect from 'react-select/async';
import { gender, days, months, years } from '../../assets/DB/fieldData';


import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useAddUserMutation } from '../../features/auth/authApi';
import { useSelector } from 'react-redux';

import { useCookies } from 'react-cookie';

import { useRouter } from 'next/router';


const Registation = () => {


    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({});
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const [addUser, { isLoading, isError, data, error: registrationError }] = useAddUserMutation();
    const [cookies, setCookie] = useCookies(['banglarBigStore']);
    const filterColors = (inputValue, labelValue) => {
        return labelValue.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const router = useRouter();

    useEffect(() => {
        if (data) {
            setCookie('banglarBigStore', data?.token, { path: '/' });
            router.push('/account/profile');
        }
        if (registrationError) console.log(registrationError);
    }, [data, registrationError, setCookie, router]);

    const promiseOptions = (inputValue, lableValue) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(filterColors(inputValue, lableValue));
            }, 1000);
        });

    const onSubmit = data => {

        const { confirm_password, emailOrPhone, lastName, firstName, password } = data || {};


        let email, phone;

        const phnRegEx = /^(?:\+?88|0088)?01[15-9]\d{8}$/;
        // checking email 
        if (emailOrPhone) {
            const isEmail =
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(emailOrPhone);
            if (isEmail) {
                email = emailOrPhone;
            }
            if (!isEmail) {
                const isPhone = phnRegEx.test(emailOrPhone);
                if (isPhone) {
                    phone = emailOrPhone;
                }
            }
        }
        addUser({
            phone,
            email,
            password,
            firstName,
            lastName,
        });
    };

    return (
        <NavicationLayout>
            <div className=' flex  justify-center '>
                <div className='w-[80%]'>
                    <div className='md:mt-[130px] '>
                        <p className='text-[#FB641B] font-semibold md:text-[24px] mb-[32px] text-[18px] mt-[72px] ml-6 md:ml-0'>Register Your Banglar Big Store Account</p>
                    </div>
                    <div className=' mt-10 shadow-small rounded-2xl bg-white  max-w-[1500px]'>
                        <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className='flex  py-10 flex-col md:flex-row mx-7 md:mx-7 lg:mx-10  xl:mx-20 md:gap-14 lg:gap-20  '>
                            <div className='flex flex-col gap-6 md:w-[50%] '>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[#001E00] text-[16px] mb-2'>Email Or Phone Number*</label>
                                    <input
                                        autoComplete="off"
                                        className='input border border-[#686868] text-[#686868] text-[1vw] focus:outline-none '
                                        type="text"
                                        name="email/phone"
                                        placeholder='Email Or Phone Number'
                                        {...register("emailOrPhone", {
                                            required: 'Email Or Phone Number is required',

                                            validate: value => {
                                                const phnRegEx = /^(?:\+?88|0088)?01[15-9]\d{8}$/;
                                                // checking email 
                                                if (value) {
                                                    const isEmail =
                                                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(value);
                                                    if (isEmail) {

                                                        setValue('email', value);
                                                        return;
                                                    }
                                                    if (!isEmail) {
                                                        const isPhone = phnRegEx.test(value);

                                                        if (isPhone) {

                                                            setValue('phone', value);
                                                            return;
                                                        }
                                                        if (!isPhone) {
                                                            return 'Phone or Email is required';
                                                        }
                                                    } else {
                                                        return true;
                                                    }
                                                }

                                            }
                                        })}
                                    />
                                    <input className='hidden' type="text"  {...register("email",)} />
                                    <input className='hidden' type="text"  {...register("phone",)} />
                                    {
                                        errors?.emailOrPhone?.message && <p className='text-red-700/100'>{errors?.emailOrPhone?.message}</p>
                                    }
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[#001E00] text-[16px] mb-2' >Password*</label>
                                    <div className='relative w-[100%]'>
                                        <input
                                            autoComplete="off"
                                            className='input pr-[50px] w-[100%]  border border-[#686868] focus:outline-none text-[#686868] text-[1vw]'
                                            type={showPassword ? "text" : "password"}
                                            placeholder='Minimum 6 Characters with a number And a letter'
                                            {...register("password", {
                                                minLength: {
                                                    value: 6,
                                                    message: 'Must be 6 characters or longer'
                                                },
                                                validate: value => {

                                                    const passReg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
                                                    return !passReg.test(value) ? "Password must be greater than 6 character, with at least a symbol, upper and lower case letters and a number" : true;
                                                }
                                            })}
                                        />
                                        {/* <div className='flex gap-[12px] mt-2 '>
                                            <input className='h[19px] w-[19px] border border-[#686868]' onChange={e => setCheck(e.target.checked)} type="checkbox" />
                                            <p className='text-[#686868] text-[16px]'>Show Passwords</p>
                                        </div> */}
                                        {
                                            !showPassword ? <BiHide onClick={() => setShowPassword(!showPassword)} className='h-[25px] w-[25px] absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer' /> :
                                                <BiShow onClick={() => setShowPassword(!showPassword)} className='h-[25px] w-[25px] absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer' />
                                        }
                                    </div>
                                    {
                                        errors?.password?.message && <p className='text-red-700/100'>{errors?.password?.message}</p>
                                    }

                                </div>
                                <div className='flex flex-col gap-2 '>
                                    <label className='text-[#001E00] text-[16px] mb-2' >Confirm Password*</label>
                                    <div className='relative w-[100%]'>
                                        <input
                                            autoComplete="off"
                                            className='input pr-[50px] w-[100%] border focus:outline-none border-[#686868] text-[#686868] text-[1vw]'
                                            type={showPassword ? "text" : "password"}
                                            placeholder='Minimum 6 Characters with a number And a letter'
                                            {...register("confirm_password", {
                                                required: true,
                                                validate: (val) => {
                                                    if (watch('password') !== val) {
                                                        return "Your passwords do no match";
                                                    }
                                                },
                                            })}
                                        />

                                        {
                                            !showPassword ? <BiHide onClick={() => setShowPassword(!showPassword)} className='h-[25px] w-[25px] absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer' /> :
                                                <BiShow onClick={() => setShowPassword(!showPassword)} className='h-[25px] w-[25px] absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer' />
                                        }

                                    </div>
                                    {
                                        errors?.confirm_password?.message && <p className='text-red-700/100'>{errors?.confirm_password?.message}</p>
                                    }

                                </div>
                                <div className='md:flex lg:flex gap-3'>
                                    <div className='mb-3'>
                                        <label className='text-[#001E00] text-[16px] '>First Name*</label>
                                        <input
                                            autoComplete="off"
                                            {...register("firstName", {
                                                required: 'First Name is Required',

                                            })}
                                            className='input border focus:outline-none border-[#686868] text-[#686868] text-[1vw] w-full mt-[8px]' type="text" placeholder='First Name' />
                                        {
                                            errors?.firstName?.message && <p className='text-red-700/100'>{errors?.firstName?.message}</p>
                                        }
                                    </div>
                                    <div>
                                        <label className='text-[#001E00] text-[16px] mb-2'>Last Name*</label>
                                        <input
                                            autoComplete="off"
                                            {...register("lastName", {
                                                required: 'Last name is required',


                                            })}
                                            className='input border focus:outline-none border-[#686868] text-[#686868] text-[1vw] w-full mt-[8px]' type="text" placeholder='Last Name' />
                                        {
                                            errors?.lastName?.message && <p className='text-red-700/100'>{errors?.lastName?.message}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-6 md:w-[50%]'>
                                <div className='flex gap-2 mt-6 lg:mt-0 '>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <label >Birthday</label>
                                        <div className='flex'>
                                            {/* <input
                                        autoComplete='off' className='min-input border-r-[1px] border-[#707070]' type="number" placeholder='Months' />
                                        <input
                                        autoComplete='off' className='min-input border-r-[1px] border-[#707070]' type="number" placeholder='Day' /> */}
                                            {/* Cinput
                                        autoComplete='off' className='min-input' type="number" placeholder='Year' /> */}
                                            <AsyncSelect className='w-full border border-[#001E00] ' cacheOptions defaultOptions value={{ label: 'Months' }} loadOptions={(e) => promiseOptions(e, months)} />
                                            <AsyncSelect className='w-full border border-[#001E00] ' cacheOptions defaultOptions value={{ label: 'Day' }} loadOptions={(e) => promiseOptions(e, days)} />

                                            <AsyncSelect className='w-full border  border-[#001E00]' cacheOptions defaultOptions value={{ label: 'Year' }} loadOptions={(e) => promiseOptions(e, years)} />


                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 w-[155px]'>
                                        <label >Gender</label>
                                        {/* <input
                                    autoComplete='off' className='min-input border-[1px] border-[#707070] rounded' type="number" placeholder='Months' /> */}
                                        <AsyncSelect className=' border border-[#001E00] rounded-md' cacheOptions defaultOptions value={{ label: 'Select' }} loadOptions={(e) => promiseOptions(e, gender)} />
                                    </div>
                                </div>
                                <button
                                    disabled={isLoading}
                                    type='submit' className='btn bg-[#FB641B] hover:bg-[#FB641B]  text-[18px] md:h-[3.7vw]  text-white md:mt-[1vw]'>
                                    {
                                        isLoading ? 'Please Wait.....' : 'Register'
                                    }
                                </button>
                                <span className='mx-auto text-[#FB641B]'>Or</span>
                                <div className='w-full flex  items-center gap-4 mt-[16px] mb-[1vw]'>
                                    <div className='w-1/2'>
                                        <button className='btn bg-[#3B5998] hover:bg-[#3B5998] text-white md:text-[18px]  text-[15px]  md:h-[3.7vw] h-[48px] flex-nowrap'>
                                            <Image className='h-[27px] w-[28px]' alt="" src={fbLogo} />
                                            Facebook
                                        </button>
                                    </div>
                                    <div className='w-1/2'>
                                        <button className='btn bg-[#D34836] hover:bg-[#D34836] text-white md:text-[18px] md:h-[3.7vw]  text-[15px] h-[48px]  flex-nowrap'>
                                            <Image className='h-[27px] w-[28px] ' alt="" src={googleLogo} />
                                            Google
                                        </button>
                                    </div>
                                </div>
                                {/* <div className='flex flex-col pb-16'>
                                    <div className='flex flex-col sm:flex-row md:flex-col xl:flex-row gap-3 xl:gap-6 pb-16'>
                                        <button className='btn bg-[#3B5998] h-[40px] sm:h-[50px] xl:h-[60px] text-white'>
                                            <Image src={fbLogo} alt="img" />
                                            Facebook
                                        </button>
                                        <button className='btn bg-[#D34836] h-[40px] sm:h-[50px] xl:h-[60px] text-white'>
                                            <Image src={googleLogo} alt="img" />
                                            Google
                                        </button>
                                    </div>
                                    <p className='mx-auto'>Already have an account? <Link className='text-blue-600/100' href='/login'>Login</Link></p>
                                </div> */}
                                <div className='flex flex-col gap-6 md:mt-3  pb-[145px] md:pb-[50px] '>
                                    <p className='mx-auto font-semibold md:text-[18px] text-[16px] text-[#001E00]'>Already have an account? <Link className='text-[#287DF3]' href='/login'>Login</Link></p>
                                </div>
                            </div>

                        </form>
                        <div>
                            {
                                registrationError?.message && <p className='text-red-700/100'>{registrationError?.message}</p>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </NavicationLayout>
    );
};

export default Registation;