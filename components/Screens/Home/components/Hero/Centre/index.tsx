import React from 'react'
import Carousal from '@/components/UI/Carousal'
import { CAROUSALIMAGES } from '@/temp'
import Link from 'next/link'
import Image from 'next/image'

function Centre() {
  return (
    <div className="max-w-[664px] w-[calc(50%_-_11px)]">
        <div className="rounded-md overflow-hidden w-full relative">
            <Carousal arrows infinite autoplay autoplaySpeed={1500}>
                {CAROUSALIMAGES.map((img, index) => (
                    <div className="relative w-full h-full" key={index}>
                        <Link href={"/"} className="w-full block relative pb-[47%]">
                            <Image
                            src={img}
                            alt=""
                            fill
                            className="bg-white object-cover align-top box-border"
                            />
                        </Link>
                    </div>
                ))}
            </Carousal>
        </div>
    </div>
  )
}

export default Centre