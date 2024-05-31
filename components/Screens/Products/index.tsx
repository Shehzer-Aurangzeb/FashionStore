"use client";
import React, { Fragment } from "react";
import { useSearchParams } from "next/navigation";
import { Breadcrumb } from "antd";
import SideFilter from "./components/SideFilter";
import ProductListContainer from "./components/ProductListContainer";

function ProductList() {
  const searchParams = useSearchParams();
  return (
    <Fragment>
      <div className="pt-[10px] ">
        <Breadcrumb
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="">CLOTHING</a>,
            },
            {
              title: "MENS",
            },
          ]}
          style={{
            padding: "20px 20px 20px 0px",
          }}
        />
      </div>
      <div className="flex w-full">
        <SideFilter />
        <ProductListContainer />
      </div>
    </Fragment>
  );
}

export default ProductList;
