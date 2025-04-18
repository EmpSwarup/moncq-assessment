"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/src/lib/utils";

import {
  salesDataMen,
  salesDataWomen,
  salesDataKids,
} from "@/src/lib/constants";

export default function SalesByCategory() {
  const [activeCategory, setActiveCategory] = useState("women");

  const getCategoryData = () => {
    switch (activeCategory) {
      case "men":
        return salesDataMen;
      case "women":
        return salesDataWomen;
      case "kids":
        return salesDataKids;
      default:
        return salesDataWomen;
    }
  };

  const getButtonClasses = (category: string) =>
    cn(
      "px-3 py-1 text-sm rounded-md transition-colors duration-150",
      activeCategory === category
        ? "bg-[#993333] text-white"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    );

  return (
    <div className="bg-card rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
     
        <h2 className="text-lg font-medium text-[#333333]">
          Sales by Category
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveCategory("women")}
            className={getButtonClasses("women")}
          >
            Women
          </button>
          <button
            onClick={() => setActiveCategory("men")}
            className={getButtonClasses("men")}
          >
            Men
          </button>
          <button
            onClick={() => setActiveCategory("kids")}
            className={getButtonClasses("kids")}
          >
            Kids
          </button>
        </div>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getCategoryData()}
            margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="name"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip />

            <Bar
              dataKey="value"
              fill="#993333"
              radius={[4, 4, 0, 0]}
              animationDuration={0}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
