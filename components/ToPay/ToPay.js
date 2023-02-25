import Image from 'next/image';
import Link from 'next/link';
import img from '../../assets/images/image 7.png'
const ToPay = () => {
    const datas = [
        {
            id: "1",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: "/image 8.png",
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Payment pending",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "2",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: "/image 8.png",
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Payment pending",
            deliveredDate: "Estimated Delivered By 21 Dec 2022",
            taka: '40'
        },
        {
            id: "3",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: "/image 8.png",
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Payment pending",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "4",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: "/image 8.png",
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Payment pending",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "5",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: "/image 8.png",
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Payment pending",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "6",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: "/image 8.png",
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Payment pending",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "7",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: "/image 8.png",
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Payment pending",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "8",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: "/image 8.png",
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Payment pending",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "9",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: "/image 8.png",
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Processing",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "10",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: "/image 8.png",
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Processing",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
    ];
    return (
        <div className="mt-[20px]  ">
            {
                datas.map(data => {
                    return (
                        <div key={data.id} className='md:w-[92%]'>
                            <div className="mt-[16px] ">
                                <div className="w-[100%]  rounded-[8px] bg-[#FFFFFF] shadow-lg pt-[12px]">
                                    <div className="flex items-center justify-between md:mb-[16px]">
                                        <div className="mx-[16px] hidden md:block text-[15px] md:text-[16px] ">
                                            <p>
                                                <span className="md:text-[16px] text-[14px] font-bold text-black">Order</span>{" "}
                                                <span className="md:text-[#287DF3] text-[14px] md:text-[16px] ">#{data.orderId}</span>
                                            </p>
                                            <p className='text-[11px] md:text-[14px] text-[#686868] '>{data.orderDate}</p>

                                        </div>
                                        <p className="text-[#FB641B] hidden md:block text-[16px] mr-[19px]">Pay Now</p>
                                    </div>
                                    <hr className='hidden md:block border-[1px] border-[#686868]' />
                                    <div>
                                        <div className="flex justify-between md:items-center ">
                                            <div className=" flex md:ml-[56px] md:items-center  md:mt-[16px]  mt-[12px] md:mb-[16px] gap-[8px] md:gap-[16px]">
                                                <div>
                                                    <Image src={data.image} width="57" height="46" alt=""></Image>
                                                </div>
                                                <div>
                                                    <p className='text-[#001E00] text-[.69rem] md:text-[1.3vw]'>{data.peoductName}</p>

                                                    <p className='md:hidden  text-[#686868] text-[.69rem]'>Tk:40</p>
                                                    <p className=" md:hidden block text-[.69rem] text-[#686868] ">Qty: <span className='text-[#001E00]'>1</span></p>
                                                </div>

                                            </div>
                                            <div>
                                                <p className='text-[#001E00] text-[.7rem] md:text-[1.3vw] hidden md:block   '>Qty:{data.qty}</p>
                                            </div>
                                            <div className=' bg-[#F2F3F7] rounded-md'>
                                                <p className='text-[#686868] px-[5px]  rounded-sm  text-[.7rem] hidden md:block  md:text-[.7vw]   '>{data.status}</p>
                                            </div>
                                            <div>
                                                <p className='text-[#026C51] hidden md:block text-[.7rem] md:text-[1.3vw] '>{data.deliveredDate}</p>
                                            </div>

                                            <div>
                                                <p className="text-[#FB641B] md:hidden mt-[49px] mb-[16px] text-[.7rem] md:text-[16px] md:mb-[30px] mr-[19px]">Pay Now</p>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ToPay;