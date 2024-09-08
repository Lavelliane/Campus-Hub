import React, { ReactNode } from "react";

type DashboardLayoutProps = {
    children: ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <p className="font-bold text-2xl">NAVBAR</p>
      {children}
    </div>
  );
}

export default DashboardLayout;
