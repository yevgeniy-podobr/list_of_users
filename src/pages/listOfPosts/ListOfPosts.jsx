import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/postsApi";
import { Post } from "../../components";
import { useLocation } from "react-router-dom";
import { getUser } from "../../services/usersApi";
import './listOfPosts.scss';

export const ListOfPosts = () => {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)
  const location = useLocation()
  const userId = location.pathname.split('/')[2]

  useEffect(() => {
    getPosts(userId).then((res) => setPosts(res))
    getUser(userId).then((res) => setUser(res))
  }, [userId])

  return (
    <div className="list-of-posts">
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
    </div>
  )
}