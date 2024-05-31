import React, { Fragment } from 'react'
import Left from './Left'
import Centre from './Centre'
import Right from './Right'

function Hero() {
  return (
    <div className="my-6 w-full flex justify-center gap-x-3 box-content">
        <Left/>
        <Centre/>
        <Right/>
    </div>
  )
}

export default Hero