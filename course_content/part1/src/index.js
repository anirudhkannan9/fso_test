import React from 'react'
import ReactDOM from 'react-dom'





const Hello = (props) => {
  
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}



const App = () => {
  const name = 'Multivac'
  const age = '13 billion'


  return (
    <div>
      <Hello />
      <hr />
      <Hello name={name} age={age}/>
      <Hello name="Anirudh" age = {10+10}/>
      <p>World</p>
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))