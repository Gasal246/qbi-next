"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
  
const Section = ({ children, className, id }: { children: React.ReactNode, className: string, id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const LandingSection = () => {
    return (
        <div className='pb-40'>
            
            {/* Header Title */}
            <Section className="w-full px-10 lg:px-22 py-14">
                <h1 className="text-4xl font-bold text-white">Empowering Careers. Elevating Workforces.</h1>
                <p className="text-lg text-white mt-2">India&apos;s trusted platform for job seekers, employers, and workforce partners.</p>
                <p className="text-lg text-white max-w-[75%]">
                    QBI Employment offers verified job opportunities, tailored recruitment solutions,
                    and expert workforce support across India. Whether you&apos;re seeking your next career move or hiring top talent,
                    QBI ensures trust, accuracy, and results.
                </p>
                <div className='mt-6 flex gap-5'>
                    <Link href="#how-it-works">
                        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }}
                            className='cursor-pointer bg-gradient-to-b from-slate-700 to-slate-800 px-5 py-2 rounded-md w-40'>
                            <h1 className='text-white text-center font-bold'>How It Works</h1>
                        </motion.div>
                    </Link>
                    <Link href="#plan-for-you">
                        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }}
                            className='cursor-pointer bg-gradient-to-b from-slate-700 to-slate-800 px-5 py-2 rounded-md w-40'>
                            <h1 className='text-white text-center font-bold'>Subscription</h1>
                        </motion.div>
                    </Link>
                </div>
            </Section>

            {/* About Us */}
            <Section className="w-full px-10 lg:px-22 py-5">
                <h1 className="text-4xl font-bold text-white">Who We Are ?</h1>
                <p className="text-lg text-white mt-2 max-w-[75%]">
                    QBI Employment is a professional advisory and workforce solutions provider headquartered in Kerala, India.
                    We bridge the gap between skilled professionals and companies through a combination of technology, expertise, and personalized support.
                </p>
            </Section>

            {/* Mission and Vision */}
            <Section className="w-full flex px-10 lg:px-20 flex-wrap">
                {/* mission row */}
                <div className="w-full lg:w-1/2 p-1">
                    <div className="border-2 hover:shadow-lg hover:border-slate-600 transition-all duration-300 border-slate-700 p-3 h-full rounded-lg">
                        <h1 className="text-3xl font-bold text-white">Our Mission</h1>
                        <p className="text-lg text-white mt-2 max-w-[90%]">
                            To create meaningful employment connections that foster career growth and business success.
                        </p>
                    </div>
                </div>
                {/* vision row */}
                <div className="w-full lg:w-1/2 p-1">
                    <div className="border-2 hover:shadow-lg hover:border-slate-600 transition-all duration-300 border-slate-700 p-3 h-full rounded-lg">
                        <h1 className="text-3xl font-bold text-white">Our Vision</h1>
                        <p className="text-lg text-white mt-2 max-w-[90%]">
                            To become India&apos;s most trusted and impactful employment partner by 2030.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Our Story */}
            <Section className="w-full px-10 lg:px-22 py-16">
                <h1 className="text-4xl font-bold text-white">Our Story</h1>
                <p className="text-lg text-white mt-2 max-w-[75%]">
                    Founded in 2023 by a team of passionate professionals, QBI Employment emerged to solve the challenges in conventional recruitment.
                    Today, we serve job seekers, employers, and placement agencies with a human-first approach.
                </p>
            </Section>

            {/* How It Works */}
            <Section className="w-full px-10 lg:px-22 py-5" id="how-it-works">
                <h1 className="text-4xl font-bold text-white px-2 mb-2">How It Works</h1>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2 p-1'>
                        <div className="border-2 hover:shadow-lg hover:border-slate-600 transition-all duration-300 border-slate-700 p-3 h-full rounded-lg py-5 px-2 lg:px-10">
                            <h1 className="text-xl font-bold text-white mb-2 underline">For Job Seekers</h1>
                            <ul className='gap-4'>
                                <li className="text-white font-semibold">1. Create your free account</li>
                                <li className="text-white font-semibold">2. Upload your resume or build one using our tools</li>
                                <li className="text-white font-semibold">3. Explore verified job openings across India</li>
                                <li className="text-white font-semibold">4. Apply for jobs or subscribe for career support</li>
                                <li className="text-white font-semibold">5. Get interview calls and placement support</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 p-1'>
                        <div className="border-2 hover:shadow-lg hover:border-slate-600 transition-all duration-300 border-slate-700 p-3 h-full rounded-lg py-5 px-2 lg:px-10">
                            <h1 className="text-xl font-bold text-white mb-2 underline">For Employers</h1>
                            <ul className='gap-4'>
                                <li className="text-white font-semibold">1. Sign up as a recruiter or HR manager</li>
                                <li className="text-white font-semibold">2. Post jobs or share your vacancy list</li>
                                <li className="text-white font-semibold">3. Choose a subscription or pay-per-placement model</li>
                                <li className="text-white font-semibold">4. Receive filtered and verified candidate profiles</li>
                                <li className="text-white font-semibold">5. Interview, select, and hire efficiently</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Subscription Section */}
            <Section className="w-full px-10 lg:px-22 py-10" id="plan-for-you">
                <h1 className="text-4xl font-bold text-white px-2 mb-2">Plan For You</h1>
                <h2 className='text-xl text-white font-bold px-2 mt-4'>For Job Seekers</h2>
                <p className='text-white px-2 font-semibold mb-10'>Choose the plan that best fits your needs</p>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-3/12 p-3 flex justify-center items-center">
                        <div className='border border-slate-700 py-7 p-3 rounded-lg h-full hover:shadow-lg hover:border-slate-600 transition-all duration-300 cursor-pointer w-[320px] bg-gradient-to-b from-slate-700 to-slate-800 relative'>
                            <h1 className='text-xl font-bold text-white text-center mb-3'>Free Plan</h1>
                            <ul className='gap-4 list-disc px-5 pb-14'>
                                <li className="text-white font-semibold">Access verified jobs</li>
                                <li className="text-white font-semibold">Apply without restrictions</li>
                            </ul>
                            <div className="w-full flex justify-center items-center absolute left-0 bottom-3">
                                <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }}
                                    className='cursor-pointer w-[90%] bg-gradient-to-b from-slate-700 to-slate-800 px-5 py-2 rounded-md border border-slate-800'>
                                    <h1 className='text-white text-center font-bold'>Enroll Now</h1>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/12 p-3 flex justify-center items-center">
                        <div className='border border-slate-700 py-7 p-3 rounded-lg h-full hover:shadow-lg hover:border-slate-600 transition-all duration-300 cursor-pointer w-[320px] bg-gradient-to-b from-slate-700 to-slate-800 relative'>
                            <h1 className='text-xl font-bold text-white text-center mb-3'>Premium ( ₹1599/month )</h1>
                            <ul className='gap-4 list-disc px-5 pb-14'>
                                <li className="text-white font-semibold">Resume review and optimization</li>
                                <li className="text-white font-semibold">Interview support</li>
                                <li className="text-white font-semibold">Job assurance services</li>
                                <li className="text-white font-semibold">Weekly placement reports</li>
                            </ul>
                            <div className="w-full flex justify-center items-center absolute left-0 bottom-3">
                                <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }}
                                    className='cursor-pointer w-[90%] bg-gradient-to-b from-slate-700 to-slate-800 px-5 py-2 rounded-md border border-slate-800'>
                                    <h1 className='text-white text-center font-bold'>Purchase Plan</h1>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='text-xl text-white font-bold px-2 mt-10'>For Employers</h2>
                <p className='text-white px-2 font-semibold mb-5'>Choose the plan that best fits your needs</p>
                <div className='w-full lg:w-9/12 border-2 border-slate-700 rounded-lg p-3 mx-2'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]"><h1 className='text-white font-bold text-lg'>Plan</h1></TableHead>
                                <TableHead><h1 className='text-white font-bold text-lg'>Monthly Fee</h1></TableHead>
                                <TableHead><h1 className='text-white font-bold text-lg'>Credits</h1></TableHead>
                                <TableHead><h1 className='text-white font-bold text-lg'>Benifits</h1></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell><span className="text-white font-bold">Small Business</span></TableCell>
                                <TableCell><span className="text-white font-semibold">₹1,999</span></TableCell>
                                <TableCell><span className="text-white font-semibold">4 placements/month</span></TableCell>
                                <TableCell><span className="text-white font-semibold">Basic shortlisting</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="text-white font-bold">Medium Business</span></TableCell>
                                <TableCell><span className="text-white font-semibold">₹3,999</span></TableCell>
                                <TableCell><span className="text-white font-semibold">12 placements/month</span></TableCell>
                                <TableCell><span className="text-white font-semibold">Advanced screening + calling support</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="text-white font-bold">Large Business</span></TableCell>
                                <TableCell><span className="text-white font-semibold">₹5,999</span></TableCell>
                                <TableCell><span className="text-white font-semibold">24 placements/month</span></TableCell>
                                <TableCell><span className="text-white font-semibold">Dedicated support + analytics</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="text-white font-bold">Pay / placement</span></TableCell>
                                <TableCell><span className="text-white font-semibold">₹999 / ₹599 / ₹199 Per Hire</span></TableCell>
                                <TableCell><span className="text-white font-semibold">Unlimited placements</span></TableCell>
                                <TableCell><span className="text-white font-semibold">No monthly fee, flexible hiring </span></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Section>
        </div>
    )
}

export default LandingSection