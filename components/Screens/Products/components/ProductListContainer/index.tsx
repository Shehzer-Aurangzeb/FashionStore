"use client";
import React, { useMemo } from "react";
import "./ProductList.sass";
import { useCategoriesState } from "@/state/categories/hooks";
import { useApp } from "@/context/AppProvider";
import _ from "lodash";
import { Skeleton } from "antd";
import Product from "@/components/UI/ProductCard";
import Link from "next/link";
import { calculatePrice } from "@/utils/product";
import Image from "next/image";
import { addToCartIcon } from "@/public/assets";
function ProductListContainer() {
  const { categories } = useCategoriesState();
  const { isAppLoading } = useApp();
  const products = useMemo(() => {
    if (!categories) return [];
    return _.flatMapDeep(categories, (category) =>
      _.flatMapDeep(category.subCategories, (subCategory) =>
        _.flatMapDeep(subCategory.products, (product) => product.subProducts)
      )
    );
  }, [categories]);

  return (
    <div className="product-list-container">
      <div className="view-new"></div>
      <div className="relative flex flex-wrap gap-x-3 gap-y-1 bg-white">
        <Skeleton active={isAppLoading} loading={isAppLoading}>
          {products.map(
            ({
              imagesJson: images,
              price,
              discountPercent: sale,
              isDiscount: isOnSale,
              productDetails: name,
              productCode: sku,
            }) => (
              <Product
                key={sku}
                mainImage={images[0] ?? ""}
                subMainImage={images[1] ?? ""}
                className="product-card"
                url={`/products/${sku}`}
                // isLoading={!selectedProduct && selectedProductID === sku}
              >
                <div className="pt-[6px] min-h-[24px]">
                  <Link
                    href={`/products/${sku}`}
                    className="product-card-title"
                  >
                    {name}
                  </Link>
                  <div className="flex justify-between items-center w-full mt-1">
                    <div className="flex items-center overflow-hidden h-[21px]">
                      <div
                        className={`min-h-[12px] text-base ${
                          isOnSale ? "text-price" : "text-gray-dark"
                        } font-bold leading-[14px] overflow-hidden text-ellipsis whitespace-nowrap mr-1`}
                      >
                        {calculatePrice(price, isOnSale, sale)}
                      </div>
                      {isOnSale && (
                        <div className="border border-price text-price rounded-sm pl-[3px] pr-[2px] h-[16px] text-xs">
                          {sale}%
                        </div>
                      )}
                    </div>
                    <button
                      className="product-card-cart-btn"
                      // onClick={() => addToCardHandler(sku)}
                    >
                      <Image
                        src={addToCartIcon}
                        alt="add-to-cart"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
              </Product>
            )
          )}
        </Skeleton>
      </div>
    </div>
  );
}

export default ProductListContainer;
