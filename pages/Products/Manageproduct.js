import React from 'react';
import Mangeitem from './Mangeitem';
import exclaimation from '../../assets/images/exclamation.png'
import Image from 'next/image';


const MENU_LIST = [
    { text: "All", href: "/Products/Manageproduct" },
    { text: "Online(0)", href: "/Products/Manageproduct/online" },
    { text: "Draft(0)", href: "/contact" },
    { text: "Pending QC(0)", href: "/contact" },
    { text: "Out of Stock(0)", href: "/contact" },
    { text: "Inactive(0)", href: "/contact" },
    { text: "Suspended(0)", href: "/contact" },
    { text: "Deleted(0)", href: "/contact" },
];

const Manageproduct = () => {


    return (
        <section className='bg-[#C9C9C9] '>
            <div className='max-w-screen-xl mx-auto'>
                <div>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Products</a></li>
                            <li>Manage Products</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-[#FB641B] font-medium text-2xl'>Product Management</h1>
                    </div>
                    <div className='bg-[#DFECFD] flex p-5 my-8'>
                        <div className='pr-4'>
                            <Image
                                src={exclaimation}
                                alt="exclaimation"
                                width="35"
                                height="35"
                            />
                        </div>
                        <div className='text-[#686868]'>
                            <p className='pb-2'>Since we have upgraded the product management, For a better experience, the older operation of file uploading on the current page would be offline in a few days. You can experience the new one in the menu <strong>Products / Bulk Add/Edit Products</strong></p>
                            <p>Your products are not yet visible to buyers. Please add address to make them visible</p>
                        </div>
                    </div>
                </div>


                <div className='bg-[#F2F2F2] p-6'>
                    <div className='mb-4'>
                        <button className='h-[40px] rounded w-[176px] bg-[#FB641B] hover:bg-[#ce4e0e] text-white font-medium'>Add Product</button>
                    </div>
                    <div className='grid grid-cols-8 justify-center bg-white'>
                        {MENU_LIST.map((menu, idx) => (
                            <div

                                key={menu.text}
                            >
                                <Mangeitem menu={menu}></Mangeitem>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manageproduct;