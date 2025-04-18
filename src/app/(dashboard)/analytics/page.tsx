"use client";

import { useState } from "react";
import {
  Calendar,
  Download,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { cn } from "@/src/lib/utils";

import {
  analyticsSalesData,
  analyticsCategoryData,
  analyticsChannelData,
  analyticsKeyMetrics,
} from "@/src/lib/constants";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

const ANALYTICS_CATEGORY_COLORS_HEX = [
  "#993333",
  "#FFCCCC",
  "#CC6666",
  "#FF9999",
  "#333333",
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name: string;
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.1;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#333333"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("year");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [salesChartGranularity, setSalesChartGranularity] = useState("Monthly");

  const getFilterButtonClasses = (filterName: string): string => {
    const baseClasses =
      "rounded-full h-7 whitespace-nowrap capitalize px-3 py-1 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
    const isActive = timeRange === filterName;

    const activeClasses = `bg-[#993333] text-[#FFFFFF] ring-[#993333]/50`;
    const inactiveClasses = `bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB] ring-transparent`;
    return cn(baseClasses, isActive ? activeClasses : inactiveClasses);
  };

  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;
  const formatPercent = (value: number) => `${value}%`;

  return (
    <div className="space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      
        <h1 className="text-2xl font-semibold text-[#333333]">
          Analytics Overview
        </h1>
   
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
              <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
              <DropdownMenuItem>Custom Range...</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>


      <div className="flex overflow-x-auto pb-2 space-x-2">
        {["month", "quarter", "year", "all"].map((range) => (
          <button
            key={range}
            type="button"
            className={getFilterButtonClasses(range)}
            onClick={() => setTimeRange(range)}
          >
            {range === "all" ? "All Time" : `This ${range}`}
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
 
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Sales Trend</CardTitle>
            <Select
              defaultValue="Monthly"
              onValueChange={setSalesChartGranularity}
            >
              <SelectTrigger className="w-[120px] h-8 text-xs">
                <SelectValue placeholder="Granularity" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Daily">Daily</SelectItem>
                <SelectItem value="Weekly">Weekly</SelectItem>
                <SelectItem value="Monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="h-[350px] p-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={analyticsSalesData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
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
                <Tooltip
                  cursor={{ strokeDasharray: "3 3", stroke: "#FFE5E5" }}
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#E5E7EB",
                    borderRadius: "0.625rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    padding: "8px 12px",
                    color: "#333333",
                  }}
                  labelStyle={{ fontWeight: "bold", color: "#333333" }}
                  itemStyle={{ color: "#333333", fontSize: "12px" }}
                  formatter={formatCurrency}
                  wrapperStyle={{ zIndex: 999, outline: "none" }}
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#993333"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

  
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Sales by Category
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[350px] p-0 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analyticsCategoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  stroke="#FFFFFF"
                  strokeWidth={1}
                >
                  {analyticsCategoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        ANALYTICS_CATEGORY_COLORS_HEX[
                          index % ANALYTICS_CATEGORY_COLORS_HEX.length
                        ]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [
                    `${formatPercent(Number(value))}`,
                    name,
                  ]}
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#E5E7EB",
                    borderRadius: "0.625rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    padding: "8px 12px",
                    color: "#333333",
                  }}
                  labelStyle={{ fontWeight: "bold", color: "#333333" }}
                  itemStyle={{ color: "#333333", fontSize: "12px" }}
                  wrapperStyle={{ zIndex: 999, outline: "none" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Sales by Channel
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[350px] p-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={analyticsChannelData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
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
                <Bar
                  dataKey="value"
                  fill="#993333"
                  radius={[4, 4, 0, 0]}
                  activeBar={false}
                />
                <Tooltip
                  cursor={{ fill: "#FFE5E5", radius: "4px" }}
                  formatter={formatCurrency}
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#E5E7EB",
                    borderRadius: "0.625rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    padding: "8px 12px",
                    color: "#333333",
                  }}
                  labelStyle={{ fontWeight: "bold", color: "#333333" }}
                  itemStyle={{ color: "#333333", fontSize: "12px" }}
                  wrapperStyle={{ zIndex: 999, outline: "none" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
   
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {analyticsKeyMetrics.map((metric) => (
                <div
                  key={metric.title}
                  className={`p-4 rounded-lg border bg-[#FFCCCC]/10 border-[#FFCCCC]/20`}
                >
             
                  <h4 className="text-sm font-medium mb-1 text-[#6B7280]">
                    {metric.title}
                  </h4>
           
                  <p className="text-2xl font-semibold text-[#993333]">
                    {metric.value}
                  </p>
                  {metric.change && (
                    <div className="flex items-center mt-1 text-xs">
                      {metric.positive !== undefined &&
                        (metric.positive ? (
                          <ArrowUpRight
                            className={`h-3 w-3 mr-1 text-[#10B981]`}
                          />
                        ) : (
                          <ArrowDownRight
                            className={`h-3 w-3 mr-1 text-[#EF4444]`}
                          />
                        ))}
                 
                      <span
                        className={cn(
                          metric.positive !== undefined
                            ? metric.positive
                              ? `text-[#10B981]`
                              : `text-[#EF4444]`
                            : `text-[#6B7280]`
                        )}
                      >
                        {metric.change}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
