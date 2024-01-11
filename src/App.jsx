import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+</button> <br /> <br />
        <button >{count}</button> <br /> <br />
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <p>
          Click <span onClick={() => setCount(0)} >here</span> to reset the count
        </p>
      </div>
      <p className="read-the-docs">
        I love React js !
      </p>
    </>
  )
}

export default App
