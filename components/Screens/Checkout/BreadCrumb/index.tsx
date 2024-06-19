'use client';
import React from "react";
import { Breadcrumb } from 'antd';
import { PATHS } from "@/constants/paths";
import { usePathname } from "next/navigation";
import Link from "next/link";



const Breadcrumbs = () => {
  const pathname = usePathname();
  const breadcrumbItems = [
    { path: PATHS.CART, nameKey: "Cart"},
    { path: PATHS.CHECKOUT, nameKey: "Place Order" },
    { path: "", nameKey: "Pay" },
    { path: "", nameKey: "OrderComplete" },
  ];

  return (
    <Breadcrumb
      separator=">"
      items={breadcrumbItems.map(({ path, nameKey }) => {
        const isActive = pathname === path;
        const name =(nameKey)
        return {
          title: isActive ? (
            <span className="text-black font-bold">{name}</span>
          ) : (
            <Link href={path} className="">{name}</Link>
          ),
        };
      })}
      style={{
        fontSize: '16px'
      }}
    />
  );
};

export default Breadcrumbs;
