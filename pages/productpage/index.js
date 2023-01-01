import NavicationWithSideNavLayout from "../../layouts/NavicationWithSideNavLayout";
import Image from 'next/image'
import fruit from '../../assets/images/product_page/image 6.png'
import vector from '../../assets/images/product_page/Vector.png'
import reviewer from '../../assets/images/product_page/Ellipse 38.png'
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
                    <h5 className="text-[24px] font-semibold">Customer Product Ratings & Reviews</h5>
                    <div className="flex justify-between">
                        <div className="">
                            <p className="text-[84px]">4.0 <span className="text-[44px]">(24)</span></p>
                            <div className="flex gap-5">
                                <div className="flex items-center text-3xl gap-1">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex gap-2 justify-center items-center">
                                <div className="flex items-center gap-1">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                </div>
                                <progress className="progress progress-success w-56" value="100" max="100"></progress>
                                <span>(11)</span>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                                <div className="flex items-center gap-1">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                </div>
                                <progress className="progress progress-success w-56" value="100" max="100"></progress>
                                <span>(04)</span>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                                <div className="flex items-center gap-1">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                </div>
                                <progress className="progress progress-warning w-56" value="100" max="100"></progress>
                                <span>(05)</span>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                                <div className="flex items-center gap-1">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                </div>
                                <progress className="progress progress-warning w-56" value="50" max="100"></progress>
                                <span>(03)</span>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                                <div className="flex items-center gap-1">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                </div>
                                <progress className="progress progress-error w-56" value="100" max="100"></progress>
                                <span>(01)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider text-[#686868] text-lg"></div>
                <div className="">
                    <h5 className="text-[24px]">Ratings & Reviews</h5>
                    <div className="">
                        <div className="mt-[24px] flex gap-3">
                            <Image src={reviewer} width="26" height="26" alt="reviewer"></Image>
                            <p className="text-[18px]">Jakariya Sick</p>
                            <div className="flex items-center">
                                <BsFillStarFill className="text-[#FB641B]" />
                                <BsFillStarFill className="text-[#FB641B]" />
                                <BsFillStarFill className="text-[#FB641B]" />
                                <BsFillStarFill className="text-[#FB641B]" />
                                <BsFillStarFill className="text-[#FB641B]" />
                            </div>
                        </div>
                        <small className="text-[#686868] ml-10">8 day ago</small>
                        <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using <q>Content here, content here</q>, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                        <div className="flex gap-5">
                            <div className="">
                                <Image className=" rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image className=" rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image className=" rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image className=" rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-[24px] flex gap-3">
                            <Image src={reviewer} width="26" height="26" alt="reviewer"></Image>
                            <p className="text-[18px]">Jakariya Sick</p>
                            <div className="flex items-center">
                                <BsFillStarFill className="text-[#FB641B]" />
                                <BsFillStarFill className="text-[#FB641B]" />
                                <BsFillStarFill className="text-[#FB641B]" />
                                <BsFillStarFill className="text-[#FB641B]" />
                                <BsFillStarFill className="text-[#FB641B]" />
                            </div>
                        </div>
                        <small className="text-[#686868] ml-10">8 day ago</small>
                        <p className="text-[16px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using <q>Content here, content here</q>, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                        <div className="flex gap-5">
                            <div className="">
                                <Image className=" rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image className=" rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image className=" rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image className=" rounded-md" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center justify-end">
                        <div className="btn btn-outline btn-error w-[140px] h-[32px]">Previous page</div>
                        <div className="">1</div>
                        <div className="">2</div>
                        <div className="">3</div>
                        <div className="">4</div>
                        <div className="btn btn-outline btn-error w-[119px] h-[32px]">Next page</div>

                    </div>
                </div>
                <div className="divider text-[#686868] text-lg"></div>
                
            </NavicationWithSideNavLayout>

            {/* </NavicationLayout> */}
        </div>
    );
};

export default index;