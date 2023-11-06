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

const Browse = () => {
  const showGPTSearch = useSelector(store => store?.gpt?.showGPTSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  
  return (
    <div className="flex flex-col justify-between h-screen min-h-screen text-gray-400">
      <Header />
      {showGPTSearch ? <GPTSearch /> : <>
        <MainContainer />
        <SecondaryContainer />
      </>}
      <Footer />
    </div>
  )
}

export default Browse