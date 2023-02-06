import React from 'react';
import exclaimation from "../../assets/images/exclamation.png";
import Image from "next/image";
import DataTable from "react-data-table-component";
// import Managelist from "./Managelist";
import Link from "next/link";
import styles from "../../styles/componentsStyles/SideNav.module.css";
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
  const router = useRouter;
  const { asPath } = router;
  const {
    category: { activeBtn, categoryName, isActiveCategory },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const datas = [
    {
      id: 1,
      name: "Products",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Add Product",
        },
        {
          name: "New Media Center",
        },
        {
          name: "Fullfillment",
        },
        {
          name: "Edit Product",
        },
      ],
    },
    {
      id: 2,
      name: "Promotions",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Add Product",
        },
        {
          name: "New Media Center",
        },
        {
          name: "Fullfillment",
        },
        {
          name: "Edit Product",
        },
      ],
    },
    {
      id: 3,
      name: "Orders & Reviews",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Add Product",
        },
        {
          name: "New Media Center",
        },
        {
          name: "Fullfillment",
        },
        {
          name: "Edit Product",
        },
      ],
    },
    {
      id: 4,
      name: "Store Decoration",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Add Product",
        },
        {
          name: "New Media Center",
        },
        {
          name: "Fullfillment",
        },
        {
          name: "Edit Product",
        },
      ],
    },
    {
      id: 5,
      name: "Assortment Growth",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Add Product",
        },
        {
          name: "New Media Center",
        },
        {
          name: "Fullfillment",
        },
        {
          name: "Edit Product",
        },
      ],
    },
    {
      id: 6,
      name: "Account Health",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Add Product",
        },
        {
          name: "New Media Center",
        },
        {
          name: "Fullfillment",
        },
        {
          name: "Edit Product",
        },
      ],
    },
    {
      id: 7,
      name: "Bussiness Adviser",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Add Product",
        },
        {
          name: "New Media Center",
        },
        {
          name: "Fullfillment",
        },
        {
          name: "Edit Product",
        },
      ],
    },
    {
      id: 8,
      name: "Finnace",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Add Product",
        },
        {
          name: "New Media Center",
        },
        {
          name: "Fullfillment",
        },
        {
          name: "Edit Product",
        },
      ],
    },
    {
      id: 9,
      name: "Seller Guidlines",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Add Product",
        },
        {
          name: "New Media Center",
        },
        {
          name: "Fullfillment",
        },
        {
          name: "Edit Product",
        },
      ],
    },
    {
      id: 10,
      name: "Seller Support",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Add Product",
        },
        {
          name: "New Media Center",
        },
        {
          name: "Fullfillment",
        },
        {
          name: "Edit Product",
        },
      ],
    },
    {
      id: 11,
      name: "Account Setting",
      img: "https://i.ibb.co/0MFWvk4/online-shopping.png",
      subcata: [
        {
          name: "Add Product",
        },
        {
          name: "New Media Center",
        },
        {
          name: "Fullfillment",
        },
        {
          name: "Edit Product",
        },
      ],
    },
  ];


  return (
    <section className="bg-[#FFFFFF] py-10">
      <div className="px-10 mx-auto flex">

        <div className="lg:w-3/12 md:w-3/12 w-0">
          <section
            className={`${styles.sideNav} w-[285px] ${isActiveCategory ? "left-[-400px]" : ""
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
                    <Link href="">
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
                            <p
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
        </div>

      </div>
    </section>
  );
};

export default ManageProductsSideNav;