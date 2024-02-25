import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id:'1',name:'Zajjaj',content:'Hello everyone, world is awesome and awesome'},
    {id:'2',name:'Saleem',content:'Let you know that you are awesome and awesome and you are awesome and you are awesome'}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer:(state,action)=>{
            state.push(action.payload);
        },
        prepare(name,content){
            return{
                payload:{
                    id:nanoid(),
                    name,
                    content
                }
            }
        }
    },
}
});
export const selectAllPosts = (state) => state.posts;
export const {postAdded} = postSlice.actions;
export default postSlice.reducer;