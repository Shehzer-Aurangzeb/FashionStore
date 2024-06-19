"use client";
import React, { Fragment, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Breadcrumb } from "antd";
import SideFilter from "./components/SideFilter";
import ProductListContainer from "./components/ProductListContainer";
import { capitalize, parseParam } from "@/utils/paths";
import Link from "next/link";


function ProductList() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const defaultBreadcrumbs = useMemo(()=>(
    [{
    title: "Men Clothing",
    url: `${pathname}?ctg=men_clothing`,
  }]),[pathname])

  const breadcrumbs = useMemo(() => {
    if(Array.from(searchParams.entries()).length===0) {
      return defaultBreadcrumbs
    }
    return Array.from(searchParams.entries()).map((item) => ({
      title: capitalize(parseParam(item[1])),
      url: `${pathname}?${item[0]}=${item[1]}`,
    }));
  }, [searchParams, pathname,defaultBreadcrumbs]);

  return (
    <Fragment>
      <div className="pt-[10px] ">
        <Breadcrumb
          items={[
            {
              title: <Link href={"/"}>Home</Link>,
            },
            ...breadcrumbs.map(({ title, url }, index) => {
              if (index === breadcrumbs.length - 1) {
                return {
                  title: title,
                };
              } else {
                return {
                  title: <Link href={url}>{title}</Link>,
                };
              }
            }),
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
