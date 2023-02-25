/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Managelist from "./Managelist";
import style from "/styles/componentsStyles/box-shaddow.module.css";
import ManageProductTable from "../../components/ManageProductTable/ManageProductTable";
import products from "./faketabledata.json";

import Image from "next/image";
import arrow from "/public/arrowdown.png";

const ManageProduct = () => {
  const [active, setActive] = useState({ text: "All", href: "" });
  const [item, setItem] = useState(products);

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
    <section className="bg-[#FFFFFF] py-7">
      <div className=" mx-auto">
        <div className="w-full">
          <div>
            <div className="text-lg breadcrumbs text-[#686868]">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Products</a>
                </li>
                <li className="text-[#001E00] font-semibold ">
                  Manage Products
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[#FB641B] font-semibold text-2xl">
                Manage Products
              </h1>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded mt-8 ">
            <div
              className={`grid lg:grid-cols-8  md:grid-cols-5 grid-cols-3  justify-center bg-white items-center rounded-sm ${style.boxshaddow}`}
            >
              {MENU_LIST.map((menu, idx) => (
                <div className="relative " key={menu?.text}>
                  <Managelist
                    menu={menu}
                    setActive={setActive}
                    active={active}
                    setItem={setItem}
                    item={item}
                    products={products}
                  ></Managelist>

                  {idx !== MENU_LIST.length - 1 && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[30px] w-px bg-[#B7B7B7]"></div>
                  )}
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

                <div className="">
                  <select className="border h-11 pl-2 pr-[100px] rounded-lg ">
                    <option className="" value="0">
                      Category 
                    </option>
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
                 px-5 py-2 ml-[16px] bg-[#FB641B] hover:bg-[#f85a0b]"
                >
                  Search
                </button>
              </div>

              <div className="mt-4">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-[#F2F3F7] dark:text-gray-400">
                      <tr className="">
                        <th
                          scope="col  "
                          className="px-[10px] py-3 "
                        >
                          <p className="border-r-[1px] border-[#B7B7B7] flex justify-start">
                            Product
                          </p>
                        </th>
                        <th
                          scope="col"
                          className="px-[10px] py-3 "
                        >
                          <p className="border-r border-[#B7B7B7] flex ">
                            Local Title
                          </p>
                        </th>
                        <th
                          scope="col"
                          className="px-[10px] py-3 whitespace-nowrap  "
                        >
                          <p className="border-r border-[#B7B7B7] ">Product SKU</p>
                        </th>
                        <th
                          scope="col"
                          className="px-[10px] py-3 "
                        >
                          <p className="border-r border-[#B7B7B7] flex ">
                            Variation
                          </p>
                        </th>
                        <th
                          scope="col"
                          className="px-[10px] py-3 "
                        >
                          <p className="border-r border-[#B7B7B7] flex ">Price</p>
                        </th>
                        <th
                          scope="col"
                          className="px-[10px] py-3 "
                        >
                          <p className="border-r border-[#B7B7B7] ">Stock</p>
                        </th>
                        <th
                          scope="col"
                          className="px-[10px] py-3 "
                        >
                          <p className="border-r border-[#B7B7B7]">Actions</p>
                        </th>

                        <th scope="col" className="px-3 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.map((product, idx) => {
                        return (
                          <>
                            <ManageProductTable
                              key={product.id}
                              product={product}
                              item={item}
                            ></ManageProductTable>
                          </>
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

export default ManageProduct;
