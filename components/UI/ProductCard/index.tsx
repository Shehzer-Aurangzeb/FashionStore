import React from 'react'
import Link from 'next/link'
import { Image } from 'antd'
import NextImage from "next/image"
import "./Product.sass"
import { curvedArrowDown } from '@/public/assets'
import { twMerge } from 'tailwind-merge'

interface IProps{
  mainImage:string;
  subMainImage:string;
  label?:string;
  isSuperDealProduct?:boolean
  children?:React.ReactNode,
  className?:string
}

function Product({mainImage,subMainImage,label,isSuperDealProduct=false,children,className}:IProps) {
  return (
    <div className={twMerge('h-full block max-w-[221px]',className)}>
      <div className='relative inline-block w-full overflow-hidden'>
        <Link href={"/"} className='inline-block w-full relative h-[280px] product-image bg-white'>
          <div className='relative overflow-hidden h-full'>
            <Image width={'100%'} src={mainImage} alt='product-image'/>
            <div className='product-image-mask'/>
          </div>
          <div className='product-item-submain'> 
            <div className='relative overflow-hidden h-full'>
              <Image width={'100%'} src={subMainImage} alt='product-image'/>
              <div className='product-image-mask'/>
            </div>
          </div> 
          {isSuperDealProduct && 
            <div className='absolute bottom-0 left-0 right-0 w-full block'>
                <div className='flex items-center justify-center bg-super-product-price-bg py-1 text-base font-normal leading-[18px] '>
                    <NextImage src={curvedArrowDown} alt='arrow-down' width={16} height={16} className='object-contain'/>
                    <span className='text-white whitespace-nowrap text-ellipsis overflow-hidden '>{label}</span>
                </div>
            </div>
          } 
        </Link>
      </div>
      {children}
    </div>
  )
}

export default Product