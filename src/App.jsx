import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <div>
        <h2>Give feedback</h2>

        <button onClick={() => { setGood(good + 1) }}>good</button>
        <button onClick={() => { setNeutral(neutral + 1) }}>neutral</button>
        <button onClick={() => { setBad(bad + 1) }}>bad</button>
      </div>

      <div>
        <h2>Statistics</h2>
        <table>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{bad + neutral + good}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(good*1 + neutral*0 + bad*-1) / (bad + neutral + good)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{Math.round(good / (bad + neutral + good) * 100)}%</td>
          </tr>       
          </table>

      </div>

    </div>

  )
}

export default App