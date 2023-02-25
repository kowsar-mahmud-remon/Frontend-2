import Image from "next/image"
import { useRouter } from "next/router"
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import walton from '../../public/Rectangle 2629.png'
import seller from '../../public/seller.png'
const FollowedStores = () => {
    const router = useRouter()
    return (
        <div>
            <div className="mx-[24px] lg:mx-0">
                <div className="lg:hidden block">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-[13px]"
                    >
                        <FaArrowLeft className=""></FaArrowLeft>
                        <h1 className="text-[20px]  font-[500] text-[#001E00]">
                            Followed Stores
                        </h1>
                    </button>
                </div>
                <div className="hidden lg:block">
                    <p className="text-[#FB641B] text-[24px] font-normal">Followed Stores</p>
                </div>
                <div className="followStore max-w-[924px] lg:mr-[20px] h-[94px] lg:h-[145px] mt-[32px]">

                    <div className="flex justify-between items-center pt-[13px] ml-[12px] mx-[12px] lg:mx-[24px] lg:pt-[24px]">

                        <div className="flex items-center gap-[12px] lg:gap-0">
                            <div className="lg:w-[97px] w-[69px] h-[69px]  lg:h-[97px]   bg-[#F2F2F2] rounded-[4px]">
                                <Image src={walton} className="lg:m-[14px] lg:w-[68px] lg:h-[68px] w-[47px] h-[47px] m-[10px]" alt=""></Image>
                            </div>
                            <div className="lg:ml-[12px] ">
                                <div className="flex  lg:flex-col gap-[8px] lg:gap-0">
                                    <p className="lg:text-[24px]  font-[500] text-[#001E00]">Walton Accessories</p>
                                    <div className="lg:mt-[10px]">
                                        <Image src={seller} alt=""></Image>
                                    </div>
                                </div>
                                <div className="lg:hidden flex gap-[8px] items-center pt-[12px]">
                                    <FaCheck className="text-[#686868]"></FaCheck>
                                    <p className="text-[#686868] font-[400]  text-[16px]">FOLLOWING</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[8px] items-center">
                            <FaCheck className="text-[#686868] lg:block hidden"></FaCheck>
                            <p className="text-[#686868] font-[400] lg:block hidden text-[16px]">FOLLOWING</p>
                            <p className="text-[#707070] lg:block hidden">|</p>
                            <p className="text-[#287DF3] text-[16px]">VISIT</p>
                        </div>

                    </div>

                </div>
            </div>

            {/* <div className="lg:hidden block mx-[24px]">
                <div>
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-[13px]"
                    >
                        <FaArrowLeft className=""></FaArrowLeft>
                        <h1 className="text-[20px]  font-[500] text-[#001E00]">
                            Followed Stores
                        </h1>
                    </button>
                </div>
                <div className="mt-[16px]">
                    <div className="shadow-small max-w-[376px] h-[94px]">
                        <div className="flex items-center">
                            <div className="flex justify-center">
                                <div className="max-w-[69px]    h-[69px]  bg-[#F2F2F2] rounded-[4px]">
                                    <Image src={walton} className="m-[14px] w-[47px] h-[47px]" alt=""></Image>
                                </div>
                            </div>
                            <div className="ml-[12px] ">
                                <p className="text-[18px] font-[500] text-[#001E00]">Walton Accessories</p>
                                <div className="mt-[10px]">
                                    <Image src={seller} alt=""></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )

}

export default FollowedStores