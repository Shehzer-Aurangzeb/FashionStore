import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";


interface IProps {
  imageUrl: string;
  redirect?:string
  className?:string;
}

function StaticImageOffer({ imageUrl,redirect,className }: IProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <Link href={redirect??""} className={twMerge("w-full block pb-[14%]",className)}>
        <Image src={imageUrl} alt="" fill className="align-top" />
      </Link>
    </div>
  );
}

export default StaticImageOffer;
