import NavicationWithSideNavLayout from "../../layouts/NavicationWithSideNavLayout";
import Image from 'next/image'
import fruit from '../../assets/images/product_page/image 6.png'
import vector from '../../assets/images/product_page/Vector.png'
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillBagCheckFill, BsFillStarFill, BsStar } from 'react-icons/bs';
import Link from "next/link";


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
                    <div className="ml-[38px] ">
                        <div className="">
                            <p className="">
                                <Link href="#">Home</Link> /
                                <Link href="#">KachaBazar</Link> /
                                <Link className="text-[#287DF3]" href="#">Tomato (local) 500gm</Link>
                            </p>
                            <h3 className="text-3xl font-bold text-[#686868]">Tomato (Local) 500 ±30 gm</h3>
                            <div className="flex gap-5">
                                <div className="flex items-center">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsStar />
                                </div>
                                <p className="text-[#FB641B]">4.0</p>
                                <p className="text-[#686868]">24 ratings & reviews</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <p className="">Seller: <Link href="#" className="text-[#287DF3]">Profile</Link></p>
                                <p className="">Seller: <span className="bg-[#287DF3] text-white px-1 rounded-md">Verified</span></p>
                            </div>
                            <div className="flex gap-5 items-center my-2">
                                <h5 className="text-[24px] text-[#FB641B]">Tk. 60</h5>
                                <p className=""><del>Tk. 80</del></p>
                                <p className="">(20% off)</p>
                            </div>
                            <div className="flex gap-5">
                                <div className="text-md w-[34px] h-[34px] bg-[#F2F3F7] flex justify-center items-center">-</div>
                                <p className="text-lg text-[#FB641B]">1</p>
                                <div className="text-md w-[34px] h-[34px] bg-[#F2F3F7] flex justify-center items-center">+</div>
                            </div>
                            <p className="mt-[23px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using <q>Content here, content here</q>, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                        </div>
                    </div>
                </div>
                <div className="divider text-[#686868] text-lg"></div> 
                <div className="">

                </div>
            </NavicationWithSideNavLayout>

            {/* </NavicationLayout> */}
        </div>
    );
};

export default index;