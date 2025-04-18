import React from "react";
import { topProductsData } from "@/src/lib/constants";

export default function TopProducts() {
  return (
    <div className="bg-card rounded-lg border p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        
        <h2 className="text-lg font-medium text-[#333333]">
          Top Selling Products
        </h2>
    
        <button className="text-sm text-[#993333] hover:text-[#993333]/80">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        {" "}
       
        <table className="min-w-full divide-y divide-border">
          <thead>
            <tr>
              
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Sales
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Revenue
              </th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-border">
            {topProductsData.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    
                    <div className="h-10 w-10 flex-shrink-0 rounded-md bg-[#FFCCCC] flex items-center justify-center">
                      <span className="text-primary text-xs font-semibold">
                        {product.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="ml-4">
                    
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                 
                  <div className="text-sm text-muted-foreground">
                    {product.category}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
               
                  <div className="text-sm text-card-foreground">
                    {product.sales}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                 
                  <div className="text-sm text-card-foreground">
                    {product.revenue}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
