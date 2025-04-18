import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moncq Dashboard",
  description: "Track sales for the Moncq Winter Collection",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
