import {NavBar} from '../components/Descriptors'
import Homepage from './index'

function Main_App() {

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
