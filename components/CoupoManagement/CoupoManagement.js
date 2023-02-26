import Image from "next/image";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";


const CoupoManagement = () => {
    return (
        <div>
            <div className="max-w-[1426px]">
                <div>
                    <div className="text-lg breadcrumbs text-[#686868]">
                        <ul>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Tax & Offers </a>
                            </li>
                            <li className="text-[#001E00] font-semibold ">
                                Coupon Management
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[#FB641B] font-semibold text-2xl">
                            Coupon Management
                        </h1>
                    </div>
                </div>

                <div className="mt-[32px] ">
                    <Link href='availablecoupon'>
                        <button className="bg-[#FB641B]  flex rounded-[8px] justify-center gap-[8px] w-[200px] h-[48px] items-center">
                            <FaPlusCircle className="text-white bg-[#FB641B]"></FaPlusCircle>
                            <p className="text-[#FFFFFF] font-[500] text-[16px]">Add New Coupon</p>
                        </button></Link>

                </div>

                <div className="mt-[16px]">
                    <div className="rounded-[4px] shadow-small grid lg:grid-cols-10  md:grid-cols-5 grid-cols-3  justify-center  items-center  h-[48px] bg-[#FFFFFF] max-w-[1426px]">


                        <div className="relative" >
                            <div className="text-center text-[#001E00] xl:text-[16px] lg:text-[1vw]">
                                <p>
                                    Image
                                </p>
                            </div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                        </div>
                        <div className="relative" >
                            <div className="text-center  text-[#001E00] xl:text-[16px] lg:text-[1vw]">
                                <p>
                                    Coupon Title
                                </p>
                            </div>
                            <div className="absolute  right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                        </div>
                        <div className="relative" >
                            <div className="text-center text-[#001E00] xl:text-[16px] lg:text-[1vw]">
                                <p>
                                    Coupon Code
                                </p>
                            </div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                        </div>
                        <div className="relative" >
                            <div className="text-center text-[#001E00] xl:text-[16px] lg:text-[1vw]">
                                <p>
                                    Discount (%)
                                </p>
                            </div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                        </div>
                        <div className="relative" >
                            <div className="text-center text-[#001E00] xl:text-[16px] lg:text-[1vw]">
                                <p>
                                    Coupon Point
                                </p>
                            </div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                        </div>
                        <div className="relative" >
                            <div className="text-center text-[#001E00] xl:text-[16px] lg:text-[1vw]">
                                <p>
                                    Used Point
                                </p>
                            </div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                        </div>
                        <div className="relative" >
                            <div className="text-center text-[#001E00] xl:text-[16px] lg:text-[1vw]">
                                <p>
                                    Start Date
                                </p>
                            </div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                        </div>
                        <div className="relative" >
                            <div className="text-center text-[#001E00] xl:text-[16px] lg:text-[1vw]">
                                <p>
                                    End Date
                                </p>
                            </div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                        </div>
                        <div className="relative" >
                            <div className="text-center text-[#001E00] xl:text-[16px] lg:text-[1vw]">
                                <p>
                                    Status
                                </p>
                            </div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                        </div>
                        <div className="relative" >
                            <div className="text-center text-[#001E00] xl:text-[16px] lg:text-[1vw]">
                                <p>
                                    Action
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[16px]">
                        <div className="bg-white max-w-[1426px] justify-center text-center items-center border-b grid lg:grid-cols-10 border-[#B7B7B7] text-[#001E00]">
                            <div className="m-[10px] flex justify-center">
                                <Image width={68} height={68} src='/image 369.png' alt="" />
                            </div>
                            <p className=" 2xl:px-6 2xl:py-4 font-medium xl:text-[16px] lg:text-[1vw] whitespace-nowrap">
                                50% Discount
                            </p>
                            <p className=" font-medium xl:text-[16px] lg:text-[1vw] whitespace-nowrap">SAVE50</p>
                            <p className=" font-medium xl:text-[16px] lg:text-[1vw] whitespace-nowrap">50%</p>
                            <p className="font-medium xl:text-[16px] lg:text-[1vw] whitespace-nowrap">100</p>
                            <p className=" font-medium xl:text-[16px] lg:text-[1vw] whitespace-nowrap">00</p>
                            <p className=" font-medium xl:text-[16px] lg:text-[1vw] whitespace-nowrap">25 Feb 2023</p>
                            <p className=" font-medium xl:text-[16px] lg:text-[1vw] whitespace-nowrap">25 May 2023</p>
                            <p className=" font-medium xl:text-[16px] lg:text-[1vw] whitespace-nowrap text-[#0BD838]">Active</p>

                            <div className="flex justify-center gap-[5px] items-center">
                                <input type="checkbox" className="toggle toggle-sm" />
                                <p className="xl:text-[16px] lg:text-[1vw]">off</p>
                            </div>


                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoupoManagement;