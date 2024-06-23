'use client'
import React, { Fragment } from 'react'
import Slider from '@/components/UI/Slider'
import StaticImage from '@/components/UI/StaticImage'
import { SwiperSlide } from 'swiper/react'
import { BRANDS } from '@/temp'

function Brands() {
  return (
    <Fragment>
        <h2 className='h-[41px] leading-[41px] text-center text-[36px]  text-gray-dark  capitalize font-extrabold py-[5.95%]'>Brands</h2>
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