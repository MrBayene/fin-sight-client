import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    fetch("/testdata/expensesPie.csv")
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true });
        const labels = parsed.data.map((row: any) => row.category);
        const data = parsed.data.map((row: any) => Number(row.value));
        setChartData({
          labels,
          datasets: [
            {
              data,
              backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
            },
          ],
        });
      });
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 400 }}>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
