import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>)

const Display = ({text, num}) => (<>{text}: {num}</>)

const Statistics =  ({args}) => {
  const [good, neutral, bad, badweight, total] = args
  return (<table>
    <tr><td><Display text='Good'/></td><td>{good}</td></tr>
    <tr><td><Display text='Neutral'/></td><td>{neutral}</td></tr>
    <tr><td><Display text='Bad'/></td><td>{bad}</td></tr>
    <tr><td><Display text='All'/></td><td>{total}</td></tr>
    <tr><td><Display text='Average'/></td><td>{(good+badweight)/total}</td></tr>
    <tr><td><Display text='Positive'/></td><td>{100*(good/total)+'%'}</td></tr>
    </table>)}

const FeedbackPanel = ({args}) => {
  const [incGood, incNeutral, incBad] = args
  return (<>
    <h1>Give Feedback!</h1>
    <Button handleClick={incGood} text='Good'/>
    <Button handleClick={incNeutral} text='Neutral'/>
    <Button handleClick={incBad} text='Bad'/></>)}

const App = props => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incGood = () => {
    setGood(good+1)
  }
  const incNeutral = () => {
    setNeutral(neutral+1)
  }
  const incBad = () => {
    setBad(bad+1)
  }
  
  const total = good+neutral+bad
  const badweight = -1*bad

  if (total === 0) {
    return (
      <><FeedbackPanel args={[incGood, incNeutral, incBad]}/>
      <hr/><h2>Statistics</h2>No feedback given.</>
    )
  }
  
  else {
    return (
    <><FeedbackPanel args={[incGood, incNeutral, incBad]}/>
    <hr /><h2>Statistics</h2>
    <Statistics args={[good, neutral, bad, badweight, total]}/>
    </>
  )
}
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

