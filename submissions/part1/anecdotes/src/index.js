import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred; 
  color: palevioletred;
  margin: 1 1em;
  padding: 0.25 em 1em;
  font-size: 16px;
`

const CentreDiv = styled.div`
  text-align: center;

`

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))

  const handleGet = () => {
    const min = Math.ceil(0);
    const max = Math.floor(anecdotes.length-1)
    const newselected = Math.floor(Math.random() * (max-min+1)) + min
    setSelected(newselected)
  }

  const handleVote = () => {
    console.log('from handleVote, the votes before you voted are', votes)
    console.log('from handleVote, the index of current quote is', selected)
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <>
    <CentreDiv>
      <Button onClick={handleGet}>
        Get Wisdom</Button>
    </CentreDiv>
    <CentreDiv>
      <br/>
      <strong>{anecdotes[selected]}</strong> <br/><br/>
      has {votes[selected]} votes
    </CentreDiv>
    <CentreDiv>
      <br/>
      <Button onClick={handleVote}>
        Vote for this quote
      </Button>
    </CentreDiv>

    <br/>
    <hr/>

    <CentreDiv>
      <br/>
      Quote with most votes: '{anecdotes[votes.indexOf(Math.max(...votes))]}', with {Math.max(...votes)} vote(s).
    </CentreDiv>


    </>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
