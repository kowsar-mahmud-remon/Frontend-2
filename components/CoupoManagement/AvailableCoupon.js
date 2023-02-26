import Image from "next/image";
import coupon1 from '../../public/image 374.png'

const AvailableCoupon = () => {

    const availableCoupons = [
        {
            "image": "/image 374.png",
            "discount": "50% Discount Product Sell",
            "end": "25 May 2023",
            "price": "1200",
            "point": "400"
        },
        {
            "image": "/image 373.png",
            "discount": "50% Discount Product Sell",
            "end": "25 May 2023",
            "price": "1200",
            "point": "400"
        },
        {
            "image": "/image 372.png",
            "discount": "50% Discount Product Sell",
            "end": "25 May 2023",
            "price": "1200",
            "point": "400"
        },
        {
            "image": "/—Pngtree—10 discount offer banner png_7885276 1.png",
            "discount": "50% Discount Product Sell",
            "end": "25 May 2023",
            "price": "1200",
            "point": "400"
        }
    ]
    return (
        <div>

            <div>
                <div className="text-lg breadcrumbs text-[#686868]">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Tax & Offers </a>
                        </li>
                        <li className="text-[#001E00] font-semibold ">
                            Coupon Management
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-[#FB641B] font-semibold text-2xl">
                        Available Coupon
                    </h1>
                </div>
            </div>

            <div className="mt-[32px]">


                <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-[20px]">
                    {
                        availableCoupons.map(coupon => <>
                            <div className="shadow-small rounded-[8px] max-w-[333px]  h-full mb-[16px]  ">
                                <div className="flex justify-center xl:mx-[16px] pt-[16px]">
                                    <Image className="" width={301} height={270} src={coupon.image} alt=""></Image>
                                </div>
                                <div className="mx-[16px] mt-[9px]">
                                    <div>
                                        <h1 className="text-[#001E00] font-[500] text-[18px]">50% Discount Product Sell</h1>
                                        <h2 className="text-[#001E00] mt-[12px] text-[16px] font-[500]">End: 25 May 2023</h2>
                                    </div>
                                    <div className="mt-[16px] flex justify-between">
                                        <h1 className="text-[#FB641B] text-[24px] font-[500]">Tk 2000</h1>
                                        <h2 className="text-[#FB641B] font-[500] text-[24px]">400 <span className="text-[#686868]">Point</span></h2>
                                    </div>
                                    <div className="mt-[24px]  flex justify-center">
                                        <button className="w-[134px] h-[40px] border-[1px] border-solid rounded-[4px] border-[#FB641B] text-[#FB641B]">Buy Now</button>
                                    </div>
                                </div>

                            </div>

                        </>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AvailableCoupon;