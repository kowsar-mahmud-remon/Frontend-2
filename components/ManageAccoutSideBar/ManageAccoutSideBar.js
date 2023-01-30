import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaCheck } from 'react-icons/fa';
const ManageAccoutSideBar = () => {
    const router = useRouter()
    return (
        <div>
            <div>
                <h1 className="text-[#001E00] lg:text-[16px] ">Hello,Abdul Korim</h1>
                <button type="button" className="lg:w-[172px] lg:h-[30px] lg:mt-4 flex text-[12px]  items-center  lg:text-[16px] justify-center lg:gap-2 bg-[#0BD838] text-white font-medium  leading-tight  rounded-full"><FaCheck></FaCheck>Verified Account</button>
                <div className="lg:mt-4">
                    <Link className={router.pathname == '/manageMyAccount' ? "text-[#FB641B] font-bold lg:mt-[16px] lg:text-[24px]" :" font-bold lg:mt-[16px] lg:text-[24px]"} href="manageMyAccount"><h1>Manage My Account</h1></Link>
                    
                    <ul className='lg:ml-6 lg:mt-[16px]'>
                        <Link href='/profile'><li className="text-[#686868]  lg:mt-[8px]  lg:text-[16px]">My Profile</li></Link>
                        <Link href=''><li className="text-[#686868] lg:mt-[8px]  lg:text-[16px]">Address Book</li></Link>
                        <Link href=''> <li className="text-[#686868] lg:mt-[8px] lg:text-[16px]">My Payment Options</li></Link>
                        <Link href=''> <li className="text-[#686868] lg:mt-[8px] lg:text-[16px]">Vouchers</li></Link>
                    </ul>
                </div>
                <div> 
                    <Link className={router.pathname == '/myOrders' ? "text-[#FB641B] font-bold lg:mt-[16px] lg:text-[24px]" :" font-bold lg:mt-[16px] lg:text-[24px]"} href='myOrders'><h1 >My Orders</h1></Link>
                    <ul  className='lg:ml-6'>
                        <Link href=''><li className="text-[#686868] lg:mt-[8px] lg:text-[16px]">My Returns</li></Link>
                       <Link href=''> <li className="text-[#686868] lg:mt-[8px] lg:text-[16px]">My Cancellations</li></Link>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold lg:text-[24px] lg:mt-[16px]">My Reviews</h1>
                    <Link href='/wishlist/myWishlist'><h1 className="font-bold lg:text-[24px] lg:mt-[16px]">My Wishlist</h1></Link>
                    <Link href='/wishlist/followedStore'><h1 className="font-bold lg:text-[24px] lg;mt-[16px]">Followed stores</h1></Link>
                    <h1 className="font-bold lg:text-[24px] lg:mt-[16px]">Sell On Banglar Big Store</h1>
                </div>
            </div>
        </div>
    );
};

export default ManageAccoutSideBar;