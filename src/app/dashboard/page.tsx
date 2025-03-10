'use client';

import Image from "next/image"
import Link from "next/link"
import React from 'react';
import { Header } from '@/components/DashboardPage/Header';
import { Sidebar } from '@/components/DashboardPage/Sidebar';
import { Content } from '@/components/DashboardPage/Content';
import { Footer } from '@/components/DashboardPage/Footer';
import { Notifications } from '@/components/DashboardPage/Notifications';
import { Widget } from '@/components/DashboardPage/Widget';
import { Chart } from '@/components/DashboardPage/Chart';

export default function DashBoardPage() {
  const notifications = ["Notification 1", "Notification 2", "Notification 3"];
  const widgetContent = "This is a widget content";
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  const chartOptions = {
    maintainAspectRatio: false
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <Content />
          <Notifications notifications={notifications} />
          <Widget titre="Widget Title" content={widgetContent} />
          <Chart data={chartData} options={chartOptions} />
        </div>
      </div>
      <Footer />
    </div>
  );
}