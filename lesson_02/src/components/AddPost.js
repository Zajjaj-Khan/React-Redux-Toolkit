import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../features/post/postSlice";
function AddPost() {
    const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [content, setContent] = useState("");
  const onNameChanged = (e) => {
    setname(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };

  const onSavePostClicked = () => {
    if (name && content) {
      dispatch(
        postAdded(name,content)
      );
      setname("");
      setContent("");
    }
  };
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title </label>
        <input
        type="text"
        id="postTitle"
        name="postname"
        value={name}
        onChange={onNameChanged}
        />
        <label htmlFor='postContent'>Post Content </label>
        <textarea
        id="postContent"
        name="postContent"
        value={content}
        onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  );
}

export default AddPost;
