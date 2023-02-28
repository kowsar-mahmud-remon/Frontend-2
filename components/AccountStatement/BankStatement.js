import Image from "next/image";
import Link from "next/link";


const BankStatement = () => {
    return (
        <div>
            <div>
                <div className="text-lg breadcrumbs text-[#686868]">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Seller Documents </a>
                        </li>
                        <li className="text-[#001E00] font-semibold ">
                            Bank Statement
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-[#FB641B] font-semibold text-2xl">
                        Bank Statement
                    </h1>
                </div>
            </div>
            <div className="flex justify-center mt-[32px]">
                <div className="max-w-[828px] xl:w-[828px] h-[601px] bg-[#FFFFFF] border-solid border-[1px] border-[#F2F2F2] shadow-small">
                    <div className="mx-[24px] pt-[24px]">
                        <div className="flex items-center gap-[8px]">
                            <h1 className="text-[#001E00] text-[16px] font-[400]">Bank Statement</h1>
                            <div className="w-[55px] h-[18px] bg-[#F2F3F7] rounded-[4px] flex justify-center items-center">
                                <Link href="#"> <h1 className="text-[#287DF3] text-[12px]">Update</h1></Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[477px] shadow-small h-[170px] border-solid border-[1px] border-[#B7B7B7] rounded-[8px] mt-[44px] bg-[#FFFFFF]">
                                <div className="flex justify-center pt-[16px]">
                                    <Image src='/bankstatement.png' width={303} height={138} alt=""></Image>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[23px] flex justify-center items-center">
                            <div className="grid grid-cols-2 gap-[16px]">
                                <div className="text-center">
                                    <h1 className="text-[#686868]  text-[16px]">Account Holder Name:</h1>
                                    <h1 className="text-[#686868] mt-[24px]  text-[16px] ml-[35px]">Account Number: </h1>
                                    <h1 className="text-[#686868]  text-[16px]  ml-[35px] mt-[24px]">Routing Number: </h1>
                                    <h1 className="text-[#686868] text-[16px]  ml-[69px] mt-[24px]">Bank Name:</h1>
                                    <h1 className="text-[#686868] text-[16px] ml-[50px]  mt-[24px] ">Branch Name:</h1>
                                </div>
                                <div>
                                    <h1 className="text-[#001E00] text-[16px]font-[400]">Roy Ang</h1>
                                    <h1 className="text-[#001E00] text-[16px]font-[400]  mt-[24px]">2154 2316 5487 2144 </h1>
                                    <h1 className="text-[#001E00] text-[16px]font-[400]  mt-[24px]">001457201</h1>
                                    <h1 className="text-[#001E00] text-[16px]font-[400]  mt-[24px]">Meghna Bank Ltd.</h1>
                                    <h1 className="text-[#001E00] text-[16px]font-[400]  mt-[24px]">Dhaka</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankStatement;