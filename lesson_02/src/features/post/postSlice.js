import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};
export const fetchPosts = createAsyncThunk('posts/fetchPosts',async()=>{
  try{
    const response = await axios.get(POST_URL);
    return [...response.data];
  }catch(err){
    return err.message;
  }
})
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              laugh: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
            },
          },
        };
      },
    },
    reactionAdd: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder){
    builder.addCase(fetchPosts.pending,(state,action)=>{
      state.status = 'loading'
    })
    .addCase(fetchPosts.fulfilled,(state,action)=>{
      state.status='success'
      //Adding date and reactions
      let min =1 ;
      const loadedPost = action.payload.map(post =>{
        post.date = sub(new Date(),{munitues:min++}).toISOString();
        post.reactions={
          thumbsUp: 0,
          laugh: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
        }
        return post;
      })
      state.posts = state.posts.concat(loadedPost);
    })
    .addCase(fetchPosts.rejected,(state,action)=>{
      state.status = 'failed'
      state.error = action.error.message
    })
  }
});
export const selectAllPosts = (state) => state.posts.posts;
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;

export const { postAdded, reactionAdd } = postSlice.actions;
export default postSlice.reducer;
