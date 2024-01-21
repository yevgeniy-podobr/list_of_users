import React, { useEffect, useState } from "react";
import { Album } from "../../components";
import { useLocation } from "react-router-dom";
import { getAlbums } from "../../services/albumsApi";
import { getUser } from "../../services/usersApi";
import './listOfAlbums.scss';

export const ListOfAlbums = () => {
  const [albums, setAlbums] = useState([])
  const [user, setUser] = useState(null)
  const location = useLocation()
  const userId = location.pathname.split('/')[2]

  useEffect(() => {
    getAlbums(userId).then((res) => setAlbums(res))
    getUser(userId).then((res) => setUser(res))
  }, [userId])

  return (
    <div className="list-of-albums">
      {user && <h1 className="list-of-albums__header">{user.name}'s albums</h1>}
      <div className="list-of-albums__content">
        {albums.map(album => {
          return (
            <Album 
              currenAlbumTitle={album.title}
              key={album.id}
            />
          )
        })}
      </div>

    </div>
  )
}