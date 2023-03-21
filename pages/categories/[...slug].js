import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Category from '../../components/SideNav/SideNav';
import { useGetAllSelectedCategoryQuery, useGetSingleCategoryQuery } from '../../features/category/categoryApi';
import NavicationWithSideNavLayout from '../../layouts/NavicationWithSideNavLayout';
import img from '../../assets/CategoryImages/KachabazarIcon/shopping-bag 1.png';
import Image from 'next/image';
import ProductCard from '../../components/allCategory/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveBtn } from '../../features/category/categorySlice';
import arrowLeft from '../../assets/images/arrowLeft.png';


const DynamicCat = () => {

    const router = useRouter();
    const { slug } = router.query;
    const id = slug && slug[1];

    const { data, isLoading, isError, error } = useGetSingleCategoryQuery(id, {
        pollingInterval: 20000,
        skip: false,
    });

    const { category: { id: productId, activeBtn } } = useSelector(state => state);
    const dispatch = useDispatch();

    const { data: categoryData, isLoading: categoryLoading, error: categoryError, refetch, discount } = useGetAllSelectedCategoryQuery(productId, {
        pollingInterval: 20000,
        refetchOnMountOrArgChange: true,
        skip: !productId ? true : false,
    });

    useEffect(() => {
        dispatch(setActiveBtn({ value: 'allProducts', id }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    //   btn style 
    const name = slug && slug[0].split('-')[0];
    const active = 'border-[3px] border-[#FB641B] rounded-[30px] py-[10px] px-[15px] text-[#FB641B] font-[500] text-[15px] flex justify-center items-center';
    const deactivate = ' bg-[#F4F4F4] border-[3px] border-[#F4F4F4] rounded-[30px] py-[10px] px-[15px] text-[#001E00] font-[500] text-[15px] flex justify-center items-center';

    return (
        <NavicationWithSideNavLayout>
            <div>
                <div className='mx-4'>

                    <div className="hidden md:block">
                        <div className=''>
                            <p className='lg:text-[16px] text-[12px] '><Link href={'/'}>Home</Link> / <span className='text-[#287DF3]'>{name}</span> </p>
                        </div>

                        <div className='flex items-center gap-1 mt-[8px]'>
                            <Image src={img} alt='img' width={28} height={28} />
                            <p className='lg:text-[24px] text-[18px] text-[#FB641B] font-[500]'>{name}</p>
                        </div>

                    </div>

                    <div onClick={() => router.back()} className="flex mx-1 items-center mt-3 md:hidden">
                        <Image
                            className=' mr-3 w-[20px] h-[14px] cursor-pointer'
                            src={arrowLeft}
                            alt=""
                            width={20}
                            height={14}
                        />
                        <p className='text-xl text-[#001E00] font-medium cursor-pointer'>{name}</p>
                    </div>

                    <div className='flex gap-4 flex-wrap mt-5 md:mt-[26px]'>
                        <button
                            className={`${activeBtn === 'allProducts' ? active : deactivate} lg:text-[16px] text-[12px]`}
                            onClick={() => {
                                dispatch(setActiveBtn({ value: 'allProducts', id }));
                            }}
                        >All Products</button>
                        {
                            data?._categories[0].subCategoryName.map((btn, index) => <button
                                onClick={() => {
                                    dispatch(setActiveBtn({ value: btn.name, id: btn._id }));
                                }}
                                key={index}
                                className={`${activeBtn === btn.name ? active : deactivate} lg:text-[16px] text-[12px]`}
                            >{btn.name}</button>)
                        }
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:flex gap-4 lg:gap-5 lg:flex-wrap mt-6 justify-center lg:justify-start'>
                        {
                            categoryData?.result?.map((product, index) => <ProductCard
                                product={product}
                                key={index}
                            />)
                        }
                    </div>
                </div>
            </div>
        </NavicationWithSideNavLayout>
    );
};

export default DynamicCat;