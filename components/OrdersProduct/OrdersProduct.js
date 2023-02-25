
import Image from 'next/image';
import Link from 'next/link';
const OrdersProduct = ({ data }) => {

  return (
    <div className="mt-[16px]  ">
      <div className="md:w-[92%] w-[100%] h-auto rounded-[8px] bg-[#FFFFFF] shadow-lg">
        <div className="flex md:items-center pt-[16px] justify-between">
          <div className="px-[16px] ">
            <p>
              <span className="md:text-[16px] text-[14px] font-bold text-black">Order</span>{" "}
              <span className="text-[#287DF3] md:text-[16px] text-[14px]">#{data.orderId}</span>
            </p>
            <p className='text-[11px] md:text-[14px] text-[#686868] '>{data.orderDate}</p>
            <p className=" md:hidden block text-[11px] text-[#686868]  mr-[19px]">
              {data.deliveredDate}
            </p>

          </div>
          <div className=' md:mt-[0px]'>
            <Link
              href={`myOrders/myOrderDetails`}
              className="text-[#287DF3] md: text-[16px] mr-[8px] md:mr-[15px]"
            >
              <span>View More</span>
            </Link>
            <p className=" md:hidden mt-[16px]  w-[66px] text-[#FB641B] h-[18px] bg-[#F2F3F7] rounded-[14px] text-xs text-center mb-[10px]">
              {data.status}
            </p>
          </div>
        </div>
        <hr className="border-[1px] md:mt-[16px] hidden md:block border-[#686868]" />
        <div className="flex justify-between ">
          <div className="flex md:items-center  md:mt-[16px] md:mb-[16px] gap-[16px]">
            <Image className='w-[57px] h-[46px] md:w-[57px] md:h-[46px]' src={data.image} width="57" height="46" alt=""></Image>
            <div>
              <p className='text-[12px] md:text-[16px] text-[#001E00]'>{data.peoductName}</p>
              <p className=" md:hidden block text-[12px] text-[#686868]  mb-[30px]">Qty: <span className='text-[#001E00]'>{data.qty}</span></p>
            </div>
          </div>
          <p className=" hidden md:block mt-[29px] mb-[30px]">Qty: {data.qty}</p>
          <p className=" hidden md:block mt-[34px] w-[66px] h-[18px] bg-[#F2F3F7] rounded-[14px] text-xs text-center mb-[30px]">
            {data.status}
          </p>
          <p className=" hidden md:block mt-[29px] mb-[30px] mr-[19px]">
            {data.deliveredDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrdersProduct;