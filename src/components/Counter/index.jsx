import React from 'react'

export const Counter = ({count, increaseCount, decreaseCount}) => {
  return (
    <div>
        <button onClick={decreaseCount}>-</button>
        {count}
        <button onClick={increaseCount}>+</button>
    </div>
  )
}


