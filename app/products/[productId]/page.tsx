import ProductDetailPage from "@/components/Screens/Products/ProductDetailPage";
import React from "react";
import { Product } from "@/constants/temp";

function ProductDetail({ params }: { params: { productId: string } }) {
  return (
    <div>
      {/* <p>Product: {params.productId}</p> */}
      <ProductDetailPage selectedProduct={Product} />
    </div>
  );
}

export default ProductDetail;
