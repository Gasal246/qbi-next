"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderButtons = () => {
  const pathname = usePathname();

  return (
    <div className='w-10/12 flex justify-end items-center gap-3'>
        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }} 
        className={`cursor-pointer bg-gradient-to-b ${pathname?.includes('/find-job') ? 'from-slate-600 to-slate-700' : 'from-slate-700 to-slate-800'} px-5 py-2 rounded-md`}>
            <Link href="/find-job" className='text-white'>Find Job</Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }} 
        className={`cursor-pointer bg-gradient-to-b ${pathname?.includes('/hire-talend') ? 'from-slate-600 to-slate-700' : 'from-slate-700 to-slate-800'} px-5 py-2 rounded-md`}>
            <Link href="/hire-talend" className='text-white'>Hire Talend</Link>
        </motion.div>
    </div>
  )
}

export default HeaderButtons