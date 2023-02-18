import React, { useState } from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import OrderHistoryTable from "./OrderHistoryTable";
import allProduct from "./fakedb.json";
import OrderHistoryDate from "../OrderHistoryDate/OrderHistoryDate";

const OrderHistory = () => {
  const [item, setItem] = useState(allProduct);

  const data = [
    { text: "Select" },
    { text: "Canceled" },
    { text: "Delivered" },
  ];

  const handleOption = (e) => {
    if (e === "Select") {
      setItem(allProduct);
      return;
    }

    const allItems = allProduct.filter((food) => food.status === e);

    setItem(allItems);
  };

  return (
    <section className="bg-[#FFFFFF] min-h-screen pt-7 mb-80 w-full">
      <div className="w-full">
        <div className="w-full">
          <div>
            <div className="text-lg text-[#686868] breadcrumbs">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Promotions</a>
                </li>
                <li className="text-[#001E00] font-semibold">
                  Product Campaign
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-[#FB641B] font-semibold text-2xl">
                Order History
              </h1>
            </div>
          </div>
          <div className=" flex lg:justify-between flex-wrap gap-2 relative z-10 mt-8 w-full">
            <div className="flex ">
              <div className="mr-4 pt-1">
                <h3 className="text-[#001E00] font-medium text-lg">Filter:</h3>
              </div>
              <div>
                <select
                  onChange={(e) => handleOption(e.target.value)}
                  className="w-[138px] h-[40px] bg-[#ffffff] border border-[#B7B7B7] px-2 text-[#001E00] font-medium text-lg rounded"
                >
                  {data.map((product, i) => {
                    return <option key={i}>{product.text}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="">
              <div>
                <OrderHistoryDate></OrderHistoryDate>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className={`rounded-lg  pb-10 ${style.boxshaddow} bg-[#FFFFFF] absolute lg:top-[436px] w-9/12`}
            >
              <div className="p-6 ">
                <div className="mb-4">
                  <p className="text-lg font-medium w-full text-[#001E00]">
                    All Orders History
                  </p>
                </div>
                <div className="mt-4">
                  <div className="relative overflow-x-auto shadow-md sm:rounded">
                    <table className="w-full text-left text-[#001E00] dark:text-gray-400">
                      <thead className="text-[13px] text-[#001E00] bg-[#F2F3F7] dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-[#001E00] font-medium text-base"
                          >
                            Product
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-[#001E00] font-medium text-base"
                          >
                            Local Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-[#001E00] font-medium text-base"
                          >
                            Order Number
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-[#001E00] font-medium text-base"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-[#001E00] font-medium text-base"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-[#001E00] font-medium text-base"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-[#001E00] font-medium text-base"
                          >
                            Delivered Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-[#001E00] font-medium text-base"
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
    </section>
  );
};

export default OrderHistory;
