import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/usersApi";
import { LoadingContent, User } from "../../components";
import './listOfUsers.scss';

export const ListOfUsers = () => {
  const [users, setUsers] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [searchUsers, setSearchUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // if you needed to receive data from the server, 
  // you could use the lodash library so that the request would not fail every time you press a key
  const searchHandler = (e) => {    
    setSearchValue(e.target.value)
    const prepareData = e.target.value ? users.filter(user => user.username.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) : []
    setSearchUsers(prepareData) 
  }

  useEffect(() => {
    setIsLoading(true)
    getUsers().then((res) => setUsers(res)).finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="list-of-users">
      {isLoading ? (
        <LoadingContent className="list-of-users__loader" isLoading />
      ) : (
        <>
          <input
            type="text" 
            className='list-of-users__search'
            placeholder="Search user..."
            value={searchValue}
            onChange={e => searchHandler(e)}
          />
          {searchValue && !searchUsers.length
            ? (
              <div className="list-of-users__empty">User not found...</div>
            ) : (
              <div className="list-of-users__content">
                {(searchValue ? searchUsers : users).map(user => {
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