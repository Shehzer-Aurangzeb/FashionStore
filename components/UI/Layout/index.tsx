import React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <div className="relative min-h-full pb-[523px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
