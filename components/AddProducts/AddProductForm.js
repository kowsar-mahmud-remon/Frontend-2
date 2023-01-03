import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const AddProductForm = () => {
    return (
        <div className='p-6 border border-[#F2F2F2] shadow-small'>
            <h2 className='text-lg 2xl:text-2xl'>Product Images</h2>
            <p className='text-[#707070] text-sm 2xl:text-lg mt-2'>The picture will be displayed on the cover of the product details page. Sizes are between 330x330 and 2000x2000px. Pornographic images are prohibited.</p>
            <label for="thumbnail-file" class="mx-auto cursor-pointer w-full h-[180px] 2xl:h-[200px] mt-8 rounded-xl border-2 border-dashed border-accent bg-white grid grid-cols-4 2xl:grid-cols-5">
                <div className='flex flex-col items-center justify-center'>
                    <svg fill="#FB641B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-14 w-16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M13 19v-4h3l-4-5-4 5h3v4z"></path><path d="M7 19h2v-2H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5z"></path></g></svg>

                    <h2 class="mt-2 text-xs 2xl:text-base text-accent tracking-wide">Upload Thumbnail Image </h2>
                    <input id="thumbnail-file" type="file" class="hidden" />
                </div>
                <div className='col-span-3 2xl:col-span-4 border-l border-accent grid-cols-3 grid 2xl:grid-cols-4 gap-7 p-4'>
                    <div className='w-full h-full bg-slate-300'>

                    </div>
                </div>
            </label>
            <label for="productVideo-file" class="mx-auto cursor-pointer w-full h-[180px] 2xl:h-[200px] mt-8 rounded-xl border-2 border-dashed border-accent bg-white grid grid-cols-4 2xl:grid-cols-5">
                <div className='flex flex-col items-center justify-center'>
                    <svg fill="#FB641B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-14 w-16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M13 19v-4h3l-4-5-4 5h3v4z"></path><path d="M7 19h2v-2H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5z"></path></g></svg>

                    <h2 class="mt-2 text-xs 2xl:text-base text-accent tracking-wide">Upload Thumbnail Image </h2>
                    <input id="productVideo-file" type="file" class="hidden" />
                </div>
                <div className='col-span-3 2xl:col-span-4 border-l border-accent grid-cols-3 grid 2xl:grid-cols-4 gap-7 p-4'>
                    <div className='w-full h-full bg-slate-300'>
                    </div>
                    <div className='w-full h-full bg-slate-300'>
                    </div>
                    <div className='w-full h-full bg-slate-300'>
                    </div>
                    <div className='w-full h-full bg-slate-300 hidden 2xl:block'>
                    </div>
                </div>
            </label>
            <label for="productImg-file" class="mx-auto cursor-pointer w-full h-[320px] 2xl:h-[400px] mt-8 rounded-xl border-2 border-dashed border-accent bg-white grid grid-cols-4 2xl:grid-cols-5">
                <div className='flex flex-col items-center justify-center'>
                    <svg fill="#FB641B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-14 w-16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M13 19v-4h3l-4-5-4 5h3v4z"></path><path d="M7 19h2v-2H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5z"></path></g></svg>

                    <h2 class="mt-2 text-xs 2xl:text-base text-accent tracking-wide">Upload Thumbnail Image </h2>
                    <input id="productImg-file" type="file" class="hidden" />
                </div>
                <div className='col-span-3 2xl:col-span-4 border-l border-accent grid-cols-3 grid 2xl:grid-cols-4 gap-7 p-4'>
                    <div className='w-full h-full bg-slate-300'>
                    </div>
                    <div className='w-full h-full bg-slate-300'>
                    </div>
                    <div className='w-full h-full bg-slate-300'>
                    </div>
                    <div className='w-full h-full bg-slate-300 hidden 2xl:block'>
                    </div>
                    <div className='w-full h-full bg-slate-300'>
                    </div>
                    <div className='w-full h-full bg-slate-300'>
                    </div>
                    <div className='w-full h-full bg-slate-300'>
                    </div>
                    <div className='w-full h-full bg-slate-300 hidden 2xl:block'>
                    </div>
                </div>
            </label>

            <div class="flex items-center mt-6">
                <div class="w-1/3">
                    <label class="block text-[#001E00] text-start" for="ProductName">
                        Product Name:
                    </label>
                </div>
                <div class="w-2/3">
                    <input class="appearance-none border-2 border-accent rounded w-[423px] py-2 px-4 text-accent leading-tight focus:outline-nonefocus:border-primary" id="ProductName" type="text" placeholder="Ex. Nikon Coolpix A300 Digital Camera" />
                </div>
            </div>
            <div class="flex items-center mt-4">
                <div class="w-1/3">
                    <label class="block text-[#001E00] text-start" for="Bengali_product_name">
                        Bengali product name:
                    </label>
                </div>
                <div class="w-2/3">
                    <input class="appearance-none border-2 border-accent rounded w-[423px] py-2 px-4 text-accent leading-tight focus:outline-nonefocus:border-primary" id="Bengali_product_name" type="text" placeholder="Ex. Nikon Coolpix A300 Digital Camera" />
                </div>
            </div>
            <div class="flex items-center mt-4">
                <div class="w-1/3">
                    <label class="block text-[#001E00] text-start" for="Category">
                        Category:
                    </label>
                </div>
                <div class="w-2/3">
                    <input class="appearance-none border-2 border-accent rounded w-[423px] py-2 px-4 text-accent leading-tight focus:outline-nonefocus:border-primary" id="Category" type="text" />
                </div>
            </div>
            <div class="flex items-center mt-4">
                <div class="w-1/3">
                    <span class="block text-[#001E00] text-start">
                        Category Suggestions:
                    </span>
                </div>
                <div class="w-2/3">
                    <div className='flex items-center  text-xs 2xl:text-sm text-accent flex-wrap mb-2 2xl:mb-4'>
                        <span>Mobiles & TabletsMobile</span> <FaAngleRight /><span>Accessories</span><FaAngleRight /><span>Phone Cases</span>
                    </div>
                    <div className='flex items-center  text-xs 2xl:text-sm text-accent flex-wrap mb-2 2xl:mb-4'>
                        <span>Mobiles & TabletsMobile</span> <FaAngleRight /><span>Accessories</span><FaAngleRight /><span>Screen Protectors</span>
                    </div>
                    <div className='flex items-center text-xs 2xl:text-sm text-accent flex-wrap mb-2 2xl:mb-4'>
                        <span>Fashion</span> <FaAngleRight /><span>Women</span> <FaAngleRight /><span>Clothing</span><FaAngleRight /><span>Traditional Clothing</span><FaAngleRight /><span>Kurtas & Shalwar Kameez</span><FaAngleRight /><span>Shalwar Kameez</span>
                    </div>
                    <div className='flex items-center  text-xs 2xl:text-sm text-accent flex-wrap mb-2 2xl:mb-4'>
                        <span>TV, Audio / Video, Gaming & Wearables</span><FaAngleRight /><span>Audio</span><FaAngleRight /><span>Headphones & Headsets</span><FaAngleRight /><span>In-Ear Headphones</span>
                    </div>
                    <div className='flex items-center  text-xs 2xl:text-sm text-accent flex-wrap mb-2 2xl:mb-4'>
                        <span>Tools, DIY & Outdoor</span> <FaAngleRight /><span>Hand Tools</span> <FaAngleRight /><span>Hand Tool Parts & Accessories</span>
                    </div>
                    <div className='flex items-center  text-xs 2xl:text-sm text-accent flex-wrap mb-2 2xl:mb-4'>
                        <span>Mobiles & Tablets</span> <FaAngleRight /><span>Mobile Accessories</span> <FaAngleRight /><span>Fashion Accessories</span>
                    </div>
                    <div className='flex items-center  text-xs 2xl:text-sm text-accent flex-wrap mb-2 2xl:mb-4'>
                        <span>Watches Sunglasses Jewellery</span> <FaAngleRight /><span>Watches</span> <FaAngleRight /><span>Men</span><FaAngleRight /><span>Business</span>
                    </div>
                    <div className='flex items-center  text-xs 2xl:text-sm text-accent flex-wrap mb-2 2xl:mb-4'>
                        <span>Fashion</span> <FaAngleRight /><span>Women</span> <FaAngleRight /><span>Clothing</span><FaAngleRight /><span>Dresses</span>
                    </div>
                    <div className='flex items-center  text-xs 2xl:text-sm text-accent flex-wrap mb-2 2xl:mb-4'>
                        <span>Home Appliances</span> <FaAngleRight /><span>Appliances Parts & Accessories</span> <FaAngleRight /><span>Vacuum Cleaners Accessories</span>
                    </div>
                    <div className='flex items-center  text-xs 2xl:text-sm text-accent flex-wrap mb-2 2xl:mb-4'>
                        <span>Bags and Travel</span> <FaAngleRight /><span>Women Bags</span> <FaAngleRight /><span>Cross Body & Shoulder Bags</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;