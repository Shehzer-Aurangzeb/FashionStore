import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperProps } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

interface IProps{
    children:React.ReactNode
}

function Slider(props:IProps & SwiperOptions) {
  const {children,...restProps}= props
  return (
    <div className='relative pt-[6px] px-[6px] pb-[30px]'>
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
        {...restProps}
    >
       {children}
    </Swiper>
</div>
  )
}

export default Slider