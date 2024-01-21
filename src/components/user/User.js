import React from "react";
import './user.scss'
import { useNavigate } from "react-router-dom";
import * as route from '../../services/route'

export const User = (props) => {
  const navigate = useNavigate()
  const { name, userName, userId } = props

  return (
    <div className="user">
      <p className="user__name">
        Name - {name}
      </p>
      <p 
        className="user__username"
      >Username - {userName}</p>
      <div className="user__btns">
        <button 
          className="user__btns-btn" 
          onClick={() => {
            navigate(`${route.posts}/${userId}`)
          }}
        > 
          Open posts
        </button>
        <button 
          className="user__btns-btn" 
          onClick={() => {
            navigate(`${route.users}/${userId}/albums`)
          }}
        > 
          Open albums
        </button>
      </div>

    </div>
  )
}