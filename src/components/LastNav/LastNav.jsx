import React, { useContext } from 'react'
import { Context1 } from '../../Contexts/Context1'



const LastNav = () => {
  const [a , setA] =  useContext(Context1)
  return (
    <div>
      <h2>  LastNav  : {a}   </h2>
    </div>
  )
}

export default LastNav