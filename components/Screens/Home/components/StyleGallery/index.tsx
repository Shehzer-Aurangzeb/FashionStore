'use client'
import React, { useState } from 'react'
import Slider from '@/components/UI/Slider'
import { SHOPGALLERY } from '@/temp'
import { SwiperSlide } from 'swiper/react'
import Loader from '@/components/UI/Loader'
import "./StyleGallery.sass"

function StyleGallery() {
    const [isLoading,setIsLoading]= useState(false)

    const fetchProduct=()=>{
        setIsLoading(true)
        setTimeout(()=>(setIsLoading(false)),1000)
    }
  return (
    <div className='w-full relative'>
        <div className='w-full mx-auto my-0 overflow-hidden'>
            <h2 className='h-[41px] leading-[41px] text-center text-[36px] font-normal text-gray-dark my-[50px]'>Style Gallery</h2>
        </div>
        <Slider slidesPerView={5}>
            {SHOPGALLERY.map(({imageUrl,redirect},key)=>(
                <SwiperSlide key={key} className='mr-3'>
                    <div className='bg-light w-full bg-cover bg-top pb-[133.33%] relative style_gallery_thumbnail' style={{
                        backgroundImage:`url(${imageUrl})`}}>
                        <div className='absolute w-full text-center text-gray-dark text-xs max-w-full top-[77%] mx-auto my-0 cursor-pointer shop_btn' onClick={()=>fetchProduct()}>
                            <div className='bg-[#ffffffd9] px-[20px] py-[7px] w-[max-content] mx-auto max-w-full'>
                                {!isLoading &&<span>Shop this product</span>}
                                {isLoading && <Loader/>}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Slider>
    </div>
  )
}



export default StyleGallery