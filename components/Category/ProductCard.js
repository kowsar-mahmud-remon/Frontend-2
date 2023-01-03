import Image from 'next/image';
import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import lemon from '../../assets/CategoryImages/ProductsImg/lemon.png';

const ProductCard = ({ product }) => {
    const { off, offerPrice, price, rating, ratingAndReview, seller, title } = product;
    return (
        <div className="bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 p-4">
            <Image className="rounded-t-lg w-full" src={lemon} alt="product image" />
            <div className="px-5 pb-5">
                <div className='my-3 flex items-center gap-1'>
                    <p className='text-primary text-medium text-base'>Tk {offerPrice}</p>
                    <p className='text-secondary'><span className='line-through'>Tk {price}</span> ({off}% off)</p>
                </div>
                <a href="#" className='mb-3'>
                    <h3 className="text-gray-900 font-semibold text-base tracking-tight dark:text-white">{title}</h3>
                </a>
                <div className="flex items-center gap-2.5 mt-2.5 mb-3.5">
                    <div className='flex items-center text-white bg-primary text-xs justify-center p-0.5 gap-0.5'>
                        <span>{rating} </span> <FaStar />
                    </div>
                    <span className="text-secondary text-sm">{ratingAndReview}</span>
                </div>
                <div className='mb-3.5 h-4'>
                    <p className='text-secondary'>Seller: {seller}</p>
                </div>
                <div className="flex">
                    <button
                        className="text-white bg-primary w-full text-2xl py-1 rounded-lg">Add
                        to cart <FaShoppingCart className='inline' /></button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;