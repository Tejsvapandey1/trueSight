import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function DataCards() {
  return (
    <div className="w-fit">
      <Bar
        className="w-30 h-30"
        data={{
          labels: ["A", "B", "C"],
          datasets: [
            {
              label: "Revenue",
              data: [200, 300, 400],
            },
          ],
        }}
      />
    </div>
  );
}

export default DataCards;
