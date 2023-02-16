import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import products from "./faketabledata.json";
import { useState } from "react";
import ManageOrderTable from "../../components/ManageOrderTable/ManageOrderTable";
import ManageOrderModal from "../../components/ManageOrderModal/ManageOrderModal";

const ManageOrders = () => {
  const [item, setItem] = useState(products);
  return (
    <section className="bg-[#FFFFFF] w-full">
        <ManageOrderModal></ManageOrderModal>
      <div className="">
        <div className="">
          <div>
            <div className="text-xs breadcrumbs font-semibold">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Orders & Reviews</a>
                </li>
                <li>Manage Orders</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[#FB641B] font-semibold text-2xl">
                Manage Orders
              </h1>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded mt-[30px]">
            <div className={`${style.boxshaddow} p-6 rounded-lg`}>
            
            <p className="text-[#001E00] font-semibold">All Open Oderes</p>

              <div className="mt-4">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-[#001E00] dark:text-gray-400">
                    <thead className="text-[13px] text-[#001E00] bg-[#F2F3F7] dark:bg-gray-700 dark:text-gray-400">
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
                        Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Payment Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Delivery Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.map((product) => {
                        return (
                          <ManageOrderTable
                            key={product.id}
                            product={product}
                            item={item}
                          ></ManageOrderTable>
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

export default ManageOrders;
