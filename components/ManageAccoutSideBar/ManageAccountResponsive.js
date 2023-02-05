import { FaArrowLeft } from "react-icons/fa";


const ManageAccountResponsive = () => {
    return (
        <div className="mt-[66px] m-[24px]">
            <div className='flex items-center gap-[13px]'>
                 <FaArrowLeft className=''></FaArrowLeft>
                <h1 className='text-[20px]  font-[500] text-[#001E00]'>Manage My Profile</h1>
            </div>
            <div className="flex flex-col gap-6 py-4">
                <div className="card  w-[360px] h-[148px]  bg-base-100 shadow-lg">
                    <div className="card-body px-4 py-4">
                        <h1 className="font-bold text-[18px]">Personal Profile | <span className="text-[#287DF3] font-[400] text-[18px]">Edit</span></h1>
                        <ul>
                            <li>Abdul Karim</li>
                            <li>abdulkorim@gmail.com</li>
                            <li className="text-[#287DF3]">Subscribe to outer Newsletter</li>
                        </ul>
                    </div>
                </div>
                <div className="card w-[360px] h-[391px]   bg-base-100 shadow-lg">
                    <div className="flex flex-col">
                        <div className="px-4 py-4">
                            <h1 className="font-bold text-[18px]">Address Book | <span className="text-[#287DF3] font-[400] text-[18px]">Edit</span></h1>
                            <p>DEFAULT SHIPPING ADDRESS</p>
                            <p className="font-bold text-[16px]">Abdul Karim</p>
                            <ul>
                                <li>Ramgonj Tower 16/14,</li>
                                <li>Giridhara,Matuil,Kodomtali</li>
                                <li>Dhaka-1362</li>
                                <li>+88 012 342 450 45</li>
                            </ul>
                        </div>
                        <p className=" h-[0px] left-[24px]  border-[2px] border-solid  border-[#F2F2F2] w-[360px] "></p>
                        <div className="py-4 ml-[16px]">
                            <p>DEFAULT SHIPPING ADDRESS</p>
                            <p className="font-bold text-[16px]">Abdul Karim</p>
                            <ul>
                                <li>Bashundhara City Shopping</li>
                                <li>Complex 3 No Tejturi Bazar</li>
                                <li>West</li>
                                <li>+88 012 342 450 45</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAccountResponsive;