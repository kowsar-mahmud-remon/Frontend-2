import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/componentsStyles/SideNav.module.css';
import delivery from '../../assets/images/sid_nav_cons/delivery 1.png';
import exclusives from '../../assets/images/sid_nav_cons/exclusive 1.png';
import sweet from '../../assets/images/sid_nav_cons/herbal-tea 1.png';
import kachaBazar from '../../assets/images/sid_nav_cons/shopping-bag 1.png';
import fruits from '../../assets/images/sid_nav_cons/fruit 1.png';
import meatFish from '../../assets/images/sid_nav_cons/sirloin-steak 1.png';
import grocery from '../../assets/images/sid_nav_cons/basket 1.png';
import oil from '../../assets/images/sid_nav_cons/oil 2.png';
import spice from '../../assets/images/sid_nav_cons/spicy-food 1.png';
import dairy from '../../assets/images/sid_nav_cons/dairy-products 1.png';
import teaCoffee from '../../assets/images/sid_nav_cons/herbal-tea 1.png';
import Babyfood from '../../assets/images/sid_nav_cons/feeding 1.png';
import bakerySnacks from '../../assets/images/sid_nav_cons/white-bread 1.png';
import frozenFoods from '../../assets/images/sid_nav_cons/frozen-food 1.png';
import CannedFoods from '../../assets/images/sid_nav_cons/can 1.png';
import saucePickles from '../../assets/images/sid_nav_cons/soy-sauce 1.png';
import cosmetics from '../../assets/images/sid_nav_cons/cosmetics 1.png';
import homeCare from '../../assets/images/sid_nav_cons/cleaning-products 1.png';
import homeGarden from '../../assets/images/sid_nav_cons/house 1.png';
import chocolateCandy from '../../assets/images/sid_nav_cons/chocolate 2.png';
import petCare from '../../assets/images/sid_nav_cons/adoption 1.png';
import appealsClothing from '../../assets/images/sid_nav_cons/wardrobe 1.png';
import latherShoes from '../../assets/images/sid_nav_cons/leather 1.png';
import VehiceleEssentials from '../../assets/images/sid_nav_cons/car 1.png';
import { MdArrowBackIos } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useGetCategoryQuery } from '../../features/category/categoryApi';


const Category = () => {
    const router = useRouter();
    const { data, isLoading, isError, error } = useGetCategoryQuery()
    const { asPath } = router;


    return (
        <section className={`${styles.sideNav} w-[285px] p-2 bg-[#ffffff] shawdow-black shadow-2xl `} id="sidNav">
            <ul>
                {/* <li className={asPath == "/" ? styles.active : ""} > */}
                {/* {
                    categories.map((c, index) => {
                        const path = `/categories/${c.slug}/${c._id || "67434842347374"}`;
                        return (
                            <li onClick={() => {
                                // router.push(path)
                            }} as={"li"}  key={index} className={asPath == path ? styles.active : ""} >
                                <Link href={path}>
                                    <Image
                                        src={c.categoryImage.img}
                                        alt={c.categoryImage.key}
                                    />
                                    {c.name}
                                    <MdArrowBackIos />
                                </Link>
                                <ul>
                                    {c.subCategories.map((s, index) => <li key={index}>
                                        <Link className={asPath == "/sub" ? styles.activeSubLink : ""} href='/sub-menu'>
                                            Sub Menu
                                        </Link>
                                    </li>)}
                                </ul>
                            </li>
                        )
                    })
                } */}
                {
                    data?.categories?.map((c, index) => {
                        let path = `/categories/${c.slug}/${c._id || "67434842347374"}`;

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