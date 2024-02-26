import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const USER_URL = "https://jsonplaceholder.typicode.com/users";
const initialState = [];
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = axios.get(USER_URL);
    return (await response).data;
  } catch (error) {
    return error.message;
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        return action.payload;//this will change the complete state
    })
  }
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
