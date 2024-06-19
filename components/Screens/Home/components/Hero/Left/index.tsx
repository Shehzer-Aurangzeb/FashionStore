import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Left() {
  return (
    <div className="max-w-[332px] w-[calc(43%_-_5.5px)] h-auto relative md:w-[calc(25%_-_5.5px)]">
    <div className="rounded-md overflow-hidden bg-[#f0f0f0]">
      <Link href={"/"} className="w-full pb-[94.5%] block relative">
        <Image
          src={
            "https://img.ltwebstatic.com/images3_ccc/2024/04/29/d0/171437126794aa23acd2947b8a8697e7c60818103b_thumbnail_832x.webp"
          }
          alt="discount"
          fill
          className="bg-white object-cover align-top box-border"
        />
      </Link>
    </div>
  </div>
  )
}

export default Left