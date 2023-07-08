
const Homepage = () => {

    return(
    <div className='w-full h-screen text-center snap-mandatory snap-y'>
        <div className='flex flex-col w-screen h-screen text-center justify-center snap-center items-center'>
            <h1 className='flex-row text-7xl '>CMinK</h1>
            <p className='flex-row'> TSMKS x LMCHK </p>
        </div>

        <div className='w-full h-screen text-center 
        grid grid-cols-1 snap-center items-center'>
            <h1 className=' text-3xl w-full'>About</h1>
            <div className='grid grid-cols-3 align-content-center justify-items-center gap-2 '>
                <div className= 'bg-gray-800 text-white text-center w-4/5 py-32 px-2 rounded-lg'> 
                 Introduction: <br/>
                Hello, I am CMinK. I am a tech enthusiast. I specialize in software development, AI Engineering, and website development.
                In my freetime, I enjoy building PCs and assembling hardware.
                        </div>
                <div className= 'bg-gray-800 text-white text-center w-4/5 py-32 px-2 rounded-lg'>
                     Contact Information: <br/>
                        Personal Email: cmink2040@gmail.com <br/>
                        Work Emails: cmink@starlightpath.studio | cmink@tsmks.com <br/>
                        Phone Number: +1(707)-774-9127 <br/>
                    </div>
                 <div className= 'bg-gray-800 text-white text-center w-4/5 py-32 px-2 rounded-lg'>
                     Social Media <br/>
                        <FormatLink link='https://www.linkedin.com/in/cmin-k-8b0b3b1b0/' text='LinkedIn'/> <br/>
                        <FormatLink link='https://www.github.com/cmink2040' text='Github'/> <br/>
                        <FormatLink link='https://www.instagram.com/cmink2040/' text='Instagram'/> <br/>
                        <FormatLink link='https://www.youtube.com/channel/UC4QXq1XQZoY5Z5qZ4X6Z3jQ' text="YouTube"/> <br/>
                        <FormatLink link='https://www.twitter.com/cmink2040' text="Twitter"/> <br/>
                 </div>
            </div>
        </div>

        <div className='w-full h-screen text-center 
        grid grid-cols-5 snap-center items-center' >
            <h1 className='grid  text-3xl align-center text-center justify-items-center'>Projects</h1>
            <div className='col-span-4 grid grid-cols-1 align-content-center justify-items-center gap-2 '>
                <div className= 'bg-gray-800 text-white text-center w-full mx-2 py-4 px-32 rounded-lg'> 
                Projects <br/>
                My full list of my projects can be found here:
                        </div>
                <div className= 'bg-gray-800 text-white text-center w-full py-4 px-32 rounded-lg'>
                     Current Projects <br/> AI NT Model(StarlightX), SkyGate Media(TSMKS), Website(CMinK)
                    </div>
                 <div className= 'bg-gray-800 text-white text-center w-full py-4 px-32 rounded-lg'>
                     Resume <br/>
                        
                 </div>
            </div>
        </div>
    </div>);
}
const FormatLink = (props: any) => {
    return (
        <a href={props.link} className='text-blue-400 hover:text-blue-100 underline'>{props.text}</a>
    );
}
export default Homepage