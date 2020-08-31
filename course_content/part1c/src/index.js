import ReactDOM from 'react-dom';
import React, { useState } from 'react'
import './index.css';

const App = () => {
  const [ stringer, setStringer ] = useState("")
  const increaseByOne = () => {setStringer(stringer+'a')}
  const setToZero = () => {setStringer('')}

  return (
    <>
    <Display stringer={stringer} />
    <AppendButton handleClick={increaseByOne} text='append'/>
    <ResetButton handleClick={setToZero} text='reset'/>
    </>

  )
}

const Display = ({stringer}) => <h1>{stringer}</h1>

const AppendButton = ({handleClick, text}) => (
<button onClick={handleClick}>{text}</button>
  )

const ResetButton = ({handleClick, text}) => (
<button onClick={handleClick}>{text}</button>
)

let stringer = ""

  ReactDOM.render(
  <App stringer={stringer} />, 
  document.getElementById('root'))

