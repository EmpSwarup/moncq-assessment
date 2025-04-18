"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  productsPageData,
  productCategories,
} from "@/src/lib/constants";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = productsPageData
    .filter((product) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "out-of-stock")
        return product.status === "Out of Stock";
      return product.category === activeFilter;
    })
    .filter((product) => {
      if (!searchTerm) return true;
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `#${product.id}`.includes(searchTerm)
      );
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-800";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800";
      case "Out of Stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search products (name, category, #ID)..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="inline-flex items-center px-3 py-2 bg-[#993333] rounded-md text-sm font-medium text-white hover:bg-[#993333]/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </button>
        </div>
      </div>


      <div className="flex overflow-x-auto pb-2 space-x-2">
        <Button
          size="sm"
          className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
            activeFilter === "all"
              ? "bg-[#993333] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveFilter("all")}
        >
          All Products
        </Button>
        {productCategories.map((category) => (
          <Button
            key={category}
            size="sm"
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              activeFilter === category
                ? "bg-[#993333] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </Button>
        ))}

        <Button
          size="sm"
          className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
            activeFilter === "out-of-stock"
              ? "bg-[#993333] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveFilter("out-of-stock")}
        >
          Out of Stock
        </Button>
      </div>

   
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="rounded-md object-cover aspect-square"
                      />
                      <div>
                        <div className="font-medium min-w-[150px] max-w-[200px] text-wrap truncate">
                          {product.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ID: #{product.id}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        product.status
                      )}`}
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#993333] hover:text-[#993333]/80 mr-3 cursor-pointer"
                    >
                      <Edit className="h-4 w-4 text-primary" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4 text-gray-700 hover:text-gray-900" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
 
      <div className="flex items-center justify-between pt-4">
        <div className="text-sm text-muted-foreground">
          Showing <strong>1</strong> to{" "}
          <strong>{filteredProducts.length}</strong> of{" "}
          <strong>{filteredProducts.length}</strong> results
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            {" "}
   
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
