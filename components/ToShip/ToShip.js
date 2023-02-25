import Image from 'next/image';
import Link from 'next/link';
import img from '../../assets/images/image 7.png'
const ToShip = () => {
    const datas = [
        {
            id: "1",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: img,
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Processing",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "2",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: img,
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Processing",
            deliveredDate: "Estimated Delivered By 21 Dec 2022",
            taka: '40'
        },
        {
            id: "3",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: img,
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Processing",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "4",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: img,
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Processing",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "5",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: img,
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
            status: "Processing",
            deliveredDate: "Estimated Delivered on 21 Dec 2022",
            taka: '40'
        },
        {
            id: "6",
            orderId: "121312323213432",
            orderDate: "Placed On 21 Dec 2022 10:21:00",
            image: img,
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
                        <div key={data.id} className="mt-[16px]  ">
                            <div className="md:w-[92%] w-[100%] h-auto rounded-[8px] bg-[#FFFFFF] shadow-lg">
                                <div className="flex md:items-center justify-between ">
                                    <div className="ml-[12px] md:mt-[16px] mt-[16px] w-[70%]">
                                        <p>
                                            <span className="md:text-[16px] text-[14px] font-bold text-black">Order</span>{" "}
                                            <span className="md:text-[#287DF3] text-[14px] md:text-[16px] ">#{data.orderId}</span>
                                        </p>
                                        <p className='text-[11px] md:text-[14px] text-[#686868] '>{data.orderDate}</p>
                                        <p className=" md:hidden text-[11px]  block  text-[#686868]  mr-[19px]">
                                            {data.deliveredDate}
                                        </p>

                                    </div>
                                    <div className='mt-[16px] md:mt-[0px] w-[30%] md:flex md:justify-end md:px-[10px]'>
                                        <Link
                                            href={`/profile/myOrderDetails`}
                                            className="text-[#287DF3] md:text-[16px] text-[14px] "
                                        >
                                            <span>View More</span>
                                        </Link>
                                        <p className=" md:hidden mt-[16px]  w-[60px] px-[5px] text-center rounded-[10px] text-[#FB641B] text-[10px] h-[18px] bg-[#F2F3F7]  mb-[14px]">
                                            {data.status}
                                        </p>
                                    </div>
                                </div>
                                <hr className="border-[1px] mt-[16px] hidden md:block border-[#686868]" />
                                <div className="flex justify-between md:text-[1.3vw]">
                                    <div className="flex md:items-center md:mt-[16px] md:mb-[16px] gap-[16px]">
                                        <Image className='w-[57px] h-[46px] md:w-[57px] md:h-[46px] ml-[12px]' src={data.image} width="57" height="46" alt=""></Image>
                                        <div>
                                            <p className='text-[12px]  md:text-[1.3vw]  text-[#001E00]'>{data.peoductName}</p>
                                            <p className=" md:hidden block text-[12px] text-[#686868]  mb-[30px]">Qty: <span className='text-[#001E00]'>{data.qty}</span></p>
                                        </div>
                                    </div>
                                    <p className=" hidden md:block mt-[31px] mb-[30px]">Qty: {data.qty}</p>
                                    <p className=" hidden md:block mt-[33px] lg:mt-[33px] xl:mt-[36px] w-[86px] h-[18px] bg-[#F2F3F7] rounded-[14px] text-[0.8rem] text-center mb-[30px]">
                                        {data.status}
                                    </p>
                                    <p className=" hidden  text-[#026C51] md:block mt-[31px] mb-[30px] mr-[19px]">
                                        {data.deliveredDate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ToShip;