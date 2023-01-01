import delte from '../../assets/images/delete.png'
import tomato from '../../assets/images/tomato.png'
import heart from '../../assets/images/heart.png'
import Image from 'next/image'


const Checkout = () => {
    return (
        <div className='bg-[#C9C9C9] flex min-h-screen'>
            <div className='max-w-screen-xl flex mx-auto'>
                <div className=" w-[788px] ">
                    <h1 className="text-[#FB641B] text-2xl font-medium">Ready to Checkout!</h1>
                    <div className=" bg-[#FFFFFF] flex justify-between rounded-lg px-6 mb-4">
                        <div className='flex items-center py-[28px]'>
                            <input type="checkbox" className="checkbox" />
                            <p className='pl-4 text-base text-[#686868]'>SELECT ALL</p>
                        </div>
                        <div className='flex items-center'>
                            <Image
                                src={delte}
                                alt="delte product"
                                width="18"
                                height="21"
                            />
                            <p className='text-[10px] pl-2'>Delete</p>
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
                        <div className='grid grid-cols-5 mx-auto w-[788px] justify-center items-center'>
                            <div className='flex items-center py-[28px] justify-center'>
                                <input type="checkbox" className="checkbox" />
                                <div className='bg-white rounded-md shadow ml-4'>
                                    <Image
                                        src={tomato}
                                        alt="delte product"
                                        width="127"
                                        height="103"
                                    />

                                </div>
                            </div>
                            <div className='col-span-2 text-center'>
                                <h4 className='font-medium text-lg'>Tomato (Local) 500 ±30 gm</h4>
                                <span className='text-base'>No Brand, Color Family:Black</span>
                            </div>

                            <div className='text-center'>
                                <h4 className='font-medium text-lg'>TK. 60</h4>
                                <p className='text-base'>TK. 80</p>
                                <p className='text-sm'>(20% off)</p>
                                <div className='flex justify-center items-center'>
                                    <Image
                                        src={heart}
                                        alt="delte product"
                                        width="18"
                                        height="18"
                                    />
                                    <Image
                                        src={delte}
                                        alt="delte product"
                                        width="20"
                                        height="20"
                                    />
                                </div>
                            </div>
                            <div className='flex w-20'>
                                <div className='bg-[#F2F3F7] p-2 flex justify-center items-center'>
                                    <p className='text-[#686868] text-xl px-2 font-bold text-center'>+</p>
                                </div>
                                <div className='text-center flex items-center'>
                                    <h1>1</h1>
                                </div>
                                <div className='bg-[#F2F3F7] p-2 flex justify-center items-center'>
                                    <p className='text-[#686868] px-2 text-xl font-bold text-center'>-</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='ml-6'>
                    <div className='rounded-lg bg-white mt-8 p-4'>
                        <h1 className='text-[#FB641B]'>Order Summary </h1>
                        <div className='flex justify-between'>
                            <p>Subtotal (0 items)</p>
                            <p>TK 0</p>
                        </div>
                        <div className='flex'>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mr-1" />
                            <button className='bg-[#FB641B] px-2 text-sm text-white font rounded'>APPLY</button>
                        </div>
                        <div className='flex justify-between'>
                            <h3>Total</h3>
                            <p>TK 0</p>
                        </div>
                        <div>
                            <button className='bg-[#FB641B] px-2 w-full text-white font rounded'>APPLY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

