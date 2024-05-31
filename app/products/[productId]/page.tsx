import React from "react";

function ProductDetail({ params }: { params: { productId: string } }) {
  return (
    <div>
      <p>Product: {params.productId}</p>
    </div>
  );
}

export default ProductDetail;
