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



const Navication = () => {
    const [searchText, setSearchText] = useState("");
    const [recognitionStarted, setRecognitionStarted] = useState(false);
    const [recognitionFailed, setRecognitionFailed] = useState(false);
    const [recognitionColor, setRecognitionColor] = useState("#686868")

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

    const handleSideNav = () => {
        const sidNav = document.getElementById("sidNav")
        const pagesBody = document.getElementById("page-body")

        if (sidNav && pagesBody) {
            sidNav.classList.toggle("disable-sid-nav")
            pagesBody.classList.toggle("active-page-body")
        }
    }

    const handleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu")
        const mobileMenuBtn = document.getElementById("mobile-menu-btn")
        if (mobileMenu && mobileMenuBtn) {
            mobileMenu.classList.toggle("active-mobile-menu")
            mobileMenuBtn.classList.toggle("active-mobile-menu-btn")
        }
    }

    const handleVoice = () => {
        setRecognitionStarted(true);
    }


    return (
        <section className='shadow-md z-20 shadow-block-900 pb-2 relative'>
            <div className='w-[100%] h-[110px] bg-[#026C51] flex items-center justify-center '>
                <Image src={advertise} alt="img" className='w-[80%] max-w-[600px] h-[auto] ' />
            </div>
            <div className='flex items-center h-[80px] gap-3 px-[20px] lg:px-[40px] 2xl:px-[50px]  bg-[#ffffff] justify-between text-[#026C51]'>
                <div className='flex justify-center first-line:'>
                    <Link href="/">
                        <Image src={logo} alt="img" />
                        <Image src={logoDis} alt="img" />
                    </Link>
                    {/* <button onClick={handleSideNav} className='flex invisible md:visible w-[0px] md:w-[auto] absolute md:relative  items-center px-3 xl:px-8 font-semibold ml-3 gap-3 bg-[#e2dcdc] rounded-full' >
                        <RxDashboard />
                        <span className='w-[0px] xl:w-16 invisible xl:visible absolute xl:relative'>Categories</span>
                    </button> */}
                </div>
                {/* <div className={`${styles.searchWraper} flex h-[40px] bg-[#FFFFFF] border-solid border-2 border-[#026C51] rounded-full text-lg font-semibold overflow-hidden`}>
                    <div className='flex items-center border-r-[3px] border-[#026C51] my-1'>
                        <RiMapPinFill className='mx-4 text-lg ' />
                        <span className='text-[14px] xl:text-[16px]'>Use Your Current Location</span>
                        <IoIosArrowDown className='mr-5 text-lg' />
                    </div>
                    <div className='flex items-center ml-5'>
                        <input type="text" placeholder='Finding Your Product....' className=' w-[100%] border-none outline-none' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <BsFillMicFill className='mx-3 text-2xl' />
                    </div>
                    <button className='h-[36px] bg-green-500 px-5 text-white'>Search</button>
                </div> */}
                <div className={`${styles.navSearch}`}>
                    <div style={{ borderRight: "2px solid #026C51" }} className='flex items-center'>
                        <RiMapPinFill className='text-lg ml-[14px]' />
                        <span className='px-2 whitespace-nowrap'>Use your current location</span>
                        <IoIosArrowDown className='mr-[14px] text-lg' />
                    </div>
                    <div className='flex items-center w-full justify-between'>
                        <input className='pl-[16px]' value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Finding Your Product....' />
                        <BsFillMicFill onClick={() => handleVoice()} className={`mx-3 text-2xl cursor-pointer`} style={{ color: recognitionColor }} />
                    </div>
                    <button>
                        Search
                    </button>
                </div>
                <div className={` ${styles.nanMenu} flex item-center items-center`}>
                    <button className='flex items-center border-2 rounded-md border-[#001E00] py-1 px-4 text-sm xl:text-lg font-semibold'>
                        <Image src={supportIcon} alt="img" className="mt-[3px] mr-1 " />
                        Support
                    </button>
                    {/* <button className='flex item-center items-center mx-3'>
                        <Image src={flagBD} alt="img" />
                        Support
                    </button> */}
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
                <div className={`${styles.mobileMenuBtn}`}>
                    <button onClick={handleMobileMenu} className='border-2 border-[#0000004d] p-[3px] text-xl rounded' id='mobile-menu-btn'>
                        <GiHamburgerMenu />
                    </button>
                    <div className={`mobile-menu shadow-md shadow-block-900 `} id='mobile-menu'>
                        <button className='flex items-center border-2 w-[120px] rounded-md border-[#001E00] py-1 px-4 text-sm xl:text-lg font-semibold'>
                            <Image src={supportIcon} alt="img" className="mt-[3px] mr-1 " />
                            Support
                        </button>
                        <div className='flex item-center items-center'>
                            <Image src={flagBD} alt="img" />
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

            </div>
            <div className={`${styles.buttonSearchWraper} bg-[#FFFFFF]`}>
                <div className=' flex h-[40px] w-[90%] bg-[#FFFFFF] border-solid border-2 border-[#026C51] rounded-full  text-lg font-semibold overflow-hidden'>
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
        </section>
    );
};

export default Navication;