import {useState} from 'react'
import {NavBar, WordSequence} from './Descriptors.tsx'
import Homepage from './hompage.tsx'
import 'tailwindcss/tailwind.css';

function App() {
    const [complete, setState] = useState(false)
    const exec = () => {
        setState(true);
    }
    return (
        <div className='w-full h-screen'>
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <WordSequence words={[
                    "",
                    "Hello! I'm CMinK. ",
                    "Welcome to my website. ",]}
                              typing={60} ending={1500} reloadSpeed={500} status={exec}
                />
                {(complete) ? <Main/> : <></>}
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




export default App
