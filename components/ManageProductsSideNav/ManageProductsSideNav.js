import React from 'react';
import exclaimation from "../../assets/images/exclamation.png";
import Image from "next/image";
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
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
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
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Product Campaign",
          href: "editProduct"
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
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Manage Orders",
          href: "editProduct"
        },
        {
          name: "Manage Reviews",
          href: "editProduct"
        },
        {
          name: "Order History",
          href: "editProduct"
        },
        {
          name: "Returns Product",
          href: "editProduct"
        },
      ],
    },
    {
      id: 4,
      name: "Finance",
      href: "editProductsTwo",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Sales Overview",
          href: "editProduct"
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
      name: "Seller Support",
      href: "editProductsTwo",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Help Center",
          href: "editProduct"
        },
        {
          name: "Contact Us",
          href: "editProduct"
        },
        {
          name: "Live Chat",
          href: "editProduct"
        }
      ],
    },
    {
      id: 6,
      name: "Seller Guideline",
      href: "editProductsTwo",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
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
      id: 7,
      name: "Seller Documents",
      href: "editProductsTwo",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
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
      id: 8,
      name: "Account & Settings",
      href: "editProductsTwo",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
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
      id: 9,
      name: "Account Type",
      href: "editProductsTwo",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
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
    <section className="bg-[#FFFFFF] py-6">
      <div className="px-6 mx-auto flex">

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
                    <Link href={c?.href}>
                      <Image
                        loader={() => c.img}
                        src={c.img}
                        alt={c.key}
                        width={30}
                        height={30}
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
                                } py-1 px-2 rounded-md my-2 cursor-pointer`}
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