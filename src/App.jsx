import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Context1Provider } from './Contexts/Context1'

// Function
function App() {

  const [count, setCount] = useState(0)

  return (
    <div>

      <Context1Provider>

        <Navbar ></Navbar>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </Context1Provider>
    </div>

  )
}

export default App
