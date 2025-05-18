import Image from 'next/image'
import React from 'react'

const LoaderSpin = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-[#03191ed0] flex-col z-50 absolute top-0 left-0'>
        <Image src="/images/icons/loadingspin.svg" alt="Logo" width={80} height={80} className='rounded-full' />
        <h1 className='text-white text-sm font-bold'>QBI waiting...</h1>
    </div>
  )
}

export default LoaderSpin