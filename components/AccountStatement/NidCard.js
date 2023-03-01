import Image from "next/image";


const NidCard = () => {
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
                            NID Card
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-[#FB641B] font-semibold text-2xl">
                        NID Card
                    </h1>
                </div>
            </div>
            <div className="mt-[32px]">
                <div className="max-w-[1426px] h-[780px] border-[1px] border-solid border-[#F2F2F2] shadow-small">
                    <div className="pt-[24px] mx-[24px]">
                        <h1 className="text-[16px] text-[#001E00] font-[400]">NID Card</h1>
                        <div className="flex divide-x-[1px]  divide-[#707070] divide-solid mt-[35px]">
                            <div className="mr-[46px]">
                                <h1 className="text-[#707070] text-[16px]">ID Card Front Site</h1>
                                <Image src='/nidfont.png' className="mt-[24px]" width={263} height={168} alt=""></Image>
                                <h2 className="text-[#707070] mt-[24px] text-[16px] font-[400]">ID Name: <span className="text-[#001E00] ml-[8px]">973 046 8625</span></h2>
                            </div>
                           
                            <div className="pl-[46px]">
                                <h1 className="text-[#707070] text-[16px]">ID Card Front Site</h1>
                                <Image src='/nidback.png' className="mt-[24px]" width={263} height={168} alt=""></Image>
                                <h2 className="text-[#707070] mt-[22px] text-[16px] font-[400]">ID Name: <span className="text-[#001E00] ml-[8px]">973 046 8625</span></h2>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NidCard;