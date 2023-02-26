import React, { useState } from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import OrderHistoryTable from "./OrderHistoryTable";
import allProduct from "./fakedb.json";
import OrderHistoryDate from "../OrderHistoryDate/OrderHistoryDate";

const RetrunsProductMain = () => {
  const [item, setItem] = useState(allProduct);
 

  return (
    <section className="bg-[#FFFFFF] min-h-screen pt-7 mb-80 max-w-[1426px]">
      <div className="">
        <div className="">
          <div>
            <div className="text-lg text-[#686868] breadcrumbs">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Orders & Reviews</a>
                </li>
                <li className="text-[#001E00] font-medium">Returns Product</li>
              </ul>
            </div>
            <div className="">
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-2">
            <div className="flex">
              <div className="mr-4 pt-1">
              <h1 className="text-[#FB641B] font-semibold text-2xl">
              All Returns History
              </h1>
              </div>
            </div>
            <div className="relative">
              <div className="absolute right-0">
                <OrderHistoryDate></OrderHistoryDate>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div>
              <div
                className={`rounded-lg  pb-[300px] ${style.boxshaddow} bg-[#FFFFFF]`}
              >
                <div className="p-6 ">
                  <div className="mb-4">
                    <p className="text-lg font-medium  text-[#001E00]">
                      All Orders History
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className=" overflow-x-auto shadow-md sm:rounded">
                      <table className=" text-left text-[#001E00] w-full">
                        <thead className=" text-[#001E00] bg-[#F2F3F7] ">
                          <tr>
                            <th
                              scope="col"
                              className=" py-2 font-medium text-[#001E00] text-base"
                            >
                              <p className="border-r px-2 border-[#B7B7B7]">
                                Product
                              </p>
                            </th>
                            <th
                              scope="col"
                              className=" py-3 font-medium text-[#001E00] text-base"
                            >
                              <p className="border-r px-2 border-[#B7B7B7]">
                                Local Title
                              </p>
                            </th>
                            <th
                              scope="col"
                              className=" py-3 font-medium text-[#001E00] text-base"
                            >
                              <p className="border-r px-2 whitespace-nowrap border-[#B7B7B7]">
                                Order Number
                              </p>
                            </th>
                            <th
                              scope="col"
                              className=" py-3 font-medium text-[#001E00] text-base"
                            >
                              <p className="border-r px-2 border-[#B7B7B7]">
                                Category
                              </p>
                            </th>
                            <th
                              scope="col"
                              className=" py-3 font-medium text-[#001E00] text-base"
                            >
                              <p className="border-r px-2 border-[#B7B7B7]">
                                Price
                              </p>
                            </th>
                            <th
                              scope="col"
                              className=" py-3 font-medium text-[#001E00] text-base"
                            >
                              <p className="px-2 border-r border-[#B7B7B7]">
                                Quantity
                              </p>
                            </th>
                            <th
                              scope="col"
                              className=" py-3 font-medium text-[#001E00] text-base"
                            >
                              <p className="px-2 border-r border-[#B7B7B7]">
                                Delivery Date
                              </p>
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-3 font-medium text-[#001E00] text-base"
                            >
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.map((product) => {
                            return (
                              <OrderHistoryTable
                                key={product.id}
                                product={product}
                                item={item}
                              ></OrderHistoryTable>
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
        </div>
      </div>
    </section>
  );
};

export default RetrunsProductMain;