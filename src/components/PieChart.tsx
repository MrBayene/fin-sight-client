import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  filename: string;
}

const PieChart: React.FC<PieChartProps> = ({ filename }) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    fetch(`/testdata/${filename}`)
      .then((response) => response.json())
      .then((jsonData) => {
        const labels = jsonData.map((row: any) => row.category);
        const data = jsonData.map((row: any) => Number(row.value));
        setChartData({
          labels,
          datasets: [
            {
              data,
              backgroundColor: [
                "#36A2EB",
                "#FF6384",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
              ],
            },
          ],
        });
      });
  }, [filename]);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 400, marginBottom: 32 }}>
      <h3>{filename}</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
