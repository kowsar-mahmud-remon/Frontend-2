import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import products from "./faketabledata.json";
import { useState } from "react";
import ManageOrderTable from "../../components/ManageOrderTable/ManageOrderTable";
import ManageOrderModal from "../../components/ManageOrderModal/ManageOrderModal";

const ManageOrders = () => {
  const [item, setItem] = useState(products);
  return (
    <section className="bg-[#FFFFFF] w-full pt-7">
        <ManageOrderModal></ManageOrderModal>
      <div className="">
        <div className="">
          <div>
            <div className="text-lg breadcrumbs text-[#686868]">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Orders & Reviews</a>
                </li>
                <li className="font-medium text-[#001E00]">Manage Orders</li>
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
                  <table className="w-full text-base text-left text-[#001E00]">
                    <thead className="text-base text-[#001E00] font-normal bg-[#F2F3F7]">
                      <tr>
                        <th scope="col" className="px-6 py-3 font-medium text-[#001E00] text-base">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium text-[#001E00] text-base">
                          Local Title
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium text-[#001E00] text-base">
                          Product SKU
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium text-[#001E00] text-base">
                        Category
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium text-[#001E00] text-base">
                        Price
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium text-[#001E00] text-base">
                        Quantity
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium text-[#001E00] text-base">
                        Payment Status
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium text-[#001E00] text-base">
                        Delivery Date
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium text-[#001E00] text-base">
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
