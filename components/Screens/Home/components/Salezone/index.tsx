'use client'
import React, { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { SALEPRODUCTS } from '@/temp'
import Slider from '@/components/UI/Slider'
import Product from '@/components/UI/ProductCard'
import "./Salezone.sass"


function Salezone() {
    const tabs=Object.keys(SALEPRODUCTS)
    const [selectedTab,setSelectedTab]= useState<string>(tabs[0])
    const handleTabSelect=(tab:string)=>{
        setSelectedTab(tab)
    }
  return (
    <div className='relative overflow-hidden salezone'>
        <div className='text-center flex h-[73px] items-center bg-white relative leading-[29px]'>
            {/* arrow left */}
            <div className='flex w-full justify-center overflow-hidden'>
                {tabs.map((tab,key)=>(
                    <div className={`tab-item ${tab===selectedTab? "selected" :""}`} key={key} onClick={()=>handleTabSelect(tab)}>
                        <span>{tab}</span>
                    </div>
                ))}
            </div>
            {/* arrow right */}
        </div>
            <Slider>
                {SALEPRODUCTS[selectedTab].map(({price,mainImage,subMainImage,sale},key)=>(
                    <SwiperSlide key={key}>
                        <Product mainImage={mainImage} subMainImage={subMainImage} >
                            <div className='flex items-center h-[21px] overflow-hidden'>
                                <div className='min-h-[12px] text-base text-price font-bold leading-[14px] overflow-hidden text-ellipsis whitespace-nowrap mr-1'>
                                    {price}
                                </div>
                                {Math.abs(sale)>0 &&
                                    <div className='border border-price text-price rounded-sm pl-[3px] pr-[2px] h-[16px] text-xs'>
                                        {sale}%
                                    </div>
                                }

                            </div>
                        </Product>
                    </SwiperSlide>
                ))}
            </Slider>
    </div>
  )
}

export default Salezone