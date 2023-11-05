import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className="-mt-52 relative z-30">
     {movies.nowPlayingMovies && <MovieList title="Now Playing" movies={movies?.nowPlayingMovies}/>}
     {movies.nowPlayingMovies && <MovieList title="Top rated" movies={movies?.topRatedMovies}/>}
     {movies.nowPlayingMovies && <MovieList title="Popular" movies={movies?.popularMovies}/>}
     {movies.nowPlayingMovies && <MovieList title="Upcoming movies" movies={movies?.upcomingMovies}/>}
    </div>
  )
}

export default SecondaryContainer