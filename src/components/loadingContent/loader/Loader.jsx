import React from 'react'
import './loader.scss'

export const Loader = (props) => {
  return (
    <div
      className={`loader ${props.className ?? ''}`}
    ></div>
  )
}
