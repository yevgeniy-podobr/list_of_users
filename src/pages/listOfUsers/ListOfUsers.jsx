import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/usersApi";
import { User } from "../../components";

export const ListOfUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then((res) => setUsers(res))
  }, [])

  return (
    <div className="list-of-users">
      {users.map(user => {
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