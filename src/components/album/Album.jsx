import React, { useState } from "react";
import './album.scss'

export const Album = (props) => {
  const { title } = props
  const [resultTitle, setResultTitle] = useState(title)
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="album">
      {!isEdit ? (
        <p className="album__title">
          {resultTitle}
        </p>
      ) : (
      <input
        type="text" 
        className='album__title-input'
        placeholder="Change title..."
        value={resultTitle}
        onChange={e => setResultTitle(e.target.value)}
      />
      )}
      <button onClick={() => setIsEdit(!isEdit)}
      >{!isEdit ? "Edit" : "Save"}</button>
    </div>
  )
}