import Image from "next/image"
import { FaCheck } from "react-icons/fa"

const FollowedStores = () => {
    return (
        <div>
            <div>
                <p className="text-[#FB641B] text-[24px] font-normal">Followed Stores</p>
            </div>
            <div className="followStore max-w-[924px]  h-[145px] mt-[32px]">

                <div className="flex justify-between items-center mx-[24px] pt-[24px]">

                    <div className="flex items-center">
                        <div className="max-w-[97px]   h-[97px]  bg-[#F2F2F2] rounded-[4px]">
                            <Image src='/Rectangle 2629.png' className="m-[14px]" width={68} height={68} alt=""></Image>
                        </div>
                        <div className="ml-[12px] ">
                            <p className="text-[24px] font-[500] text-[#001E00]">Walton Accessories</p>
                            <div className="mt-[10px]">
                                <Image src='/seller.png' width={55} height={55} alt=""></Image>
                            </div>
                        </div>
                    </div>





                    <div className="flex gap-[8px] items-center">
                        <FaCheck className="text-[#686868]"></FaCheck>
                        <p className="text-[#686868] font-[400] text-[16px]">FOLLOWING</p>
                        <p className="text-[#707070]">|</p>
                        <p className="text-[#287DF3] text-[16px]">VISIT</p>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default FollowedStores