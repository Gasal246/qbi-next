import HireTalendForm from '@/components/shared/HireTalendForm'
import Link from 'next/link'
import React from 'react'

const HireTalendPage = () => {
  return (
    <div className='px-5 lg:px-14 pb-50'>
      <h1 className='text-lg font-bold text-white pl-1'>Hire Talend</h1>
      <div className="flex w-full flex-wrap">
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Post single or bulk vacancies</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Subscribe or Pay per hire</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Get Daily Candidate List</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Access Candidate Screening Data</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Schedule interview and track hiring</h1>
          </div>
        </div>
      </div>

      <Link href="#gethire" className='text-slate-400 underline text-sm font-semibold my-3 block mx-3'>click here to get started</Link>

      <h1 className='text-lg font-bold text-white pl-1 mt-7'>Support</h1>
      <div className="flex w-full flex-wrap">
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Employer Dashboard</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Dedicated Account Manager </h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Custom hiring campaigns</h1>
          </div>
        </div>
      </div>

      <Link href="#gethire" className='text-slate-400 underline text-sm font-semibold my-3 block mx-3'>click here to get started</Link>

      <h1 className='text-lg font-bold text-white pl-1 mt-7 mb-1'>Register Now</h1>
      <HireTalendForm id="gethire" />
    </div>
  )
}

export default HireTalendPage