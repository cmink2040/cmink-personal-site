'use client'

export default function Page() {
    return (
        <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
        <div className={'text-md sans-serif pt-8 text-start'}>
            <h1 >
                My Resume
            </h1>

            <br/>
            <div >
                <h2> Download my CV and Resume here! </h2>
                <div>public.source.tsmks.com/cmk/resume/</div>
                <div>public.source.tsmks.com/cmk/cv</div>
                <br/>

                <h2> Further information can be found there. </h2>
            </div>
        </div>

    </div> 
        )
}