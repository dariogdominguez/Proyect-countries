import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCountries = createAsyncThunk ("countries/getCountries", async (obj, {dispatch})=>{
    return fetch(`http://localhost:3001/countries`)
    .then((res) => res.json()
    )
})

export const countriesSlice = createSlice({
    name: 'countries',
    initialState:{
        list:[],
        status: null,
        amount: 0,
        copyList:[]
    },
    extraReducers: {
        [getCountries.pending]: (state, action) => {
            state.status = "loading"
        },
        [getCountries.fulfilled]: (state, { payload }) =>{
            state.status= "succsess"
            state.list = payload
            state.amount = state.list.length
            state.copyList = payload
        },
        [getCountries.rejected]: (state, action) => {
            state.status = "fail"
        }
    }
});

export default countriesSlice.reducer;
