import { useState } from 'react'

const Display = ({counter}) => {
  return(
    <div>{counter}</div>
  )
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log("rendering with counter value", counter)

  const decreasteByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter - 1)

    }
  const increasteByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter + 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  return ( 
    <div>
      <Display counter={counter}/>
      <Button text="-" onClick={decreasteByOne}/>
      <Button text="0" onClick={setToZero}/>
      <Button text="+" onClick={increasteByOne}/>

    </div>
  )
}

export default App