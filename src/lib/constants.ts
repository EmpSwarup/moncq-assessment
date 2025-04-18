// -------- Data Types Dashboard --------
interface OverviewCardData {
  value: string;
  change: string;
  positive: boolean;
}

interface SalesDataPoint {
  name: string;
  value: number;
}

interface ProductData {
  id: number;
  name: string;
  category: string;
  sales: number;
  revenue: string;
}

// Data Types for Products Page
export interface ProductDetail {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  image: string;
}

//  Data Types for Customers Page
export interface CustomerDetail {
  id: number;
  name: string;
  email: string;
  phone: string;
  orders: number;
  spent: string;
  lastOrder: string;
  status: "Active" | "Inactive";
  avatar: string;
}

// Data Types for Analytics Page
export interface MonthlySales {
  name: string;
  sales: number;
}

export interface CategoryDistribution {
  name: string;
  value: number;
}

export interface ChannelSales {
  name: string;
  value: number;
}

export interface KeyMetric {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}

// -------- Mock Data --------

// For Overview Cards on DashboardPage
export const totalRevenueData: OverviewCardData = {
  value: "$42,389",
  change: "+12.5%",
  positive: true,
};
export const totalOrdersData: OverviewCardData = {
  value: "1,204",
  change: "+8.2%",
  positive: true,
};
export const avgOrderValueData: OverviewCardData = {
  value: "$35.20",
  change: "+4.3%",
  positive: true,
};
export const conversionRateData: OverviewCardData = {
  value: "3.2%",
  change: "-0.4%",
  positive: false,
};

// For SalesByCategory Chart
export const salesDataMen: SalesDataPoint[] = [
  { name: "Hoodies", value: 12500 },
  { name: "Sweatshirts", value: 9800 },
  { name: "Cardigans", value: 7500 },
  { name: "Jackets", value: 15200 },
  { name: "Pants", value: 6300 },
];

export const salesDataWomen: SalesDataPoint[] = [
  { name: "Hoodies", value: 14200 },
  { name: "Sweatshirts", value: 16800 },
  { name: "Cardigans", value: 18500 },
  { name: "Jackets", value: 12200 },
  { name: "Pants", value: 8300 },
];

export const salesDataKids: SalesDataPoint[] = [
  { name: "Hoodies", value: 5500 },
  { name: "Sweatshirts", value: 4800 },
  { name: "Cardigans", value: 2500 },
  { name: "Jackets", value: 3200 },
  { name: "Pants", value: 1300 },
];

// For TopProducts Table
export const topProductsData: ProductData[] = [
  {
    id: 1,
    name: "Organic Cotton Hoodie",
    category: "Women",
    sales: 342,
    revenue: "$17,100",
  },
  {
    id: 2,
    name: "Wool Blend Cardigan",
    category: "Women",
    sales: 276,
    revenue: "$13,800",
  },
  {
    id: 3,
    name: "Fleece Sweatshirt",
    category: "Men",
    sales: 253,
    revenue: "$10,120",
  },
  {
    id: 4,
    name: "Quilted Jacket",
    category: "Men",
    sales: 198,
    revenue: "$9,900",
  },
  {
    id: 5,
    name: "Thermal Leggings",
    category: "Women",
    sales: 187,
    revenue: "$5,610",
  },
];

// For SustainabilityMetric (Example values)
export const sustainabilityProgress = {
  organicMaterials: 78,
  recycledPackaging: 92,
  waterConservation: 65,
  overallScore: 78,
};

// For ProductsPage Table
export const productsPageData: ProductDetail[] = [
  {
    id: 1,
    name: "Cotton Hoodie",
    category: "Women",
    price: "$49.99",
    stock: 124,
    status: "In Stock",
    image: "/globe.svg",
  },
  {
    id: 2,
    name: "Wool qweqweqweCardigan",
    category: "Women",
    price: "$59.99",
    stock: 89,
    status: "In Stock",
    image: "/globe.svg",
  },
  {
    id: 3,
    name: "Fleece Sweatshirt",
    category: "Men",
    price: "$39.99",
    stock: 56,
    status: "Low Stock",
    image: "/globe.svg",
  },
  {
    id: 4,
    name: "Quilted Jacket",
    category: "Men",
    price: "$79.99",
    stock: 32,
    status: "Low Stock",
    image: "/globe.svg",
  },
  {
    id: 5,
    name: "Thermal Leggings",
    category: "Women",
    price: "$29.99",
    stock: 0,
    status: "Out of Stock",
    image: "/globe.svg",
  },
  {
    id: 6,
    name: "Winter Beanie",
    category: "Accessories",
    price: "$19.99",
    stock: 215,
    status: "In Stock",
    image: "/globe.svg",
  },
  {
    id: 7,
    name: "Knit Scarf",
    category: "Accessories",
    price: "$24.99",
    stock: 178,
    status: "In Stock",
    image: "/globe.svg",
  },
  {
    id: 8,
    name: "Insulated Gloves",
    category: "Accessories",
    price: "$22.99",
    stock: 94,
    status: "In Stock",
    image: "/globe.svg",
  },
];

