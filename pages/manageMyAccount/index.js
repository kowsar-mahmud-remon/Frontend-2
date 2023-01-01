import ManageAccoutSideBar from "../../components/manageAccoutSideBar/manageAccoutSideBar";
import Navication from "../../components/Navication/Navication";
import Image from 'next/image';

const manageMyAccount = () => {
    return (


        <div>
            <Navication></Navication>

            <div className="flex  my-8 mx-5 gap-14 xl:mx-12">
                <div>
                    <ManageAccoutSideBar></ManageAccoutSideBar>
                </div>
                <div className="">
                    <div>
                        <div>
                            <h1 className="text-[#FB641B] text-[24px] font-semibold">Manage My Account</h1>
                        </div>
                        <div className="flex gap-6 py-8">
                            <div className="card w-[335px] h-[223px]  bg-base-100 shadow-lg">
                                <div className="card-body px-4 py-4">
                                    <h1 className="font-bold text-[18px]">Personal Profile | <span className="text-[#287DF3] text-[18px]">Edit</span></h1>
                                    <ul>
                                        <li>Abdul Karim</li>
                                        <li>abdulkorim@gmail.com</li>
                                        <li>Subscribe to outer Newsletter</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card w-[565px] h-[223px]   bg-base-100 shadow-lg">
                                <div className="flex">
                                    <div className="px-4 py-4">
                                        <h1 className="font-bold text-[18px]">Address Book | <span className="text-[#287DF3] text-[18px]">Edit</span></h1>
                                        <p>DEFAULT SHIPPING ADDRESS</p>
                                        <p className="font-bold text-[16px]">Abdul Karim</p>
                                        <ul>
                                            <li>Ramgonj Tower 16/14,</li>
                                            <li>Giridhara,Matuil,Kodomtali</li>
                                            <li>Dhaka-1362</li>
                                            <li>+88 012 342 450 45</li>
                                        </ul>
                                    </div>
                                    <div className="divider  divider-horizontal"></div>
                                    <div className="py-4">
                                        <p>DEFAULT SHIPPING ADDRESS</p>
                                        <p className="font-bold text-[16px]">Abdul Karim</p>
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
                        <div>
                            <div className="card shadow-lg rounded-lg">
                                <p className="font-bold text-[16px] py-4 px-4">Resent Orders</p>
                                <table className="table w-full ">


                                    <thead>

                                        <tr className="bg-[#F2F2F2]">
                                            <th className="text-[#686868]">Order#</th>
                                            <th className="text-[#686868]">Placed On</th>
                                            <th className="text-[#686868]">Items</th>
                                            <th className="text-[#686868]">Total</th>
                                            <th className="text-[#686868]"></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>

                                            <td className="text-[#686868]">123123123424</td>
                                            <td className="text-[#686868]">12/12/2022</td>
                                            <td className="text-[#686868]"><Image src="/image 8.png" width="43" height="34" alt=""></Image></td>
                                            <td className="text-[#686868]">Tk. 60</td>
                                            <td className="text-[#287DF3]">Mange</td>
                                        </tr>
                                        {/* <tr>

                                            <td>123123123424</td>
                                            <td>12/12/2022</td>
                                            <td>Blue</td>
                                            <td>Tk. 60</td>
                                            <td>Mange</td>
                                        </tr>

                                        <tr>

                                            <td>123123123424</td>
                                            <td>12/12/2022</td>
                                            <td>Blue</td>
                                            <td>Tk. 60</td>
                                            <td>Mange</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default manageMyAccount;