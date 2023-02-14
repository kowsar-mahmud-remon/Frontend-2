import Image from 'next/image'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import banglaLogo from '../../assets/images/product_page/banglar.png'
import style from '../../styles/componentsStyles/Footer.module.css'

const Footer = () => {
    return (
        <div className={`mt-16 ${style.footer_top}  `}>

            <div className="flex gap-[40px]   max-w-screen-xl mx-auto text-center md:text-left pt-[32px] md:px-[100px] ">
                <div className=" mr-[40px]">
                    <Image className='ml-20 md:ml-[-3px] mb-[16px]' src={banglaLogo} width="200" height="250" alt="banglar big store"></Image>
                    <p className="p-10 md:p-0 lg:p-0 text-[12px] text-[#686868] w-[264px]">We are gradually introducing a new set of campaign objectives in Banglar Big Bazar. While some objective names and campaign creation steps are changing, all of the same functionality will be available.</p>
                </div>
                <div className="flex flex-col  text-[12px] text-[#686868] mt-[32px]">
                    <span className="text-[16px] font-semibold text-[#001E00]  mb-3">About Us</span>
                    <Link href="">About BBS</Link>
                    <Link href="">Contact Us</Link>
                    <Link href="">Investors</Link>
                    <Link href="">News</Link>
                    <Link href="">Careers</Link>
                    <Link href="">Banlarbigstore.com Blog</Link>
                </div>
                <div className="flex flex-col  text-[12px] text-[#686868] mt-[32px]">
                    <span className="text-[16px] font-semibold text-[#001E00]  mb-3">Customer Care</span>
                    <Link href="">FAQ</Link>
                    <Link href="">How to Buy</Link>
                    <Link href="">Returns & Refunds</Link>
                    <Link href="">Your Account</Link>
                    <Link href="">Returns & replacements</Link>
                    <Link href="">Payment Terms</Link>
                    <Link href="">Terms & Condition</Link>
                </div>
                <div className="flex flex-col  text-[12px] text-[#686868] mt-[32px]">
                    <span className="text-[16px] font-semibold text-[#001E00]  mb-3">Sell On Banglar Big Store</span>
                    <Link href="">Registration</Link>
                    <Link href="">Learn to Sell</Link>
                    <Link href="">Sell products on BBS</Link>
                    <Link href="">Sell on BBS Business</Link>
                    <Link href="">Supplier memberships</Link>
                    <Link href="">Terms and Ruls</Link>
                </div>
                <div className="flex flex-col  text-[12px] text-[#686868] mt-[32px]">
                    <span className="text-[16px] font-semibold text-[#001E00]  mb-3">Earn With Banglar Big Store</span>
                    <Link href="">Start Selling</Link>
                    <Link href="">Join The Affiliate Program</Link>
                    <Link href="">Drop Shipping</Link>
                    <Link href="">Advertise Your Products</Link>
                </div>
            </div>

            <div className='flex mt-[39px] w-1/5 gap-5 mx-auto text-lg mb-[32px]'>
                <FaFacebook className='text-[#026C51] h-[36px] w-[36px] ' />
                <FaInstagram className='text-[#026C51]  h-[36px] w-[36px]' />
                <FaTwitter className='text-[#026C51]  h-[36px] w-[36px]' />
                <FaLinkedin className='text-[#026C51]  h-[36px] w-[36px]' />
                <FaYoutube className='text-[#026C51]  h-[36px] w-[36px]' />
            </div>

            <div className="divider text-[#686868] text-lg mb-[16px]"></div>
            <p className=" flex justify-center text-[16px] text-[#001E00] font-[400] pb-[16px]">Copyright © 2022 Banglar Big Store All Rights Reserved, Accessibility, User Agreement, Privacy, Cookies, Do not sell my personal information and AdChoice, Developed By Ameliasoft.</p>
        </div>
    );
};

export default Footer;