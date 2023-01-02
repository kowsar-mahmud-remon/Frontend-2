import ManageAccoutSideBar from "../../components/manageAccoutSideBar/manageAccoutSideBar";
import Navication from "../../components/Navication/Navication";
import Image from 'next/image';
import { useRouter } from "next/router";
import OrderNavbar from "../../components/OrderNavbar/OrderNavbar";
import OrdersProduct from "../../components/OrdersProduct/OrdersProduct";

const index = () => {

    const datas = [
        {
            id: '1', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        },
        {
            id: '2', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }
        ,
        {
            id: '3', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }
        ,
        {
            id: '4', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }
        ,
        {
            id: '5', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }
        ,
        {
            id: '6', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }
        ,
        {
            id: '7', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        },
        {
            id: '8', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        },
        {
            id: '9', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        },
        {
            id: '10', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }

    ]
    console.log(datas.orderId)

    return (
        <div className="min-w-[1920px]">
            <Navication></Navication>

            <div className="flex  my-8 mx-5 gap-[55px] xl:mx-12">
                <div className="ml-[300px]">
                    <ManageAccoutSideBar></ManageAccoutSideBar>
                </div>
                <div >
                    <div className="mr-[300px]">
                        <div>
                            <h1 className="text-[#FB641B] text-[24px] font-semibold">My Orders</h1>
                        </div>

                        <div className="mt-[32px]">
                            <OrderNavbar></OrderNavbar>
                            <hr />
                        </div>
                        <div className="mt-[16px]">
                            <div className="w-[924px] h-[80px] rounded-[8px] bg-[#FFFFFF] shadow-lg">
                                <div className=" w-full max-w-xs mt-4 gap-[16px] flex ">
                                    <p className="label mt-[25px] ml-[24px] mb-[30px] text-[16px]"> <span className="label-text">Show:</span></p>
                                    <select
                                        className="h-[48px] select input-bordered mt-[16px] w-[169px] font-normal text-[16px] rounded-[4px] border-[#707070] ">
                                        <option>Last 5 Orders</option>
                                        <option>Last 10 Orders</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* <div className="mt-[16px]">
                            <div className="w-[924px] h-[149px] rounded-[8px] bg-[#FFFFFF] shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div className="m-[16px]">
                                        <p ><span className="text-[16px] font-bold text-black">Order</span> <span className="text-[#287DF3]">#123234343</span></p>
                                        <p>Placed On 21 Dec 2022 10:21:00</p>
                                    </div>
                                    <p className="text-[#287DF3] text-[16px] mr-[19px]">MANAGE</p>
                                </div>
                                <hr />
                                <div className="flex justify-between ">
                                    <div className="flex ml-[56px] mt-[16px] mb-[16px] gap-[16px]">
                                        <Image src="/image 8.png" width="57" height="46" alt=""></Image>
                                        <p>Tomato(Local) 500+30 gm</p>
                                    </div>
                                    <p className="mt-[29px] mb-[30px]">Oty: 1</p>
                                    <p className="mt-[29px] w-[66px] h-[18px] bg-[#F2F3F7] rounded-[14px] text-xs text-center mb-[30px]">Delivered</p>
                                    <p className="mt-[29px] mb-[30px] mr-[19px]">Delivered on 21 Dec 2022</p>
                                </div>
                            </div>
                        </div> */}
                        <div>
                            {
                                datas.map(data => <OrdersProduct key={data.id} data={data}></OrdersProduct>)
                            }
                        </div>
                        {/* <div className="mt-[16px]">
                            <div className="w-[924px] h-[149px] rounded-[8px] bg-[#FFFFFF] shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div className="m-[16px]">
                                        <p ><span className="text-[16px] font-bold text-black">Order</span> <span className="text-[#287DF3]">#123234343</span></p>
                                        <p>Placed On 21 Dec 2022 10:21:00</p>
                                    </div>
                                    <p className="text-[#287DF3] text-[16px] mr-[19px]">MANAGE</p>
                                </div>
                                <hr />
                                <div className="flex justify-between ">
                                    <div className="flex ml-[56px] mt-[16px] mb-[16px] gap-[16px]">
                                        <Image src="/image 8.png" width="57" height="46" alt=""></Image>
                                        <p>Tomato(Local) 500+30 gm</p>
                                    </div>
                                    <p className="mt-[29px] mb-[30px]">Oty: 1</p>
                                    <p className="mt-[29px] w-[66px] h-[18px] bg-[#F2F3F7] rounded-[14px] text-xs text-center mb-[30px]">Delivered</p>
                                    <p className="mt-[29px] mb-[30px] mr-[19px]">Delivered on 21 Dec 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[16px]">
                            <div className="w-[924px] h-[149px] rounded-[8px] bg-[#FFFFFF] shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div className="m-[16px]">
                                        <p ><span className="text-[16px] font-bold text-black">Order</span> <span className="text-[#287DF3]">#123234343</span></p>
                                        <p>Placed On 21 Dec 2022 10:21:00</p>
                                    </div>
                                    <p className="text-[#287DF3] text-[16px] mr-[19px]">MANAGE</p>
                                </div>
                                <hr />
                                <div className="flex justify-between ">
                                    <div className="flex ml-[56px] mt-[16px] mb-[16px] gap-[16px]">
                                        <Image src="/image 8.png" width="57" height="46" alt=""></Image>
                                        <p>Tomato(Local) 500+30 gm</p>
                                    </div>
                                    <p className="mt-[29px] mb-[30px]">Oty: 1</p>
                                    <p className="mt-[29px] w-[66px] h-[18px] bg-[#F2F3F7] rounded-[14px] text-xs text-center mb-[30px]">Delivered</p>
                                    <p className="mt-[29px] mb-[30px] mr-[19px]">Delivered on 21 Dec 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[16px]">
                            <div className="w-[924px] h-[149px] rounded-[8px] bg-[#FFFFFF] shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div className="m-[16px]">
                                        <p ><span className="text-[16px] font-bold text-black">Order</span> <span className="text-[#287DF3]">#123234343</span></p>
                                        <p>Placed On 21 Dec 2022 10:21:00</p>
                                    </div>
                                    <p className="text-[#287DF3] text-[16px] mr-[19px]">MANAGE</p>
                                </div>
                                <hr />
                                <div className="flex justify-between ">
                                    <div className="flex ml-[56px] mt-[16px] mb-[16px] gap-[16px]">
                                        <Image src="/image 8.png" width="57" height="46" alt=""></Image>
                                        <p>Tomato(Local) 500+30 gm</p>
                                    </div>
                                    <p className="mt-[29px] mb-[30px]">Oty: 1</p>
                                    <p className="mt-[29px] w-[66px] h-[18px] bg-[#F2F3F7] rounded-[14px] text-xs text-center mb-[30px]">Delivered</p>
                                    <p className="mt-[29px] mb-[30px] mr-[19px]">Delivered on 21 Dec 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[16px]">
                            <div className="w-[924px] h-[149px] rounded-[8px] bg-[#FFFFFF] shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div className="m-[16px]">
                                        <p ><span className="text-[16px] font-bold text-black">Order</span> <span className="text-[#287DF3]">#123234343</span></p>
                                        <p>Placed On 21 Dec 2022 10:21:00</p>
                                    </div>
                                    <p className="text-[#287DF3] text-[16px] mr-[19px]">MANAGE</p>
                                </div>
                                <hr />
                                <div className="flex justify-between ">
                                    <div className="flex ml-[56px] mt-[16px] mb-[16px] gap-[16px]">
                                        <Image src="/image 8.png" width="57" height="46" alt=""></Image>
                                        <p>Tomato(Local) 500+30 gm</p>
                                    </div>
                                    <p className="mt-[29px] mb-[30px]">Oty: 1</p>
                                    <p className="mt-[29px] w-[66px] h-[18px] bg-[#F2F3F7] rounded-[14px] text-xs text-center mb-[30px]">Delivered</p>
                                    <p className="mt-[29px] mb-[30px] mr-[19px]">Delivered on 21 Dec 2022</p>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default index;