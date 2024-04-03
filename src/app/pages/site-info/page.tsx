'use client'

export default function Page() {
    return (
        <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
        <div className={'text-md sans-serif pt-8 text-start'}>
            <h1 >
                Information about this Site <br/>
            </h1>
            <br/> <br/> <br/>
            <div >
                <h2> Publication Date </h2>
                <h3> July 29th, 2023 </h3>
                <br/>
                <h2> Last Update</h2>
                <h3> July 29th, 2023 </h3>
                <br/>
                <h2> Copyright Info </h2>
                <h3> &copy; 2023, CMinK </h3>
                <br/>
                <h3>
                    Certain uses are permitted under the CC-BY-ND License. See Site Policy for more information.
                    Asides from rights granted from Site Policy, all rights are reserved.
                </h3>
            </div>
        </div>

    </div>
        )
}