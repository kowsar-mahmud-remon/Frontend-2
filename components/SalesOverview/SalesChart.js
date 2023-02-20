import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend
);
const SalesChart = () => {
  const data = {
    labels: ["Jan 1", "Jan 2", "Jan 3", "Jan 4", "Jan 5", "Jan 6", "Jan 7"],
    type: "line",
    datasets: [
      {
        label: "Total Sales: Tk 84,587",
        data: [10, 53, 45, 41, 44, 65, 50],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(40, 125, 243, 1)",
      },
      {
        label: "Cancellation: Tk 4,587",
        data: [0, 7, 10, 22, 13, 16, 25],
        fill: false,
        borderColor: "#F4253F",
      },
    ],
  };
  return (
    <div className="w-full h-full">
      <Line data={data} />
    </div>
  );
};

export default SalesChart;
