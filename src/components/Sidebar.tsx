"use client";

import Link from "next/link";
import {
  Home,
  ShoppingBag,
  Users,
  BarChart,
  Settings,
  HelpCircle,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";

interface SidebarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  sidebarOpen: boolean;
  activeItem: string;
}

export default function Sidebar({
  mobileMenuOpen,
  setMobileMenuOpen,
  sidebarOpen,
  activeItem,
}: SidebarProps) {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home, id: "dashboard" },
    { name: "Products", href: "/products", icon: ShoppingBag, id: "products" },
    { name: "Customers", href: "/customers", icon: Users, id: "customers" },
    { name: "Analytics", href: "/analytics", icon: BarChart, id: "analytics" },
    { name: "Settings", href: "/settings", icon: Settings, id: "settings" },
    { name: "Help", href: "/help", icon: HelpCircle, id: "help" },
  ];

  const handleMobileNavClick = () => {
    if (window.innerWidth < 768) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
     
      <div
        className={cn(
          `hidden md:fixed inset-y-0 z-50 md:flex md:flex-col transition-all duration-300 ease-in-out`,
          sidebarOpen ? "md:w-64" : "md:w-20"
        )}
      >
       
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-[#E5E7EB] bg-[#FFFFFF]">
          {" "}
         
          <div className="flex h-16 shrink-0 items-center px-6 border-b border-[#E5E7EB]">
            {" "}
        
            <Link href="/">
              <div className="flex items-center">
            
                <div className="h-8 w-8 rounded-full bg-[#993333] flex items-center justify-center text-[#FFFFFF] font-bold">
                  {" "}
                  M
                </div>
                {sidebarOpen && (
                  <span className="ml-2 text-xl font-semibold text-[#333333] lg:block">
                    {" "}
              
                    Moncq
                  </span>
                )}
              </div>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col px-4">
            <ul role="list" className="flex flex-1 flex-col gap-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors duration-150",
                      activeItem === item.id
                        ? "bg-[#FFCCCC] text-[#993333]"
                        : "text-[#333333] hover:bg-[#FFCCCC]/20 hover:text-[#993333]",
                      !sidebarOpen && "justify-center"
                    )}
                    onClick={handleMobileNavClick}
                    title={item.name}
                  >
                    <item.icon
                      className={cn(
                        "h-6 w-6 shrink-0",
                        activeItem === item.id
                          ? "text-[#993333]"
                          : "text-[#6B7280] group-hover:text-[#993333]"
                      )}
                      aria-hidden="true"
                    />
                    {sidebarOpen && (
                      <span className="truncate">{item.name}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
     
        </div>
      </div>

  
      <div
        className={`relative z-50 md:hidden ${!mobileMenuOpen && "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
    
        <div
          className={`fixed inset-0 bg-[#111827]/80 transition-opacity duration-300 ease-linear ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className="fixed inset-0 flex">
          <div
            className={`relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
         
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button
                type="button"
                className="-m-2.5 p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
              
                <X className="h-6 w-6 text-[#FFFFFF]" aria-hidden="true" /> 
              </button>
            </div>

       
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#FFFFFF] px-6 pb-4">
              {" "}
           
              <div className="flex h-16 shrink-0 items-center">
        
                <div className="h-8 w-8 rounded-full bg-[#993333] flex items-center justify-center text-[#FFFFFF] font-bold">
                  {" "}
                  M
                </div>
             
                <span className="ml-2 text-xl font-semibold text-[#333333]">
                  {" "}
                 
                  Moncq
                </span>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors duration-150",
                          activeItem === item.id
                            ? "bg-[#FFCCCC] text-[#993333]"
                            : "text-[#333333] hover:bg-[#FFE5E5] hover:text-[#993333]"
                        )}
                        onClick={handleMobileNavClick}
                      >
                        <item.icon
                          className={cn(
                            "h-6 w-6 shrink-0",
                            activeItem === item.id
                              ? "text-[#993333]"
                              : "text-[#6B7280] group-hover:text-[#993333]"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
