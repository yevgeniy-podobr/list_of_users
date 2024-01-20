import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/postsApi";
import { Post } from "../../components";
import { useLocation } from "react-router-dom";

export const ListOfPosts = () => {
  const [posts, setPosts] = useState([])
  const location = useLocation()
  const userId = location.pathname.split('/')[2]

  useEffect(() => {
    getPosts(userId).then((res) => setPosts(res))
  }, [userId])

  return (
    <div className="list-of-posts">
      {posts.map(post => {
        return (
          <Post 
            title={post.title}
            description={post.body}
            userId={post.userId}
            postId={post.id}
            key={post.id}
          />
        )
      })}
    </div>
  )
}