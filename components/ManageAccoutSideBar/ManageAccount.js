import Image from "next/image";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

const ManageAccount = () => {
    const router = useRouter();
    return (
        <div className="">
            <div className="lg:block hidden">
                <div className=" ">
                    <div>
                        <h1 className="text-[#FB641B] text-[24px] font-semibold">
                            Manage My Account
                        </h1>
                    </div>
                    <div className="grid grid-cols-8 gap-6 py-8">
                        <div className="manageAccountBox col-span-3 w-full h-[223px]    bg-base-100 shadow-lg">
                            <div className=" px-4 py-4">
                                <h1 className="font-bold whitespace-nowrap text-[18px]">
                                    Personal Profile |{" "}
                                    <span className="text-[#287DF3] font-[400] text-[16px]">Edit</span>
                                </h1>
                                <ul className="text-[16px]">
                                    <li>Abdul Karim</li>
                                    <li>abdulkorim@gmail.com</li>
                                    <li className="text-[#287DF3] whitespace-nowrap">Subscribe to outer Newsletter</li>
                                </ul>
                            </div>
                        </div>
                        <div className="manageAccountBox  col-span-5  w-full h-[223px]   bg-base-100 shadow-lg">
                            <div className="grid grid-cols-9 ">
                                <div className=" p-[16px] col-span-4 ">
                                    <h1 className="font-bold  text-[18px] mb-2">
                                        Address Book |{" "}
                                        <span className="text-[#287DF3] font-[400] text-[16px]">Edit</span>
                                    </h1>
                                    <p className="mb-2 whitespace-nowrap text-[14px] text-[#686868]">
                                        DEFAULT SHIPPING ADDRESS
                                    </p>
                                    <p className="font-bold text-[16px] mb-2">Abdul Karim</p>
                                    <ul className="text-[16px]">
                                        <li>Ramgonj Tower 16/14,</li>
                                        <li>Giridhara,Matuil,Kodomtali</li>
                                        <li>Dhaka-1362</li>
                                        <li>+88 012 342 450 45</li>
                                    </ul>
                                </div>
                            
                                <div class=" col-span-1  text-center mx-auto w-0.5 h-[190px] mt-[15px] bg-[#707070] border-solid"></div>
                                <div className="col-span-4    mt-[52px] ">
                                    <p className="mb-2 whitespace-nowrap overflow-hidden text-[14px] text-[#686868]">
                                        DEFAULT SHIPPING ADDRESS
                                    </p>
                                    <p className="font-bold text-[16px] ">Abdul Karim</p>
                                    <ul className="text-[16px] mt-[8px]">
                                        <li className="whitespace-nowrap overflow-hidden">Bashundhara City Shopping</li>
                                        <li>Complex 3 No Tejturi Bazar</li>
                                        <li>West</li>
                                        <li>+88 012 342 450 45</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card w-full  shadow-lg rounded-lg">
                            <p className="font-bold text-[16px] py-4 px-4">Resent Orders</p>
                            <table className="table w-full text-[16px] ">
                                <thead className="w-full rounded-none">
                                    <tr className="bg-[#F2F2F2] rounded-none">
                                        <th className="text-[#686868] w-1/5">Order#</th>
                                        <th className="text-[#686868] w-1/5">Placed On</th>
                                        <th className="text-[#686868] w-1/5">Items</th>
                                        <th className="text-[#686868] w-1/5">Total</th>
                                        <th className="text-[#686868] w-1/5"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-[#686868]">123123123424</td>
                                        <td className="text-[#686868]">12/12/2022</td>
                                        <td className="text-[#686868]">
                                            <Image
                                                src="/image 6.png"
                                                width="43"
                                                height={34}
                                                alt=""
                                            ></Image>
                                        </td>
                                        <td className="text-[#686868]">Tk. 60</td>
                                        <td className="text-[#287DF3]">View</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="lg:hidden block">
                <div className="mt-[66px] m-[24px]">
                    <div>
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-[13px]"
                        >
                            <FaArrowLeft className=""></FaArrowLeft>
                            <h1 className="text-[20px]  font-[500] text-[#001E00]">
                                Manage My Profile
                            </h1>
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 py-4">
                        <div className="card w-full md:w-[360px] h-[148px]  bg-base-100 shadow-lg">
                            <div className="card-body px-4 py-4">
                                <h1 className="font-[600] text-[18px]">
                                    Personal Profile |{" "}
                                    <span className="text-[#287DF3] font-[400] text-[18px]">
                                        Edit
                                    </span>
                                </h1>
                                <ul>
                                    <li>Abdul Karim</li>
                                    <li>abdulkorim@gmail.com</li>
                                    <li className="text-[#287DF3]">
                                        Subscribe to outer Newsletter
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card w-full md:w-[360px] h-[391px]   bg-base-100 shadow-lg">
                            <div className="flex flex-col">
                                <div className="px-4 py-2">
                                    <h1 className="font-[600] text-[18px]">
                                        Address Book |{" "}
                                        <span className="text-[#287DF3] font-[400] text-[18px]">
                                            Edit
                                        </span>
                                    </h1>
                                    <p className=" mb-4  text-[#686868]">
                                        DEFAULT SHIPPING ADDRESS
                                    </p>
                                    <p className="font-[600] text-[16px] mb-1">Abdul Karim</p>
                                    <ul>
                                        <li>Ramgonj Tower 16/14,</li>
                                        <li>Giridhara,Matuil,Kodomtali</li>
                                        <li>Dhaka-1362</li>
                                        <li>+88 012 342 450 45</li>
                                    </ul>
                                </div>
                                <p className=" h-[0px] left-[24px]  border-[2px] border-solid  border-[#F2F2F2] w-full md:w-[360px] "></p>
                                <div className="py-4 ml-[16px]">
                                    <p className="mb-2 text-[#686868]">
                                        DEFAULT SHIPPING ADDRESS
                                    </p>
                                    <p className="font-[600] text-[16px] mb-1">Abdul Karim</p>
                                    <ul>
                                        <li>Bashundhara City Shopping</li>
                                        <li>Complex 3 No Tejturi Bazar</li>
                                        <li>West</li>
                                        <li>+88 012 342 450 45</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAccount;
