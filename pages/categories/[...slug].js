import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Category from '../../components/SideNav/SideNav';
import { useGetAllSelectedCategoryQuery, useGetSingleCategoryQuery } from '../../features/category/categoryApi';
import NavicationWithSideNavLayout from '../../layouts/NavicationWithSideNavLayout';
import img from '../../assets/CategoryImages/KachabazarIcon/shopping-bag 1.png'
import Image from 'next/image';
import ProductCard from '../../components/allCategory/ProductCard';
const DynamicCat = () => {
    const router = useRouter()
    const { slug } = router.query
    const id = slug && slug[1]
    const [activeBtn, setActiveBtn] = useState('allProducts')
    const [categoryId, setCategoryId] = useState(null)
    const { data, isLoading, isError, error } = useGetSingleCategoryQuery(id, {
        pollingInterval: 20000,
        // refetchOnMountOrArgChange: true,
        skip: false,
    })

    const { data: categoryData, isLoading: categoryLoading, error: categoryError, refetch,discount } = useGetAllSelectedCategoryQuery(categoryId, {
        pollingInterval: 20000,
        refetchOnMountOrArgChange: true,
        skip: !categoryId ? true : false,
    })
    useEffect(() => {
        setCategoryId(id)
    }, [slug, id])
    useEffect(() => {
        setActiveBtn('allProducts')
    }, [slug])
    console.log('category', categoryData)
    const name = slug && slug[0].split('-')[0]
    const active = 'border-[3px] border-[#FB641B] rounded-[30px] py-[10px] px-[15px] text-[#001E00] font-[500] text-[15px] flex justify-center items-center'
    const deactivate = ' bg-[#F4F4F4] border-[3px] border-[#F4F4F4] rounded-[30px] py-[10px] px-[15px] text-[#001E00] font-[500] text-[15px] flex justify-center items-center'

    return (
        <NavicationWithSideNavLayout>
            <div>
                <div>
                    <div>
                        <p className='text-[16px] '><Link href={'/'}>Home</Link> / <span className='text-[#287DF3]'>{name}</span> </p>
                    </div>
                    <div className='flex items-center gap-1 mt-[8px]'>
                        <Image src={img} alt='img' width={28} height={28} />
                        <p className='text-[24px] text-[#FB641B] font-[500]'>Exclusive</p>
                    </div>
                    <div className='flex gap-5 flex-wrap mt-[26px]'>
                        <button
                            className={`${activeBtn === 'allProducts' ? active : deactivate}`}
                            onClick={() => {
                                setCategoryId(id)
                                setActiveBtn('allProducts')
                                // refetch()

                            }}
                        >All Products</button>
                        {
                            data?._categories[0].subCategoryName.map((btn, index) => <button
                                onClick={() => {
                                    setCategoryId(btn._id)
                                    setActiveBtn(btn.name)
                                    // refetch()
                                }}
                                key={index}
                                className={`${activeBtn === btn.name ? active : deactivate}`}
                            >{btn.name}</button>)
                        }
                    </div>
                    <div className='flex gap-8 flex-wrap mt-6 justify-center'>
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