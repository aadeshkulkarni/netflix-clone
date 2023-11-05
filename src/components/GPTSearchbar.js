import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGPTSearchResult } from '../utils/slice/gptSlice'

const GPTSearchbar = () => {
  const searchText = useRef(null)
  const dispatch = useDispatch()
  const langChosen = useSelector(store => store?.config?.lang)

  const fetchMovie = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
    const movieInfo = await data.json();
    console.log(movieInfo)
    return movieInfo?.results
  }

  const handleGPTSearchClick = async () => {
    const gptQuery = "Act as a Movie recommendation System and Suggest some movies for the query: " + searchText?.current?.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi mil gaya"
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    const gptMovies = chatCompletion?.choices[0]?.message?.content.split(",")
    const promiseArray = gptMovies.map(movie => fetchMovie(movie))
    const tmdbResult = await Promise.all(promiseArray)
    dispatch(addGPTSearchResult({ movieNames: gptMovies, movieResults: tmdbResult }))
  }

  return (
    <div className="flex justify-center items-center">
      <form className="pt-[10%] w-1/2 grid grid-cols-12 gap-4" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" className="py-2 px-4 col-span-8" placeholder={lang?.[langChosen]?.gptSearchPlaceholder} />
        <button onClick={handleGPTSearchClick} className="py-2 px-4 bg-red-700 text-white col-span-4 rounded-lg uppercase ">{lang?.[langChosen]?.search}</button>
      </form>
    </div>
  )
}

export default GPTSearchbar