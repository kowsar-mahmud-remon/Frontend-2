import Image from "next/image";


const GiftCards = () => {
    const giftCards = [
        {
            "image": '/image 379.png',
            "Discount": "10% Cashback",
            "End": "25 Mar 2023",
            "payment": "Islamic Bank"

        },
        {
            "image": '/image 379.png',
            "Discount": "10% Cashback",
            "End": "25 Mar 2023",
            "payment": "bKash"

        },
        {
            "image": '/image 379.png',
            "Discount": "10% Cashback",
            "End": "25 Mar 2023",
            "payment": "Nagad"

        },
        {
            "image": '/image 379.png',
            "Discount": "10% Cashback",
            "End": "25 Mar 2023",
            "payment": "City Bank"

        }
    ]
    return (
        <div>
            <div>
                <h1 className="text-[#FB641B] text-[24px]">Available Gift Card</h1>
                <div className="lg:mr-[20px]">
                    <div className="lg:shadow-small max-w-[924px]    rounded-[8px] h-[530px] mt-[16px]">
                        <div className="mx-[16px] pt-[16px]">
                            <div className="grid grid-cols-2   gap-[16px] ">
                                <div>
                                    {
                                        giftCards.slice(0, 2).map((giftCard => <>
                                            <div className="couponBoxInside w-full h-[104px] my-[16px] ">
                                                <div className="grid grid-cols-5 xl:grid-cols-3 items-center mx-[12px] py-[12px]">
                                                    <Image className="xl:col-span-1 col-span-1" src={giftCard.image} alt="" width={125} height={80}></Image>
                                                    <div className="xl:col-span-1 col-span-3 ml-[10px] xl:ml-[0px]">
                                                        <h1 className="text-[#001E00] text-[16px] font-[500] whitespace-nowrap  mb-[5px]">{giftCard.Discount}</h1>
                                                        <h2 className="text-[14px] whitespace-nowrap font-[500] mb-[5px] text-[#001E00]">Payment: <span className="text-[14px] ml-[8px] font-[400] text-[#001E00] ">{giftCard.payment}</span> </h2>
                                                        <h2 className="text-[14px] font-[500]  mb-[5px] text-[#001E00]">End: <span className="text-[14px] ml-[8px] font-[400] text-[#001E00]">{giftCard.End}</span> </h2>
                                                    </div>
                                                    <div className="col-span-1">
                                                        <button className="text-[#FB641B] xl:ml-[40px] w-full xl:w-[88px] h-[32px] text-[14px] font-[400] border-[1px] rounded-[4px] border-solid border-[#FB641B]">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>))
                                    }
                                </div>
                                <div>
                                    {
                                        giftCards.slice(2, 4).map((giftCard => <>
                                            <div className="couponBoxInside w-full h-[104px] mt-[16px] ">
                                                <div className="grid grid-cols-5 xl:grid-cols-3 items-center mx-[12px] py-[12px]">
                                                    <Image className="xl:col-span-1 col-span-1" src={giftCard.image} alt="" width={125} height={80}></Image>
                                                    <div className="xl:col-span-1 col-span-3 ml-[10px] xl:ml-[0px]">
                                                        <h1 className="text-[#001E00] text-[16px] font-[500] whitespace-nowrap  mb-[5px]">{giftCard.Discount}</h1>
                                                        <h2 className="text-[14px] whitespace-nowrap font-[500] mb-[5px] text-[#001E00]">Payment: <span className="text-[14px] ml-[8px] font-[400] text-[#001E00] ">{giftCard.payment}</span> </h2>
                                                        <h2 className="text-[14px] font-[500]  mb-[5px] text-[#001E00]">End: <span className="text-[14px] ml-[8px] font-[400] text-[#001E00]">{giftCard.End}</span> </h2>
                                                    </div>
                                                    <div className="col-span-1">
                                                        <button className="text-[#FB641B] xl:ml-[40px] w-full xl:w-[88px] h-[32px] text-[14px] font-[400] border-[1px] rounded-[4px] border-solid border-[#FB641B]">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GiftCards;