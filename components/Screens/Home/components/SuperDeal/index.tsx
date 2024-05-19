'use client'
import React from 'react'
import { bg } from '@/public/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { RightOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import Product from '@/components/UI/ProductCard'
import { SUPERDEALPRODUCTS } from '@/temp'

import "./SuperDeal.sass"


function SuperDeal() {
  return (
    <div className="mb-3 rounded-md relative overflow-hidden">
    <div className="w-full absolute top-0 bottom-0 z-[-1]">
      <div className="relative w-full h-full">
        <Image src={bg} alt="bg" fill/>
      </div>
    </div>
    <div className="flex justify-between m-4">
      <div className="relative overflow-hidden w-[149px] h-[29px]">
        <Link href={"/"} className="w-full block">
          <Image src={"https://img.ltwebstatic.com/images3_ccc/2024/03/19/5f/1710834624f0667531123db441331e5d08509d111c_thumbnail_192x.webp"} alt="" fill/>
        </Link>
      </div>
      <div className="flex text-right items-center text-xl font-normal  text-[#5E3333]">
        <span className="text-ellipsis overflow-hidden whitespace-nowrap text-xl font-normal">View more</span>
        <RightOutlined className="text-xs text-[#5E3333]" />
      </div>
    </div>
    <div className="super-sale-products m-4 mt-0 w-full pr-8">
      <div className="mx-auto relative overflow-hidden z-[1]">
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={1} 
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
      >
        {SUPERDEALPRODUCTS.map(({label,mainImage,subMainImage,price},key)=>(
            <SwiperSlide key={key}>
                <Product label={label} mainImage={mainImage} subMainImage={subMainImage} isSuperDealProduct={true}>
                  <div className='min-h-[12px] mt-2 text-base text-price font-bold leading-[14px] overflow-hidden text-ellipsis whitespace-nowrap'>
                    {price}
                  </div>
                </Product>
            </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  </div>                                        
  )
}

export default SuperDeal