
import Image from 'next/image';
import Link from 'next/link';
const OrdersProduct = ({data}) => {
  
    return (
      <div className="mt-[16px]">
        <div className="w-[924px] h-[149px] rounded-[8px] bg-[#FFFFFF] shadow-lg">
          <div className="flex items-center justify-between">
            <div className="m-[16px]">
              <p>
                <span className="text-[16px] font-bold text-black">Order</span>{" "}
                <span className="text-[#287DF3]">#{data.orderId}</span>
              </p>
              <p className='text-[#686868] text-[14px]'>{data.orderDate}</p>
            </div>
            <Link
              href={`/profile/myOrderDetails`}
              className="text-[#287DF3] text-[16px] mr-[19px]"
            >
              View More
            </Link>
          </div>
          <hr className="border-[1px] border-[#686868]" />
          <div className="flex justify-between ">
            <div className="flex ml-[12px] mt-[16px] mb-[16px] gap-[16px] items-center">
              <Image src={data.image} width="57" height="46" alt=""></Image>
              <p>{data.peoductName}</p>
            </div>
            <p className="mt-[29px] mb-[30px]">Oty: {data.qty}</p>
            <p className="mt-[29px] w-[66px] h-[18px] bg-[#F2F3F7] rounded-[14px] text-xs text-center mb-[30px]">
              {data.status}
            </p>
            <p className="mt-[29px] mb-[30px] mr-[19px]">
              {data.deliveredDate}
            </p>
          </div>
        </div>
      </div>
    );
};

export default OrdersProduct;