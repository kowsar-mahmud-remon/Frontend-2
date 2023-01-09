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

    console.log(data)


    const { asPath } = router;
    const categories = [
        {
            name: "Exclusives",
            slug: "Exclusives-fjjskf",
            categoryImage: {
                img: exclusives,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Sweet",
            slug: "Sweet-fjjskf",
            categoryImage: {
                img: sweet,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Kacha bazar",
            slug: "Kacha-bazar-fjjskf",
            categoryImage: {
                img: kachaBazar,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Fruits",
            slug: "Fruits-fjjskf",
            categoryImage: {
                img: fruits,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Meat & Fish",
            slug: "Meat-&-Fish-fjjskf",
            categoryImage: {
                img: meatFish,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Grocery",
            slug: "Grocery-fjjskf",
            categoryImage: {
                img: grocery,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Edible Oil",
            slug: "Edible-Oil-fjjskf",
            categoryImage: {
                img: oil,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Spice",
            slug: "Spice-fjjskf",
            categoryImage: {
                img: spice,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Dairy",
            slug: "Dairy-fjjskf",
            categoryImage: {
                img: dairy,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Tea & Coffee",
            slug: "Tea-&-Coffee-fjjskf",
            categoryImage: {
                img: teaCoffee,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Baby-Food",
            slug: "Baby-Food-fjjskf",
            categoryImage: {
                img: Babyfood,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Bakery-&-Snacks",
            slug: "Bakery-&-Snacks-fjjskf",
            categoryImage: {
                img: bakerySnacks,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Frozen-Foods",
            slug: "Frozen-Foods-fjjskf",
            categoryImage: {
                img: frozenFoods,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Canned Foods",
            slug: "Canned-Foods-fjjskf",
            categoryImage: {
                img: CannedFoods,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Sauce & Pickles",
            slug: "Sauce-&-Pickles-fjjskf",
            categoryImage: {
                img: saucePickles,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Cosmetics",
            slug: "Cosmetics-fjjskf",
            categoryImage: {
                img: cosmetics,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Home Care",
            slug: "Home-Care-fjjskf",
            categoryImage: {
                img: homeCare,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Home & Garden/ Furniture",
            slug: "Home-&-Garden-Furniture-fjjskf",
            categoryImage: {
                img: homeGarden,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Chocolate & Candy",
            slug: "Chocolate-&-Candy-fjjskf",
            categoryImage: {
                img: chocolateCandy,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Pet Care",
            slug: "Pet-Care-fjjskf",
            categoryImage: {
                img: petCare,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Appeals & Clothing",
            slug: "Appeals-&-Clothing-fjjskf",
            categoryImage: {
                img: appealsClothing,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Lather & Shoes",
            slug: "Lather-&-Shoes-fjjskf",
            categoryImage: {
                img: latherShoes,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
        {
            name: "Vehicle Essentials",
            slug: "Vehicle-Essentials-fjjskf",
            categoryImage: {
                img: VehiceleEssentials,
                key: "sjjsjjfjdsfskj"
            },
            description: "hi",
            type: "Page",
            subCategories: [
                {
                    name: "Pineapple",
                    description: "What is a product description? A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they're compelled to buy ",
                    slug: "Biscuits-0TOn3NpM2",
                    type: "Page",
                    parentCategory: "63a84b9b5c2061b84e6fda89",
                    categoryImage: {
                        img: exclusives,
                        key: "sjjsjjfjdsfskj"
                    },
                }
            ],
        },
    ]

    return (
        <section className={`${styles.sideNav} w-[285px] p-2 bg-[#ffffff] shawdow-black shadow-2xl `} id="sidNav">
            <ul>
                {/* <li className={asPath == "/" ? styles.active : ""} > */}
                {
                    categories.map((c, index) => {
                        const path = `/categories/${c.slug}/${c._id || "67434842347374"}`;
                        return (
                            <li onClick={() => {
                                router.push(path)
                            }} as={"li"} href={`/hi`} key={index} className={asPath == path ? styles.active : ""} >
                                <Link href='/'>
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
                }
                {/* {
                    data.categories.map((c, index) => {
                        const path = `/categories/${c.slug}/${c._id || "67434842347374"}`;
                        return (
                            <li onClick={() => {
                                router.push(path)
                            }} as={"li"} href={`/hi`} key={index} className={asPath == path ? styles.active : ""} >
                                <Link href='/'>
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
            </ul>
        </section>
    );
};

export default Category;