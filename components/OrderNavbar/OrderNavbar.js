import Link from "next/link";
import { useRouter } from "next/router";

const OrderNavbar = () => {
    const router = useRouter()

    return (
        <div>
            <ul className="flex gap-[90px]  ">
                <Link className={router.pathname == '/myOrders' ? "text-[#FB641B] underline text-[16px]" :"  text-[16px]"}  href='myOrders'><li className="text-[16px]">All</li></Link>
                <Link className={router.pathname == '/ToPay' ? "text-[#FB641B] underline text-[16px]" :"  text-[16px]"}  href='ToPay'><li className="text-[16px]">To Pay</li></Link>
                <li className="text-[16px]">To Ship ()</li>
                <li className="text-[16px]">To Receive ()</li>
            </ul>
        </div>
    );
};

export default OrderNavbar;