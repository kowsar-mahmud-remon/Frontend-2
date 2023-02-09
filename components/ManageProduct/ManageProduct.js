import React, { useState } from "react";
import Managelist from "./Managelist";
import style from "/styles/componentsStyles/box-shaddow.module.css";
import ManageProductTable from "../../components/ManageProductTable/ManageProductTable";
import products from "./faketabledata.json";

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
    <section className="bg-[#FFFFFF] py-10">
      <div className="px-10 mx-auto">
        <div className=" w-full">
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
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
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
                            item={item}
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

export default ManageProduct;
