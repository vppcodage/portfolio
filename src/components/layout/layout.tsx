import React, { Fragment } from "react";
import { Footer, Header } from "../common";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};
