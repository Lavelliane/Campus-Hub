import React, { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      suppressHydrationWarning={true}
      className="bg-lightGray h-screen flex items-center justify-center"
    >
      {children}
    </div>
  );
}

export default AuthLayout;
