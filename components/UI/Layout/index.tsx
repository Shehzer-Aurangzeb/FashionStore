"use client"
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import Header from "../Header";
import Footer from "../Footer";
import CartHeader from "./../Header/CartHeader";
import { PATHS } from "@/constants/paths";

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  const pathname = usePathname();
  const isCartOrCheckout = useMemo(() => {
    return pathname === PATHS.CHECKOUT || pathname === PATHS.CART;
    
  }, [pathname]);
  return (
    <div
      className={`relative min-h-full ${
        isCartOrCheckout ? "pb-[3px] bg-gray-light" : "pb-[523px]"
      }`}
    >
      {isCartOrCheckout ? <CartHeader /> : <Header />}
      {children}
      {!isCartOrCheckout && <Footer />}
    </div>
  );
}

export default Layout;