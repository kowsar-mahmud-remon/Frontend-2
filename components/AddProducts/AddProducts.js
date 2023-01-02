import React from 'react';
import { FaAngleRight, FaAngleUp } from 'react-icons/fa';
import AddProductForm from './AddProductForm';

const AddProducts = () => {
    return (
        <div className='grid grid-cols-3 2xl:grid-cols-4 gap-5'>
            <div className='col-span-2 2xl:col-span-3'>
                <div className='flex items-center text-lg text-accent'>
                    <span>Home</span> <FaAngleRight /> <span> Products</span> <FaAngleRight /><span className='text-black'> Add Products</span>
                </div>
                <h2 className='text-2xl font-medium mb-8 mt-2 text-primary'>Add Products</h2>
                <AddProductForm />
                <div className='mt-6 flex gap-4 justify-center'>
                    <button className='py-5 px-20 border border-accent text-2xl text-accent rounded-lg'>Save Draft</button>
                    <button className='py-5 px-20 bg-primary border border-primary text-2xl text-white rounded-lg'>Submit</button>
                </div>
            </div>
            <div>
                <div className='p-6 border border-[#F2F2F2] shadow-small'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-lg text-primary'>Content Score Product</h2>
                        <button className='text-[rgb(40,125,243)]'>Hide <FaAngleUp className='inline' /></button>
                    </div>
                    <h2 className='text-[#F4253F] mt-2 mb-3.5 text-lg font-medium'>Low</h2>
                    <div class="h-1.5 w-full bg-slate-200 rounded-full"></div>
                    <h2 className='font-medium text-primary mt-8 mb-2'>Recommend for you</h2>
                    <div class="h-0.5 w-full bg-[#686868] rounded-full"></div>
                    <button className='flex items-center mt-2 text-[#287DF3]' ><span>Category is required</span> <FaAngleRight /></button>
                </div>
                <div className='p-6 border border-[#F2F2F2] shadow-small mt-8'>
                    <h2 className='text-lg text-[#001E00]'>Tips</h2>
                    <p className='text-accent text-xs mt-2'>Please make sure the title is optimized and the category is selected correctly.</p>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;