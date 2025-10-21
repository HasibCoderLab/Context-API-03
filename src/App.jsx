import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

export const CountContext = createContext();
export const AnotherContext = createContext()
// Function
function App() {
  const [another, setAnother] = useState(0)
  const [count, setCount] = useState(0)

  return (
    <div>

      <AnotherContext.Provider value={[another, setAnother]}>
        {/* CountContext */}
        <CountContext.Provider value={[count, setCount]}>
          <Navbar ></Navbar>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </CountContext.Provider>
        {/* CountContext  End*/}
      </AnotherContext.Provider>

    </div>


  )
}

export default App
