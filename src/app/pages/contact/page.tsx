'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 

const App = () => {
    return (
        <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
            <div className={'text-md sans-serif pt-8 text-start'}>
                <div >
                    Preferred Contact Methods:
                </div>
                <div >
                <h2> Email: </h2>
                   cmink2040@gmail.com
                <h2> Social Media: </h2>
                    <h3> This order of preference: </h3>
                    <div>

                   LinkedIn 
                    Instagram
                    </div>
                    <h2> Phone</h2>
                    <div>+1 707 774 9127  </div>
                </div>

                I will try to respond to all inquiries within 48 hours.
            </div>

        </div>
    )
}

export default function Page() {
    return <App/>
}
