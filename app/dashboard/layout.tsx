"use client";

import Sidebar from "@/Components/Dashboard/Sidebar";
import { ReactNode } from "react";
interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <Sidebar />

      <div className="lg:pl-64">
        <main className="px-6 py-8 lg:px-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
