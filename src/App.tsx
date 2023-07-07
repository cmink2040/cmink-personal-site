import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {NavBar,  WordSequence} from './Descriptors.tsx'
import 'tailwindcss/tailwind.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        Hello
          <WordSequence words={["stuff stuff stuff stuff",
           "Very very very funny",
           "I am a very funny person",
           "I am a very funny person",]}
          typing={60} ending={1500} reloadSpeed={500}          
          />
        </div>
    </>
  )
}




export default App