// distinct categories for filtering
export const productCategories = ["Women", "Men", "Accessories"];

// For CustomersPage Table
export const customersPageData: CustomerDetail[] = [
  {
    id: 1,
    name: "Olivia Martin",
    email: "olivia.martin@example.com",
    phone: "+1 (555) 123-4567",
    orders: 12,
    spent: "$1,248.42",
    lastOrder: "Apr 12, 2025",
    status: "Active",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Jackson Lee",
    email: "jackson.lee@example.com",
    phone: "+1 (555) 234-5678",
    orders: 8,
    spent: "$864.75",
    lastOrder: "Apr 8, 2025",
    status: "Active",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Isabella Garcia",
    email: "isabella.garcia@example.com",
    phone: "+1 (555) 345-6789",
    orders: 5,
    spent: "$432.20",
    lastOrder: "Mar 28, 2025",
    status: "Active",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    name: "William Chen",
    email: "william.chen@example.com",
    phone: "+1 (555) 456-7890",
    orders: 3,
    spent: "$215.50",
    lastOrder: "Mar 15, 2025",
    status: "Inactive",
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Sophia Johnson",
    email: "sophia.johnson@example.com",
    phone: "+1 (555) 567-8901",
    orders: 15,
    spent: "$1,876.30",
    lastOrder: "Apr 14, 2025",
    status: "Active",
    avatar: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Ethan Williams",
    email: "ethan.williams@example.com",
    phone: "+1 (555) 678-9012",
    orders: 7,
    spent: "$654.25",
    lastOrder: "Apr 2, 2025",
    status: "Active",
    avatar: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Ava Brown",
    email: "ava.brown@example.com",
    phone: "+1 (555) 789-0123",
    orders: 2,
    spent: "$128.75",
    lastOrder: "Feb 28, 2025",
    status: "Inactive",
    avatar: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Noah Davis",
    email: "noah.davis@example.com",
    phone: "+1 (555) 890-1234",
    orders: 9,
    spent: "$987.40",
    lastOrder: "Apr 5, 2025",
    status: "Active",
    avatar: "/placeholder.svg",
  },
];

// distinct statuses for filtering
export const customerStatuses = ["Active", "Inactive"];

// For AnalyticsPage Charts
export const analyticsSalesData: MonthlySales[] = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 8000 },
  { name: "May", sales: 7000 },
  { name: "Jun", sales: 9000 },
  { name: "Jul", sales: 11000 },
  { name: "Aug", sales: 12000 },
  { name: "Sep", sales: 10000 },
  { name: "Oct", sales: 14000 },
  { name: "Nov", sales: 16000 },
  { name: "Dec", sales: 18000 },
];

export const analyticsCategoryData: CategoryDistribution[] = [
  { name: "Hoodies", value: 35 },
  { name: "Sweatshirts", value: 25 },
  { name: "Cardigans", value: 15 },
  { name: "Jackets", value: 20 },
  { name: "Accessories", value: 5 },
];

// Define colors
export const ANALYTICS_CATEGORY_COLORS_HEX = [
  "#993333", // Moncq Maroon (Primary)
  "#FFCCCC", // Moncq Pink (Secondary)
  "#CC6666", // Muted Maroon/Dark Pink
  "#FF9999", // Light Maroon/Salmon Pink
  "#333333", // Moncq Black (Foreground/Muted)
];

export const analyticsChannelData: ChannelSales[] = [
  { name: "Online Store", value: 12500 },
  { name: "Retail Stores", value: 8500 },
  { name: "Marketplaces", value: 5200 },
  { name: "Social Media", value: 3800 },
];

// For AnalyticsPage Key Metrics
export const analyticsKeyMetrics: KeyMetric[] = [
  {
    title: "Average Order Value",
    value: "$85.42",
    change: "+12.5%",
    positive: true,
  },
  { title: "Conversion Rate", value: "3.8%", change: "+0.5%", positive: true },
  { title: "Return Rate", value: "2.1%", change: "-0.3%", positive: false },
  { title: "Customer Retention", value: "68%", change: "+5%", positive: true },
];
