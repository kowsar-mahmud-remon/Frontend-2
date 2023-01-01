import Image from 'next/image';
import React, { useEffect } from 'react';
import kachabazarIcon from '../../assets/CategoryImages/KachabazarIcon/shopping-bag 1.png';
import categories from '../../Utils/Category.json';

const Category = () => {
    return (
        <div>
            <div className='mb-4'>
                <div className='flex gap-1 items-center'>
                    <Image src={kachabazarIcon} alt='' />
                    <h2 className='text-primary text-2xl'>Kacha Bazar</h2>
                </div>
            </div>
            <div className='lg:flex gap-4 overflow-x-scroll 2xl:w-4/6 mb-6'>
                {
                    categories && categories.map(category => <button
                        className='bg-info flex items-center justify-center text-sm rounded-full font-medium hover:border-2 hover:border-primary hover:bg-white w-[103px] h-[36px]'
                        key={category.id}
                    >{category.name}</button>)
                }
            </div>
        </div>
    );
};

export default Category;