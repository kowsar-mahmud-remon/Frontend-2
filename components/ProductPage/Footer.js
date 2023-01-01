import Image from 'next/image'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import banglaLogo from '../../assets/images/product_page/banglar.png'

const Footer = () => {
    return (
        <div className="mt-16 ">
            <div className="divider text-[#686868] text-lg"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 shadow-t-xl gap-10 max-w-screen-xl mx-auto text-center md:text-left md:ml-10 lg:text-left">
                <div className="">
                    <Image className='ml-20 md:ml-0 lg:ml-0' src={banglaLogo} width="200" height="250" alt="banglar big store"></Image>
                    <p className="p-10 md:p-0 lg:p-0">We are gradually introducing a new set of campaign objectives in Banglar Big Bazar. While some objective names and campaign creation steps are changing, all of the same functionality will be available.</p>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold mb-3">About Us</span>
                    <Link href="">About BBS</Link>
                    <Link href="">Contact Us</Link>
                    <Link href="">Investors</Link>
                    <Link href="">News</Link>
                    <Link href="">Careers</Link>
                    <Link href="">Banlarbigstore.com Blog</Link>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold mb-3">Customer Care</span>
                    <Link href="">FAQ</Link>
                    <Link href="">How to Buy</Link>
                    <Link href="">Returns & Refunds</Link>
                    <Link href="">Your Account</Link>
                    <Link href="">Returns & replacements</Link>
                    <Link href="">Payment Terms</Link>
                    <Link href="">Terms & Condition</Link>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold mb-3">Sell On Banglar Big Store</span>
                    <Link href="">Registration</Link>
                    <Link href="">Learn to Sell</Link>
                    <Link href="">Sell products on BBS</Link>
                    <Link href="">Sell on BBS Business</Link>
                    <Link href="">Supplier memberships</Link>
                    <Link href="">Terms and Ruls</Link>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold mb-3">Earn With Banglar Big Store</span>
                    <Link href="">Start Selling</Link>
                    <Link href="">Join The Affiliate Program</Link>
                    <Link href="">Drop Shipping</Link>
                    <Link href="">Advertise Your Products</Link>
                </div>
            </div>

            <div className='flex mt-5 w-1/5 gap-5 mx-auto text-lg text-'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
                <FaYoutube />
            </div>

            <div className="divider text-[#686868] text-lg"></div>
            <p className="text-center pb-5 md:px-10">Copyright © 2022 Banglar Big Store All Rights Reserved, Accessibility, User Agreement, Privacy, Cookies, Do not sell my personal information and AdChoice, Developed By Ameliasoft.</p>
        </div>
    );
};

export default Footer;