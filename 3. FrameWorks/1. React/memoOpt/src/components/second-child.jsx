import React, {memo} from 'react'

export const SecondChild = memo(({count,setCount}) => {

  console.log('render hijo 2');

  return (
    <div>SecondChild
      <button onClick={() => setCount(count + 1)}>-</button>
      <span>{count}</span>
    </div>
  )
});
