import Sellerverification from '../../components/sellerverification/sellerverification';
import SecondImage from '../../components/sellerverification/SecondImage';
import NavicationWithSideNavLayout from '../../layouts/NavicationWithSideNavLayout';


const index = () => {



    return (
        <NavicationWithSideNavLayout>
            <div className="">
                {/* <SideNav /> */}
                <div className="shadow-lg pb-40 px-5 md:pl-10">
                    <div className="">
                        <h4 className="text-[24px] text-[#FB641B] font-semibold">New Seller Verification</h4>
                        <p className='text-[10px] md:text-md'>YOUR STORE IS INACTIVE UNTIL YOU COMPLETE THE STEPS BELOW</p>
                        <div className="flex items-center my-8">
                            <div className="bg-[#FB641B] text-white border border-white rounded-3xl px-1 text-[5px] md:text-[12px]">1</div>
                            <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] px-5 md:px-20 rounded-xl">Add Shop Name</div>
                            <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] border border-white px-1 rounded-lg">2</div>
                            <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] px-5 md:px-20 rounded-xl">Add Shop Name</div>
                            <div className="bg-[#FB641B] text-[5px] md:text-[12px] px-1 text-white rounded-lg">3</div>
                            <div className="bg-[#FB641B] text-[5px] md:text-[12px] px-5 md:px-20 text-white rounded-xl">Add Shop Name</div>
                            <div className=" text-[5px] md:text-[12px] px-1 rounded-lg border border-black">4</div>
                            <div className=" text-[5px] md:text-[12px] border border-black px-5 md:px-20 rounded-xl">Add Shop Name</div>
                        </div>
                        <h4 className="text-[24px] font-semibold text-[#686868]">Please give your ID & Bank Information</h4>
                        <div className="grid grid-cols-2 gap-5">
                            {/* <div className=""> */}
                            <div className="max-w-[680px] shadow-lg items-center border bg-[#FB641B] text-white rounded-md p-5">
                                <p className='text-lg font-semibold'>I’m an individual</p>
                                <p>Most sellers on Banglar Big Store fall into this category</p>
                            </div>
                            {/* </div> */}
                            {/* <div className=""> */}
                            <div className="max-w-[680px] items-center border text-[#FB641B] rounded-md p-5 shadow-lg">
                                <p className='text-lg font-semibold'>I’m a Sole Trader or Incorporated Business</p>
                                <p>A registered legal entity</p>
                            </div>
                            {/* </div> */}
                        </div>

                    </div>
                    <h4 className="text-[24px] mt-10 font-semibold text-[#686868]">Please give your ID & Bank Information</h4>


                    <Sellerverification />

                    <div className="grid grid-cols-1 md:grid-cols-2 my-5">
                        <div className="">
                            <p className="text-sm md:text-md">ID Name*</p>
                            <input type="text" placeholder="Type here" className="input input-bordered md:w-[480px]" />
                        </div>
                        <div className="">
                            <p className="text-sm md:text-md">State Name*</p>
                            <input type="text" placeholder="Type here" className="input input-bordered  md:w-[480px]" />
                        </div>
                    </div>
                    <div className="my-4">
                        <h5 className="max-text-xl font-semibold my-5 text-[#686868]">Please give your ID & Bank Information</h5>
                        <div className="">
                            <p className="text-sm md:text-md">Verify Your Bank Account*</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


                                <SecondImage />

                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                            <div className="">
                                <p className="text-sm md:text-md">Account Holder Name*</p>
                                <input type="text" placeholder="Branch" className="input input-bordered md:w-[480px]" />
                            </div>
                            <div className="">
                                <p className="text-sm md:text-md">Bank Name*</p>
                                <input type="text" placeholder="Branch" className="input input-bordered  md:w-[480px]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                            <div className="">
                                <p className="text-sm md:text-md">Branch Name*</p>
                                <input type="text" placeholder="Branch" className="input input-bordered md:w-[480px]" />
                            </div>
                            <div className="">
                                <p className="text-sm md:text-md">Account Number*</p>
                                <input type="text" placeholder="Account" className="input input-bordered md:w-[480px]" />
                            </div>
                        </div>
                        <div className="">
                            <p className="text-sm md:text-md">Routing Number*</p>
                            <input type="text" placeholder="Routing Number" className="input input-bordered  md:w-[480px]" />
                        </div>
                    </div>
                </div >
            </div >
        </NavicationWithSideNavLayout>
    );
};

export default index;

