import  ManageAccount  from "../../components/ManageAccoutSideBar/ManageAccount";
import ManageAccountLayout from "../../components/ManageAccoutSideBar/ManageAccountLayout";



const Profile = () => {
    return (
        <div>
            {/* <div className="flex  my-8 mx-5 gap-[40px] xl:mx-4">
                <div>
                    <ManageAccoutSideBar></ManageAccoutSideBar>
                </div>
                <div>

                    <h1 className='text-orange-600 text-2xl pl-6 pt-6'>My Profile</h1>
                    <div className="card font-sans  rounded-t-lg px-6 py-8  shadow-xl">
                        <div className='grid pb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>


                            <div className="">
                                <h2 className="pb-2 font-sans">Full Name</h2>
                                <h1>Md Shakil Hossain</h1>
                            </div>
                            <div>
                                <h2 className="pb-2">Email Address | <span className='text-sky-600'>change</span></h2>
                                <h1>mdshakilhossain54@gmail.com</h1>
                            </div>
                            <div>
                                <h2 className="pb-2">Mobile | <span className='text-sky-600'>change</span></h2>
                                <h1>01728178345</h1>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
                            <div >
                                <h2 className="pb-2">Birthday</h2>
                                <p>2000-02-21</p>
                            </div>
                            <div>
                                <h2 className="pb-2">Gender</h2>
                                <p>Male</p>

                            </div>
                        </div>
                        <p className='text-sky-600 pb-4 pt-24'>Subscribe to our Newsletter</p>
                        <div className=''>
                            <div className='pb-4'>
                                <button className="btn  w-48 bg-orange-600 text-white">EDIT PROFILE</button>

                            </div>
                            <div>
                                <button className="btn w-48 bg-orange-600 text-white">CHANGE PASSWORD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <ManageAccountLayout>
                {/* <div>

                    <h1 className='text-orange-600 text-2xl pl-6 pt-6'>My Profile</h1>
                    <div className="card font-sans  rounded-t-lg px-6 py-8  shadow-xl">
                        <div className='grid pb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>


                            <div className="">
                                <h2 className="pb-2 font-sans">Full Name</h2>
                                <h1>Md Shakil Hossain</h1>
                            </div>
                            <div>
                                <h2 className="pb-2">Email Address | <span className='text-sky-600'>change</span></h2>
                                <h1>mdshakilhossain54@gmail.com</h1>
                            </div>
                            <div>
                                <h2 className="pb-2">Mobile | <span className='text-sky-600'>change</span></h2>
                                <h1>01728178345</h1>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
                            <div >
                                <h2 className="pb-2">Birthday</h2>
                                <p>2000-02-21</p>
                            </div>
                            <div>
                                <h2 className="pb-2">Gender</h2>
                                <p>Male</p>

                            </div>
                        </div>
                        <p className='text-sky-600 pb-4 pt-24'>Subscribe to our Newsletter</p>
                        <div className=''>
                            <div className='pb-4'>
                                <button className="btn  w-48 bg-orange-600 text-white">EDIT PROFILE</button>

                            </div>
                            <div>
                                <button className="btn w-48 bg-orange-600 text-white">CHANGE PASSWORD</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <ManageAccount></ManageAccount>
            </ManageAccountLayout>
        </div>
    );
};

export default Profile;
