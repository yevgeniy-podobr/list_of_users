import React, { useState } from "react";
import './post.scss'

export const Post = (props) => {
  const { currentTitle, currentDescription } = props
  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState(currentTitle)
  const [description, setDescription] = useState(currentDescription)

  return (
    <div className="post">
      <div className="post__content">
        {!isEdit ? (
          <>
            <p className="post__content-title">
              {title}
            </p>
            <p className="post__content-description">{description}</p>
          </>
        ) : (
          <>
            <input
              type="text" 
              className='post__content-title_input'
              placeholder="Change title..."
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <textarea
              type="text" 
              className='post__content-description_textarea'
              placeholder="Change description..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </>
        )}
      </div>

      <button
        className="post__btn"
        onClick={() => setIsEdit(!isEdit)}
        disabled={isEdit && (!title || !description)}
      >
        {!isEdit ? "Edit" : "Save"}
      </button>
    </div>
  )
}