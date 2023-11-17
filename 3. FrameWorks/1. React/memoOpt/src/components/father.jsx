import React from 'react'
import { FirstChild } from './first-child.jsx'
import { SecondChild } from './second-child.jsx'

export const Father = () => {
    const [count, setCount] = React.useState(10);
    const [countF, setCountF] = React.useState(10);
    const [countS, setCountS] = React.useState(10);
    console.log('render padre');
  return (
    <div>
        <h2>COMPONENTE PADRE</h2>
        <button onClick={() => setCount(count + 10)}>+</button>
        <span>{count}</span>
        <FirstChild count={countF} setCount={setCountF}></FirstChild>
        <SecondChild count={countS} setCount={setCountS}></SecondChild>
    </div>
  )
  // return (
  //   <div>
  //       <h2>COMPONENTE PADRE</h2>
  //       <button onClick={() => setCount(count + 10)}>+</button>
  //       <span>{count}</span>
  //       <FirstChild></FirstChild>
  //       <SecondChild></SecondChild>
  //   </div>
  // )
}
