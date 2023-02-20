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
        <div className="mt-[16px]  ">
            {
                datas.map(data => {
                    return (
                        <div key={data.id} className="md:w-[96%] w-[100%]  h-auto rounded-[8px] bg-[#FFFFFF] shadow-lg mt-[16px] ">
                            <div className="flex items-center justify-between">
                                <div className="m-[16px] hidden md:block">
                                    <p>
                                        <span className="text-[16px] font-bold text-black">Order</span>{" "}
                                        <span className="text-[#287DF3] text-[16px] ">#{data.orderId}</span>
                                    </p>
                                    <p className='text-[12px] md:text-[14px] text-[#686868] '>{data.orderDate}</p>
                                    <p className=" md:hidden block text-[12px] text-[#686868]  mr-[19px]">
                                        {data.deliveredDate}
                                    </p>

                                </div>
                                <div className='mt-[29px] hidden md:block  md:mt-[0px] pr-[12px] md:mr-[15px]'>
                                    <Link
                                        href={`/profile/myOrderDetails`}
                                        className="text-[#287DF3] text-[16px] ]"
                                    >
                                        <span className=''>Pay Now</span>
                                    </Link>

                                </div>
                            </div>
                            <hr className="border-[1px] hidden md:block border-[#686868]" />
                            <div className="flex justify-between ">
                                <div className="flex md:items-center  gap-[16px]  md:ml-[16px] md:mt-[16px] mb-[16px] px-[12px] ">
                                    <Image className='w-[73px] h-[58px] md:w-[57px] md:h-[46px] mt-[14px] md:mt-0' src={img} alt=""></Image>
                                    <div className='mt-[14px] md:mt-0'>
                                        <p className='text-[16px]text-[#001E00]'>{data.peoductName}</p>
                                        <p className=" md:hidden block text-[16px] text-[#686868] ">Tk <span className=''>{data.taka}</span></p>
                                        <div className='md:hidden  text-[14px] flex justify-between'>
                                            <p className="  text-[#686868]  ">Qty: <span className='text-[#001E00]'>{data.qty}</span></p>
                                            <div className='block md:hidden pr-[12px]'><Link
                                                href={`/profile/myOrderDetails`}
                                                className="text-[#FB641B] text-[16px] ]"
                                            >
                                                <span className=''>Pay Now</span>
                                            </Link></div>
                                        </div>


                                    </div>
                                </div>
                                <p className=" hidden md:block mt-[29px] mb-[30px]">Qty: {data.qty}</p>
                                <p className=" hidden md:block mt-[34px] text-[#686868] w-[95px] h-[18px] bg-[#F2F3F7] rounded-[14px] text-xs text-center mb-[30px]">
                                    {data.status}
                                </p>
                                <p className=" hidden  md:text-[15px] text-[#026C51] md:block mt-[29px] mb-[30px] mr-[15px]">
                                    {data.deliveredDate}
                                </p>

                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default ToPay;