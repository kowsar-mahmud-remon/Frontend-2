import React from "react";

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
const Chart = ({ props }) => {
    console.log(props)
    const data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        type: "line",
        datasets: [
            {
                label: "Total Sales: Tk 84,587",
                data: [50, 100, 180, 85, 100, 90, 165, 180, 100, 250, 75, 70, 65, 80, 60, 180, 180, 50, 190, 80],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(40, 125, 243, 1)",
            },

        ],
    };
    return (
        <div className="w-full h-full">
            <Line data={data} />
        </div>
    );
};

export default Chart;
