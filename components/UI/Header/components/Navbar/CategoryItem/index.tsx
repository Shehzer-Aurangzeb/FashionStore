import React from "react";
import { Image as AntImage } from "antd";
import Link from "next/link";
import { fallbackImage } from "@/public/assets";

interface IProps {
  url: string;
  image: string;
  title: string;
}
function CategoryItem({ url, image, title }: IProps) {
  return (
    <Link
      href={url}
      className="grow-0 shrink-0 basis-[calc(100%_/_7)] py-[5px] pr-[2px] pl-0 text-center mb-2 inline-block w-[88px] align-top text-gray-light nav_type_img_link"
    >
      <span className="desktop:w-[calc(82px_-_(1920px_-_100vw)/26.67)] desktop:h-[calc(82px_-_(1920px_-_100vw)/26.67)] w-[64px] h-[64px] rounded-[50%] bg-light inline-block overflow-hidden transition-all duration-200 nav_type_img">
        <AntImage
          src={image}
          alt={title}
          className="w-full"
          preview={false}
          fallback={fallbackImage}
        />
      </span>
      <span
        className="inline-block text-black w-[82px] mx-auto leading-[14px] text-ellipsis line-clamp-3"
        style={{
          wordBreak: "break-word",
        }}
      >
        {title}
      </span>
    </Link>
  );
}

export default CategoryItem;
