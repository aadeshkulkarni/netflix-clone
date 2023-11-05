import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATE_API_ENDPOINT } from "../utils/constants";
import { addTopRatedMovies } from "../utils/slice/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const getTopRatedMovies = async () => {
        const data = await fetch(TOP_RATE_API_ENDPOINT, API_OPTIONS)
        const json = await data.json();
        dispatch(addTopRatedMovies(json?.results))
    }
    useEffect(() => {
        getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;