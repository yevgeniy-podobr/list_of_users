import React from "react";
import './user.scss'
import { useNavigate } from "react-router-dom";
import * as route from '../../services/route'

export const User = (props) => {
  const navigate = useNavigate()
  const { name, userName, userId } = props

  return (
    <div className="user">
      <div 
        className="user__name"
      >
        {name}
      </div>
      <div 
        className="user__username"
      >{userName}</div>
      <button 
        className="user__btn" 
        onClick={() => {
          navigate(`${route.posts}/${userId}`)
        }}
      > 
        Open posts
      </button>
      <button 
        className="user__btn" 
        onClick={() => {
          navigate(`${route.users}/${userId}/albums`)
        }}
      > 
        Open albums
      </button>
    </div>
  )
}