import React, { useContext } from 'react'
import { AnotherContext, CountContext } from '../../App'

const LastNav = () => {
  const [another, setAnother] = useContext(AnotherContext);
  const useCount = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setAnother(another => another + 1)}>
        count {another} </button>

    </div>
  )
}

export default LastNav