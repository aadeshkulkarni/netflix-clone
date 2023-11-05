import { createSlice } from "@reduxjs/toolkit";


const GPTSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addGPTSearchResult: (state,action) =>{
            const {movieNames, movieResults } = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults 
        }
    }
})

export const { toggleSearchView, addGPTSearchResult } = GPTSlice.actions
export default GPTSlice.reducer;