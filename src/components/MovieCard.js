import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return
  return (
    <div className="w-48 ml-2 cursor-pointer">
        <img alt="Movie" src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard