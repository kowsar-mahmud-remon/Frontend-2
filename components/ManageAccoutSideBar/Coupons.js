/* eslint-disable react/jsx-key */
import Image from "next/image";
import CouponCard from "./CouponCard";


const Coupons = () => {
    const coupons = [
        {
            'ShopName': 'FamilyBazar',
            'Discount': '50% Discount Product Sell',
            'Coupon': 'SAVE50',
            'End': '25 May 2023',
            'Image': '/image 369.png'
        },
        {
            'ShopName': 'FamilyBazar',
            'Discount': 'Free Delivery Promo',
            'Coupon': 'SAVE50',
            'End': '25 May 2023',
            'Image': '/image 371.png'
        },
        {
            'ShopName': 'BusinessBangla',
            'Discount': '50% Discount Product Sell',
            'Coupon': 'SAVE50',
            'End': '25 May 2023',
            'Image': '/image 369.png'
        },
        {
            'ShopName': 'AzizStore',
            'Discount': 'Free Delivery Promo',
            'Coupon': 'SAVE50',
            'End': '25 May 2023',
            'Image': '/image 371.png'
        },
        {
            'ShopName': 'AkijStore',
            'Discount': '50% Discount Product Sell',
            'Coupon': 'SAVE50',
            'End': '25 May 2023',
            'Image': '/image 369.png'
        },
        {
            'ShopName': 'AkijStore',
            'Discount': 'Free Delivery Promo',
            'Coupon': 'SAVE50',
            'End': '25 May 2023',
            'Image': '/image 371.png'
        }

    ]
    return (
        <div>
            <div>
                <h1 className="text-[#FB641B] text-[24px]">Available Coupon</h1>
            </div>

            <div className="lg:shadow-small max-w-[924px] xl:h-[644px] mt-[16px]">
                <div className="mx-[16px] pt-[16px]">
                    <div className="grid xl:grid-cols-2 grid-cols-1  gap-[16px]">
                        <div>
                            <div>
                                <h1 className="text-[#001E00] text-[14px] font-[500]">Shop:<span className="text-[#001E00] text-[14px] font-[400] ml-[8px]">Family Bazaar</span></h1>
                                {
                                    coupons.map((coupon => {
                                        if (coupon.ShopName === 'FamilyBazar') {
                                            return (<CouponCard coupon={coupon}></CouponCard>)

                                        }
                                    }))
                                }

                            </div>
                            <div className="mt-[24px]">
                                <h1 className="text-[#001E00] text-[14px] font-[500]">Shop:<span className="text-[#001E00] text-[14px] font-[400] ml-[8px]">Business Banglar</span></h1>
                                {
                                    coupons.map((coupon => {
                                        if (coupon.ShopName === 'BusinessBangla') {

                                            return (<CouponCard coupon={coupon}></CouponCard>)

                                        }
                                    }))
                                }

                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 className="text-[#001E00] text-[14px] font-[500]">Shop:<span className="text-[#001E00] text-[14px] font-[400] ml-[8px]">Aziz Store</span></h1>
                                {
                                    coupons.map((coupon => {
                                        if (coupon.ShopName === 'AzizStore') {
                                            return (<CouponCard coupon={coupon}></CouponCard>)

                                        }
                                    }))
                                }

                            </div>
                            <div className="mt-[24px] lg:mb-[40px]">
                                <h1 className="text-[#001E00] text-[14px] font-[500]">Shop:<span className="text-[#001E00] text-[14px] font-[400] ml-[8px]">Akij Store</span></h1>
                                {
                                    coupons.map((coupon => {
                                        if (coupon.ShopName === 'AkijStore') {
                                            return (<CouponCard coupon={coupon}></CouponCard>)

                                        }
                                    }))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coupons;