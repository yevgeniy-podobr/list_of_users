import React, { useState } from "react";
import './post.scss'

export const Post = (props) => {
  const { title, description } = props
  const [isEdit, setIsEdit] = useState(false)
  const [resultTitle, setResultTitle] = useState(title)
  const [resDescription, setResultDescription] = useState(description)

  return (
    <div className="post">
      {!isEdit ? (
        <div className="post__title">
          {resultTitle}
        </div>
      ) : (
        <input
        type="text" 
        className='post__title-input'
        placeholder="Change title..."
        value={resultTitle}
        onChange={e => setResultTitle(e.target.value)}
      />
      )}

      {!isEdit ? (
        <div 
          className="post__description"
        >{resDescription}</div>
      ) : (
        <textarea
          type="text" 
          className='post__description-textarea'
          placeholder="Change description..."
          value={resDescription}
          onChange={e => setResultDescription(e.target.value)}
        />
      )}

      <button
        className="post__btn"
        onClick={() => setIsEdit(!isEdit)}
      >
        {!isEdit ? "Edit" : "Save"}
      </button>
    </div>
  )
}