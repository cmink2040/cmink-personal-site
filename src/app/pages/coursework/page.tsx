'use client'
 
import Link from 'next/link'
import React from 'react'

const App = () => {
    const TCN = "border border-slate-700 px-8 py-4"
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
    <tr>
    <td className={TCN}>GPA</td>
    <td className={TCN}>3.81</td>
    <td className={TCN}>3.94</td>

    </tr>
  </tbody>
</table>

<table className="border-collapse border border-slate-500 ...">
                <thead>
                    <tr>
                    <td className={TCN}>SUBJ</td>
                    <td className={TCN+" text-center"} colSpan={5}>Courses Taken</td>
                    <td className={TCN+" text-center"} colSpan={3}>Projected Courses 2025</td>


                    </tr>
                </thead>

  <tbody>
    <tr>
      <td className={TCN}>CHEM</td>
      <td className={TCN}>1120</td>
      <td className={TCN}> 2210 </td>
      <td className={TCN}> 2230 </td>
      <td className={TCN}> 2410 </td>
      <td className={TCN}> 4431 </td>
      <td className={TCN}>4432</td>
      <td className={TCN}>5321</td>
      <td className={TCN}>5399</td>





    </tr>
    <tr>
        <td className={TCN}>MATH</td>
        <td className={TCN}>2560</td>
        <td className={TCN}> 2700</td>
        <td className={TCN}> 2850</td>
        <td className={TCN+" text-center"} colSpan={2}></td>
        <td className={TCN}> 5700</td>



    </tr>
    <tr>
    <td className={TCN}>ENGR</td>
    <td className={TCN}>1300</td>
    <td className={TCN}>2110</td>
    <td className={TCN}>2120</td>
    <td className={TCN+" text-center"} colSpan={2}></td>



    </tr>
    <tr>
    <td className={TCN}>ECE</td>
    <td className={TCN}>2410</td>
    <td className={TCN}>3320</td>
    <td className={TCN+" text-center"} colSpan={3}></td>


    </tr>
    <tr>
    <td className={TCN}>CS</td>
    <td className={TCN}>2210</td>
    <td className={TCN}>2230</td>
    <td className={TCN+" text-center"} colSpan={3}></td>


    </tr>
    <tr>
    <td className={TCN}>CHIN</td>
    <td className={TCN}>2101</td>
    <td className={TCN}>3101</td>
    <td className={TCN+" text-center"} colSpan={3}></td>


    </tr>
    <tr>
    <td className={TCN}>BMB</td>

    <td className={TCN+" text-center"} colSpan={5}></td>
    <td className={TCN}>3120</td>

    </tr>
  </tbody>
</table>
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
    <tr>
    <td className={TCN}>GPA</td>
    <td className={TCN}>3.89</td>
    <td className={TCN}>3.94</td>

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
