import { useState } from 'react'

const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good+neutral+bad === 0) {
    return (
      <p>no feedback given</p>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={good + neutral + bad}/>
            <StatisticLine text="average" value={((good*1)+(neutral*0)+(bad*-1))/(good + neutral + bad)}/>
            <StatisticLine text="positive" value={((good/(good+neutral+bad))*100) + "%"}/>
          </tbody>
        </table>
      </div>
      
    )  
  }
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    setBad(newValue)
  }

  return (
    <div>
      <Header text="give feedback"/>
      <div>
        <Button handleClick={() => setToGood(good + 1)} text="good"/>
        <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
        <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
      </div>
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App