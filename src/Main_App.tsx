import {useState} from 'react'
import {NavBar, WordSequence} from './Reuseable_Components/Descriptors.tsx'
import Homepage from './Pages/hompage.tsx'
import {BackgroundImage} from "./Reuseable_Components/reuseComps.tsx";

function Main_App() {
    const [complete, setState] = useState(false)
    const exec = () => {
        setState(true);
    }

    return (
        <div className='w-full h-screen'>
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <WordSequence words={[
                    "",
                    "Hello! I'm SZeng. ",
                    "Welcome to my website. ",]}
                              typing={60} ending={1500} reloadSpeed={500} status={exec}
                />
                {(complete) ?
                    <Main/>
                    :
                    <BackgroundImage src='/assets/pex.png'
                                     className='fixed w-full h-screen -z-20 text-center flex-col flex snap-center justify-center'
                                     ImageClassName='absolute -z-50 top-0 left-0 object-cover'
                                     alt='background'/>

                }
            </div>
        </div>
    )
}
const Main = () => {
    return (

        <div className='w-full'>

            <NavBar/>
            <Homepage/>
        </div>
    );
}




export default Main_App
