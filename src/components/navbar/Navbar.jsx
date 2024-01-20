import React, { useState, useMemo } from 'react'
import './navbar.scss'
import { useNavigate } from 'react-router-dom'
import * as route from '../../services/route'

export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="navbar container">
      <div className="navbar__wrapper">        
        <p className="navbar__authorization-sign-out" onClick={() => navigate(`${route.users}`)}>
          Back to users
        </p>
      </div>
    </div>
  )
}
