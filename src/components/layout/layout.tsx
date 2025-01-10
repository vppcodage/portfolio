import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>Header</div>
      <main>{children}</main>
      <div>Footer</div>
    </>
  );
};
