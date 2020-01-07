import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      < Statistics good={props.good} bad={props.bad} neutral={props.neutral} />
    </div>
  )
}

const Statistic = (props) =>{
  return (
  <div>
      {props.text} {props.value} {props.mark}
  </div>
  )
}

const Statistics = (props) => {
  const votes = props.good + props.bad + props.neutral
  const sum = 1 * props.good + 0 * props.bad + -1 * props.neutral
    return (
      <div>
      <Statistic text="good" value={props.good} mark=""/>
      <Statistic text="neutral" value={props.neutral} mark=""/>
      <Statistic text="bad" value={props.bad} mark=""/>
      <Statistic text="all" value={votes} mark=""/>
      <Statistic text="average" value={sum/votes} mark=""/>
      <Statistic text="positive" value={props.good/votes*100} mark="%"/>
      </div>
      )
  }

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad' />
        <h1>statistics</h1>
        < Display all={good+bad+neutral} good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
