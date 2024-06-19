"use client";
import React, { useMemo, useState } from "react";
import ProductDetailPage from "@/components/Screens/Products/ProductDetailPage";
import { useProducts } from "@/state/products/hooks";
import { SubProduct } from "@/state/categories/types";
import { Skeleton } from "antd";
import Image from "next/image";
import { unknownProduct } from "@/public/assets";

function ProductDetail({ params }: { params: { productId: string } }) {
  const { products } = useProducts();
  const [isSearchingProduct, setIsSearchingProduct] = useState(true);
  const product: SubProduct | null = useMemo(() => {
    const prd = products.find(
      ({ productCode }) => productCode === params.productId
    );
    setIsSearchingProduct(false);
    if (!prd) return null;
    else return prd;
  }, [params.productId, products]);

  return (
    <>
      <Skeleton active={isSearchingProduct} loading={isSearchingProduct}>
        {product === null ? (
          <div className="min-h-[70vh] w-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <Image src={unknownProduct} alt="" width={200} height={200} />
              <p className="text-gray font-normal text-base mt-4">
                Sorry! No Product with this ID was found.
              </p>
            </div>
          </div>
        ) : (
          <ProductDetailPage selectedProduct={product} />
        )}
      </Skeleton>
    </>
  );
}

export default ProductDetail;
