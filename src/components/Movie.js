import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPlay } from '../utils/slice/movieSlice'
import useMovieTrailer from '../hooks/useMovieTrailer'

const Movie = ({ movieId }) => {
    const isMute = 0;
    const dispatch = useDispatch()
    const trailerVideo = useSelector(store => store?.movies?.trailer)
    console.log(trailerVideo)
    useMovieTrailer(movieId)
    
    return (movieId && trailerVideo && <div className="absolute top-0 left-0 w-screen h-screen p-4 bg-black">
        <div className="absolute top-0 z-[500] w-screen h-[80px] bg-black"></div>
        <div className="absolute bottom-0 z-[500] w-screen h-[80px] bg-black"></div>
        <div onClick={() => { dispatch(setPlay(null)) }} className="z-[900] absolute flex items-center justify-center px-2 text-center text-white bg-black border border-black rounded-full cursor-pointer font-6xl hover:opacity-50 left-8 top-8">←</div>
        <iframe
            title="netflix video"
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&controls=1&enablejsapi=1&rel=0&version=3${isMute && '&mute=1'}`}>
        </iframe>
    </div>
    )
}

export default Movie