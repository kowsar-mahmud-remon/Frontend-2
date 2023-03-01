import Image from "next/image";
import vt6 from '../../assets/images/sellercalender.png'

const UpdateBankStatement = () => {
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
            <div>
                <div className="flex justify-center mt-[72px]">

                    <div className="max-w-[829px] xl:w-[828px] h-[686px] border-[1px] border-solid rounded-[8px] border-[#F2F2F2] shadow-small  bg-[#FFFFFF]">
                        <div className="mx-[24px]">

                            <div className="mt-[24px]">
                                <h1 className="text-[#001E00] text-[16px]">Bank Statement</h1>
                            </div>

                            <div className="flex justify-center mt-[44px]">
                                <div className="max-w-[477px] xl:w-[477px] mt-[16px] h-[170px] rounded-[8px] shadow-small border-[1px] border-solid border-[#B7B7B7] bg-[#FFFFFF]">
                                    <div className='flex justify-center pt-[16px] '>
                                        <Image src='/updateBankStatement.png' width={303} height={138} alt=""></Image>
                                    </div>
                                    <label>
                                        <div className="max-w-[475px] xl:w-[475px] flex justify-center relative bottom-[45px] h-[60px] uploadStatenment">
                                            <div className="flex justify-center items-center gap-[11px]">
                                                <Image src='/upload.png' width={27} height={18} alt=""></Image>
                                                <p className="text-[#FFFFFF] text-[16px]">Upload New Bank Statement</p>
                                            </div>
                                            <input
                                                type="file"
                                                accept="application/pdf"
                                                className="hidden"
                                            />
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="mt-[23px] flex justify-center ">
                                <div className="grid grid-cols-2 gap-[16px]">
                                    <div className="text-right flex flex-col ">
                                        <h1 className="text-[#686868]  text-[16px] mt-[5px]">Account Holder Name:</h1>
                                        <h1 className="text-[#686868]  mt-[35px] text-[16px] ">Account Number: </h1>
                                        <h1 className="text-[#686868]  text-[16px]  mt-[30px] ">Routing Number: </h1>
                                        <h1 className="text-[#686868] text-[16px]  mt-[30px] ">Bank Name:</h1>
                                        <h1 className="text-[#686868] text-[16px]  mt-[30px] ">Branch Name:</h1>
                                    </div>
                                    <div className="flex flex-col items-center gap-[16px]">
                                        <input type="text" className="max-w-[233px] h-[40px] border-[1px] border-solid rounded-[4px] border-[#686868]" />
                                        <input type="text" className="max-w-[233px] h-[40px] border-[1px] border-solid rounded-[4px] border-[#686868]" />
                                        <input type="text" className="max-w-[233px] h-[40px] border-[1px] border-solid rounded-[4px] border-[#686868]" />
                                        <input type="text" className="max-w-[233px] h-[40px] border-[1px] border-solid rounded-[4px] border-[#686868]" />
                                        <input type="text" className="max-w-[233px] h-[40px] border-[1px] border-solid rounded-[4px] border-[#686868]" />                                        

                                    </div>
                                </div>
                            </div>


                            <div className="flex justify-center mt-[32px] gap-[16px]">

                                <button className="w-[114px] h-[40px] border-[1px] border-solid border-[#686868] rounded-[8px] text-[#686868]">Cancel</button>
                                <button className="w-[134px] h-[40px] rounded-[8px] text-white text-[16px] bg-[#FB641B]">Submit</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default UpdateBankStatement;