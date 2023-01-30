import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaCheck } from 'react-icons/fa';
const ManageAccoutSideBar = () => {
    const router = useRouter()
    return (
        <div>
            <div>
                <h1 className="text-[#001E00] text-[16px] ">Hello,Abdul Korim</h1>
                <button type="button" className="w-[172px] h-[30px] mt-4 flex items-center  text-[16px] justify-center gap-2 bg-[#0BD838] text-white font-medium  leading-tight  rounded-full"><FaCheck></FaCheck>Verified Account</button>
                <div className="mt-4">
                    <Link className={router.pathname == '/manageMyAccount' ? "text-[#FB641B] font-bold mt-[16px] text-[24px]" :" font-bold mt-[16px] text-[24px]"} href="manageMyAccount"><h1>Manage My Account</h1></Link>
                    
                    <ul className='ml-6 mt-[16px]'>
                        <Link href='/profile'><li className="text-[#686868]  mt-[8px]  text-[16px]">My Profile</li></Link>
                        <Link href=''><li className="text-[#686868] mt-[8px]  text-[16px]">Address Book</li></Link>
                        <Link href=''> <li className="text-[#686868] mt-[8px] text-[16px]">My Payment Options</li></Link>
                        <Link href=''> <li className="text-[#686868] mt-[8px] text-[16px]">Vouchers</li></Link>
                    </ul>
                </div>
                <div> 
                    <Link className={router.pathname == '/myOrders' ? "text-[#FB641B] font-bold mt-[16px] text-[24px]" :" font-bold mt-[16px] text-[24px]"} href='myOrders'><h1 >My Orders</h1></Link>
                    <ul  className='ml-6'>
                        <Link href=''><li className="text-[#686868] mt-[8px] text-[16px]">My Returns</li></Link>
                       <Link href=''> <li className="text-[#686868] mt-[8px] text-[16px]">My Cancellations</li></Link>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-[24px] mt-[16px]">My Reviews</h1>
                    <Link href='/wishlist/myWishlist'><h1 className="font-bold text-[24px] mt-[16px]">My Wishlist</h1></Link>
                    <h1 className="font-bold text-[24px] mt-[16px]">Followed stores</h1>
                    <h1 className="font-bold text-[24px] mt-[16px]">Sell On Banglar Big Store</h1>
                </div>
            </div>
        </div>
    );
};

export default ManageAccoutSideBar;