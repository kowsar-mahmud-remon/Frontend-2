import Image from "next/image";
import { FaStar, FaTrashAlt } from "react-icons/fa";


const MyWishList = () => {
    const wishlistData = [
        {
            id: 1,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: '/loveimage.png'
        },
        {
            id: 1,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: '/loveimage.png'
        },
        {
            id: 1,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: '/loveimage.png'
        },
        {
            id: 1,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img:'/loveimage.png'
        },
        {
            id: 1,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: '/loveimage.png'
        },
        {
            id: 1,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: '/loveimage.png'
        },
        {
            id: 1,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: '/loveimage.png'
        },
        {
            id: 1,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: '/loveimage.png'
        }
   
    ]
    return (
        <div>

            <div>
                <p className="text-[24px] font-[400] text-[#FB641B]">My Wishlist</p>
            </div>
            <div className="wishlistBox mt-[32px]">
                <p className="text-[14px] ml-[16px] pt-[16px] font-normal text-[#686868]">Purchased on: 21 Dce 2022 10:21:00</p>
                <div className="mt-[18px] flex gap-[200px]">
                    <div className="flex gap-[16px]">
                        <Image src='/image 8.png' width={79} height={63} alt=""></Image>
                        <div>
                            <p className="text-[#001E00] font-[400] text-[16px]">Tomato (Local) 500 ±30 gm</p>
                            <FaTrashAlt className="w-[18px] h-[21px] mt-[16px]"></FaTrashAlt>
                        </div>
                    </div>
                    <div>
                        <p className="text-[16px] font-[500] text-[#FB641B]">Tk. 60</p>

                        <div className="flex gap-[8px] mt-[12px]">
                            <p className="text-[#707070] text-[10px] font-[500] line-through">Tk. 80</p>
                            <p className="text-[#707070] text-[10px] font-[400]">(20% off)</p>
                        </div>
                    </div>
                    <div className="w-[66px] h-[28px] mt-[10px]  bg-[#FB641B] rounded-[26px]">
                        <Image src='/shopingcart.png' className="mt-[6px] ml-[24px]" width={19} height={16} alt=""></Image>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-[ #001E00] font-[500] text-[16px] mt-[32px]">Just for you</p>
            </div>
            <div className="grid grid-cols-4 gap-[20px]">

                {
                    wishlistData.map((data) => <>
                        <div className="mt-[16px]">
                            <div className="wishlistcard">
                                <div>
                                    <label className="flex ">
                                        <Image src='/image 8.png' width={220} height={154} alt=""></Image>
                                        <div className="wishlistloveButton absolute ml-[181px] mt-[13px] w-[28px] h-[28px] rounded-full">
                                            <Image src='/loveimage.png' className="ml-[5px]  pt-[6px]" width={17.33} height={16} alt=""></Image>
                                        </div>
                                    </label>
                                </div>
                                <div className="ml-[16px]">
                                    <p className="text-[#FB641B] font-[500] text-[20px]">Tk 1024</p>
                                    <p className="text-[#001E00] text-[16px] font-[400] w-[184px]">Misti Kumra Fali (Sweet Pumpkin Fali)</p>
                                    <div className="mt-[10px] flex gap-[8px] items-center">
                                        <div className="flex gap-[4px] items-center w-[35px] h-[16px] bg-[#026C51] rounded-[2px]">
                                            <p className="text-[12px] ml-[2px] font-normal text-white">4.9</p>
                                            <FaStar className="w-[12px] h-[12px] text-white "></FaStar>
                                        </div>
                                        <p className="text-[#686868] text-[14px] font-[400]">24 Ratings & 5 Reviews</p>
                                    </div>
                                    <div className="mt-[4px] flex gap-[8px]">
                                        <p className="text-[#686868] text-[13px]">Seller:  </p>
                                        <Image src='/seller.png' width={50} height={10} alt=""></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>

        </div>
    );
};

export default MyWishList;