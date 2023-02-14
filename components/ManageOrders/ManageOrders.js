import Image from "next/image";
import React from "react";
import img from '../../assets/images/image 88.png';
import ManageOrdersModal from "./ManageOrdersModal";
function ManageOrders() {

    const tableDatas = [
        {
            id: 1,
            pimg: img,
            Local_title: 'Potol ',
            product_sku: 'KS5488UKO',
            category: 'Kacha Bazar',
            price: 'Tk 60',
            quantity: '1 kg',
            payment_status: 'Cash on Delivery',
            delivery_date: '01 Feb 2003 to 3 Feb 2023',
            status: 'Processing'

        },
        {
            id: 2,
            pimg: img,
            Local_title: 'Potol ',
            product_sku: 'KS5488UKO',
            category: 'Kacha Bazar',
            price: 'Tk 60',
            quantity: '1 kg',
            payment_status: 'Cash on Delivery',
            delivery_date: '01 Feb 2003 to 3 Feb 2023',
            status: 'Processing'

        },
        {
            id: 3,
            pimg: img,
            Local_title: 'Potol',
            product_sku: 'KS5488UKO',
            category: 'Kacha Bazar',
            price: 'Tk 60',
            quantity: '1 kg',
            payment_status: 'Cash on Delivery',
            delivery_date: '01 Feb 2003 to 3 Feb 2023',
            status: 'Processing'

        },
    ];
    return (
        <div className='ml-[60px]'>
            <p className='text-[18px] mt-[45px]'><span className='text-[#686868] text-[18px]'>Home {">"} Orders & Reviews </span><span className='font-semibold text-[
#001E00]'>{">"} Manage Orders</span></p>
            <h1 className='text-[#FB641B] text-[24px] mt-[8px] mb-[30px]'>Manage Orders</h1>

            <div className='shadow-2xl p-[24px] rounded-md min-h-[761px]'>
                <p className='text-[#001E00] text-[18px]'>All Open Orders</p>
                <div className='mt-[30px]'>
                    <div className='grid grid-cols-9 gap-[8px] bg-[#F2F3F7] rounded-t-md px-2 py-2 h-[48px]'>
                        <h1 className=' border-r-2 border-[#B7B7B7] font-semibold  text-[16px] text-[#001E00]'>Product</h1>
                        <h1 className=' border-r-2 border-[#B7B7B7] font-semibold  text-[16px] text-[#001E00]'>Local Title</h1>
                        <h1 className=' border-r-2 border-[#B7B7B7] font-semibold  text-[16px] text-[#001E00]'>Product SKU</h1>
                        <h1 className=' border-r-2 border-[#B7B7B7] font-semibold  text-[16px] text-[#001E00]'>Category</h1>
                        <h1 className=' border-r-2 border-[#B7B7B7] font-semibold  text-[16px] text-[#001E00]'>Price</h1>
                        <h1 className=' border-r-2 border-[#B7B7B7] font-semibold  text-[16px] text-[#001E00]'>Quantity</h1>
                        <h1 className=' border-r-2 border-[#B7B7B7] font-semibold  text-[16px] text-[#001E00]'>Payment Status</h1>
                        <h1 className=' border-r-2 border-[#B7B7B7] font-semibold  text-[16px] text-[#001E00]'>Delivery Date</h1>
                        <h1 className='  font-semibold  text-[16px] text-[#001E00]'>Status</h1>
                    </div>

                    {

                        tableDatas.map(tbl => {
                            return (

                                <div key={tbl.id}>
                                    <div className='grid grid-cols-9 gap-[8px] rounded-t-md px-2 py-2'>
                                        <div>

                                            <Image className='w-[76px] h-[61px] shadow-lg'
                                                src={tbl.pimg}
                                                alt='Product Image'
                                            />

                                        </div>
                                        <div className='flex items-center font-semibold  text-[#001E00] text-[16px]'>

                                            <p className='w-[120px]'>{tbl.Local_title}</p>

                                        </div>
                                        <div className='flex items-center font-semibold  text-[#001E00] text-[16px]'>{tbl.product_sku}</div>
                                        <div className='flex items-center font-semibold  text-[#001E00] text-[16px]'>{tbl.category}</div>
                                        <div className='flex items-center font-semibold  text-[#001E00] text-[16px]'>{tbl.price}</div>
                                        <div className='flex items-center font-semibold  text-[#001E00] text-[16px]'>{tbl.quantity}</div>
                                        <div className='flex items-center font-semibold  text-[#001E00] text-[16px]'>{tbl.payment_status}</div>
                                        <div className='flex items-center font-semibold  text-[#001E00] text-[16px] w-[101px]'>{tbl.delivery_date}</div>


                                        <div className='flex items-center font-semibold  text-[#001E00] text-[16px]'>
                                            <select className=' text-[16px] border border-[#B7B7B7] py-1 rounded-md' id="">
                                                <option selected className='px-[11px] py-[4px]  ' value="">Processing</option>
                                                <option className=' ' value="">Ready</option>
                                                <option >
                                                    <label htmlFor="manageOrdersModal" >Shipped</label>
                                                </option>

                                            </select>
                                        </div>


                                    </div>
                                    <hr />
                                </div>


                            );

                        })
                    }





                </div>
            </div>
            <label htmlFor="manageOrdersModal" >Shipped</label>
            <ManageOrdersModal></ManageOrdersModal>
        </div>
    );
}

export default ManageOrders;

