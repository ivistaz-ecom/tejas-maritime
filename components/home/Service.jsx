import React from 'react'
import Link from 'next/link'

const Service = () => {
  return (
    <div className='px-4 sm:px-6 py-10 md:py-14 bg-sand-light'>
        <div className='max-w-7xl mx-auto'>
            <div className='max-w-6xl mx-auto'>
        <p className='text-center'>
        Tejas Maritime brings together a distinguished team of Naval Architects, Master Mariners, and Marine Engineers delivering expertise. We ensure seamless statutory compliance for IACS-class vessels executed with precision, insight, and uncompromising standards.
        </p>
        </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-8 justify-center' >
        <Link href="#" className='red-gradient-btn text-white px-6 py-3 rounded-full text-xs sm:text-sm uppercase text-center w-full sm:w-auto'>Begin a Partnership</Link>
        <Link href="#" className='red-gradient-btn text-white px-6 py-3 rounded-full text-xs sm:text-sm uppercase text-center w-full sm:w-auto' >Explore Our Services</Link>
        </div>
        </div>
  )
}

export default Service