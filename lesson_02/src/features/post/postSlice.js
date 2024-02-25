import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "Zajjaj",
    content: "Hello everyone, world is awesome and awesome",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      laugh: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
    },
  },
  {
    id: "2",
    title: "Saleem",
    content:
      "Let you know that you are awesome and awesome and you are awesome and you are awesome",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      laugh: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
    },
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
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
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded,reactionAdd} = postSlice.actions;
export default postSlice.reducer;
