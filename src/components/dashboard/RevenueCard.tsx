import type { ReactNode } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface RevenueCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: ReactNode;
}

export default function RevenueCard({
  title,
  value,
  change,
  positive,
  icon,
}: RevenueCardProps) {
  return (
    <div className="bg-card rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
   
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
   
        <div className="rounded-full bg-[#FFCCCC] bg-opacity-20 p-2">
          {icon}
        </div>
      </div>
      <div className="mt-2">
    
        <p className="text-2xl font-semibold text-card-foreground">{value}</p>
        <div className="flex items-center mt-1">
          {positive ? (
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-red-500" />
          )}
      
          <span
            className={cn(
              "ml-1 text-xs font-medium",
              positive ? "text-green-500" : "text-red-500"
            )}
          >
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}
