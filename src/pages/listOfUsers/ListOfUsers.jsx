import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/usersApi";
import { User } from "../../components";
import './listOfUsers.scss';

export const ListOfUsers = () => {
  const [users, setUsers] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [searchUsers, setSearchUsers] = useState([])

  // if you needed to receive data from the server, 
  // you could use the lodash library so that the request would not fail every time you press a key
  const searchHandler = (e) => {    
    setSearchValue(e.target.value)
    const prepareData = e.target.value ? users.filter(user => user.username.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) : []
    setSearchUsers(prepareData) 
  }

  useEffect(() => {
    getUsers().then((res) => setUsers(res))
  }, [])

  return (
    <div className="list-of-users">
      <input
        type="text" 
        className='list-of-users__search'
        placeholder="Search user..."
        value={searchValue}
        onChange={e => searchHandler(e)}
      />
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
    </div>
  )
}