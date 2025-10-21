import React, { useContext } from 'react'
import LastNav from '../LastNav/LastNav'
import { Context1 } from '../../Context1/Context1'



const SideNav = () => {
  const [a , setA] = useContext(Context1);
  return (
    <div>
      <LastNav ></LastNav>
       <button>  count  </button>
    </div>
  )
}

export default SideNav