import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/componentsStyles/Navication.module.css';
import logo from '../../assets/images/logo/main_logo.png';
import logoDis from '../../assets/images/logo/logo_dic.png';
import flagBD from '../../assets/images/flag(BD).png';
import supportIcon from '../../assets/images/support_Icon.png';
import advertise from '../../assets/images/navication/add.png';

import Link from 'next/link';
import { RiMapPinFill } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import TopNavBar from '../TopNavBar/TopNavBar';
import ShoppingTypeNav from '../ShoppingTypeNav/ShoppingTypeNav';
import MobileNavBar from '../MobileNavBar/MobileNavBar';
import { useGetMeQuery } from '../../features/auth/authApi';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../../features/auth/authSlice';

const Navication = () => {

    const [searchText, setSearchText] = useState("");
    const [recognitionStarted, setRecognitionStarted] = useState(false);
    const [recognitionColor, setRecognitionColor] = useState("#686868")

    const [cookies, setCookie] = useCookies(['banglarBigStore']);
    console.log('cookies', cookies)
    const dispatch = useDispatch()
    const { data, isLoading, error } = useGetMeQuery({
        skip: cookies?.token ? false : true
    })

    useEffect(() => {
        if (cookies.token) dispatch(userLoggedIn({ token: cookies.token }))

    }, [dispatch, cookies])

    console.log('data', data)
    console.log('error', error)


    useEffect(() => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        if (recognitionStarted) {
            recognition.start();
            setRecognitionColor("#026C51");
        }
        recognition.addEventListener("result", (e) => {
            setRecognitionColor("#686868")
            setSearchText(e.results[0][0].transcript);
            setRecognitionStarted(false);
        })
    }, [recognitionStarted])



    const handleVoice = () => {
        setRecognitionStarted(true);
    }

    return (
        <section className='shadow-md hidden lg:block z-20 shadow-block-900 relative'>
            <TopNavBar />

            <div className='flex items-center h-[80px] gap-3 px-[20px] lg:px-[40px] 2xl:px-[50px]  bg-[#ffffff] justify-between text-[#026C51]'>
                <div className='flex justify-center first-line:'>
                    <Link href="/">
                        <Image src={logo} alt="img" />
                        <Image src={logoDis} alt="img" />
                    </Link>

                </div>

                <div className={`${styles.navSearch}`}>

                    <div className='flex items-center w-full justify-between'>
                        <input className='pl-[16px]' value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Finding Your Product....' />
                        <BsFillMicFill onClick={() => handleVoice()} className={`mx-3 text-2xl cursor-pointer`} style={{ color: recognitionColor }} />
                    </div>
                    <button>
                        Search
                    </button>
                </div>
                <div className={` ${styles.nanMenu} md:flex item-center items-center hidden`}>
                    <button className='flex items-center border-2 rounded-md border-[#001E00] py-1 px-4 text-sm xl:text-lg font-semibold'>
                        <Image src={supportIcon} alt="img" className="mt-[3px] mr-1 " />
                        Support
                    </button>

                    <div className='flex item-center items-center mx-3'>
                        <Image alt='' src={flagBD} />
                        <select className='bg-transparent'>
                            <option value="bn">BN</option>
                            <option value="bn">EN</option>
                        </select>
                    </div>
                    <Link href="/login" className='flex item-center '>
                        Login
                        <FaUserAlt className='m-[4px]' />
                    </Link>
                </div>


            </div>
            <div className={`${styles.buttonSearchWraper} bg-[#FFFFFF]`}>
                <div className=' flex h-[40px] w-[90%] bg-[#FFFFFF] border-solid border-2 border-[#026C51] rounded-full  text-lg font-semibold overflow-hidden '>
                    <div className='flex items-center border-r-[3px] w-[auto] border-[#026C51] text-[#026C51] my-1'>
                        <RiMapPinFill className='mx-1 xl:mx-4 text-[20px] sm:text-[30px] ' />
                        <span className='text-[12px] xl:text-[16px]'>Location</span>
                        <IoIosArrowDown className='mr-1 xl:mr-5 text-[20px] ' />
                    </div>
                    <div className='flex items-center w-[50%] ml-1 xl:ml-5'>
                        <input type="text" placeholder='Finding Your Product....' className=' border-none outline-none  w-[100%]' />
                    </div>
                    <div className='flex items-center ml-auto w-[auto]'>
                        <BsFillMicFill className='mx-1 xl:mx-3 text-md xl:text-2xl' />
                        <button className='bg-[green] h-[100%] text-[#fff] text-[12px] xl:text-[16px]x px-2 xl:px-5'>Search</button>
                    </div>
                </div>
            </div>
            <ShoppingTypeNav />
        </section>
    );
};

export default Navication;