import delte from '../../assets/images/delete.png'
import tomato from '../../assets/images/tomato.png'
import heart from '../../assets/images/heart.png'
import Image from 'next/image'


const Checkout = () => {
    return (
        <div className='bg-[#C9C9C9] flex min-h-screen pt-5'>
            <div className='max-w-screen-xl hero-content flex-col lg:flex-row md:flex-row mx-auto'>
                {/* Checkout form */}
                <div className=" lg:w-[788px] md:w-full w-full">
                    <div className='mb-2'>
                        <div className="text-[16px] text-[#686868] breadcrumbs">
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>Add to Cart</a></li>
                                <li className='text-[#287DF3]'>Checkout</li>
                            </ul>
                        </div>
                    </div>
                    <h1 className="text-[#FB641B] text-2xl font-medium mb-4">Ready to Checkout!</h1>
                    <div className=" bg-[#FFFFFF] flex justify-between rounded-lg px-6 mb-4 h-[56px]">
                        <div className='flex items-center py-[28px]'>
                            <input type="checkbox" className="checkbox" />
                            <p className='pl-4 text-[16px] text-[#686868]'>SELECT ALL</p>
                        </div>
                        <div className='flex items-center'>
                            <Image
                                src={delte}
                                alt="delte product"
                                width="18"
                                height="21"
                                className='cursor-pointer'
                            />
                            <p className='text-[10px] pl-2 text-[#686868]'>Delete</p>
                        </div>
                    </div>
                    <div className=" bg-[#FFFFFF] rounded-lg">
                        <div className='flex items-center py-[28px] pl-6'>
                            <input type="checkbox" className="checkbox" />
                            <p className='pl-4 text-base text-[#686868]'>Bangla Big Store</p>
                        </div>
                        <div>
                            <p className='border text-[#686868]'></p>
                        </div>
                        <div className='grid lg:grid-cols-5 grid-cols-4 mx-auto lg:w-[788px] md:w-full w-full justify-center items-center pl-6'>
                            <div className='flex items-center py-[28px] justify-center'>
                                <input type="checkbox" className="checkbox" />
                                <div className='bg-white rounded-md shadow ml-4'>
                                    <Image
                                        src={tomato}
                                        alt="delte product"
                                        width="127"
                                        height="80"
                                    />

                                </div>
                            </div>
                            <div className='lg:col-span-2  text-center'>
                                <h4 className='font-medium text-[17px] text-[#686868]'>Tomato (Local) 500 ±30 gm</h4>
                                <span className='text-sm text-[#686868]'>No Brand, Color Family:Black</span>
                            </div>

                            <div className='text-center'>
                                <h4 className='font-medium text-lg text-[#FB641B]'>TK. 60</h4>
                                <s className='text-[#686868] text-sm'>TK. 80</s>
                                <p className='text-[#686868] text-sm'>(20% off)</p>
                                <div className='flex justify-center items-center pt-4'>
                                    <Image
                                        src={heart}
                                        alt="delte product"
                                        width="18"
                                        height="18"
                                        className='mr-2 cursor-pointer'
                                    />
                                    <Image
                                        src={delte}
                                        alt="delte product"
                                        width="18"
                                        height="18"
                                        className='cursor-pointer'
                                    />
                                </div>
                            </div>
                            <div className='flex justify-end pr-6'>
                                <div className='bg-[#F2F3F7] p-1 flex justify-center items-center cursor-pointer'>
                                    <p className='text-[#686868] text-xl px-2 font-bold text-center'>+</p>
                                </div>
                                <div className='text-center flex items-center'>
                                    <h1 className='px-4 text-[#FB641B] font-medium text-2xl'>1</h1>
                                </div>
                                <div className='bg-[#F2F3F7] p-1 flex justify-center items-center cursor-pointer'>
                                    <p className='text-[#686868] px-2 text-xl font-bold text-center'>-</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Order Summary */}
                <div className='lg:ml-6 md:ml-3 ml-0 lg:pt-[96px] md:pt-[96px] pt-4 lg:w-11/12 md:w-2/5 w-full'>
                    <div className='rounded-lg bg-white p-4 h-[294px]'>
                        <h1 className='text-[#FB641B] mb-4'>Order Summary </h1>
                        <div className='flex justify-between mb-4'>
                            <p className='text-[#686868]'>Subtotal (0 items)</p>
                            <p className='text-[#686868]'>TK 0</p>
                        </div>
                        <div className='flex items-center mb-4'>
                            <input type="text" placeholder="Enter your promo code" className="input input-bordered w-full  mr-1 h-[42px]" />
                            <button className='bg-[#FB641B] px-4 text-sm text-white font rounded h-[40px] hover:bg-[#c74c0e]'>APPLY</button>
                        </div>
                        <div className='flex justify-between  mb-10'>
                            <h3 className='text-[#686868]'>Total</h3>
                            <p className='text-[#FB641B]'>TK 0</p>
                        </div>
                        <div>
                            <button className='bg-[#FB641B] px-2 w-full h-[48px] text-white font rounded text-base font-medium hover:bg-[#c74c0e]'>PROCEED TO CHECKOUT (0)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

