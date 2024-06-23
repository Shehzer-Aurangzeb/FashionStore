// import React, { Fragment } from 'react'
// import Left from './Left'
// import Centre from './Centre'
// import Right from './Right'

// function Hero() {
//   return (
//     <>
//      <div className="my-6 w-full justify-center gap-x-3 box-content lg:flex hidden">
//         <Left/>
//         <Centre/>
//         <Right/>
//     </div>
// </>
   
//   )
// }
// export default Hero

import React from 'react'
import Left from './Left'
import Centre from './Centre'
import Right from './Right'

function Hero() {
  return (
    <div className='w-full'>
      <div className="my-6 w-full justify-center gap-x-3 box-content lg:flex hidden">
        <Left />
        <Centre />
        <Right />
      </div>
      <div className="my-6  justify-center box-content flex flex-col lg:hidden gap-y-4 ">
        <div className="flex flex-row w-full gap-x-4">
          <Left />
          <Right />
        </div>
      
        <Centre />

        
      </div>
    </div>
  )
}

export default Hero
