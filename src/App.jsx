import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Context1Proverder } from './Context1/Context1'


// Function
function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <Context1Proverder>
        
        <Navbar ></Navbar>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </Context1Proverder>




    </div>


  )
}

export default App
