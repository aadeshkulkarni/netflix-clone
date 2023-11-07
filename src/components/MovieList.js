import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    //https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
    return (<div className="p-2 md:p-6">
        <h1 className="pb-2 pl-2 text-lg text-white md:text-3xl md:pb-4">{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex ">
                {movies && movies?.map(movie=><MovieCard movieId={movie?.id} key={movie?.id} posterPath={movie?.poster_path}/>)}
            </div>
        </div>
        </div>
    )
}

export default MovieList