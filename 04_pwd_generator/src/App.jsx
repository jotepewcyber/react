import { useState ,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [length, setLength] = useState(8)
  const [numberAllowed,setnumberAllowed]= useState(false)
const [charAllowed,setcharAllowed]= useState(false)
const [pwd,setpwd]=useState("")

// useCallback ,useEffect hook is used here
//useRef hook
const pwdRef=useRef(null)

const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq"
  if(numberAllowed){str+="0987654321"}
  if(charAllowed){str+="~!@#$%^&*()_+}{:?><'"}
  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass=pass+str.charAt(char)
  }
  setpwd(pass)
},[length,numberAllowed,charAllowed,setpwd])

const copypwdtoClipboard=useCallback(()=> {
  pwdRef.current?.select()  // to select which thing is getting selected by giving colour while selecting
  pwdRef.current?.setSelectionRange(0,16) // to allow only 16 chars to get selected
  window.navigator.clipboard.writeText(pwd)
  
   
},[pwd])

//it runs every time page reloads and if anything is changed among [...] then it reruns
useEffect(()=>passwordGenerator(),[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 text-purple-700 bg-gray-600">
      <h1 className="text-white font-bold text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={pwd} 
        className="outline-none w-full py-1 px-3"
        placeholder="Password"       
        readOnly
        ref={pwdRef}
        />
        <button id="123" onClick={copypwdtoClipboard} className="outline-none py-1 bg-green-500 px-3 shrink-0 hover:bg-gray-500">Copy</button>


</div>
<div className="flex text-sm gap-x-2">
  <div className="flex items-center gap-x-1">
    <input 
    type="range"
    min={6}
    max={50}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}} />
    <label className="font-bold text-xl text-white">Length:{length}</label>
  </div>
  <div className="flex items-center gap-x-1 font-bold text-white">
    <input type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={()=>setnumberAllowed((abc)=>!abc)} />
    <label htmlFor="numberInput">Numbers</label>
    
  </div>
<div className="flex items-center gap-x-1 font-bold text-white">
    <input type="checkbox"
    defaultChecked={charAllowed}
    id="charAllowed"
    onChange={()=>setcharAllowed((abc)=>!abc)} />
    <label htmlFor="charInput">Characters</label>
  </div>
  
</div>
</div>
   

  )
}

export default App
