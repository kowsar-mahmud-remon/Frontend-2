import React , { PureComponent } from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";
import elipse1 from "../../assets/images/Ellipse 92.png";
import elipse2 from "../../assets/images/Ellipse 93.png";
import potol from "../../assets/images/image 88.png";
import clock from "../../assets/images/image 9.png";
import lebu from "../../assets/images/image 4.png";
import tomato from "../../assets/images/image 66.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import SalesOverviewTable from "./SalesOverviewTable";
import products from "./fakedb.json"
import SalesChart from "./SalesChart";

const SalesOverview = () => {
  const data = [
    { text: "January" },
    { text: "February" },
    { text: "March" },
    { text: "April" },
    { text: "May" },
    { text: "June" },
    { text: "July" },
    { text: "August" },
    { text: "September" },
    { text: "October" },
    { text: "November" },
    { text: "December" },
  ];

  const items = [
    { img: potol, name: "Potol (Pointed Gourd) 500 ±30 gm", quantity: 1200 },
    { img: clock, name: "Brass Perfect Alarm Clock", quantity: 700 },
    { img: lebu, name: "Lebo (Lemon) 250 ±15 gm", quantity: 1000 },
    { img: tomato, name: "Tomato (Local) 500 ±30 gm", quantity: 500 },
  ];

  const charts = [
    {
      name: "Jan 1",
      uv: 4000,
      pv: 2400,
      amt: 10,
    },
    {
      name: "Jan 2",
      uv: 3000,
      pv: 1398,
      amt: 20,
    },
    {
      name: "Jan 3",
      uv: 2000,
      pv: 9800,
      amt: 30,
    },
    {
      name: "Jan 4",
      uv: 2780,
      pv: 3908,
      amt: 40,
    },
    {
      name: "Jan 5",
      uv: 1890,
      pv: 4800,
      amt: 50,
    },
    {
      name: "Jan 6",
      uv: 2390,
      pv: 3800,
      amt: 60,
    },
    {
      name: "Jan 7",
      uv: 3490,
      pv: 4300,
      amt: 70,
    },
    {
      name: "Jan 8",
      uv: 3490,
      pv: 4300,
      amt: 80,
    },
    {
      name: "Jan 9",
      uv: 3490,
      pv: 4300,
      amt: 90,
    },
    {
      name: "Jan 10",
      uv: 3490,
      pv: 4300,
      amt: 100,
    },
    {
      name: "Jan 11",
      uv: 3490,
      pv: 4300,
      amt: 110,
    },
    {
      name: "Jan 12",
      uv: 3490,
      pv: 4300,
      amt: 120,
    },
  ];

  const percentage = 84.587;
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
                  <a>Finance</a>
                </li>
                <li className="text-[#001E00] font-medium">Sales Overview</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-[#FB641B] font-semibold text-2xl">
                Sales Overview
              </h1>
            </div>
          </div>
          <div className=" flex lg:justify-between flex-wrap gap-2 relative z-10 my-8 w-full">
            <div className="flex ">
              <div className="mr-4 pt-1">
                <h3 className="text-[#001E00] font-medium text-lg">Months :</h3>
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
            <div className=""></div>
          </div>
          <div className="max-w-[1426px]">
            <div
              className={`rounded-lg  pb-10 ${style.boxshaddow} bg-[#FFFFFF]`}
            >
              <div className="p-6 ">
                <div className="mb-4">
                  <p className="text-lg font-semibold w-full text-[#001E00]">
                    Sales Overview
                  </p>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <div>
                    <p className="text-base text-[#686868] mb-4">Total Sales</p>
                    <div className="border-2 border-[#F2F2F2] py-6 rounded-lg lg:w-[444px] md:w-[444px] w-full lg:h-[368px]">
                      <div className="flex justify-center">
                        <div className="w-[275px] flex justify-center">
                          <CircularProgressbar
                            className="font-semibold flex justify-center w-full"
                            value={percentage}
                            text={`Tk ${percentage}`}
                            styles={buildStyles({
                              // Rotation of path and trail, in number of turns (0-1)
                              rotation: 0.5,

                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: "butt",

                              // Text size
                              textSize: "14px",
                              fontWeight: "bold",

                              // How long animation takes to go from one percentage to another, in seconds
                              pathTransitionDuration: 0.5,

                              // Can specify path transition in more detail, or remove it entirely
                              // pathTransition: 'none',

                              // Colors
                              pathColor: `rgba(40, 125, 243, 1), ${
                                percentage / 100
                              })`,
                              stroke: "#287DF3",
                              textColor: "#FB641B",
                              trailColor: "#F4253F",
                              backgroundColor: "#287DF3",
                            })}
                          />
                        </div>
                      </div>
                      <div className="flex justify-around mt-6">
                        <div className="flex items-center">
                          <Image
                            className="w-[11px]"
                            src={elipse1}
                            width={11}
                            alt=""
                          ></Image>{" "}
                          <p className="text-base text-[#001E00] ml-3 font-medium">
                            Total Sales:
                          </p>{" "}
                          <p className="ml-2 text-[#287DF3] text-lg font-semibold">
                            Tk 84,587
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Image
                            className="w-[11px]"
                            src={elipse2}
                            width={11}
                            alt=""
                          ></Image>{" "}
                          <p className="text-base text-[#001E00] ml-3 font-medium">
                            Cancellation:
                          </p>{" "}
                          <p className="ml-2 text-[#F4253F] text-lg font-semibold">
                            Tk 4,587
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base text-[#686868] mb-4">
                      Top Sales Product
                    </p>
                    <div className="border-2 border-[#F2F2F2] rounded-lg lg:w-[444px] md:w-[444px] w-full lg:h-[368px] ">
                      {items.map((item, i) => {
                        return (
                          <>
                            <div key={i} className="flex items-center px-4 hover:bg-[#F2F3F7] h-[83px]">
                              <div className="mr-4">
                                <Image
                                  className={`w-[76px] h-[61px] rounded ${style.boxbuttonshadow}`}
                                  src={item.img}
                                  alt=""
                                  width={76}
                                ></Image>
                              </div>
                              <div>
                                <h3 className="text-base font-semibold text-[#001E00]">
                                  {item.name}
                                </h3>
                                <div className="flex items-center mt-3">
                                  <p className=" text-[#001E00]">
                                    Sales Quantity :{" "}
                                  </p>{" "}
                                  <p className=" pl-2 text-[#686868]">
                                    {" "}
                                    {item.quantity} kg
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}

                      <div className="flex justify-end pr-4">
                        <a className="text-[#287DF3] font-medium" href="">
                          More View
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base text-[#686868] mb-4">
                      Sales Analytics
                    </p>
                    <div className="border-2 border-[#F2F2F2] p-4 rounded-lg lg:w-[444px] md:w-[444px] w-full lg:h-[368px]">
                      {/* <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          width={700}
                          height={300}
                          data={charts}
                          margin={{
                            top: 5,
                            right: 5,
                            left: 5,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                          />
                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer> */}
                      {/* <SalesChart></SalesChart> */} hll
                    </div>
                  </div>
                </div>
                <div>
                    <p className="text-lg text-[#001E00] font-semibold mt-8 mb-4">
                    Resent Orders
                    </p>
                    <div className="">
                  <div className="relative overflow-x-auto ">
                    <table className="w-full text-left text-[#001E00] ">
                      
                      <tbody>
                        {products.map((product) => {
                          return (
                            <SalesOverviewTable
                              key={product.id}
                              product={product}
                            ></SalesOverviewTable>
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

export default SalesOverview;
