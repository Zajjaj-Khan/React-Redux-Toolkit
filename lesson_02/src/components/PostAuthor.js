import { useSelector } from "react-redux";
import {selectAllUsers} from '../features/users/userSlice'
import React from 'react'

function PostAuthor({userId}) {
    const users = useSelector(selectAllUsers);

    const author = users.find(user => user.id === userId);
console.log(author)


  return (
    <span>by {author? author.name : 'Unknow Author'}</span>
  )
}

export default PostAuthor