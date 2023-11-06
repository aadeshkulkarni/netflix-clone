import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useRef } from 'react';

const VideoBackground = ({ movieId, isMute }) => {
  const backgroundVideoRef = useRef(null)
  const trailerVideo = useSelector(store => store?.movies?.trailer)
  useMovieTrailer(movieId)

  return (
    <div className="w-screen">
      <iframe
        ref={backgroundVideoRef}
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&controls=1&enablejsapi=1&rel=0&version=3${isMute && '&mute=1'}`}
        title="YouTube video player"
        autoPlay={true}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground