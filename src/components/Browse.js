import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  const nowPlayingMovies = useNowPlayingMovies()
  return (
    <div className="text-gray-400">
      <Header />
      <MainContainer/>
      <SecondaryContainer />
      {/* 
      MainContainer
        - Video background
        - Video title
      Secondary container
        - Movie lists
          - N Cards
       */}
    </div>
  )
}

export default Browse