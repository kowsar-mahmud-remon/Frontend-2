import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/componentsStyles/SideNav.module.css';

import exclusives from '../../assets/images/Seller_Verification_page/packaging 1.png';
import sweet from '../../assets/images/Seller_Verification_page/promotion 1.png';
import kachaBazar from '../../assets/images/Seller_Verification_page/rating 1.png';
import fruits from '../../assets/images/Seller_Verification_page/shop 1.png';
import meatFish from '../../assets/images/Seller_Verification_page/growth 1.png';
import grocery from '../../assets/images/Seller_Verification_page/finance 1.png';
import oil from '../../assets/images/Seller_Verification_page/training 1.png';
import spice from '../../assets/images/Seller_Verification_page/financial-profit 1.png';
import dairy from '../../assets/images/Seller_Verification_page/graduation 1.png';
import teaCoffee from '../../assets/images/Seller_Verification_page/customer-service 1.png';
import Babyfood from '../../assets/images/Seller_Verification_page/solution 1.png';
import bakerySnacks from '../../assets/images/Seller_Verification_page/folder 1.png';
import frozenFoods from '../../assets/images/Seller_Verification_page/settings 1.png';
import { MdArrowBackIos } from 'react-icons/md';
import { useRouter } from 'next/router';


const SellerVerificationPageSideNav = () => {
  const router = useRouter();
  const { asPath } = router;
  const categories = [
    {
      name: "Products",
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
      name: "Promotions",
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
      name: "Orders & Reviews",
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
      name: "Store Decoration",
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
      name: "Assortment Growth",
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
      name: "Account Health",
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
      name: "Business Advisor",
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
      name: "Finance",
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
      name: "Seller Guideline",
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
      name: "Seller Support",
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
      name: "Sponsored Solutions",
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
      name: "Seller Documents",
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
      name: "Account & Settings",
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

  ];

  return (
    <section className={`${styles.sideNav} w-[285px] p-2 bg-[#ffffff] shawdow-black shadow-2xl `} id="sidNav">
      <ul>
        {/* <li className={asPath == "/" ? styles.active : ""} > */}
        {
          categories.map((c, index) => {
            const path = `/categories/${c.slug}/${c._id || "67434842347374"}`;
            return (
              <li onClick={() => {
                router.push(path);
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
            );
          })
        }
      </ul>
    </section>
  );
};

export default SellerVerificationPageSideNav;