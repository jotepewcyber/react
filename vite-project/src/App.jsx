
import Chai from './chai'
function App() {

const username='chai aur code'


  //in jsx only 1 element canbe returned <></> considered as a element.Inside it ,
  // many elements can be returned
  
 // inside {} some code can't be written like if else bcz its like embedding in object 
 // and we can write if else inside object
  return (
      <>
    <Chai/>
    <h1> Chai aur react {username}</h1>
    <p> test para</p>
  
  </>
  )
}

export default App
