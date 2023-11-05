import React from 'react'
import GPTSearchbar from './GPTSearchbar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { NETFLIX_BG_IMAGE } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
      <div className='absolute w-full h-full -z-10'>
        <img className="brightness-50 bg-opacity-80 w-full h-full object-cover fixed" src={NETFLIX_BG_IMAGE} alt="logo" />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GPTSearchbar />
        <GPTMovieSuggestions />
      </div>
    </>
  )
}

export default GPTSearch