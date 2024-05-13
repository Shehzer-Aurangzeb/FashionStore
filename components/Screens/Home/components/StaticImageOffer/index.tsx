import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  imageUrl: string;
}

function StaticImageOffer({ imageUrl }: IProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <Link href={"/"} className="w-full block pb-[14%]">
        <Image src={imageUrl} alt="" fill className="align-top" />
      </Link>
    </div>
  );
}

export default StaticImageOffer;
