'use client'
 
import Link from 'next/link'
import React from 'react'

const App = () => {
    return (
        <div className='bg-black text-white h-screen'>
           <div className='font-bold text-2xl'> Coursework </div>

            <div className='font-bold text-lg'> University of Iowa </div>
            <ul className='list-disc'>
                        <li> Intro to Engineering Computing ENGR:1300 </li>
                        <li> Statics ENGR:2110 </li>
                        <li> Electrical Circuits ENGR:2120 </li>

                        <li> Principles of Chemistry II CHEM:1120 </li>
                        <li> Organic Chemistry I CHEM:2210 </li>
                        <li> Organic Chemistry II CHEM:2220 </li>
                        <li> Organic Chemistry Laboratory CHEM:2410 </li>
                        <li> Physical Chemistry I CHEM:4431 </li>

                        <li> Linear Algebra I MATH:2700 </li>
                        <li> Calculus III | MATH:2850 </li>
                        <li> Differential Equations | MATH:2560 </li>

                        <li> Discrete Structures | CS:2210 </li>
                        <li> Data Structures | CS:2230 </li>

                        <li> Chinese Second Year First Semester | CHIN:2101 </li>



                </ul>
            
            <div className='font-bold text-lg'>  West Senior High School </div>

           

            <ul className='list-disc'>
                <li> AP Chemistry </li>
                <li> AP Calculus BC </li>
                <li> AP Computer Science </li>
                <li> AP Human Geography</li>

            </ul>

            <Link href="/" className='text-blue-500 underline '> Return</Link>
        </div>
    )
}

export default function Page() {
    return <App/>
}
