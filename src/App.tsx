import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {NavBar,  WordSequence} from './Descriptors.tsx'
import Homepage from './hompage.tsx'
import 'tailwindcss/tailwind.css';

function App() {
  const [count, setCount] = useState(0)
  const [complete, setState] = useState(false)
  const exec = () => {
    setState(true);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <WordSequence words={[
            "",
            "Hello! I'm CMinK. ",
           "Welcome to my website. ",]}
          typing={60} ending={1500} reloadSpeed={500} status={exec}         
          />
          {(complete) ? <Main/> : <></>}
        </div>
    </>
  )
}
const Main = () => {
  return(

    <div>
            <NavBar />

      <Homepage/>
    </div>
  );
}




export default App
