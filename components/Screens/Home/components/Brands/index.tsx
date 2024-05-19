'use client'
import React, { Fragment } from 'react'
import Slider from '@/components/UI/Slider'
import StaticImage from '@/components/UI/StaticImage'
import { SwiperSlide } from 'swiper/react'
import { BRANDS } from '@/temp'

function Brands() {
  return (
    <Fragment>
        <StaticImage imageUrl='https://img.ltwebstatic.com/images3_ccc/2023/11/11/4c/16996851492d12873f377cb0553ab7b1f2c47e674e.webp' className='pb-[5.95%]'/>
        <div className='w-full p-5 bg-[#f7f8fa]'>
            <Slider slidesPerGroup={2}>
                {BRANDS.map(({imageUrl,redirect},key)=>(
                    <SwiperSlide key={key}>
                        <StaticImage imageUrl={imageUrl} redirect={redirect} className='pb-[135.00%] max-w-[200px]'/>
                    </SwiperSlide>
                ))}
            </Slider>
        </div>
    </Fragment>
  )
}

export default Brands