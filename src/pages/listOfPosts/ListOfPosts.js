import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/postsApi";
import { Post } from "../../components";

export const ListOfPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const userId = sessionStorage.getItem('userId')
    console.log(userId);
    getPosts(userId).then((res) => setPosts(res))
  }, [])

  return (
    <div className="list-of-users">
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