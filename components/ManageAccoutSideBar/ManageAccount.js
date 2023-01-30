import ManageAccoutSideBar from "../../components/ManageAccoutSideBar/ManageAccoutSideBar";
import Image from 'next/image';

export const ManageAccount = () => {
    return (

        <div className="">

            <div>
                <div >
                    <div className="lg:mr-[30px]">
                        <div>
                            <h1 className="text-[#FB641B] lg:text-[24px] font-semibold">Manage My Account</h1>
                        </div>
                        <div className="lg:flex lg:gap-6 lg:py-8">
                            <div className="card w-[250px] lg:w-[335px] lg:h-[223px]  bg-base-100 shadow-lg">
                                <div className="card-body lg:px-4 lg:py-4">
                                    <h1 className="font-bold lg:text-[18px]">Personal Profile | <span className="text-[#287DF3] lg:text-[18px]">Edit</span></h1>
                                    <ul>
                                        <li>Abdul Karim</li>
                                        <li>abdulkorim@gmail.com</li>
                                        <li>Subscribe to outer Newsletter</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:card w-[250px] lg:w-[565px] lg:h-[223px]   bg-base-100 shadow-lg">
                                <div className="lg:flex">
                                    <div className="lg:px-4 lg:py-4">
                                        <h1 className="font-bold lg:text-[18px]">Address Book | <span className="text-[#287DF3] lg:text-[18px]">Edit</span></h1>
                                        <p>DEFAULT SHIPPING ADDRESS</p>
                                        <p className="font-bold lg:text-[16px]">Abdul Karim</p>
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
                                        <p className="font-bold lg:text-[16px]">Abdul Karim</p>
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
                        <div className="">
                            <div className="card w-[250px] lg:w-full shadow-lg rounded-lg">
                                <p className="font-bold lg:text-[16px] lg:py-4 lg:px-4">Resent Orders</p>
                                <table className="table lg:w-full  ">


                                    <thead className="lg:w-full ">

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
