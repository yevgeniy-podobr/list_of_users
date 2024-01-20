import React, { useEffect, useState } from "react";
import { Album } from "../../components";
import { useLocation } from "react-router-dom";
import { getAlbums } from "../../services/albumsApi";
import { getUser } from "../../services/usersApi";

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
      {user && <h1>{user.name}'s albums</h1>}
      {albums.map(album => {
        return (
          <Album 
            title={album.title}
            userId={album.userId}
            postId={album.id}
            key={album.id}
          />
        )
      })}
    </div>
  )
}