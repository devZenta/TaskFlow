"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardChartProps {
  data: any;
  options: any;
}

export function Chart({ data, options }: DashboardChartProps) {
  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        }
      }
    }
  };
  
  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg shadow-lg backdrop-blur-sm p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
      <div className="h-64">
        <Line data={data} options={mergedOptions} />
      </div>
    </div>
  );
}