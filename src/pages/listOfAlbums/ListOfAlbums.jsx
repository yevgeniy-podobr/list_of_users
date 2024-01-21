import React, { useEffect, useState } from "react";
import { Album, LoadingContent } from "../../components";
import { useLocation } from "react-router-dom";
import { getAlbums } from "../../services/albumsApi";
import { getUser } from "../../services/usersApi";
import './listOfAlbums.scss';

export const ListOfAlbums = () => {
  const [albums, setAlbums] = useState([])
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const userId = location.pathname.split('/')[2]

  useEffect(() => {
    setIsLoading(true)
    getAlbums(userId).then((res) => setAlbums(res)).finally(() => setIsLoading(false))
    getUser(userId).then((res) => setUser(res))
  }, [userId])

  return (
    <div className="list-of-albums">
      {isLoading ? (
        <LoadingContent className="list-of-albums__loader" isLoading/>
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}