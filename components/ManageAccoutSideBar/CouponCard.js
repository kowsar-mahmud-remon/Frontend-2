import Image from "next/image";


const CouponCard = ({ coupon }) => {
    return (
        <div>
            <div className="couponBoxInside w-full md:h-[104px] h-full mt-[16px]">
                <div className="grid md:grid-cols-5  grid-cols-4 items-center   ">
                    <Image className="col-span-1 md:pt-[12px] p-[3px] md:p-[0px] ml-[2px] md:ml-[12px]" src={coupon.Image} alt="" width={90} height={80}></Image>
                    <div className="md:col-span-3 col-span-2 pl-[10px] md:pl-[0px] md:ml-[20px] xl:ml-[20px] pt-[7px] xl:pt-[5px]">
                        <h1 className="text-[#001E00] md:text-[16px] text-[3.5vw] font-[500] whitespace-nowrap  mb-[5px]">{coupon.Discount}</h1>
                        <h2 className="md:text-[14px] text-[3.5vw] font-[500] mb-[5px] text-[#001E00]">Coupon: <span className="md:text-[14px] text-[3.5vw] ml-[8px] font-[400] text-[#001E00] ">{coupon.Coupon}</span> </h2>
                        <h2 className="md:text-[14px] text-[3.5vw] font-[500]  mb-[5px] text-[#001E00]">End: <span className="md:text-[14px] text-[3.5vw] ml-[8px] font-[400] text-[#001E00]">{coupon.End}</span> </h2>
                    </div>
                    <div className="col-span-1 mr-[12px]">
                        <button className="text-[#FB641B] w-full p-[1vw] md:p-[0px] md:h-[32px] md:text-[14px] text-[3vw]  font-[400] border-[1px] rounded-[4px] border-solid border-[#FB641B]">Collect</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponCard;