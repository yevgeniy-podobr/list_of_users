import React, { useState } from 'react'
import './navbar.scss'
import { useNavigate } from 'react-router-dom'
import * as route from '../../services/route'
// import _ from 'lodash'

export const Navbar = () => {
  const [searchValue, setSearchValue] = useState(null)
  const navigate = useNavigate()
  // const debounceFunc = useMemo(
  //   () => _.debounce((e) => {
  //     if (e.target.value === '') {
  //       getFilesRefresh()
  //     } else {
  //       getFilesFromSearchRefresh()
  //     }
  //   }, 500),
  //   [getFilesFromSearchRefresh, getFilesRefresh]
  // )

  // const searchHandler = (e) => {
  //   setSearchValue(e.target.value)
    // debounceFunc(e)
  // }

  return (
    <div className="navbar container">
      <div className="navbar__wrapper">
        <div className="navbar__header">
          <input
            type="text" 
            className='navbar__header-search_input'
            placeholder="Search user..."
            value={searchValue ?? ''}
            onChange={e => {}}
          />
        </div>
        
        <p className="navbar__authorization-sign-out" onClick={() => navigate(`${route.users}`)}>
          Back to users
        </p>
      </div>
    </div>
  )
}
