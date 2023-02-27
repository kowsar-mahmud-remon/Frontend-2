import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import item from "./faketabledata.json";

import ManageOrderTable from "../../components/ManageOrderTable/ManageOrderTable";
import ManageOrderModal from "../../components/ManageOrderModal/ManageOrderModal";
import OrderNotificationTable from "./OrderNotificationTable";

const OrderNotification = () => {

  return (
    <section className="bg-[#FFFFFF] w-full pt-7">
        <ManageOrderModal></ManageOrderModal>
      <div className="max-w-[1426px]">
        <div className="">
          <div>
            <div className="text-lg breadcrumbs text-[#686868]">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Orders Management</a>
                </li>
                <li className="font-medium text-[#001E00]">Order Notifications</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[#FB641B] font-semibold text-2xl">
              Order Notifications
              </h1>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded mt-[30px]">
            <div className={`${style.boxshaddow} p-6 rounded-lg`}>
            
            <p className="text-[#001E00] font-semibold">All Open Oderes</p>

              <div className="mt-4 pb-[300px]">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-base text-left text-[#001E00]">
                    <thead className="text-base text-[#001E00] font-normal bg-[#F2F3F7] h-[48px]">
                    <tr> 
                        <th
                          scope="col"
                          className=" py-2 font-medium text-[#001E00] text-base"
                        >
                          <p className="border-r px-2 border-[#B7B7B7]">Product</p>
                        </th>
                        <th
                          scope="col"
                          className=" py-3 font-medium text-[#001E00] text-base"
                        >
                          <p className="border-r px-2 border-[#B7B7B7]">Local Title</p>
                          
                        </th>
                        <th
                          scope="col"
                          className=" py-3 font-medium text-[#001E00] text-base"
                        >
                          <p className="border-r px-1 border-[#B7B7B7]">Order Number</p>
                         
                        </th>
                        <th
                          scope="col"
                          className=" py-3 font-medium text-[#001E00] text-base"
                        >
                          <p className="border-r px-2 border-[#B7B7B7]">Category</p>
                          
                        </th>
                        <th
                          scope="col"
                          className=" py-3 font-medium text-[#001E00] text-base"
                        >
                          <p className="border-r px-2 border-[#B7B7B7]">Price</p>
                          
                        </th>
                        <th
                          scope="col"
                          className=" py-3 font-medium text-[#001E00] text-base"
                        >
                         <p className="px-2 border-r border-[#B7B7B7]">Quantity</p> 
                          
                        </th>
                        <th
                          scope="col"
                          className=" py-3 font-medium text-[#001E00] text-base"
                        >
                          <p className="px-2 border-r border-[#B7B7B7]">Payment Status</p>
                        
                        </th>
                        <th
                          scope="col"
                          className=" py-3 font-medium text-[#001E00] text-base"
                        >
                          <p className="px-2 border-r border-[#B7B7B7]">Delivery Date</p>
                          
                        </th>
                        <th
                          scope="col"
                          className=" py-3 font-medium text-[#001E00] text-base"
                        >
                          <p className="px-2 border-r border-[#B7B7B7]">Details</p>
                          
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
                          <OrderNotificationTable
                            key={product.id}
                            product={product}
                            item={item}
                          ></OrderNotificationTable>
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

export default OrderNotification;
