import React, { useEffect } from "react";
import * as echarts from "echarts";

function BudgetReport() {
  useEffect(() => {
    // Initialize chart only after the component has mounted
    const chartDom = document.querySelector("#budgetChart");
    const myChart = echarts.init(chartDom);

    const option = {
      legend: {
        data: ["Allocated Budget", "Actual Expenses"],
      },
      radar: {
        shape: "circle",
        indicator: [
          { name: "Sales", max: 6500 },
          { name: "Administration", max: 16000 },
          { name: "IT", max: 30000 },
          { name: "Customer Support", max: 38000 },
          { name: "Development", max: 40000 },
          { name: "Marketing", max: 25000 },
        ],
      },
      series: [
        {
          name: 'Budget vs Spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget',
              itemStyle: {
                color: '#1f77b4' // Example color for visibility
              }
            },
            {
              value: [5000, 8000, 25000, 30000, 40000, 21000],
              name: 'Actual Expenses',
              itemStyle: {
                color: '#ff7f0e' // Example color for visibility
              }
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
    <div id="budgetChart" style={{ minHeight: '400px', width: '100%' }} className="echarts">
    </div>
  );
}

export default BudgetReport;
