import { useState } from 'react'

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const calculateAverage = () => {
    return all === 0 ? 0 : (good - bad) / all
  }

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  const calculateAvarage = () => {
    const avg = (good - bad) / all
    return isNaN(avg) ? 0 : avg
  }
  const calculatePositive = () => {
    const positive = (good / all) * 100
    return isNaN(positive) ? 0 : positive
  }

const Statistics = (props) => {
  if (all === 0) {
    return <div>No feedback given</div>
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="average" value={calculateAvarage()} />
        <StatisticsLine text="positive" value={calculatePositive() + " %"} />
      </tbody>
    </table>
  )
}


  const StatisticsLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )
  }

  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )


  return (
    <div>
      <h1>give feedback</h1>
      <hr />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />


      
    </div>
  )
}

export default App