'use client'
import React, { forwardRef, Ref } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperRef } from 'swiper/react'
import {SwiperOptions } from 'swiper/types'
import { twMerge } from 'tailwind-merge'

interface IProps{
    children:React.ReactNode
    wrapperClassName?:string
}

const Slider = forwardRef<SwiperRef, IProps & SwiperOptions>((props, ref) => {
  const {
    children,
    modules = [],
    breakpoints,
    wrapperClassName = '',
    ...restProps
  } = props;

  return (
    <div className={twMerge('relative pt-[6px] px-[6px] pb-[30px]', wrapperClassName)}>
      <Swiper
        ref={ref}
        navigation={true}
        modules={[Navigation, ...modules]}
        slidesPerView={1}
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
          ...breakpoints,
        }}
        {...restProps}
      >
        {children}
      </Swiper>
    </div>
  );
});

Slider.displayName = 'Slider';

export default Slider;