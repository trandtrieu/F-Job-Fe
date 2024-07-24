import React, { useEffect } from "react";
import * as echarts from "echarts";

function BudgetReport() {
  useEffect(() => {
    // Initialize chart only after the component has mounted
    const chartDom = document.querySelector("#budgetChart");
    const myChart = echarts.init(chartDom);

    const option = {
      legend: {
        data: ["Allocated Budget", "Estimated Expenses"],
      },
      radar: {
        shape: "circle",
        indicator: [
          { name: "Sales", max: 6500 },
          { name: "Administration", max: 16000 },
          { name: "IT", max: 30000 },
          { name: "Manager", max: 35000 },
          { name: "Development", max: 38000 },
          { name: "Marketing", max: 25000 },
        ],
      },
      series: [
        {
          name: "Budget vs Spending",
          type: "radar",
          data: [
            {
              value: [5200, 3500, 20000, 35000, 45000, 16000],
              name: "Allocated Budget",
              itemStyle: {
                color: "#1f77b4", // Example color for visibility
              },
            },
            {
              value: [5000, 8000, 25000, 30000, 40000, 18000],
              name: "Estimated Expenses",
              itemStyle: {
                color: "#339933", // Example color for visibility
              },
            },
          ],
        },
      ],
    };

    myChart.setOption(option);

    // Cleanup function to dispose of the chart instance when the component unmounts
    return () => {
      myChart.dispose();
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div
      id="budgetChart"
      style={{ minHeight: "400px", width: "100%" }}
      className="echarts"
    ></div>
  );
}

export default BudgetReport;
