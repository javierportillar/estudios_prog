import React, { useState, memo } from 'react'

export const FirstChild = memo(({count,setCount}) => {
  
  console.log('render hijo 1');

  return (
    <div>FirstChild
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
    </div>
  )
});
