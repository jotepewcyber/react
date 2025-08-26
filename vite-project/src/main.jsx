import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>custom App | chai</h1>
    </div>
  )
}

/*
const reactElement={
type: 'a',
props:{
    href:'https://google.com',
    target:'_blank',
},
children:'click me to visit google'
}
*/

// React.createElement has predefined syntax - 1.any tag 2. object 3. some direct text

const anotheruser='chai aur react'

const reactElement= React.createElement(
'a',
{href: 'https://google.com',
  target:'_blank'
},
'click me to visit google',
anotheruser
)

const anotherElement=(
  <a href='https://google.com' target='_blank'>visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).
render(
reactElement
  
)


