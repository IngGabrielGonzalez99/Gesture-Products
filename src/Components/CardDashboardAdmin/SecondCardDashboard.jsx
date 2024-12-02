import React, { useEffect } from "react";
import { Chart } from "chart.js";

const SalesChart = () => {
  useEffect(() => {
    const ctx = document.getElementById("salesChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Oct", "Nov", "Dic"],
        datasets: [
          {
            label: "Sales",
            data: [2988.2, 1765.09, 4005.65],
            backgroundColor: ["#93C5FD", "#93C5FD", "#93C5FD"],
            borderWidth: 1,
            borderRadius: 5,
            barThickness: 20,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
        },
        responsive: true,
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true },
        },
      },
    });
  }, []);

  return null; // El canvas se renderiza dentro del DOM.
};

export const SecondCardDashboard = () => {
  return (
    <div className="w-full px-40 py-10">
    <div className="bg-white shadow rounded-lg p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-gray-700 font-medium">Resumen de Ventas</h2>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">$9,257.51</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
            <span className="text-blue-500 font-medium">15.8%</span>
            <svg
              className="w-4 h-4 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
            <span>+ $143.50 incremento</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
              ></path>
            </svg>
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 10h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6">
        <canvas id="SalesChart"></canvas>
      </div>

      {/* Legend */}
      <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
        <span>Oct</span>
        <span>Nov</span>
        <span>Dic</span>
      </div>
      <div className="flex justify-between mt-2 text-gray-400">
        <span>China</span>
        <span>Russia</span>
        <span>USA</span>
        <span>Canadá</span>
        <span>España</span>
      </div>
    </div>
    </div>
    
  );
};
