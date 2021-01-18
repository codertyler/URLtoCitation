import React from 'react'
import "./Result.css"

export default function Result(props) {
  return (
    <div className="result_container">
      {props.data}
    </div>
  )
}
