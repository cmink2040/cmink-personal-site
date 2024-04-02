import {useState} from 'react'
import {NavBar, WordSequence} from './Reuseable_Components/Descriptors.tsx'
import Homepage from './Pages/hompage.tsx'

function Main_App() {
    const [complete, setState] = useState(false)
    const exec = () => {
        setState(true);
    }

    return (
        <div className='w-full h-screen'>
            <div className="flex flex-col items-center justify-center w-full h-screen">
 
                    <Main/>
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
