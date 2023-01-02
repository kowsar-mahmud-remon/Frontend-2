import Image from 'next/image';
import React from 'react';
import kachabazarIcon from '../../assets/CategoryImages/KachabazarIcon/shopping-bag 1.png';
import categories from '../../Utils/Category.json';
import products from '../../Utils/Products.json';
import ProductCard from './ProductCard';

const Category = () => {
    return (
        <div>
            <div className='mb-4'>
                <p className='text-accent mb-2'>Home /<span className='text-[#287DF3]'> Kachabazar</span></p>
                <div className='flex gap-1 items-center'>
                    <Image src={kachabazarIcon} alt='' />
                    <h2 className='text-primary text-2xl'>Kacha Bazar</h2>
                </div>
            </div>
            <div className='grid grid-cols-3 justify-center lg:flex gap-4 overflow-x-scroll 2xl:w-4/6 mb-6'>
                {
                    categories && categories.map(category => <button
                        className='bg-info flex items-center justify-center text-sm rounded-full font-medium hover:border-2 hover:border-primary hover:bg-white w-[103px] h-[36px] mx-auto'
                        key={category.id}
                    >{category.name}</button>)
                }
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5'>
                {
                    products && products.map(product => <ProductCard key={product.id} product={product} />)
                }

            </div>
        </div>
    );
};

export default Category;