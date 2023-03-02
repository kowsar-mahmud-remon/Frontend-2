/* eslint-disable react/jsx-key */
import Image from "next/image";
import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import AllProduct from "./AllProduct";
import DeletedProduct from "./DeletedProduct";
import SuspendedProduct from "./SuspendedProduct";

const ManageProductUpdated = () => {
  const [isActive, setActive] = useState("All");
  const productList = [
    {
      id: 1,
      variation: "Kacha Bazar",
      price: 60,
      status: "Online",
      stock: "100",
      action: "Active",
      sku: "KS5481JKO",
      title: "Tomato (Local) 500 ±30 gm",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DshsOahuBCfD3J0O83XhHepKnaWDswVrYA&usqp=CAU",
    },
    {
      id: 2,
      variation: "Kacha Bazar",
      price: 30,
      status: "Draft",
      stock: "50",
      action: "Draft",
      sku: "KS515JKO",
      title: "vegetable-cabbage 250 ±15 gm",
      image:
        "https://www.transparentpng.com/thumb/vegetable/fZslFj-vegetable-cabbage-transparent.png",
    },
    {
      id: 3,
      variation: "Kacha Bazar",
      price: 90,
      status: "Pending QC",
      stock: "60",
      action: "Pending",
      sku: "KS5488UKO",
      title: "Potota (Sweet Pumpkin Fali)",
      image:
        "https://freepngimg.com/thumb/potato/7-2-potato-free-download-png.png",
    },
    {
      id: 4,
      variation: "Kacha Bazar",
      price: 55,
      status: "Inactive",
      stock: "Stock Out",
      action: "Inactive",
      sku: "KS5481DLO",
      title: "Potol (Pointed Gourd ) 500 ±30 gm",
      image:
        "https://www.transparentpng.com/thumb/vegetable/2DYP07-bok-choy-vegetable-transparent.png",
    },
    {
      id: 5,
      variation: "Kacha Bazar",
      price: 55,
      status: "Deleted",
      Date: "02 Feb 2023",
      stock: "Stock Out",
      action: "Deleted",
      sku: "KS5481DLO",
      title: "Potol (Pointed Gourd ) 500 ±30 gm",
      image:
        "https://www.transparentpng.com/thumb/vegetable/2DYP07-bok-choy-vegetable-transparent.png",
    },
  ];
  const ActiveProduct = productList.filter(
    (product) => product.action === "Active"
  );
  const DraftProduct = productList.filter(
    (product) => product.action === "Draft"
  );
  const PendingQCProduct = productList.filter(
    (product) => product.action === "Pending"
  );
  const InactiveProduct = productList.filter(
    (product) => product.action === "Inactive"
  );
  const deletedProduct = productList.filter(
    (product) => product.action === "Deleted"
  );

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
            <div className="mt-[32px]">
              <div className="">
                <div className="grid xl:grid-cols-8  grid-cols-2 xl:gap-[2px] gap-2 justify-center bg-white items-center  shadow-xl whitespace-nowrap xl:h-[48px] h-vw">
                  <button
                    onClick={() => setActive("All")}
                    className={
                      isActive === "All"
                        ? "text-[#FB641B]  text-[16px] h-[48px] border-b-[2px] border-b-[#FB641B] "
                        : "  text-[16px]"
                    }
                  >
                    <p className="border-r-[1px] border-r-[#B7B7B7] ">All</p>
                  </button>
                  <button
                    onClick={() => setActive("Online")}
                    className={
                      isActive === "Online"
                        ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px] h-[48px] "
                        : "  text-[16px]"
                    }
                  >
                    <p className="border-r-[1px] border-r-[#B7B7B7] ">
                      Online ({ActiveProduct.length})
                    </p>
                  </button>

                  <button
                    onClick={() => setActive("Draft")}
                    className={
                      isActive === "Draft"
                        ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px] h-[48px]"
                        : "  text-[16px]"
                    }
                  >
                    <p className="border-r-[1px] border-r-[#B7B7B7] ">
                      Draft ({DraftProduct.length})
                    </p>
                  </button>

                  <button
                    onClick={() => setActive("PendingQC")}
                    className={
                      isActive === "PendingQC"
                        ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px] h-[48px]"
                        : "  text-[16px]"
                    }
                  >
                    <p className="border-r-[1px] border-r-[#B7B7B7] ">
                      Pending QC ({PendingQCProduct.length})
                    </p>
                  </button>
                  <button
                    onClick={() => setActive("OutOfStock")}
                    className={
                      isActive === "OutOfStock"
                        ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px] h-[48px]"
                        : "  text-[16px]"
                    }
                  >
                    <p className="border-r-[1px] border-r-[#B7B7B7] ">
                      Out Of Stock ({InactiveProduct.length})
                    </p>
                  </button>
                  <button
                    onClick={() => setActive("Inactive")}
                    className={
                      isActive === "Inactive"
                        ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px] h-[48px]"
                        : "  text-[16px]"
                    }
                  >
                    <p className="border-r-[1px] border-r-[#B7B7B7] ">
                      Inactive ({InactiveProduct.length})
                    </p>
                  </button>
                  <button
                    onClick={() => setActive("Suspended")}
                    className={
                      isActive === "Suspended"
                        ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px] h-[48px]"
                        : "  text-[16px]"
                    }
                  >
                    <p className="border-r-[1px] border-r-[#B7B7B7] ">
                      Suspended ({InactiveProduct.length})
                    </p>
                  </button>
                  <button
                    onClick={() => setActive("deleted")}
                    className={
                      isActive === "deleted"
                        ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px] h-[48px]"
                        : "  text-[16px]"
                    }
                  >
                    <p className="">Deleted ({deletedProduct.length})</p>
                  </button>
                </div>
              </div>
              <hr className="bg-[#686868] border-[1px] " />
            </div>
          </div>

          <div className={` p-5  mt-4 shadow-lg border-[1px] border-[#F2F2F2]`}>
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

            <div className="mt-4 ">
              <div className="relative   sm:rounded-lg">
                <table className="w-full overflow-x-auto">
                  <thead className="text-xs text-[#001E00] text-[16px] uppercase md:overflow-x-auto bg-[#F2F3F7] ">
                    <tr className="">
                      <th scope="col  " className="p-[10px] ">
                        <p className="border-r-[1px] border-[#B7B7B7] flex justify-center">
                          Product
                        </p>
                      </th>
                      <th scope="col" className="p-[10px] ">
                        <p className="border-r border-[#B7B7B7] flex justify-start">
                          Local Title
                        </p>
                      </th>
                      <th scope="col" className="p-[10px] whitespace-nowrap  ">
                        <p className="border-r border-[#B7B7B7] flex justify-start">
                          Product SKU
                        </p>
                      </th>
                      <th scope="col" className="p-[10px]  ">
                        <p className="border-r border-[#B7B7B7] flex justify-start ">
                          Category
                        </p>
                      </th>
                      <th scope="col" className="p-[10px] ">
                        <p className="border-r border-[#B7B7B7] flex justify-start">
                          Price
                        </p>
                      </th>
                      <th scope="col" className="p-[10px]  ">
                        <p className="border-r border-[#B7B7B7] flex justify-start">
                          {isActive === "deleted" ? "Deleted Date" : "Stock"}
                        </p>
                      </th>
                      <th scope="col" className="p-[10px]  ">
                        <p
                          className={`${
                            isActive !== "deleted" &&
                            "border-r border-[#B7B7B7]"
                          } flex justify-start`}
                        >
                          Actions
                        </p>
                      </th>

                      <th
                        scope="col"
                        className="p-[10px]  flex justify-start"
                      ></th>
                    </tr>
                  </thead>
                  <tbody
                    className={`${
                      isActive && productList.length !== 0
                        ? "text-[#001E00] text-[16px] md:overflow-x-auto"
                        : "h-[284px] w-full grid grid-col-1 justify-center"
                    }`}
                  >
                    {/* for all the product */}
                    {isActive === "All" &&
                      (productList.length !== 0 ? (
                        productList.map((product) => {
                          return (
                            <AllProduct
                              key={product.id}
                              product={product}
                            ></AllProduct>
                          );
                        })
                      ) : (
                        <>
                          <tr className="h-[426px] bg-white text-[#686868] text-[16px]">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>No Data</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </>
                      ))}
                    {/* for online product */}
                    {isActive === "Online" &&
                      (ActiveProduct.length > 0 ? (
                        ActiveProduct.map((product) => {
                          return (
                            <AllProduct
                              key={product.id}
                              product={product}
                            ></AllProduct>
                          );
                        })
                      ) : (
                        <>
                          <tr className="h-[426px] bg-white text-[#686868] text-[16px]">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>No Data</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </>
                      ))}
                    {/* for Draft product */}
                    {isActive === "Draft" &&
                      (DraftProduct.length > 0 ? (
                        DraftProduct.map((product) => {
                          return (
                            <AllProduct
                              key={product.id}
                              product={product}
                            ></AllProduct>
                          );
                        })
                      ) : (
                        <>
                          <tr className="h-[426px] bg-white text-[#686868] text-[16px]">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>No Data</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </>
                      ))}
                    {/* for pending product */}
                    {isActive === "PendingQC" &&
                      (PendingQCProduct.length > 0 ? (
                        PendingQCProduct.map((product) => {
                          return (
                            <AllProduct
                              key={product.id}
                              product={product}
                            ></AllProduct>
                          );
                        })
                      ) : (
                        <>
                          <tr className="h-[426px] bg-white text-[#686868] text-[16px]">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>No Data</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </>
                      ))}
                    {/* for out of stock product */}
                    {isActive === "OutOfStock" &&
                      (InactiveProduct.length > 0 ? (
                        InactiveProduct.map((product) => {
                          return (
                            <AllProduct
                              key={product.id}
                              product={product}
                            ></AllProduct>
                          );
                        })
                      ) : (
                        <>
                          <tr className="h-[426px] bg-white text-[#686868] text-[16px]">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>No Data</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </>
                      ))}
                    {/* for inactive product */}
                    {isActive === "Inactive" &&
                      (InactiveProduct.length > 0 ? (
                        InactiveProduct.map((product) => {
                          return (
                            <AllProduct
                              key={product.id}
                              product={product}
                            ></AllProduct>
                          );
                        })
                      ) : (
                        <>
                          <tr className="h-[426px] bg-white text-[#686868] text-[16px]">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>No Data</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </>
                      ))}
                    {/* for suspended product */}
                    {isActive === "Suspended" &&
                      (InactiveProduct.length > 0 ? (
                        InactiveProduct.map((product) => {
                          return (
                            <SuspendedProduct
                              key={product.id}
                              product={product}
                            ></SuspendedProduct>
                          );
                        })
                      ) : (
                        <>
                          <tr className="h-[426px] bg-white text-[#686868] text-[16px]">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>No Data</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </>
                      ))}
                    {/* for deleted product */}
                    {isActive === "deleted" &&
                      (deletedProduct.length > 0 ? (
                        deletedProduct.map((product) => {
                          return (
                            <DeletedProduct
                              key={product.id}
                              product={product}
                            ></DeletedProduct>
                          );
                        })
                      ) : (
                        <>
                          <tr className="h-[426px] bg-white text-[#686868] text-[16px]">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>No Data</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageProductUpdated;
