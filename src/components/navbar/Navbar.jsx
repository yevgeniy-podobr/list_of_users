import React, { useState, useMemo } from 'react'
import './navbar.scss'
import { useNavigate } from 'react-router-dom'
import * as route from '../../services/route'

export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="navbar container">     
      <button className="navbar__btn" onClick={() => navigate(`${route.users}`)}>
        Back to users
      </button>
    </div>
  )
}
