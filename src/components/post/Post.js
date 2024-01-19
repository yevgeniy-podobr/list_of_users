import React from "react";
import './post.scss'

export const Post = (props) => {
  const { title, description, userId, id } = props

  return (
    <div className="post">
      <div 
        className="post__title"
      >
        {title}
      </div>
      <div 
        className="post__description"
      >{description}</div>
    </div>
  )
}