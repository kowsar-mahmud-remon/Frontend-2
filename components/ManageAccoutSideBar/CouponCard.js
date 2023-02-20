import Image from "next/image";


const CouponCard = ({coupon}) => {
    return (
        <div>
            <div className="couponBoxInside w-full h-[104px] mt-[16px]">
                 <div className="grid grid-cols-5 items-center mx-[12px] pt-[12px]">
                                                    <Image className="col-span-1" src={coupon.Image} alt="" width={90} height={80}></Image>
                                                    <div className="col-span-3 ml-[10px] xl:ml-[16px]">
                                                        <h1 className="text-[#001E00] text-[16px] font-[500] whitespace-nowrap  mb-[5px]">{coupon.Discount}</h1>
                                                        <h2 className="text-[14px] font-[500] mb-[5px] text-[#001E00]">Coupon: <span className="text-[14px] ml-[8px] font-[400] text-[#001E00] ">{coupon.Coupon}</span> </h2>
                                                        <h2 className="text-[14px] font-[500]  mb-[5px] text-[#001E00]">End: <span className="text-[14px] ml-[8px] font-[400] text-[#001E00]">{coupon.End}</span> </h2>
                                                    </div>
                                                    <div className="col-span-1">
                                                        <button className="text-[#FB641B] w-full h-[32px] text-[14px] font-[400] border-[1px] rounded-[4px] border-solid border-[#FB641B]">Collect</button>
                                                    </div>
                                                </div>
                                            </div>
        </div>
    );
};

export default CouponCard;