import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/post/postSlice";
import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
function PostList() {
    const posts = useSelector(selectAllPosts);

    const orderedPost = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));

    const renderPosts = orderedPost?.map(post =>
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timeStamp={post.date}/>
             
            </p>
            <ReactionButtons post={post}/>
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