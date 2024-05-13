import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  imageUrl: string;
  name: string;
  url: string;
}
function CategoryCard({ imageUrl, url, name }: IProps) {
  return (
    <Link className="flex flex-col items-center gap-y-2 " href={url}>
      <div className="relative rounded-full h-[100px] w-[100px] bg-[#EFEFEF]">
        {imageUrl.length > 0 && <Image src={imageUrl} alt="" fill />}
      </div>
      <h3 className="text-black font-medium text-base capitalize break-words text-ellipsis overflow-hidden line-clamp-2 w-[100px] text-center">
        {name}
      </h3>
    </Link>
  );
}

export default CategoryCard;
