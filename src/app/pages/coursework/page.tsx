'use client'

import Link from 'next/link'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from 'src/app/components/Tooltip'

const ReuseTool = (props: any) => {
    return (
      <Tooltip>
          <TooltipTrigger> {props.num }</TooltipTrigger>
          <TooltipContent className="text-white"> {props.desc }</TooltipContent>
      </Tooltip>
    )
}

const App = () => {
  
    const TCN = "border border-slate-700 px-8 py-4 text-white"
    return (
        <div className='bg-black text-white px-2'>
           <div className='font-bold text-2xl'> Academic Record </div>

            <div className='font-bold text-lg'> University of Iowa </div>
            <table className="border-collapse border border-slate-500 ...">
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className={TCN}>Projected by 2025</td>
                    </tr>
                </thead>

  <tbody>
    <tr>
      <td className={TCN}>Total Semester Hours</td>
      <td className={TCN}>84</td>
      <td className={TCN}> 105 </td>
    </tr>
    <tr>
        <td className={TCN}>UI Classes Taken</td>
        <td className={TCN}>17</td>
        <td className={TCN}> 23</td>
    </tr>
    <tr>
    <td className={TCN}>Standing</td>
    <td className={TCN}>Junior</td>
    <td className={TCN}>Senior</td>

    </tr>

  </tbody>
</table>

<table className="border-collapse border border-slate-500 ...">
                <thead>
                    <tr>
                    <td className={TCN}>SUBJ</td>
                    <td className={TCN+" text-center"} colSpan={5}>Courses Taken</td>
                    <td className={TCN+" text-center"} colSpan={4}>Projected Courses 2025</td>


                    </tr>
                </thead>

  <tbody>
    <tr>
      <td className={TCN}>CHEM</td>
      <td className={TCN}> <ReuseTool  num="1120" desc="Principles of Chemistry II"/></td>
      <td className={TCN}> <ReuseTool  num="2210" desc="Organic Chemistry I"/> </td>
      <td className={TCN}> <ReuseTool  num="2230" desc="Organic Chemistry II"/>  </td>
      <td className={TCN}> <ReuseTool  num="2410" desc="Organic Chemistry Lab"/>  </td>
      <td className={TCN}> <ReuseTool  num="4431" desc="Chemical Thermodynamics"/>  </td>
      <td className={TCN}> <ReuseTool  num="3120" desc="Separations and Spectroscopy"/> </td>

      <td className={TCN}><ReuseTool  num="4432" desc="Quantum Chemistry"/> </td>

      <td className={TCN}>5321</td>
      <td className={TCN}>5399</td>
      





    </tr>
    <tr>
        <td className={TCN}>MATH</td>
        <td className={TCN}><ReuseTool  num="2560" desc="Differential Equations"/> </td>
        <td className={TCN}> <ReuseTool  num="2700" desc="Linear Algebra"/> </td>
        <td className={TCN}> <ReuseTool  num="2850" desc="Multivariable Calculus"/> </td>
        <td className={TCN+" text-center"} colSpan={2}></td>



    </tr>
    <tr>
    <td className={TCN}>ENGR</td>
    <td className={TCN}><ReuseTool  num="1300" desc="Introduction to Engineering Computing"/> </td>
    <td className={TCN}><ReuseTool  num="2110" desc="Statics"/> </td>
    <td className={TCN}><ReuseTool  num="2120" desc="Electrical Circuits"/> </td>
    <td className={TCN+" text-center"} colSpan={2}></td>



    </tr>
    <tr>
    <td className={TCN}>ECE</td>
    <td className={TCN}><ReuseTool  num="2410" desc="Principles of Electronic Instrumentation"/> </td>
    <td className={TCN}><ReuseTool  num="3320" desc="Introduction to Digital Design"/> </td>
    <td className={TCN+" text-center"} colSpan={3}></td>


    </tr>
    <tr>
    <td className={TCN}>CS</td>
    <td className={TCN}><ReuseTool  num="2210" desc="Discrete Structures"/> </td>
    <td className={TCN}><ReuseTool  num="2230" desc="Data Structures"/> </td>
    <td className={TCN+" text-center"} colSpan={3}></td>
    <td className={TCN+" text-center"}><ReuseTool num="4700" desc="Parallel Computing"/></td>


    </tr>
    <tr>
    <td className={TCN}>CHIN</td>
    <td className={TCN}><ReuseTool  num="2101" desc="Second Year Chinese First-Semester"/> </td>
    <td className={TCN}><ReuseTool  num="3101" desc="Third Year Chinese First Semester"/> </td>
    <td className={TCN+" text-center"} colSpan={3}></td>


    </tr>
    <tr>
    <td className={TCN}>PHYS</td>

    <td className={TCN+" text-center"} colSpan={5}></td>
    <td className={TCN}><ReuseTool  num="2704" desc="Physics IV"/> </td>

    </tr>
  </tbody>
</table>
            
            <div className='font-bold text-lg'>  West Senior High School </div>

            <table className="border-collapse border border-slate-500 ...">
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className={TCN}>Projected by 2025</td>
                    </tr>
                </thead>

  <tbody>
    <tr>
      <td className={TCN}>Total Credit Hours</td>
      <td className={TCN}>297.5</td>
      <td className={TCN}> 410 </td>
    </tr>
    <tr>
        <td className={TCN}>HS Classes Taken</td>
        <td className={TCN}>33</td>
        <td className={TCN}> 39</td>
    </tr>
    <tr>
    <td className={TCN}>Standing</td>
    <td className={TCN}>Senior</td>
    <td className={TCN}>Senior</td>

    </tr>
  </tbody>
</table>
AP Exams
<table className="border-collapse border border-slate-500 ...">

  <tbody>
    <tr>
      <td className={TCN}>9TH</td>
      <td className={TCN}> AP Chemistry</td>
      <td className={TCN}> AP Calculus BC </td>
      
      <td className={TCN}> AP Computer Science A</td>
      <td className={TCN}> AP Human Geography </td>
    
    </tr>

    <tr>
      <td className={TCN}>10TH</td>
      <td className={TCN}>AP Biology </td>
      <td className={TCN}> AP US History </td>
    </tr>

    <tr>
      <td className={TCN}>11TH</td>
      <td className={TCN}> AP Physics C Mechanics</td>
      <td className={TCN}> AP Physics C E/M </td>
    </tr>

    <tr>
      <td className={TCN}>12TH</td>
      <td className={TCN}> AP Lit</td>
    </tr>
  </tbody>
</table>
            

            <Link href="/" className='text-blue-500 underline '> Return</Link>
        </div>
    )
}

export default function Page() {
    return <App/>
}
