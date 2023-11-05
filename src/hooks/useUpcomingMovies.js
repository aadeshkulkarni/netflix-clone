import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_API_ENDPOINT } from "../utils/constants";
import { addUpcomingMovies } from "../utils/slice/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_API_ENDPOINT, API_OPTIONS)
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results))
    }
    useEffect(() => {
        getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;