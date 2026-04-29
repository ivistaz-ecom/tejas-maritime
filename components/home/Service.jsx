import React from 'react'
import Link from 'next/link'

const Service = () => {
  return (
    <div className='px-6 py-14 bg-sand-light'>
        <div className='max-w-7xl mx-auto'>
            <div className='max-w-6xl mx-auto'>
        <p className='text-center'>
        Tejas Maritime brings together a distinguished team of Naval Architects, Master Mariners, and Marine Engineers delivering expertise. We ensure seamless statutory compliance for IACS-class vessels executed with precision, insight, and uncompromising standards.
        </p>
        </div>
        </div>
        <div className='flex items-center gap-4 pt-8 justify-center' >
        <Link className='red-gradient-btn text-white px-6 py-3 rounded-full text-sm uppercase' href="/services">Begin a Partnership</Link>
        <Link className='red-gradient-btn text-white px-6 py-3 rounded-full text-sm uppercase' href="/services">Explore Our Services</Link>
        </div>
        </div>
  )
}

export default Service