import {createSlice} from '@reduxjs/toolkit';


const initialState = [
    {id:'0',name:'Ali'},
    {id:'1',name:'Hamza'},
    {id:'2',name:'Farooq'},

]

const userSlice = createSlice({
    name:'users',
    initialState,

})