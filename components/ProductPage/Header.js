import arow from '../../assets/images/product_page/Vector (3).png'
import grocery from '../../assets/images/product_page/extra/food 1.png'
import meatfish from '../../assets/images/product_page/extra/proteins 1.png'
import fooddelivery from '../../assets/images/product_page/extra/order 1.png'
import pharmacy from '../../assets/images/product_page/extra/drugstore 1.png'
import LPG from '../../assets/images/product_page/extra/Slide_1b (1) 1.png'
import organic from '../../assets/images/product_page/extra/organic 1.png'
import laundry from '../../assets/images/product_page/extra/ironing 1.png'
import parcel from '../../assets/images/product_page/extra/weight-scale 1.png'
import service from '../../assets/images/product_page/extra/24-hours 1.png'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="w-full shadow-lg">
            <div className='flex mb-10 lg:h-[112px] gap-3 md:gap-8  items-center w-11/12 mx-auto'>
                <h2 className="text-[#FB641B] text-[1rem] md:text-[2rem]">Instant Home Delivery</h2>
                <Image src={arow} width="62" height="42" alt="arrow"></Image>
                <div className="grid grid-cols-3 lg:grid-cols-9 gap-8">
                    <div className="">
                        <Image src={grocery} width="62" height="42" alt="arrow"></Image>
                        <p className="text-[10px] md:text-[16px]">Grocery</p>
                    </div>
                    <div className="">
                        <Image src={meatfish} width="62" height="42" alt="arrow"></Image>
                        <p className="text-[10px] md:text-[16px]">Grocery</p>
                    </div>
                    <div className="">
                        <Image src={fooddelivery} width="62" height="42" alt="arrow"></Image>
                        <p className="text-[10px] md:text-[16px]">Grocery</p>
                    </div>
                    <div className="text-[10px] md:text-[16px]">
                        <Image src={pharmacy} width="62" height="42" alt="arrow"></Image>
                        <p className="">Grocery</p>
                    </div>
                    <div className="text-[10px] md:text-[16px]">
                        <Image src={LPG} width="62" height="42" alt="arrow"></Image>
                        <p className="">Grocery</p>
                    </div>
                    <div className="text-[10px] md:text-[16px]">
                        <Image src={organic} width="62" height="42" alt="arrow"></Image>
                        <p className="">Grocery</p>
                    </div>
                    <div className="text-[10px] md:text-[16px]">
                        <Image src={laundry} width="62" height="42" alt="arrow"></Image>
                        <p className="">Grocery</p>
                    </div>
                    <div className="text-[10px] md:text-[16px]">
                        <Image src={parcel} width="62" height="42" alt="arrow"></Image>
                        <p className="">Grocery</p>
                    </div>
                    <div className="text-[10px] md:text-[16px]">
                        <Image src={service} width="62" height="42" alt="arrow"></Image>
                        <p className="">Grocery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;