import React, { useEffect, useState } from "react";
import { Album } from "../../components";
import { useLocation } from "react-router-dom";
import { getAlbums } from "../../services/albumsApi";

export const ListOfAlbums = () => {
  const [albums, setAlbums] = useState([])
  const location = useLocation()
  const userId = location.pathname.split('/')[2]

  useEffect(() => {
    getAlbums(userId).then((res) => setAlbums(res))
  }, [userId])

  return (
    <div className="list-of-albums">
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