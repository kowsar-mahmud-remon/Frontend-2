import React from "react";
import OrderOverviewTable from "./OrderOverviewTable";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import item from "./faketabledata.json";

const OrderOverview = () => {
  return (
    <section className="bg-[#FFFFFF] w-full pt-7">
      <div className="">
        <div className="">
          <div>
            <div className="text-lg breadcrumbs text-[#686868]">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Finance</a>
                </li>
                <li className="font-medium text-[#001E00]">Order Overview</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[#FB641B] font-semibold text-2xl">
              Order Overview
              </h1>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded mt-[30px]">
            <div className={`${style.boxshaddow} p-6 rounded-lg`}>
              <p className="text-[#001E00] font-semibold text-lg">Top Sales Products</p>

              <div className="mt-4">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-base text-left text-[#001E00]">
                    <thead className="text-base text-[#001E00] font-normal bg-[#F2F3F7]">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 font-medium text-[#001E00] text-base"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-medium text-[#001E00] text-base"
                        >
                          Local Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-medium text-[#001E00] text-base"
                        >
                         Order Number
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-medium text-[#001E00] text-base"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-medium text-[#001E00] text-base"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-medium text-[#001E00] text-base"
                        >
                          
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-medium text-[#001E00] text-base"
                        >
                         Date 
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-medium text-[#001E00] text-base"
                        >
                          Product Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-medium text-[#001E00] text-base"
                        >
                          Payment Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.map((product) => {
                        return (
                          <OrderOverviewTable
                            key={product.id}
                            product={product}
                            item={item}
                          ></OrderOverviewTable>
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

export default OrderOverview;
