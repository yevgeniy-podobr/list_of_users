import React, { useState } from "react";
import './album.scss'

export const Album = (props) => {
  const { currenAlbumTitle } = props
  const [title, setTitle] = useState(currenAlbumTitle)
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="album">
      {!isEdit ? (
        <p className="album__title">
          {title}
        </p>
      ) : (
        <input
          type="text" 
          className='album__title-input'
          placeholder="Change title..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      )}
      <button 
        className="album__btn"
        onClick={() => setIsEdit(!isEdit)}
        disabled={isEdit && !title}
      >
        {!isEdit ? "Edit" : "Save"}
      </button>
    </div>
  )
}