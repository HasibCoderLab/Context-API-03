import React, { useContext } from 'react'
import LastNav from '../LastNav/LastNav'
import { CountContext } from '../../App'


const SideNav = () => {
   const [count, setCount] = useContext(CountContext)
  return (
    <div>
      <LastNav ></LastNav>
        <button 
        style={{ margin: "10px" }} 
        onClick={() => setCount(count + 1)}
      >
        count {count}
      </button>
    </div>
  )
}

export default SideNav