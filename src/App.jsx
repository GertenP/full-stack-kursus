import { useState } from 'react'
import './App.css';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className="app-container">
      <div id="feedback-section" className="box">
        <h1>Give feedback</h1>
        <div className="buttons">
          <button onClick={() => { setGood(good + 1) }}>good</button>
          <button onClick={() => { setNeutral(neutral + 1) }}>neutral</button>
          <button onClick={() => { setBad(bad + 1) }}>bad</button>
        </div>
      </div>

      <div id="statistics-section" className="box">
        <h1>Statistics</h1>
        <table>
          <tbody>
            <tr>
              <td>Good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>Neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>Bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>All</td>
              <td>{bad + neutral + good}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{(good * 1 + neutral * 0 + bad * -1) / (bad + neutral + good)}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td>{Math.round(good / (bad + neutral + good) * 100)}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;
