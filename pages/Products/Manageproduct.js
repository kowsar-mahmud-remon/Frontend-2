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
import { useEffect } from "react";

const Manageproduct = () => {
  const [active, setActive] = useState({ text: "All", href: "" });
  const router = useRouter;
  const { asPath } = router;
  const {
    category: { activeBtn, categoryName, isActiveCategory },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const datas = [
    {
      "id": 1,
      "name": "Products",
      "img": "https://i.ibb.co/0MFWvk4/online-shopping.png",
      "subcata": [
        {
          "name": "Add Product"
        },
        {
          "name": "New Media Center"
        },
        {
          "name": "Fullfillment"
        },
        {
          "name": "Edit Product"
        }
      ]
    },
    {
      "id": 2,
      "name": "Promotions",
      "img": "https://i.ibb.co/0MFWvk4/online-shopping.png",
      "subcata": [
        {
          "name": "Add Product"
        },
        {
          "name": "New Media Center"
        },
        {
          "name": "Fullfillment"
        },
        {
          "name": "Edit Product"
        }
      ]
    },
    {
      "id": 3,
      "name": "Orders & Reviews",
      "img": "https://i.ibb.co/0MFWvk4/online-shopping.png",
      "subcata": [
        {
          "name": "Add Product"
        },
        {
          "name": "New Media Center"
        },
        {
          "name": "Fullfillment"
        },
        {
          "name": "Edit Product"
        }
      ]
    },
    {
      "id": 4,
      "name": "Store Decoration",
      "img": "https://i.ibb.co/0MFWvk4/online-shopping.png",
      "subcata": [
        {
          "name": "Add Product"
        },
        {
          "name": "New Media Center"
        },
        {
          "name": "Fullfillment"
        },
        {
          "name": "Edit Product"
        }
      ]
    },
    {
      "id": 5,
      "name": "Assortment Growth",
      "img": "https://i.ibb.co/0MFWvk4/online-shopping.png",
      "subcata": [
        {
          "name": "Add Product"
        },
        {
          "name": "New Media Center"
        },
        {
          "name": "Fullfillment"
        },
        {
          "name": "Edit Product"
        }
      ]
    },
    {
      "id": 6,
      "name": "Account Health",
      "img": "https://i.ibb.co/0MFWvk4/online-shopping.png",
      "subcata": [
        {
          "name": "Add Product"
        },
        {
          "name": "New Media Center"
        },
        {
          "name": "Fullfillment"
        },
        {
          "name": "Edit Product"
        }
      ]
    },
    {
      "id": 7,
      "name": "Bussiness Adviser",
      "img": "https://i.ibb.co/0MFWvk4/online-shopping.png",
      "subcata": [
        {
          "name": "Add Product"
        },
        {
          "name": "New Media Center"
        },
        {
          "name": "Fullfillment"
        },
        {
          "name": "Edit Product"
        }
      ]
    },
    {
      "id": 8,
      "name": "Finnace",
      "img": "https://i.ibb.co/0MFWvk4/online-shopping.png",
      "subcata": [
        {
          "name": "Add Product"
        },
        {
          "name": "New Media Center"
        },
        {
          "name": "Fullfillment"
        },
        {
          "name": "Edit Product"
        }
      ]
    },
    {
      "id": 9,
      "name": "Seller Guidlines",
      "img": "https://i.ibb.co/0MFWvk4/online-shopping.png",
      "subcata": [
        {
          "name": "Add Product"
        },
        {
          "name": "New Media Center"
        },
        {
          "name": "Fullfillment"
        },
        {
          "name": "Edit Product"
        }
      ]
    },
    {
      "id": 10,
      "name": "Seller Support",
      "img": "https://i.ibb.co/0MFWvk4/online-shopping.png",
      "subcata": [
        {
          "name": "Add Product"
        },
        {
          "name": "New Media Center"
        },
        {
          "name": "Fullfillment"
        },
        {
          "name": "Edit Product"
        }
      ]
    },
    {
      "id": 11,
      "name": "Account Setting",
      "img": "https://i.ibb.co/0MFWvk4/online-shopping.png",
      "subcata": [
        {
          "name": "Add Product"
        },
        {
          "name": "New Media Center"
        },
        {
          "name": "Fullfillment"
        },
        {
          "name": "Edit Product"
        }
      ]
    }
  ]



  const MENU_LIST = [
    { text: "All", href: "" },
    { text: "Online(0)", href: "" },
    { text: "Draft(0)", href: "" },
    { text: "Pending QC(0)", href: "" },
    { text: "Out of Stock(0)", href: "" },
    { text: "Inactive(0)", href: "" },
    { text: "Suspended(0)", href: "" },
    { text: "Deleted(0)", href: "" },
  ];

  const columns = [
    {
      name: "Product",
      selector: (row) => row.title,
    },
    {
      name: "Local Title",
    },
    {
      name: "Product SKU",
    },
    {
      name: "Variation",
      selector: (row) => row.title,
    },
    {
      name: "Price",
    },
    {
      name: "Stock",
    },
    {
      name: "Created",
    },
    {
      name: "Actions",
      selector: (row) => row.title,
    },
  ];

  const data = [
    {
      id: 1,
      title: "No Data",
      year: "1988",
    },
  ];

  return (
    <section className="bg-[#C9C9C9] py-10">
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
              <h1 className="text-[#FB641B] font-medium text-2xl">
                Product Management
              </h1>
            </div>
            <div className="bg-[#DFECFD] flex p-4 my-8">
              <div className="pr-4">
                <Image
                  src={exclaimation}
                  alt="exclaimation"
                  width="35"
                  height="35"
                />
              </div>
              <div className="text-[#686868]">
                <p className="pb-2 text-[15px]">
                  Since we have upgraded the product management, For a better
                  experience, the older operation of file uploading on the
                  current page would be offline in a few days. You can
                  experience the new one in the menu{" "}
                  <strong>Products / Bulk Add/Edit Products</strong>
                </p>
                <p className="text-[13px]">
                  Your products are not yet visible to buyers. Please add
                  address to make them visible
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F2F2F2] p-6 shadow-md rounded">
            <div className="mb-4">
              <button className="h-[40px] rounded w-[176px] bg-[#FB641B] hover:bg-[#ce4e0e] text-white font-medium">
                Add Product
              </button>
            </div>
            <div className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3 gap-3 justify-center bg-white items-center shadow-md">
              {MENU_LIST.map((menu, idx) => (
                <div key={menu?.text}>
                  <Managelist
                    menu={menu}
                    setActive={setActive}
                    active={active}
                  ></Managelist>
                </div>
              ))}
            </div>

            <div className="bg-[#DFECFD] flex p-4 my-8">
              <div className="pr-4">
                <Image
                  src={exclaimation}
                  alt="exclaimation"
                  width="26"
                  height="26"
                />
              </div>
              <div className="text-[#686868]">
                <p className="pb-2 text-[13px]">
                  <strong>Explanation</strong>
                </p>
                <p className="text-[13px]">
                  The product which is buyer can see and stock 0 will appear in
                  online tab.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-3 items-center">
              <div className="w-[176px]">
                <select className="select select-bordered w-[176px] text-[#686868]">
                  <option disabled selected>
                    Category
                  </option>
                  <option> Apple</option>
                  <option> Orange</option>
                  <option> Tomato</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[176px]"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[176px]"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[176px]"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[176px]"
              />
              <button
                type="submit"
                placeholder="Type here"
                className="h-[44px] rounded bg-[#FB641B] hover:bg-[#ce4e0e] text-white font-medium cursor-pointer"
              >
                Search
              </button>
            </div>

            <div className="flex lg:justify-between md:justify-between lg:flex-row md:flex-row flex-col my-4 items-center">
              <div className="flex items-center">
                <p className="mr-6">Selected: 0</p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-[102px] mr-4"
                  value="Inactivate"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-[102px]"
                  value="Batch Delete"
                />
              </div>
 
              <div> 
                <div className="btn-group lg:py-0 md:py-0 py-5">
                  <button className="bg-[#FB641B] hover:bg-[#ce4e0e] px-4 h-[44px] rounded ml-1 font-medium text-white">
                    Product
                  </button>
                  <button className=" text-[#FB641B] hover:bg-[#ce4e0e] font-medium hover:text-white px-4 h-[44px] rounded">
                    SKU
                  </button>
                </div>
              </div>
            </div>

            <div>
              <DataTable columns={columns} data={data} selectableRows />
            </div>

            {/* <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Product</th>
                                    <th>Local Title</th>
                                    <th>Product SKU</th>
                                    <th>Variation</th>
                                    <th>Price $</th>
                                    <th>Stock</th>
                                    <th>Created</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>
                                        NO Data
                                    </th>
                                    <td>

                                    </td>
                                    <td>
                                    </td>
                                    <th>
                                        NO Data
                                    </th>
                                    <th>
                                       
                                    </th>
                                    <th>
                                        
                                    </th>
                                    <th>
                                    
                                    </th>
                                    <th>
                                    
                                    </th>
                                    <th>
                                        NO Data
                                    </th>
                                </tr>
                            </tbody>

                        </table>
                    </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manageproduct;
