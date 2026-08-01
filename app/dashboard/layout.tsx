import React from "react";

// Dashboard layout is minimal - each page manages its own layout with sidebar
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
