import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        play: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state,action) =>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state,action) =>{
            state.upcomingMovies = action.payload
        },
        addTrailerVideo: (state,action) =>{
            state.trailer = action.payload
        },
        setPlay: (state,action) =>{
            state.play = action.payload
        }
    }
})

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrailerVideo, setPlay } = movieSlice.actions;
export default movieSlice.reducer;