import React from "react";
import { BarChart, LineChart, PieChart } from "lucide-react";

import {
  totalRevenueData,
  totalOrdersData,
  avgOrderValueData,
  conversionRateData,
} from "@/src/lib/constants";

import RevenueCard from "@/src/components/dashboard/RevenueCard";
import SalesByCategory from "@/src/components/dashboard/SalesByCategory";
import TopProducts from "@/src/components/dashboard/TopProducts";

export default function DashboardPage() {
  return (
    <>
  
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    
          <RevenueCard
            title="Total Revenue"
            value={totalRevenueData.value}
            change={totalRevenueData.change}
            positive={totalRevenueData.positive}
            icon={<LineChart className="h-5 w-5 text-primary" />}
          />
          <RevenueCard
            title="Total Orders"
            value={totalOrdersData.value}
            change={totalOrdersData.change}
            positive={totalOrdersData.positive}
            icon={<BarChart className="h-5 w-5 text-primary" />}
          />
          <RevenueCard
            title="Average Order Value"
            value={avgOrderValueData.value}
            change={avgOrderValueData.change}
            positive={avgOrderValueData.positive}
            icon={<PieChart className="h-5 w-5 text-primary" />}
          />
          <RevenueCard
            title="Conversion Rate"
            value={conversionRateData.value}
            change={conversionRateData.change}
            positive={conversionRateData.positive}
            icon={<LineChart className="h-5 w-5 text-primary" />}
          />
        </div>
      </div>

   
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <SalesByCategory /> 
        <TopProducts /> 
      </div>
    </>
  );
}
