import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import Footer from './Footer'
import GPTSearch from './GPTSearch'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import Shimmer from './Shimmer'
import MovieDetails from './MovieDetails'
import Movie from './Movie'

const Browse = () => {
  const showGPTSearch = useSelector(store => store?.gpt?.showGPTSearch)
  const showInfo = useSelector(store => store?.config?.showInfo)
  const playMovieId = useSelector(store => store?.movies?.play)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  if(showGPTSearch === undefined || showGPTSearch == null) return <Shimmer />
  return playMovieId ? <Movie movieId={playMovieId} /> : (<div className="flex flex-col justify-between h-screen min-h-screen text-gray-400">
      <Header />
      {showInfo?.show && <MovieDetails />}
      {showGPTSearch ? <GPTSearch /> : <>
        <MainContainer />
        <SecondaryContainer />
      </>}
      <Footer />
    </div>)
}

export default Browse