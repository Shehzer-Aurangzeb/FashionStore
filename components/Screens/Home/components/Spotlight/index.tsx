'use client'
import React, { Fragment } from 'react'
import Slider from '@/components/UI/Slider'
import StaticImage from '@/components/UI/StaticImage'
import { SwiperSlide } from 'swiper/react'
import { SPOTLIGHT } from '@/temp'

function SpotLight() {
  return (
    <Fragment>
        <StaticImage imageUrl='https://img.ltwebstatic.com/images3_ccc/2023/11/11/96/1699685134d6caa42849829c8ea162bdd4e57f67a7.webp' className='pb-[5.95%]'/>
        <div className='w-full p-5 bg-[#f7f8fa]'>
            <Slider slidesPerGroup={2}>
                {SPOTLIGHT.map(({imageUrl,redirect},key)=>(
                    <SwiperSlide key={key}>
                        <StaticImage imageUrl={imageUrl} redirect={redirect} className='pb-[135.00%] max-w-[200px]'/>
                    </SwiperSlide>
                ))}
            </Slider>
        </div>
    </Fragment>
  )
}

export default SpotLight