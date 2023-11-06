import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeShowInfo } from '../utils/slice/configSlice'
import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants'

const MovieDetails = () => {
    const showInfo = useSelector(store => store.config.showInfo)
    const { movieDetails = {}, movieKeywords = [], movieCredits = [] } = showInfo
    const dispatch = useDispatch()
    useEffect(() => {
        getDetails()
    }, [])
    async function getDetails() {
        if (showInfo.movieId) {
            const movieDetails = await getMovieDetails(showInfo?.movieId)
            const movieKeywords = await getKeywords(showInfo?.movieId)
            const movieCredits = await getCredits(showInfo?.movieId)
            dispatch(changeShowInfo({ ...showInfo, movieDetails, movieKeywords, movieCredits }))
        }
    }
    async function getMovieDetails(movieId) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS)
        const data = await response.json()
        console.log("getMovieDetails: ", data)
        return data;
    }
    async function getKeywords(movieId) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/keywords`, API_OPTIONS)
        const data = await response.json()
        console.log("Keywords: ", data)
        return data;
    }

    async function getCredits(movieId) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, API_OPTIONS)
        const data = await response.json()
        console.log("getCredits: ", data)
        return data;
    }
    const close = () => {
        dispatch(changeShowInfo({ show: false, movieId: null }))
    }
    return showInfo?.show && (<div className="z-50 absolute top-0 left-0 flex mt-[5%] justify-center w-screen h-screen bg-black bg-opacity-70 overflow-hidden">
        <div className="relative w-3/5 pb-4 bg-gray-900 border border-gray-900 h-fit border-spacing-10">
            <div onClick={close} className="z-[900] absolute flex items-center justify-center px-2 text-center text-white bg-black border border-black rounded-full cursor-pointer font-sm hover:opacity-50 right-4 top-4">X</div>
            <div className="w-full min-h-[400px] bg-gray-900 relative">
                <img src={IMG_CDN_URL + movieDetails?.backdrop_path} className="w-full h-full" alt="backdrop" />
                <div className="z-[600] absolute text-white text-3xl font-bold bottom-8 left-8">{movieDetails?.original_title}</div>

            </div>
            <div className="grid grid-cols-12 p-4 text-white">
                <div className="col-span-7 p-4">
                    <div className="flex">
                        <div className="pr-4 font-bold text-green-600">98% Match</div>
                        <div>{movieDetails?.release_date?.split("-")[0]}</div>
                    </div>
                    <div>
                        {movieKeywords.length > 0 && movieKeywords?.map(keyword => keyword?.name).join(", ")}
                    </div>
                    <div className="py-2 text-xl font-bold">
                        #1 in TV Shows Today
                    </div>
                    <p className="text-sm">{movieDetails?.overview}</p>
                </div>
                <div className="col-span-5 p-4 text-sm">
                    <div>
                        <div className="grid grid-cols-12 mb-4">
                            <div className="col-span-3 text-gray-300">Cast:</div>
                            <div className="col-span-9">{movieCredits?.cast?.filter((a, i) => i < 4).map(credit => credit.name).join(", ")}</div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-3 text-gray-300">Genres:</div>
                            <div className="col-span-9">{movieDetails?.genres?.map(genre => genre?.name).join(", ")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default MovieDetails