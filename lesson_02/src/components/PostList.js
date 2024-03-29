import { useSelector,useDispatch } from "react-redux";
import { selectAllPosts,getPostStatus,getPostError,fetchPosts } from "../features/post/postSlice";
import React,{useEffect} from 'react'
import PostExcerpt from "./PostExcerpt";


function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostStatus);
    const postError = useSelector(getPostError);
    useEffect(()=>{
        if (postStatus === 'idle')
        dispatch(fetchPosts())
    },[postStatus,dispatch,])

    let content;
    if(postStatus === 'loading'){
        content = <p>Loading...</p>;
        
    }else if(postStatus ==='success'){
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostExcerpt key={post.id} post={post} />)
    }else if (postStatus === 'failed'){
        content = <p>{postError}</p>
    }
  return (
   <section>
    <h2>Posts</h2>
    {content}
   </section>
  )
}

export default PostList;