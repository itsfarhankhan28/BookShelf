import { createSlice } from "@reduxjs/toolkit";

const BooksSlice = createSlice({
    name:'books',
    initialState:{
        books:[],
        searchval:''
    },
    reducers:{}
})



export default BooksSlice.reducer