import { useState } from 'react'
//hooks come from this above import;useState is example of hook ; others are also there
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//useState gives 2 values; 1st parameter is value, 2nd is method

  let [counter,setCounter]=useState(15)

//setCounter will take that value whose value is to be uupdated next time and 
  //that value will be updated accross all instances
 
  const addValue=()=>{
    /* doing 
    setCounter(counter++)
    setCounter(counter++)
    setCounter(counter++)
    setCounter(counter++)
     will produce same value as setCounter(counter++) written once; bcz its doing same thing so it gets processed as one thing 

     but 

     to get counter value increased by 4 we do:
     setCounter((abc)=>abc+1)
     setCounter((abc)=>abc+1)
     setCounter((abc)=>abc+1)
     setCounter((abc)=>abc+1)
     will increase its value by 4 in 1 click
     



    */


    setCounter(counter++)
    console.log('clicked',counter);
  }

  const removeValue=()=>{ 
    setCounter(counter--)
    console.log('value removed',counter)
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2> counter value:{counter}</h2>
     <button onClick={addValue}> add value {counter}</button>
     <br></br>
     <button onClick={removeValue}> remove value {counter}</button>
    </>
  )
}

export default App
