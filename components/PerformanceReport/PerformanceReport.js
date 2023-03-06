import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Chart from './Chart/Chart';


const PerformanceReport = () => {
    const [show, setShow] = useState('hidden')
    const datas = [
        {
            "id": 1,
            "Product_Impressions": 60,
            "Product_Variation": 10,
            "Total_Clicks": "1200",
            "Total_Orders": "100",
            "Upload_Date": "05 Feb 2023",
            "Cancellations": "3%",
            "active": "Active",
            "title": "Tomato (Local) 500 ±30 gm",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DshsOahuBCfD3J0O83XhHepKnaWDswVrYA&usqp=CAU"
        },
        {
            "id": 2,
            "Product_Impressions": 60,
            "Product_Variation": 10,
            "Total_Clicks": "1200",
            "Total_Orders": "100",
            "Upload_Date": "05 Feb 2023",
            "Cancellations": "4%",
            "active": "Active",
            "title": "Tomato (Local) 500 ±30 gm",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DshsOahuBCfD3J0O83XhHepKnaWDswVrYA&usqp=CAU"
        },
        {
            "id": 3,
            "Product_Impressions": 60,
            "Product_Variation": 10,
            "Total_Clicks": "1200",
            "Total_Orders": "100",
            "Upload_Date": "05 Feb 2023",
            "Cancellations": "6%",
            "active": "Inactive",
            "title": "Tomato (Local) 500 ±30 gm",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DshsOahuBCfD3J0O83XhHepKnaWDswVrYA&usqp=CAU"
        }
    ]
    const handleChart = (dta) => {

    }



    return (
        <div className='md:mt-[45px] max-w-[1920px] px-[2vw] w-[90%]  '>
            <p className='text-[1.3vw] font-semibold text-[#686868]'>Home {'>'} Finance  {'>'}  <span className='text-[#001E00]'>Performance Report</span></p>
            <h1 className='text-[24px] mb-[32px] text-[#FB641B] mt-[8px] font-semibold'>Performance Report</h1>

            <table className="w-full text-sm text-left px-[20px]">
                <thead className="text-xs text-[#001E00] uppercase rounded-sm  shadow-small px-[10px] bg-white  mb-[20px]">
                    <tr className="">
                        <th
                            scope="col  "
                            className=" py-3 "
                        >
                            <p className="border-r px-[13px] text-center  border-[#B7B7B7] text-[#001E00]">
                                Product
                            </p>
                        </th>
                        <th
                            scope="col"
                            className=" py-3  whitespace-nowrap  "
                        >
                            <p className="border-r px-[4px] text-center border-[#B7B7B7] text-[#001E00] ">
                                Local Title
                            </p>
                        </th>
                        <th
                            scope="col"
                            className=" py-3 whitespace-nowrap  "
                        >
                            <p className="border-r px-[4px] text-center border-[#B7B7B7] text-[#001E00]  whitespace-nowrap  ">Product Impressions</p>
                        </th>
                        <th
                            scope="col"
                            className=" py-3 "
                        >
                            <p className="border-r px-[4px] text-center border-[#B7B7B7] text-[#001E00] ">
                                Variation
                            </p>
                        </th>
                        <th
                            scope="col"
                            className=" py-3  whitespace-nowrap  "
                        >
                            <p className="border-r px-[4px] text-center border-[#B7B7B7] text-[#001E00] ">Total Clicks</p>
                        </th>
                        <th
                            scope="col"
                            className=" py-3  whitespace-nowrap  "
                        >
                            <p className="border-r px-[4px] text-center border-[#B7B7B7] text-[#001E00] ">Total Orders</p>
                        </th>
                        <th
                            scope="col"
                            className=" py-3  whitespace-nowrap  "
                        >
                            <p className="border-r px-[4px] text-center border-[#B7B7B7] text-[#001E00]">Upload Date</p>
                        </th>
                        <th
                            scope="col"
                            className=" py-3   whitespace-nowrap "
                        >
                            <p className="border-r px-[4px] text-center border-[#B7B7B7] text-[#001E00]">Cancellations</p>
                        </th>
                        <th
                            scope="col"
                            className=" py-3   whitespace-nowrap "
                        >
                            <p className=" pl-[6px] pr-[20px] text-center text-[#001E00] border-[#B7B7B7]">Actions</p>
                        </th>

                    </tr>
                </thead>
                <tbody >
                    {
                        datas.map(dta => {
                            return (
                                <>
                                    <tr onClick={() => setShow('block')} className="bg-white border-b border-[#B7B7B7] text-[#001E00]">
                                        <td className="px-6 py-4">
                                            <Image width={40} height={40} src={dta.image} alt="" />
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-center text-[#001E00] whitespace-nowrap">
                                            {dta.title}
                                        </th>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-center text-[#686868]">{dta.Product_Impressions}</td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-center text-[#686868]">{dta.Product_Variation}</td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-center text-[#686868]">{dta.Total_Orders}</td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-center text-[#686868]">{dta.Total_Clicks}</td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-center text-[#686868]"> Tk {dta.Upload_Date}</td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-center text-[#F4253F]">{dta.Cancellations}</td>
                                        {
                                            dta.active === 'Active' ? <>    <td className={`px-6  font-medium whitespace-nowrap text-center  text-[#686868] `}> <span className='border rounded-md border-[#B7B7B7] text-[#0BD838] px-[14px] py-[5px]'>{dta.active}</span> </td></> :
                                                <>    <td className={`px-6  font-medium whitespace-nowrap text-center  text-[#686868] `}> <span className='border rounded-md border-[#B7B7B7] text-[#686868] px-[14px] py-[5px]'>{dta.active}</span> </td></>
                                        }
                                    </tr>


                                </>
                            )
                        })
                    }

                </tbody>
            </table>
            <div className={`${show} w-[900px] h-[400px] mt-[30px] mb-[30px]`}>
                <Chart></Chart>

            </div>


        </div>

    );
};

export default PerformanceReport;