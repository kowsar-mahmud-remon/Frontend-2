import { FaCheck } from 'react-icons/fa';
const ManageAccoutSideBar = () => {
    return (
        <div>
            <div>
                <h1 className="text-[#001E00] text-[16px] ">Hello,Abdul Korim</h1>
                <button type="button" class="w-[172px] h-[30px] mt-4 flex items-center  text-[16px] justify-center gap-2 bg-[#0BD838] text-white font-medium  leading-tight  rounded-full"><FaCheck></FaCheck>Verified Account</button>
                <div className="mt-4">
                    <h1 className="text-[#FB641B] text-[24px] font-semibold">Manage My Account</h1>
                    <ul>
                        <li className="text-[#686868]  text-[16px]">My Profile</li>
                        <li className="text-[#686868]   text-[16px]">Address Book</li>
                        <li className="text-[#686868] text-[16px]">My Payment Options</li>
                        <li className="text-[#686868] text-[16px]">Vouchers</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-[24px]">My Orders</h1>
                    <ul className=''>
                        <li className="text-[#686868] text-[16px]">My Returns</li>
                        <li className="text-[#686868] text-[16px]">My Cancellations</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-[24px]">My Reviews</h1>
                    <h1 className="font-bold text-[24px]">My Wishlist & Followed stores</h1>
                    <h1 className="font-bold text-[24px]">Sell On Banglar Big Store</h1>
                </div>
            </div>
        </div>
    );
};

export default ManageAccoutSideBar;