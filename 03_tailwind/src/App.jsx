import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)
let myObj={
  name:"devanshu",
  value:"21"
};
let arr=[1,2,3]
  return (
    <>
    
     <h1 className='bg-green-400 text-6xl p-4 rounded-xl'>TESTING</h1>
  
   <Card channel="chai aur code" />
   <Card channel="devanshu" btntext="ENDEAVOUR"/>
    </>
  )
}

export default App
