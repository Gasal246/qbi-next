import JobSeekerForm from '@/components/shared/JobSeekerForm'
import Link from 'next/link'
import React from 'react'

const FindJobPage = () => {
  return (
    <div className='px-5 lg:px-14 pb-50'>
      <h1 className='text-lg font-bold text-white pl-1'>Job Seekers</h1>
      <div className="flex w-full flex-wrap">
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Resume Tips & Interview Guides</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Get Personalized Job Alerts</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Chat With Career Advisors</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Discover verified job openings</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Subscribe For Job Assurance</h1>
          </div>
        </div>
      </div>

      <Link href="#getstarted" className='text-slate-400 underline text-sm font-semibold my-3 block mx-3'>click here to get started</Link>

      <h1 className='text-lg font-bold text-white pl-1 mt-7'>Tools</h1>
      <div className="flex w-full flex-wrap">
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Resume Builder</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Application Tracker</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-3/12 p-1">
          <div className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2">
            <h1 className='text-slate-200 text-sm'>Interview Preparation Kit</h1>
          </div>
        </div>
      </div>

      <Link href="#getstarted" className='text-slate-400 underline text-sm font-semibold my-3 block mx-3'>click here to get started</Link>

      <h1 className='text-lg font-bold text-white pl-1 mt-7 mb-1'>Get Started</h1>
      <JobSeekerForm id="getstarted" />
    </div>
  )
}

export default FindJobPage