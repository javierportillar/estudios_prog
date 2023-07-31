import { GiChainedArrowHeads } from "react-icons/gi";
import React from 'react'

export const CompleteIcon = (props) => {
  return (
    <GiChainedArrowHeads
    className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
    onClick={props.onComplete}
    />
  )
}

