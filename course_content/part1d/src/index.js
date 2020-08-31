import React, { useState} from 'react';
import ReactDOM from 'react-dom';

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        The app is used by clicking the buttons. 
      </div>
    )
  }
  return (
    <div>
      Clicks: {allClicks}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const handleResetClick = () => {
    setAll([])
    setLeft(0)
    setRight(0)    
  }

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left'/>
        <Button onClick={handleRightClick} text='right'/>
        {right}
        <Button onClick={handleResetClick} text='reset'/>
        <History allClicks={allClicks}/>      
      </div>
    </div>
  )
}

ReactDOM.render(
  
    <App />, 
  document.getElementById('root')
);


