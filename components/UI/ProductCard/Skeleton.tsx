import { Skeleton } from "antd";
import React from "react";

function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 mr-7 mb-6">
      <Skeleton.Image
        active
        style={{
          height: 220,
          width: 200,
        }}
      />
      <Skeleton.Button active block />
    </div>
  );
}

export default ProductCardSkeleton;
