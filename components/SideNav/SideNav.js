import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/componentsStyles/SideNav.module.css';
import { MdArrowBackIos } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useGetCategoryQuery } from '../../features/category/categoryApi';


const Category = () => {
    const router = useRouter();
    const { data, isLoading, isError, error } = useGetCategoryQuery()
    const { asPath } = router;
    console.log(data)
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

                                        return (<li key={index}>
                                            <Link className={asPath == path ? styles.activeSubLink : ""} href={path}>
                                                {s.name}
                                            </Link>
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