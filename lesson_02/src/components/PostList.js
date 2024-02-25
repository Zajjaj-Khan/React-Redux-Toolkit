import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/post/postSlice";
import React from 'react'

function PostList() {
    const posts = useSelector(selectAllPosts);
    const renderPosts = posts.map(post =>
        <article key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.content}</p>
        </article>
    )

  return (
   <section>
    <h2>Posts</h2>
    {renderPosts}
   </section>
  )
}

export default PostList;