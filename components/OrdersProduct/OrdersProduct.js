
import Image from 'next/image';
const OrdersProduct = ({data}) => {
    return (
        <div className="mt-[16px]">
            <div className="w-[924px] h-[149px] rounded-[8px] bg-[#FFFFFF] shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="m-[16px]">
                        <p ><span className="text-[16px] font-bold text-black">Order</span> <span className="text-[#287DF3]">#{data.orderId}</span></p>
                        <p>{data.orderDate}</p>
                    </div>
                    <p className="text-[#287DF3] text-[16px] mr-[19px]">MANAGE</p>
                </div>
                <hr />
                <div className="flex justify-between ">
                    <div className="flex ml-[56px] mt-[16px] mb-[16px] gap-[16px]">
                        <Image src={data.image} width="57" height="46" alt=""></Image>
                        <p>{data.peoductName}</p>
                    </div>
                    <p className="mt-[29px] mb-[30px]">Oty: {data.qty}</p>
                    <p className="mt-[29px] w-[66px] h-[18px] bg-[#F2F3F7] rounded-[14px] text-xs text-center mb-[30px]">{data.status}</p>
                    <p className="mt-[29px] mb-[30px] mr-[19px]">{data.deliveredDate}</p>
                </div>
            </div>
        </div>
    );
};

export default OrdersProduct;