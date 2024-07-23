import React, { useState } from "react";
import Chart from "react-apexcharts";

function Report() {
  const [filter, setFilter] = useState("Today");
  const [data, setData] = useState({
    series: [
      {
        name: "CV received",
        data: [0, 10, 7, 9, 11, 18, 24],
      },
      {
        name: "New application CV",
        data: [1, 3, 5, 2, 1, 8, 10],
      },
      {
        name: "Recruitment",
        data: [8, 10, 15, 24, 11, 9, 28],
      },
    ],

    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#4154f1", "#2eca6a", "#ff771d"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: { // Corrected from stoke to stroke
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-07-19T00:00:00.000Z",
          "2024-07-19T01:30:00.000Z",
          "2024-07-19T02:30:00.000Z",
          "2024-07-19T03:30:00.000Z",
          "2024-07-19T04:30:00.000Z",
          "2024-07-19T05:30:00.000Z",
          "2024-07-19T06:30:00.000Z", // Corrected the last category time
        ],
        labels: {
          datetimeFormatter: {
            year: 'yyyy',
            month: 'MMM yyyy',
            day: 'dd MMM',
            hour: 'HH:mm'
          },
          format: 'MMM yyyy', // This line will format the date as day and month
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        },
      },
    },
  });

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="card-report">
      <div className="card-body mb-6 p-4 border rounded-lg shadow-md bg-white" style={{width: '930px'}}>
        <h1 className="card-title" style={{fontSize: "20px", fontWeight: "bold"}}>Report</h1>
      
      <Chart
        options={data.options}
        series={data.series}
        type={data.options.chart.type}
        height={data.options.chart.height} // Corrected here
      />

      </div>
    </div>
  );
}

export default Report;
