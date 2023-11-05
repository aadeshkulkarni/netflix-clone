import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const gpt = useSelector(store => store.gpt);
  const {movieResults, movieNames} = gpt;
  if(!movieNames) return;
  return (
    <div className="p-2 m-2 md:p-4 md:m-4 text-white">
      {movieNames.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}
    </div>
  )
}

export default GPTMovieSuggestions