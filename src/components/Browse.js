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
    <div className="text-gray-400 min-h-screen h-screen flex flex-col justify-between">
      <Header />
      {showGPTSearch ? <GPTSearch /> : <>
        <MainContainer />
        <SecondaryContainer />
      </>}
      {/* 
      MainContainer
        - Video background
        - Video title
      Secondary container
        - Movie lists
          - N Cards
       */}
      <Footer />
    </div>
  )
}

export default Browse