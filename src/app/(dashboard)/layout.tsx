"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/src/components/Sidebar";
import { Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const activeItem = pathname.split("/")[1] || "dashboard";

  return (
    <div>
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        sidebarOpen={sidebarOpen}
        activeItem={activeItem}
        setActiveItem={() => {}}
      />

      <div
        className={`flex flex-1 flex-col transition-all duration-300 ease-in-out ${
          sidebarOpen ? "md:pl-64" : "md:pl-20"
        }`}
      >
      
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>

      
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 hidden md:block"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <span className="sr-only">
              {sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            </span>
      
            {sidebarOpen ? (
              <Menu className="h-6 w-6 transform rotate-90" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        
          <div
            className="h-6 w-px bg-gray-900/10 lg:hidden"
            aria-hidden="true"
          />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
       
            <div className="flex flex-1 items-center">
           
              <h1 className="text-lg font-semibold capitalize text-moncq-black">
                {activeItem}
              </h1>
            </div>
        
          </div>
        </div>

   
        <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
