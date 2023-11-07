import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { changeShowInfo } from '../utils/slice/configSlice'

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch()
  const handleCardClick = () => {
    dispatch(changeShowInfo({
      show: true,
      movieId: movieId,
      movieDetails: {},
      movieKeywords: [],
      movieCredits: []
    }))
  }
  if (!posterPath) return
  return (
    <div onClick={handleCardClick} className="ml-2 cursor-pointer w-36 md:w-48" >
      <img alt="Movie" src={IMG_CDN_URL + posterPath} />
    </div >
  )
}

export default MovieCard