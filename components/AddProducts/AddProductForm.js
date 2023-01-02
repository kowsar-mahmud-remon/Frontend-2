import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const AddProductForm = () => {
    return (
        <div className='p-6 border border-[#F2F2F2] shadow-small'>
            <h2 className='text-lg'>Product Images</h2>
            <p className='text-[#707070] text-sm mt-2'>The picture will be displayed on the cover of the product details page. Sizes are between 330x330 and 2000x2000px. Pornographic images are prohibited.</p>

            <p className='text-center my-80'>image input field comming soon</p>

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