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
      name: "January",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "February",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "August",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "September",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "October",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "November",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "December",
      uv: 3490,
      pv: 4300,
      amt: 2100,
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
          <div className="">
            <div
              className={`rounded-lg  pb-10 ${style.boxshaddow} bg-[#FFFFFF]`}
            >
              <div className="p-6 ">
                <div className="mb-4">
                  <p className="text-lg font-medium w-full text-[#001E00]">
                    Sales Overview
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div>
                    <p className="text-base text-[#686868] mb-4">Total Sales</p>
                    <div className="border-2 border-[#F2F2F2] py-6 rounded-lg w-[444px] h-[368px]">
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
                    <div className="border-2 border-[#F2F2F2] rounded-lg w-[444px] h-[368px] ">
                      {items.map((item, i) => {
                        return (
                          <>
                            <div key={i} className="flex p-4 hover:bg-[#F2F3F7]">
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

                      <div className="flex justify-end">
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
                    <div className="border-2 border-[#F2F2F2] p-4 rounded-lg w-[444px] h-[368px]">
                      <ResponsiveContainer width="100%" height="100%">
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
                      </ResponsiveContainer>
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
