

const Subscription = () => {

    const subscriptiondatas = [
        {
            "title": "Starter Store",
            "content": "Best for sellers who have a handful of products and want a storefront to brand and promote their business.",
            "type": "Free",
            "content1": "with annual subscription",
            "duration": "10/mo",
            "facility1": "Free auction listings or fixed-price listings",
            "facility2": "30Tk insertion fee for additional listing",



        },
        {
            "title": "Basic Store",
            "content": "Just getting started? Enjoy more free listings, final value fee discounts, and a quarterly coupon for eBay-branded shipping supplies.",
            "type": "Tk 2000",
            "typeduration": "/1 month",
            "content1": "with annual subscription",
            "duration": "100/mo",
            "facility1": "Free fixed-price listings",
            "facility2": "25Tk insertion fee for additional listing",
            "duration2": "150/mo",
            "facility3": "Free auction listings in select categories",
            "facility4": "20Tk insertion fee for additional listing",


        },
        {
            "title": "Gold Store",
            "content": "If you have an extensive product assortment, a Premium Store subscription gives you substantially more zero insertion fee listings.",
            "type": "৳ 3000",
            "typeduration": "/1 month",
            "content1": "with annual subscription",
            "duration": "150/mo",
            "facility1": "Free fixed-price listings",
            "facility2": "25Tk insertion fee for additional listing",
            "duration2": "250/mo",
            "facility3": "Free auction listings in select categories",
            "facility4": "20Tk insertion fee for additional listing",


        },
        {
            "title": "Premium Store",
            "content": "For high volume sellers who have an extensive product catalog or are running a business that would benefit from dedicated customer support.",
            "type": "৳ 4000",
            "typeduration": "/1 month",
            "content1": "with annual subscription",
            "duration": "100/mo",
            "facility1": "Free fixed-price listings",
            "facility2": "25Tk insertion fee for additional listing",
            "duration2": "150/mo",
            "facility3": "Free auction listings in select categories",
            "facility4": "20Tk insertion fee for additional listing",


        },
        {
            "title": "Enterprise Store",
            "content": "For enterprise sellers who have an extensive product catalog or are running a business that would benefit from dedicated customer support.",
            "type": "৳ 5000",
            "typeduration": "/1 month",
            "content1": "with annual subscription",
            "duration": "100/mo",
            "facility1": "Free fixed-price listings",
            "facility2": "25¢ insertion fee for additional listing",
            "duration2": "150/mo",
            "facility3": "Free auction listings in select categories",
            "facility4": "25¢ insertion fee for additional listing",


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
                            <a> Account & Setting  </a>
                        </li>
                        <li className="text-[#001E00] font-semibold ">
                            Subscription
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-[#FB641B] font-semibold text-2xl">
                        Subscription
                    </h1>
                </div>
            </div>
            <div className="mt-[32px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 xxl:grid-cols-3 gap-[24px]">

                    {
                        subscriptiondatas.map((data) => <>
                            <div className="max-w-[460px] h-[746px] rounded-[8px] bg-[#FFFFFF] shadow-small">
                                <div className="mx-[24px]">
                                    <div className="pt-[24px]">
                                        <h1 className="text-[#001E00] text-[24px] font-[500]">{data.title}</h1>
                                    </div>
                                    <div className="mt-[16px]">
                                        <p className="text-[#686868] text-[18px]">{data.content}</p>
                                    </div>
                                    <div className="mt-[32px]">
                                        <h1 className="text-[#001E00] text-[44px] font-[400]">{data.type}<span className="text-[24px] text-[#001E00]">{data.typeduration}</span></h1>
                                    </div>
                                    <div className="mt-[16px]">
                                        <h1 className="text-[#686868] text-[18px]">{data.content1}</h1>
                                    </div>
                                    <div className="mt-[32px]">
                                        <h1 className="text-[#686868] text-[18px]">{data.duration} </h1>
                                        <h2 className="text-[#686868] text-[18px]"> {data.facility1}</h2>
                                        <h2 className="text-[#686868] text-[18px]">  {data.facility2}</h2>
                                    </div>
                                    <div className="mt-[16px]">
                                        <h1 className="text-[#686868] text-[18px]">{data.duration2} </h1>
                                        <h2 className="text-[#686868] text-[18px]">
                                            {data.facility3}</h2>
                                        <h2 className="text-[#686868] text-[18px]"> {data.facility4}</h2>
                                    </div>
                                    <div className={data.type === "Free" ? "mt-[255px]" : "mt-[155px]"}>

                                        <div className="flex justify-center">
                                            <button className="w-[412px]  h-[56px] font-[500] text-[18px] border-[2px] border-solid border-[#686868] rounded-[8px] text-[#686868]">Select starter store</button>
                                        </div>

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

export default Subscription;