import NavicationWithSideNavLayout from "../../layouts/NavicationWithSideNavLayout";
import Image from 'next/image'
import fruit from '../../assets/images/product_page/image 6.png'
import vector from '../../assets/images/product_page/Vector.png'
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillBagCheckFill } from 'react-icons/bs';


const index = () => {
    return (
        <div>
            {/* <NavicationLayout> */}
                <NavicationWithSideNavLayout>
                    <div className="flex">
                        <div className="w-[96px] h-[560px] border flex flex-col p-[8px] bg-[#F2F3F7] gap-[8px] rounded-md">
                            <div className="">
                                <Image className="border rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image className="border rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image className="border rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image className="border rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image className="border rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image className="border rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="w-[78px] h-[24px] bg-white flex justify-center items-center">
                                <Image className="" src={vector} width="" height="" alt="vector"></Image>
                            </div>
                        </div>
                        <div className="ml-[24px]">
                            <Image className="shadow-lg rounded-md mb-[20px]" src={fruit} width="500" height="500" alt="tomato_img"></Image>
                            <div className="flex justify-between">
                                <button className="btn w-[240px] h-[53px] bg-[#FF9F00] font-semibold text-white ">Add to Cart <FaShoppingCart className="text-white text-lg mb-1" /></button>
                                <button className="btn w-[240px] h-[53px] bg-[#FB641B] font-semibold text-white ">Buy Now <BsFillBagCheckFill className="text-white text-lg mb-2" /></button>
                            </div>
                        </div>
                    </div>
                </NavicationWithSideNavLayout>

            {/* </NavicationLayout> */}
        </div>
    );
};

export default index;