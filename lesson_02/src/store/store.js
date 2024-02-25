import { configureStore } from "@reduxjs/toolkit";
import posts from '../features/post/postSlice'
export const store = configureStore({
    reducer:{
        posts:posts
    }
})