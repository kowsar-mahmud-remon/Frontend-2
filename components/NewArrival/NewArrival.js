import Image from "next/image";


const NewArrival = () => {
    const productData = [
        {
            title: "New arrivals",
            products: [
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                },
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                },
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                }
            ]

        },
        {
            title: "Top ranking",
            products: [
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                },
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                },
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                }
            ]

        },
        {
            title: "Weekly deals",
            products: [
                {
                    image: "/image 6.png",
                    price: "0.10",
                    orginalPrice: "0.20",
                    offer: "-60%"
                },
                {
                    image: "/image 6.png",
                    price: "0.10",
                    orginalPrice: "0.20",
                    offer: "-20%"
                },
                {
                    image: "/image 6.png",
                    price: "0.10",
                    orginalPrice: "0.20",
                    offer: "-10%"
                }
            ]

        },
        {
            title: "Dropshipping",
            products: [
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                },
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                },
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                }
            ]

        },
        {
            title: "Regional specialties",
            products: [
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                },
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                },
                {
                    image: "/image 6.png",
                    price: "0.10",
                    qty: "2.0 pieces"
                }
            ]

        },
        {
            title: "Tips",
            products: [
                {
                    image: "/image 6.png",
                    price: "0.10",

                },
                {
                    image: "/image 6.png",
                    price: "0.10",

                },
                {
                    image: "/image 6.png",
                    price: "0.10",

                }
            ]

        }
    ]
    return (
        <div>
            <div className="mx-w-[1500px] mt-[32px] mx-[30px]">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1 gap-[30px]">
                    {
                        productData.map((data) => <>
                            <div className="w-full h-[197px] bg-[#fff] rounded-[8px] shadow-small" >
                                <div className="mx-[10px] pt-[10px]">
                                    <h1 className="text-[16px] font-[700] text-[#333]">{data.title}</h1>
                                    <div className="mt-[8px] grid grid-cols-3  gap-[10px]">
                                        {
                                            data.products.map((product) => <>

                                                <div>
                                                    <div className="flex justify-center bg-[#F2F3F7] w-full h-[100px]">
                                                        <Image src={product.image} alt="" width={100} height={100}></Image>
                                                    </div>

                                                    {
                                                        !product.offer && <div className="mt-[4px] text-center">
                                                            <h1 className="text-[12px] text-[#333] font-[700] ">${product.price}</h1>
                                                            <h2 className="text-[12px] text-[#666]  mt-[4px]">{product.qty}</h2>
                                                        </div>
                                                    }
                                                    {
                                                        product.offer && <div className="mt-[4px] text-center">
                                                            <h1 className="text-[12px] text-[#333] font-[700] ">${product.price}</h1>
                                                            <div className="flex justify-center items-center gap-[6px] mt-[4px]">
                                                                <h1 className="text-[12px] text-[#333] font-[700] line-through ">${product.orginalPrice}</h1>
                                                                <div className="bg-[#f60] rounded-[9px] w-[38px] h-[16px] flex items-center justify-center">
                                                                    <h2 className=" text-white text-center text-[12px] ">{product.offer}</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }


                                                </div>
                                            </>)
                                        }

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

export default NewArrival;