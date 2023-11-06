import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const [isMute, setIsMute] = useState(true)
    const movies = useSelector(store => store?.movies?.nowPlayingMovies)
    if (movies === null || movies === undefined) return;
    const mainMovie = movies[0]
    const { original_title, overview} = mainMovie
    return (
        <div className="pt-[30%] bg-black md:pt-0">
            <VideoTitle title={original_title} overview={overview} isMute={isMute} setIsMute={setIsMute} />
            <VideoBackground movieId={mainMovie.id} isMute={isMute} setIsMute={setIsMute}/>
        </div>
    )
}

export default MainContainer