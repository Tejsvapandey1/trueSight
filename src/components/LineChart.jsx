import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Sample data array for demonstration purposes
  const demoData = [0.8, 1.3, 0.9, 1.5, 2.0, 2.3, 1.7, 2.2, 1.8, 2.5];

  // Generate labels for x-axis based on the length of the data
  const labels = demoData.map((_, i) => `Frame ${i + 1}`);

  // Chart.js dataset
  const chartData = {
    labels,
    datasets: [
      {
        label: "Reality Score",
        data: demoData, // Sample data for the chart
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Frame",
        },
      },
      y: {
        title: {
          display: true,
          text: "Prediction Score",
        },
        beginAtZero: true,
        min: 0, // Start y-axis at 0
        max: 5, // End y-axis at 5
        ticks: {
          stepSize: 0.5, // Adjust the step size for better visibility
        },
      },
    },
  };

  return (
    <div className="flex flex-col content-center justify-center w-[90%] h-[90%] ml-9 mt-3">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
