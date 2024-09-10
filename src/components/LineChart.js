// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: Array.from({ length: 80 }, (_, i) => i + 1), // Generate labels for x-axis
    datasets: [
      {
        label: 'Your Data Label',
        data: [0.91430306, 0.91358024, 0.9201165, 0.9262819, 0.9192391, 0.916207, 0.9225362, 0.9252373, 0.9235007, 0.91238105,
          0.9123338, 0.9186162, 0.9143237, 0.9249099, 0.9289184, 0.9252016, 0.92477286, 0.93033123, 0.9249736, 0.93268645, 0.929614,
          0.93399346, 0.92968017, 0.9331363, 0.9094858, 0.9043834, 0.9249756, 0.92409587, 0.92589504, 0.9231846, 0.9114381, 0.9278787,
          0.9336387, 0.9303804, 0.92894554, 0.92022794, 0.8921114, 0.9053664, 0.9140479, 0.9006634, 0.9216371, 0.9187677, 0.91276926,
          0.89405465, 0.90312487, 0.9128213, 0.9213788, 0.92455393, 0.9238855, 0.92127067, 0.9276473, 0.93511605, 0.93206996, 0.94674045,
          0.9458961, 0.946902, 0.943616, 0.94645786, 0.94118696, 0.9447694, 0.9442943, 0.9494834, 0.9461788, 0.94610435, 0.9394418,
          0.93963766, 0.9367501, 0.9337895, 0.9408654, 0.9460739, 0.94356805, 0.94138116, 0.92398834, 0.937241, 0.93223083],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw.toFixed(2)}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Index',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='mx-3 my-6 '>
      <h2 className='text-white'>Data from Backend</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
