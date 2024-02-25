import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../features/post/postSlice";
import { selectAllUsers } from "../features/users/userSlice";
function AddPost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onNameChanged = (e) => {
    setTitle(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };
  const onAuthorChanged = (e) => {
    setUserId(e.target.value);
  };
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };
  const usersOptions = users?.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title </label>
        <input
          type="text"
          id="postTitle"
          name="postname"
          value={title}
          onChange={onNameChanged}
        />
        <label htmlFor="Select">Author</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Post Content </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}
        disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPost;
