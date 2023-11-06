import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_API_ENDPOINT } from "../utils/constants";
import { addPopularMovies } from "../utils/slice/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector(store=>store.movies.popularMovies)
    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_API_ENDPOINT, API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json?.results))
    }
    useEffect(() => {
        if(!popularMovies) getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default usePopularMovies;