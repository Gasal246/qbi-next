"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

const LogoComponent = () => {
  return (
    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }} className="w-1/12 cursor-pointer pl-3">
        <Link href="/" className=' flex items-center gap-2 justify-center'>
            <Image src="/images/png/qbilogo.png" alt="Logo" width={40} height={40} className='rounded-full' />
            <h1 className='text-white font-bold'>QBI</h1>
        </Link>
    </motion.div>
  )
}

export default LogoComponent