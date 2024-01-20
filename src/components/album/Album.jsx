import React from "react";
import './album.scss'

export const Album = (props) => {
  const { title, userId, id } = props

  return (
    <div className="album">
      <p 
        className="album__title"
      >
        {title}
      </p>
    </div>
  )
}