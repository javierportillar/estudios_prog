import React from 'react'
import {GiAnticlockwiseRotation} from "react-icons/gi";

export const DeleteIcon = (props) => {

  return (
    <GiAnticlockwiseRotation
    className={"Icon Icon-delete"}
    onClick={props.onDelete}
    />
  )
}
