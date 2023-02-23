import React from 'react';
import exclaimation from "../../assets/images/exclamation.png";
import Image from "next/image";

import exclusives from '../../assets/images/Seller_Verification_page/packaging 1.png';
import sweet from '../../assets/images/Seller_Verification_page/promotion 1.png';
import kachaBazar from '../../assets/images/Seller_Verification_page/rating 1.png';
import spice from '../../assets/images/Seller_Verification_page/financial-profit 1.png';
import dairy from '../../assets/images/Seller_Verification_page/graduation 1.png';
import teaCoffee from '../../assets/images/Seller_Verification_page/customer-service 1.png';
import laptop from '../../assets/images/Seller_Verification_page/laptop 1.png';
import bakerySnacks from '../../assets/images/Seller_Verification_page/folder 1.png';
import frozenFoods from '../../assets/images/Seller_Verification_page/settings 1.png';
import shipped from '../../assets/images/Seller_Verification_page/shipped 1.png';
import review from '../../assets/images/Seller_Verification_page/review 1.png';

import DataTable from "react-data-table-component";
// import Managelist from "./Managelist";
import Link from "next/link";
import styles from "../../styles/manageProductSideNav.module.css";
import { MdArrowBackIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategoryName,
  setActiveBtn,
} from "../../features/category/categorySlice";
import { useRouter } from "next/router";
import style from "/styles/componentsStyles/box-shaddow.module.css";
import { useEffect } from "react";
import { useState } from 'react';

const ManageProductsSideNav = () => {

  const [active, setActive] = useState({ text: "All", href: "" });
  const router = useRouter();
  const { asPath } = router;
  const {
    category: { activeBtn, categoryName, isActiveCategory },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const datas = [
    {
      id: 1,
      name: "Products",
      href: "editProductsTwo",
      img: exclusives,
      subcata: [
        {
          name: "Upload Product",
          href: "uploadProducts"
        },
        {
          name: "Manage Products",
          href: "manageproducts"
        },
        {
          name: "Edit Product",
          href: "editProduct"
        },
        {
          name: "Product Invoice",
          href: "productInvoices"
        },
      ],
    },
    {
      id: 2,
      name: "Promotions",
      href: "editProductsTwo",
      img: sweet,
      subcata: [
        {
          name: "Product Campaign",
          href: "allProduct"
        },
        {
          name: "Campaign Management",
          href: "campaignManagement"
        },
        {
          name: "Learn About Ads",
          href: "editProduct"
        }
      ],
    },
    {
      id: 3,
      name: "Orders & Reviews",
      href: "editProductsTwo",
      img: kachaBazar,
      subcata: [
        {
          name: "Manage Orders",
          href: "manageOrders"
        },
        {
          name: "Manage Reviews",
          href: "manageReview"
        },
        {
          name: "Order History",
          href: "orderHistory"
        },
        {
          name: "Returns Product",
          href: "returnProduct"
        },
      ],
    },
    {
      id: 4,
      name: "Finance",
      href: "editProductsTwo",
      img: spice,
      subcata: [
        {
          name: "Sales Overview",
          href: "salesOverview"
        },
        {
          name: "Order Overview",
          href: "editProduct"
        },
        {
          name: "Performance Report",
          href: "editProduct"
        }
      ],
    },
    {
      id: 5,
      name: "Shipping Management",
      href: "editProductsTwo",
      img: shipped,
      subcata: [
        {
          name: "Product Shipping",
          href: "productShipping"
        },
        {
          name: "Orders Tracking",
          href: "editProduct"
        }
      ],
    },
    {
      id: 6,
      name: "Feedback Management",
      href: "editProductsTwo",
      img: review,
      subcata: [
        {
          name: "Manage Reviews",
          href: "manageReview",
        },
        {
          name: "Question and Answer",
          href: "questionanswer",
        },
        {
          name: "Report Management",
          href: "liveChatTwo"
        }
      ],
    },
    {
      id: 7,
      name: "Seller Support",
      href: "editProductsTwo",
      img: teaCoffee,
      subcata: [
        {
          name: "Help Center",
          href: "helpCenter"
        },
        {
          name: "Contact Us",
          href: "contactUs"
        },
        {
          name: "Live Chat",
          href: "liveChatTwo"
        }
      ],
    },
    {
      id: 8,
      name: "Seller Guideline",
      href: "editProductsTwo",
      img: dairy,
      subcata: [
        {
          name: "Add Product",
          href: "editProduct"
        },
        {
          name: "New Media Center",
          href: "editProduct"
        },
        {
          name: "Fullfillment",
          href: "editProduct"
        },
        {
          name: "Edit Product",
          href: "editProduct"
        },
      ],
    },
    {
      id: 9,
      name: "Seller Documents",
      href: "editProductsTwo",
      img: bakerySnacks,
      subcata: [
        {
          name: "Account Statement",
          href: "editProduct"
        },
        {
          name: "NID Card",
          href: "editProduct"
        },
        {
          name: "Bank Statement",
          href: "editProduct"
        }
      ],
    },
    {
      id: 10,
      name: "Account & Settings",
      href: "editProductsTwo",
      img: frozenFoods,
      subcata: [
        {
          name: "Profile",
          href: "editProduct"
        },
        {
          name: "Account Settings",
          href: "editProduct"
        },
        {
          name: "Subscription",
          href: "editProduct"
        },
        {
          name: "Total Earning",
          href: "editProduct"
        },
      ],
    },
    {
      id: 11,
      name: "Account Type",
      href: "editProductsTwo",
      img: laptop,
      subcata: [
        {
          name: "Add Product",
          href: "editProduct"
        },
        {
          name: "New Media Center",
          href: "editProduct"
        },
        {
          name: "Fullfillment",
          href: "editProduct"
        },
        {
          name: "Edit Product",
          href: "editProduct"
        },
      ],
    }
  ];


  return (
    <section className="bg-[#FFFFFF] pb-6 sticky top-0">
      <div className="pl-6 mx-auto flex">

        <div className="">
          <section
            className={`${styles.sideNav} w-[266px] ${isActiveCategory ? "left-[-400px]" : ""
              } p-2 bg-[#ffffff] shawdow-black shadow-2xl delay-700 sideNavTransition`}
            id="sidNav"
          >
            <ul>
              {datas?.map((c, index) => {
                let path = `/${c.id}/${c.id}`;

                return (
                  <li
                    onClick={() => {
                      dispatch(addCategoryName({ name: c.name }));
                      // router.push(path);
                    }}
                    as={"li"}
                    href={`/hi`}
                    key={index}
                    className={
                      asPath == path || categoryName === c.name
                        ? styles.active
                        : ""
                    }
                  >
                    <Link href={router?.query?.slug ? router?.query?.slug : c?.href}>
                      <Image
                        // loader={() => c.img}
                        src={c.img}
                        alt={c.key}
                        width={28}
                        height={28}
                      />
                      {c.name}
                      <MdArrowBackIos />
                    </Link>
                    <ul>
                      {c.subcata.map((s, index) => {
                        return (
                          <li
                            onClick={() =>
                              dispatch(
                                setActiveBtn({ value: s.name, id: s.id })
                              )
                            }
                            key={index}
                          >
                            <p onClick={() => router.push(s?.href ? s?.href : "")}
                              className={`${activeBtn == s.name ? styles.activeSubLink : ""
                                }  cursor-pointer text-[#686868]`}
                            >
                              {s.name}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </section>
        </div >

      </div >
    </section >
  );
};

export default ManageProductsSideNav;