import React, { useCallback, useEffect, useState } from "react";
import { getUsers } from "../../services/usersApi";
import { LoadingContent, User } from "../../components";
import './listOfUsers.scss';

export const ListOfUsers = () => {
  const [users, setUsers] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [searchUsers, setSearchUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [sortedUsers, setSortedUsers] = useState([])
  const [sortSelection, setSortSelection] = useState('unsorted')

  // if you needed to receive data from the server, 
  // you could use the lodash library so that the request would not fail every time you press a key
  const searchHandler = (e) => {    
    setSearchValue(e.target.value)
    const prepareData = e.target.value ? users.filter(user => user.username.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) : []
    setSearchUsers(prepareData) 
  }

  const sortHandler = useCallback((sortParam) => {
    const preparedData = [...users]
    switch(sortParam) {
      case 'asc':
        preparedData.sort((a, b) => {
          if(a.username < b.username) return -1;
          if(a.username > b.username) return 1;
          return 0;
      })
        setSortedUsers(preparedData)
        break
      case 'desc':
        preparedData.sort((a, b) => {
          if(a.username < b.username) return 1;
          if(a.username > b.username) return -1;
          return 0;
      })
        setSortedUsers(preparedData)
        break
      default:
        setSortedUsers(users)
        break
    }
  }, [users])

  useEffect(() => {
    setIsLoading(true)
    getUsers().then((res) => {
      setUsers(res)
      setSortedUsers(res)
    }).finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    sortHandler(sortSelection)
  }, [sortSelection, sortHandler])

  return (
    <div className="list-of-users">
      {isLoading ? (
        <LoadingContent className="list-of-users__loader" isLoading />
      ) : (
        <>
          <div className="list-of-users__header">
            <input
              type="text" 
              className='list-of-users__header-search'
              placeholder="Search user..."
              value={searchValue}
              onChange={e => searchHandler(e)}
            />
            <label className="list-of-users__header-sort">
              Sort users by username:
              <select
                value={sortSelection}
                onChange={e => setSortSelection(e.target.value)}
              >
                <option value="unsorted">Unsorted</option>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
              </select>
            </label>
          </div>

          {searchValue && !searchUsers.length
            ? (
              <div className="list-of-users__empty">User not found...</div>
            ) : (
              <div className="list-of-users__content">
                {(searchValue ? searchUsers : sortedUsers).map(user => {
                  return (
                    <User 
                      name={user.name}
                      userName={user.username}
                      userId={user.id}
                      key={user.id}
                    />
                  )
                })}
              </div>
            )
          }
        </>
      )}
    </div>
  )
}