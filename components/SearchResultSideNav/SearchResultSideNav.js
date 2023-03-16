import React from "react";
import Link from "next/link";
import styles from "../../styles/manageProductSideNav.module.css";
import style from '../../styles/componentsStyles/Search.module.css'
import { MdArrowBackIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategoryName,
  setActiveBtn,
} from "../../features/category/categorySlice";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchResultSideNav = () => {
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
      name: "All Collections",
      href: "editProductsTwo",
      subcata: [
        {
          name: "Kacha Bazar (172)",
          href: "uploadProducts",
        },
        {
          name: "Vegetables  (151)",
          href: "manageproducts",
        },
        {
          name: "Daal / Chal (199)",
          href: "editProduct",
        },
        {
          name: "Atta/Maida (1016)",
          href: "productInvoices",
        },
        {
          name: "Salt & Sugar (116)",
          href: "productInvoices",
        },
      ],
    }
  ];

  return (
    <section className="pb-6 sticky top-0">
      <div className=" mx-auto flex">
        <div className="">
          <section
            className={`${styles.sideNav} w-[285px] ${
              isActiveCategory ? "left-[-400px]" : ""
            } ${style.collectionsBoxSideBarShaddow} delay-700 sideNavTransition`}
            id="sidNav"
          >
            <div className="pl-4 pt-4 pr-4">
            <ul className="">
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
                        : ""}
                  >
                    <Link className="text-lg font-semibold"
                      href={router?.query?.slug ? router?.query?.slug : c?.href}
                      // href={c?.href ? c?.href : router?.query?.slug}
                    >
                      {c.name}
                      <MdArrowBackIos />
                    </Link>
                    <ul>
                      {c?.subcata?.map((s, index) => {
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
                              onClick={() =>
                                router.push(s?.href ? s?.href : "")
                              }
                              className={`${
                                activeBtn == s.name ? styles.activeSubLink : ""
                              }  cursor-pointer text-[#001E00]`}
                            >
                              {s.name}
                            </p>
                          </li>
                        );
                      })}
                      <button className="text-[#287DF3] text-base font-medium">4 More...</button>
                    </ul>
                  </li>
                );
              })}
            </ul>
            
            </div>
            
          </section>
          <hr className="border border-[#B7B7B7]" />
        </div>
      </div>
    </section>
  );
};

export default SearchResultSideNav;
