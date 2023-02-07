import React, { useState } from "react";
import exclaimation from "../../assets/images/exclamation.png";
import Image from "next/image";
import DataTable from "react-data-table-component";
import Managelist from "./Managelist";
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
import ManageProductTable from "../../components/ManageProductTable/ManageProductTable";
import products from "./faketabledata.json";

const Manageproduct = () => {
  const [active, setActive] = useState({ text: "All", href: "" });
  const [item, setItem] = useState(products)
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



  const MENU_LIST = [
    { text: "All", href: "" },
    { text: "Online", href: "" },
    { text: "Draft", href: "" },
    { text: "Pending QC", href: "" },
    { text: "Out of Stock", href: "" },
    { text: "Inactive", href: "" },
    { text: "Suspended", href: "" },
    { text: "Deleted", href: "" },
  ];

  return (
    <section className="bg-[#FFFFFF] py-10">
      <div className="px-10 mx-auto flex">
        <div className="lg:w-3/12 md:w-3/12 w-0">
          <section
            className={`${styles.sideNav} w-[285px] ${
              isActiveCategory ? "left-[-400px]" : ""
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
                              className={`${
                                activeBtn == s.name ? styles.activeSubLink : ""
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
        <div className="Lg:w-9/12 md:w-9/12 w-full">
          <div>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>  
                  <a>Products</a> 
                </li>
                <li>Manage Products</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[#FB641B] font-semibold text-2xl">
                Manage Products
              </h1>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded mt-8">
            <div
              className={`grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3 gap-3 justify-center bg-white items-center ${style.boxshaddow}`}
            >
              {MENU_LIST.map((menu, idx) => (
                <div key={menu?.text}>
                  <Managelist
                    menu={menu}
                    setActive={setActive}
                    active={active}
                    setItem={setItem}
                    item={item}
                    products={products}
                  ></Managelist>
                </div>
              ))}
            </div>

            <div className={`${style.boxshaddow} p-5  mt-4`}>
              <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 gap-3 items-center">
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered h-11"
                />
                <input
                  type="text"
                  placeholder="Product ID"
                  className="input input-bordered h-11"
                />

                <div>
                  <select className="border h-11 px-5 rounded-lg text-[#686868] ">
                    <option value="0">Select car:</option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                    <option value="5">Honda</option>
                    <option value="6">Jaguar</option>
                    <option value="7">Land Rover</option>
                    <option value="8">Mercedes</option>
                    <option value="9">Mini</option>
                    <option value="10">Nissan</option>
                    <option value="11">Toyota</option>
                    <option value="12">Volvo</option>
                  </select>
                </div>

                <button
                  className="rounded text-white
                 px-5 py-2 bg-[#FB641B] hover:bg-[#f85a0b]"
                >
                  Search
                </button>
              </div>

              <div className="mt-4">
                {/* <DataTable columns={columns} data={data} /> */}

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Local Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Product SKU
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Variation
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Stock
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.map((product) => {
                        return (
                          <ManageProductTable
                            key={product.id}
                            product={product}
                          ></ManageProductTable>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manageproduct;
