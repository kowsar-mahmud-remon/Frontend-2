import React from 'react';
import Mangeitem from './Mangeitem';
import exclaimation from '../../assets/images/exclamation.png'
import Image from 'next/image';


const MENU_LIST = [
    { text: "All", href: "/Products/Manageproduct" },
    { text: "Online(0)", href: "" },
    { text: "Draft(0)", href: "" },
    { text: "Pending QC(0)", href: "" },
    { text: "Out of Stock(0)", href: "" },
    { text: "Inactive(0)", href: "" },
    { text: "Suspended(0)", href: "" },
    { text: "Deleted(0)", href: "" },
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
                    <div className='grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3 gap-3 justify-center bg-white'>
                        {MENU_LIST.map((menu, idx) => (
                            <div

                                key={menu.text}
                            >
                                <Mangeitem menu={menu}></Mangeitem>
                            </div>
                        ))}
                    </div>

                    <div className='bg-[#DFECFD] flex p-5 my-8'>
                        <div className='pr-4'>
                            <Image
                                src={exclaimation}
                                alt="exclaimation"
                                width="26"
                                height="26"
                            />
                        </div>
                        <div className='text-[#686868]'>
                            <p className='pb-2'><strong>Explanation</strong></p>
                            <p>The product which is buyer can see and stock 0 will appear in online tab.</p>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-3 items-center'>
                        <div className='w-[176px]'>
                            <select className="select select-bordered w-[176px]">
                                <option disabled selected>Category</option>
                                <option> Apple</option>
                                <option> Orange</option>
                                <option> Tomato</option>
                            </select>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-[176px]" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-[176px]" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-[176px]" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-[176px]" />
                        <button type="submit" placeholder="Type here" className="h-[44px] rounded w-[176px] bg-[#FB641B] hover:bg-[#ce4e0e] text-white font-medium cursor-pointer" >Search</button>
                    </div>

                    <div className='flex lg:justify-between md:justify-between my-4 items-center'>
                        <div className='flex items-center'>
                            <p className='mr-6'>Selected: 0</p>
                            <input type="text" placeholder="Type here" className="input input-bordered w-[102px] mr-4" value="Inactivate" />
                            <input type="text" placeholder="Type here" className="input input-bordered w-[102px]" value="Batch Delete" />
                        </div>

                        <div>
                            <div className="btn-group">
                                <button className="bg-[#FB641B] hover:bg-[#ce4e0e] w-[102px] h-[44px] rounded">Product</button>
                                <button className=" text-[#FB641B] hover:bg-[#ce4e0e] hover:text-white w-[102px] h-[44px] rounded">SKU</button>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Product</th>
                                    <th>Local Title</th>
                                    <th>Product SKU</th>
                                    <th>Variation</th>
                                    <th>Price $</th>
                                    <th>Stock</th>
                                    <th>Created</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>
                                        NO Data
                                    </th>
                                    <td>

                                    </td>
                                    <td>
                                    </td>
                                    <th>
                                        NO Data
                                    </th>
                                    <th>
                                       
                                    </th>
                                    <th>
                                        
                                    </th>
                                    <th>
                                    
                                    </th>
                                    <th>
                                    
                                    </th>
                                    <th>
                                        NO Data
                                    </th>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Manageproduct;