import Image from "next/image";
import { FaEdit, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import CouponList from "../../components/SellerCoupon.js/CouponList";


const index = () => {

    const MENU_LIST = [
        { text: "Image" },
        { text: "Coupon Title" },
        { text: "Coupon Code" },
        { text: "Discount (%)" },
        { text: "Coupon Point" },
        { text: "Used Point" },
        { text: "Start Date" },
        { text: "End Date" },
        { text: "Status" },
        { text: "Action" },
    ];
    return (
        <div className="ml-[100px]">
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
                <button className="bg-[#FB641B] flex rounded-[8px] justify-center gap-[8px] w-[200px] h-[48px] items-center">
                    <FaPlusCircle className="text-white bg-[#FB641B]"></FaPlusCircle>
                    <p className="text-[#FFFFFF] font-[500] text-[16px]">Add New Coupon</p>
                </button>

            </div>

            <div className="mt-[16px]">
                <div className="rounded-[4px] shadow-small grid lg:grid-cols-10  md:grid-cols-5 grid-cols-3  justify-center  items-center  h-[48px] bg-[#FFFFFF] max-w-[1426px]">


                    <div className="relative" >
                        <div className="text-center text-[#001E00] text-[16px]">
                            <p>
                                Image
                            </p>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                    </div>
                    <div className="relative" >
                        <div className="text-center text-[#001E00] text-[16px]">
                            <p>
                                Coupon Title
                            </p>
                        </div>
                        <div className="absolute  right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                    </div>
                    <div className="relative" >
                        <div className="text-center text-[#001E00] text-[16px]">
                            <p>
                                Coupon Code
                            </p>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                    </div>
                    <div className="relative" >
                        <div className="text-center text-[#001E00] text-[16px]">
                            <p>
                                Discount (%)
                            </p>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                    </div>
                    <div className="relative" >
                        <div className="text-center text-[#001E00] text-[16px]">
                            <p>
                                Coupon Point
                            </p>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                    </div>
                    <div className="relative" >
                        <div className="text-center text-[#001E00] text-[16px]">
                            <p>
                                Used Point
                            </p>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                    </div>
                    <div className="relative" >
                        <div className="text-center text-[#001E00] text-[16px]">
                            <p>
                                Start Date
                            </p>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                    </div>
                    <div className="relative" >
                        <div className="text-center text-[#001E00] text-[16px]">
                            <p>
                                End Date
                            </p>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                    </div>
                    <div className="relative" >
                        <div className="text-center text-[#001E00] text-[16px]">
                            <p>
                                Status
                            </p>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                    </div>
                    <div className="relative" >
                        <div className="text-center text-[#001E00] text-[16px]">
                            <p>
                                Action
                            </p>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                    </div>

                </div>

                <div className="mt-[16px]">





                    <div className="bg-white max-w-[1426px] justify-center text-center items-center border-b grid lg:grid-cols-10 border-[#B7B7B7] text-[#001E00]">
                        <div className="px-6 py-4">
                            <Image width={68} height={68} src='/image 369.png' alt="" />
                        </div>
                        <p className=" px-6 py-4 font-medium whitespace-nowrap">
                            50% Discount
                        </p>
                        <p className=" font-medium whitespace-nowrap">SAVE50</p>
                        <p className=" font-medium whitespace-nowrap">50%</p>
                        <p className="font-medium whitespace-nowrap">100</p>
                        <p className=" font-medium whitespace-nowrap">00</p>
                        <p className=" font-medium whitespace-nowrap">25 Feb 2023</p>
                        <p className=" font-medium whitespace-nowrap">25 May 2023</p>
                        <p className=" font-medium whitespace-nowrap text-[#0BD838]">Active</p>

                        <div className="flex justify-center gap-[5px] items-center">
                            <input type="checkbox" className="toggle toggle-sm"  />
                            <p>off</p>
                        </div>


                    </div>


                </div>
            </div>
            
        </div>
    );
};

export default index;