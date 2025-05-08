import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Anecdote = (props) => {
  return (
    <p>{props.text}</p>
  )
}

const Button = (props) => {
  return (  
      <button onClick={props.handleClick}> {props.text}</button>
  )
}

const Votes = (props) => {
  return (  
    <p>Has {props.number} votes</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVoted] = useState([0,0,0,0,0,0,0,0])
  const copy = { ...votes }

  const setAnecdote = () => {
    let newValue = Math.floor(Math.random() * 8)
    while (selected === newValue) {
      newValue = Math.floor(Math.random() * 8)
    }

    setSelected(newValue)
  }

  const setToVoted = newValue => {
    copy[selected] = newValue
    setVoted(copy)
  }

  const getMostVoted = () => {
    const newArray = Object.values(copy);

    let maxKey = null;
    let maxValue = -Infinity;

    for (const key in copy) {
      if (copy[key] > maxValue) {
        maxValue = copy[key];
        maxKey = key;
      }
    }

    return newArray.indexOf(maxValue)
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Anecdote text={anecdotes[selected]}/>
      <Votes number={votes[selected]}/>
      <div>
        <Button handleClick={() => setToVoted(votes[selected] + 1)} text="vote"/>
        <Button handleClick={() => setAnecdote()} text="next anecdote"/>
      </div>
      <Header text="Anecdote with most voted"/>
      <Anecdote text={anecdotes[getMostVoted()]}/>      
      <Votes number={votes[getMostVoted()]}/>
    </div>
  )
}

export default App