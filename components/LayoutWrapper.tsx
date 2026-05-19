"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin");
  const isPortfolio = pathname.startsWith("/resources/portfolio")

  return (
    <>
      {!isAdminRoute && !isPortfolio && <Navbar />}

      <main className="flex-1">{children}</main>

      {!isAdminRoute && !isPortfolio && <Footer />}
    </>
  );
}