import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/componentsStyles/SideNav.module.css';
import { MdArrowBackIos } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useGetCategoryQuery } from '../../features/category/categoryApi';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveBtn } from '../../features/category/categorySlice';


const Category = () => {
    const router = useRouter();
    const { data, isLoading, isError, error } = useGetCategoryQuery()
    const { asPath } = router;
    const { category: { activeBtn } } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <section className={`${styles.sideNav} w-[285px] p-2 bg-[#ffffff] shawdow-black shadow-2xl `} id="sidNav">
            <ul>
                {
                    data?.categories?.map((c, index) => {
                        let path = `/categories/${c.slug}/${c._id}`;

                        return (
                            <li onClick={() => {
                                router.push(path)
                            }} as={"li"} href={`/hi`} key={index} className={asPath == path ? styles.active : ""} >
                                <Link href={path}>
                                    <Image
                                        loader={() => c.categoryImage.img}
                                        src={c.categoryImage.img}
                                        alt={c.categoryImage.key}
                                        width={30}
                                        height={30}
                                    />
                                    {c.name}
                                    <MdArrowBackIos />
                                </Link>
                                <ul>
                                    {c.subCategories.map((s, index) => {

                                        return (<li
                                            onClick={() => dispatch(setActiveBtn({ value: s.name, id: s._id }))}

                                            key={index}>
                                            <p className={`${activeBtn == s.name ? styles.activeSubLink : ""} py-1 px-2 rounded-md my-2 cursor-pointer`}>
                                                {s.name}
                                            </p>
                                        </li>)
                                    })}
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Category;