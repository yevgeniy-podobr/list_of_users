import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/postsApi";
import { LoadingContent, Post } from "../../components";
import { useLocation } from "react-router-dom";
import { getUser } from "../../services/usersApi";
import './listOfPosts.scss';

export const ListOfPosts = () => {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const userId = location.pathname.split('/')[2]

  useEffect(() => {
    setIsLoading(true)
    getPosts(userId).then((res) => setPosts(res)).finally(() => setIsLoading(false))
    getUser(userId).then((res) => setUser(res))
  }, [userId])

  return (
    <div className="list-of-posts">
      {isLoading ? (
        <LoadingContent className="list-of-posts__loader" isLoading/>
      ) : (
        <>
          {user && <h1 className="list-of-posts__header">{user.name}'s posts</h1>}
          {posts.map(post => {
            return (
              <Post 
                currentTitle={post.title}
                currentDescription={post.body}
                key={post.id}
              />
            )
          })}
        </>
      )}
    </div>
  )
}